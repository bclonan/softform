import { SfButton, SfAdaptedCards, createAdapterRegistry } from '../dist/index.js';
import type { SfButtonProps } from '../dist/components/SfButton.js';
import { registerSfSlider } from '../dist/elements/SfSlider.js';
import type { SfSliderElement } from '../dist/elements/SfSlider.js';
import type { SfBarChartElement } from '../dist/elements/SfBarChart.js';
import { SfInput as ReactInput } from '../dist/react/SfInput.js';
import { SfBarChart as ReactBarChart } from '../dist/react/SfBarChart.js';
import type { SfInputReactProps } from '../dist/react/SfInput.js';
import type { SfBarChartReactProps } from '../dist/react/SfBarChart.js';

const button: SfButtonProps = { variant: 'accent', loading: false };
const registry = createAdapterRegistry();
registry.register('custom', { adapt: () => [{ id: 'a', type: 'message', title: 'T', body: 'B', sender: 'S', time: 'Now', count: 0 }] });
const element = null as unknown as SfSliderElement;
const sliderValue: number | undefined = element.value;
const chart = null as unknown as SfBarChartElement;
const chartDelay: number | undefined = chart.motionDelay;
const chartStagger: number | undefined = chart.stagger;
const reactInputProps: SfInputReactProps = {
  label: 'Name', modelValue: 'Ada', type: 'text',
  onValueChange: value => { const inputValue: string | number | boolean | FileList = value; void inputValue; },
};
const reactChartProps: SfBarChartReactProps = {
  values: [1, 2, 3], motionDelay: 120, stagger: 45,
};
void [SfButton, SfAdaptedCards, button, registry, registerSfSlider, sliderValue, chartDelay, chartStagger, ReactInput, ReactBarChart, reactInputProps, reactChartProps];
