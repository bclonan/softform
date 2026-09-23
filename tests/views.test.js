import { expect, it } from 'vitest';
import { createSSRApp, h } from 'vue';
import { renderToString } from 'vue/server-renderer';
import SfInput from '../src/components/SfInput.vue';
import SfTable from '../src/components/SfTable.vue';
import SfBarChart from '../src/components/SfBarChart.vue';
import SfBottomNav from '../src/components/SfBottomNav.vue';

const render = (component, props) => renderToString(createSSRApp({ render: () => h(component, props) }));

it('forwards native input constraints to the real input', async () => {
  const html = await render(SfInput, { type:'number', label:'Seats', min:1, max:12, step:1, required:true, name:'seats' });
  expect(html).toMatch(/<input[^>]*type="number"/);
  expect(html).toContain('min="1"');
  expect(html).toContain('max="12"');
  expect(html).toContain('name="seats"');
  expect(html).toContain('required');
});

it('renders the same supplied records in card and table views', async () => {
  const props = { columns:[{key:'name',label:'Name'}], rows:[{id:'1',name:'Northstar'}], caption:'Projects' };
  const table = await render(SfTable, { ...props, view:'table' });
  const cards = await render(SfTable, { ...props, view:'cards' });
  expect(table).toContain('<table');
  expect(table).toContain('Northstar');
  expect(cards).toContain('sf-table-card');
  expect(cards).toContain('Northstar');
  expect(cards).not.toContain('<table');
});

it('keeps a text description in horizontal charts and exposes selection timing', async () => {
  const chart = await render(SfBarChart, { values:[3,7], labels:['First','Second'], orientation:'horizontal' });
  expect(chart).toContain('First: 3; Second: 7');
  expect(chart).toContain('sf-horizontal-bars');
  const nav = await render(SfBottomNav, { modelValue:'home', items:[{value:'home',label:'Home',icon:'home'}], motionDelay:120, motionDuration:500 });
  expect(nav).toContain('--sf-select-delay:120ms');
  expect(nav).toContain('--sf-select-duration:500ms');
});
