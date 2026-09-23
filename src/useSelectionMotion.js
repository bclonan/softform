import { computed, onMounted, ref, watch } from 'vue';

/** Shared, framework-neutral CSS timing contract for controlled selection components. */
export const selectionMotionProps = {
  motion: { type: Boolean, default: true },
  motionDelay: { type: Number, default: 0 },
  motionDuration: { type: Number, default: 360 },
  motionEasing: { type: String, default: 'cubic-bezier(.2,.8,.2,1)' },
};

export function useSelectionMotion(props, collection) {
  const mounted = ref(false);
  const previous = ref(-1);
  onMounted(() => { mounted.value = true; });
  watch(() => props.modelValue, (value, oldValue) => {
    previous.value = collection().findIndex(item => item.value === oldValue);
  });
  const motionStyle = computed(() => ({
    '--sf-select-delay': `${Math.max(0, Math.min(30000, Number(props.motionDelay) || 0))}ms`,
    '--sf-select-duration': `${Math.max(0, Math.min(30000, Number(props.motionDuration) || 0))}ms`,
    '--sf-select-ease': props.motionEasing,
  }));
  function fillStyle(index) {
    return { '--sf-fill-origin': previous.value < 0 ? '50%' : previous.value < index ? '0%' : '100%' };
  }
  return { motionReady: computed(() => mounted.value && props.motion), motionStyle, fillStyle };
}
