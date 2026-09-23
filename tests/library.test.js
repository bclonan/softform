import { describe, expect, it } from 'vitest';
import { createSSRApp, h } from 'vue';
import { renderToString } from 'vue/server-renderer';
import SfElement from '../src/components/SfElement.vue';
import SfSurface from '../src/components/SfSurface.vue';
import { createAdapterRegistry, validateCards } from '../src/adapters.js';

describe('semantic roots', () => {
  it('renders any requested native tag and forwards attributes', async () => {
    const html = await renderToString(createSSRApp({ render: () => h(SfElement, { as: 'main', id: 'content', 'aria-label': 'Example' }, () => 'Hello') }));
    expect(html).toContain('<main id="content" aria-label="Example">');
    expect(html).toContain('Hello');
  });

  it('lets a styled surface be an article', async () => {
    const html = await renderToString(createSSRApp({ render: () => h(SfSurface, { as: 'article', depth: 'low' }, () => 'Report') }));
    expect(html).toContain('<article');
    expect(html).toContain('data-depth="low"');
  });
});

describe('notification adapters', () => {
  const card = { id: 'a', type: 'message', title: 'Title', body: 'Body', sender: 'Maya', time: 'Now', count: 1 };
  it('normalizes all included payloads to the same model', () => {
    const registry = createAdapterRegistry();
    expect(registry.normalize('rest', { notifications: [{ notification_id: 'a', category: 'message', subject: 'Title', preview: 'Body', sender: { display_name: 'Maya' }, received_at: 'Now', unread_count: 1 }] })).toEqual([card]);
    expect(registry.normalize('graphql', { data: { inbox: { edges: [{ node: { key: 'a', kind: 'MESSAGE', headline: 'Title', content: 'Body', author: { name: 'Maya' }, displayTime: 'Now', unreadCount: 1 } }] } } })).toEqual([card]);
    expect(registry.normalize('legacy', { records: [['a', 'message', 'Title', 'Body', 'Maya', 'Now', 1, 1]] })).toEqual([card]);
  });

  it('rejects duplicate IDs and invalid counts', () => {
    expect(() => validateCards([card, card])).toThrow(/Duplicate/);
    expect(() => validateCards([{ ...card, count: -1 }])).toThrow(/count/);
  });

  it('accepts a custom provider through the registry contract', () => {
    const registry = createAdapterRegistry().register('custom', { adapt: payload => payload.items });
    expect(registry.normalize('custom', { items: [card] })).toEqual([card]);
    expect(registry.names()).toContain('custom');
  });
});
