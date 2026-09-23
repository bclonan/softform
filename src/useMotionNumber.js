import { onBeforeUnmount, onMounted, ref, watch } from 'vue';

const safeMs = value => Math.min(30000, Math.max(0, Number(value) || 0));
const reducedMotion = () => globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

/**
 * Animate a numeric prop without inventing data. The source remains the only
 * value of record; display is a temporary presentation value.
 */
export function useMotionNumber(source, options = {}) {
  const display = ref(Number(source()) || 0);
  let mounted = false;
  let timer;
  let frame;

  function stop() {
    clearTimeout(timer);
    if (frame !== undefined) globalThis.cancelAnimationFrame?.(frame);
    frame = undefined;
  }

  function run(target, fromMount = false) {
    stop();
    const next = Number(target) || 0;
    if (!mounted || options.immediateWhen?.() || reducedMotion() || options.animateOnMount?.() === false && fromMount) {
      display.value = next;
      return;
    }
    const startValue = fromMount ? 0 : display.value;
    const delay = safeMs(options.delay?.());
    const duration = safeMs(options.duration?.() ?? 650);
    if (duration === 0) { display.value = next; return; }
    display.value = startValue;
    timer = setTimeout(() => {
      const start = performance.now();
      function tick(now) {
        const fraction = Math.min(1, (now - start) / duration);
        const eased = 1 - (1 - fraction) ** 3;
        display.value = startValue + (next - startValue) * eased;
        if (fraction < 1) frame = requestAnimationFrame(tick);
        else { display.value = next; frame = undefined; }
      }
      frame = requestAnimationFrame(tick);
    }, delay);
  }

  watch(source, value => { if (mounted) run(value); else display.value = Number(value) || 0; });
  onMounted(() => { mounted = true; run(source(), true); });
  onBeforeUnmount(stop);
  return display;
}
