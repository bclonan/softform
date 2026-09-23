import { expect, it } from 'vitest';
import { createSSRApp, h } from 'vue';
import { renderToString } from 'vue/server-renderer';
import SfBarChart from '../src/components/SfBarChart.vue';
import SfDonutChart from '../src/components/SfDonutChart.vue';
import SfProgress from '../src/components/SfProgress.vue';

const render = (component, props) => renderToString(createSSRApp({ render: () => h(component, props) }));

it('keeps data readable without client animation and labels pending data honestly', async () => {
  const chart = await render(SfBarChart, { values:[12,28], labels:['Mon','Tue'], loading:false, motionDelay:400 });
  expect(chart).toContain('Mon: 12; Tue: 28');
  expect(chart).toContain('12</span>');
  expect(chart).toContain('28</span>');
  const pending = await render(SfBarChart, { values:[12,28], loading:true });
  expect(pending).toContain('aria-busy="true"');
  expect(pending).toContain('Loading Activity');
  expect(pending).toContain('height:0%;');
  const donut = await render(SfDonutChart, { value:72, loading:true });
  expect(donut).toContain('Loading Focus');
  expect(donut).not.toContain('72%');
  const progress = await render(SfProgress, { value:68, loading:true });
  expect(progress).toContain('Loading');
  expect(progress).toContain('aria-busy="true"');
});
