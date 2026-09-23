import { useId, ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue';
export const ICONS={
 grid:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
 layers:'<path d="m12 3 10 5-10 5L2 8l10-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
 arrow:'<path d="M4 12h15m-6-6 6 6-6 6"/>',chevron:'<path d="m9 5 7 7-7 7"/>',left:'<path d="m15 5-7 7 7 7"/>',down:'<path d="m5 9 7 7 7-7"/>',up:'<path d="m5 15 7-7 7 7"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>',
 check:'<path d="m5 12 4 4L19 6"/>',checkCircle:'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
 search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
 sliders:'<path d="M5 3v7m0 4v7M12 3v12m0 4v2M19 3v3m0 4v11"/><circle cx="5" cy="12" r="2"/><circle cx="12" cy="17" r="2"/><circle cx="19" cy="8" r="2"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
 moon:'<path d="M20.5 14.3A8.8 8.8 0 0 1 9.7 3.5 8.8 8.8 0 1 0 20.5 14.3Z"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>',
 bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/>',
 phone:'<path d="m5 3 4 4-2 3c2 3 4 5 7 7l3-2 4 4c-1 3-4 3-6 2C8 18 3 12 2 7c0-2 1-4 3-4Z"/>',
 user:'<circle cx="12" cy="7" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2H4Z"/>',
 users:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2H3ZM16 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 4v2"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 3"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18M7 15h2m6 0h2M7 18h2"/>',
 activity:'<path d="M2 12h5l3-8 4 16 3-8h5"/>',
 heart:'<path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/>',
 star:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>',
 home:'<path d="m3 10 9-7 9 7v11H3V10Z"/><path d="M9 21v-8h6v8"/>',
 folder:'<path d="M3 7V5a2 2 0 0 1 2-2h5l3 3h6a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/>',
 chart:'<path d="M4 3v18h17M9 16V9m5 7V5m5 11v-4"/>',
 cloud:'<path d="M7 19h11a4 4 0 0 0 0-8 6 6 0 0 0-11-3 5.5 5.5 0 0 0 0 11Z"/>',
 wifi:'<path d="M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0M8 16a6 6 0 0 1 8 0"/><circle cx="12" cy="20" r=".8"/>',
 volume:'<path d="m11 4-6 5H2v6h3l6 5V4ZM15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',
 muted:'<path d="m11 4-6 5H2v6h3l6 5V4Zm5 5 6 6m0-6-6 6"/>',
 play:'<path d="m8 4 12 8-12 8V4Z"/>',pause:'<path d="M8 5v14M16 5v14"/>',
 rewind:'<path d="M5 4v16M19 5 7 12l12 7V5Z"/>',
 repeat:'<path d="m17 2 4 4-4 4M21 6H7a4 4 0 0 0-4 4m4 12-4-4 4-4m-4 4h14a4 4 0 0 0 4-4"/>',
 more:'<circle cx="4" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="20" cy="12" r="1"/>',
 download:'<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
 upload:'<path d="M12 16V3m-5 5 5-5 5 5M4 16v5h16v-5"/>',
 copy:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>',
 code:'<path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18"/>',
 cube:'<path d="m12 2 9 5v10l-9 5-9-5V7l9-5ZM3 7l9 5 9-5M12 12v10m-4-18 9 5"/>',
 cursor:'<path d="m4 3 5 18 4-8 8-4L4 3Z"/>',
 type:'<path d="M3 5h18M12 5v16M8 21h8M3 3v5m18-5v5"/>',
 bolt:'<path d="m13 2-9 12h7l-1 8 10-13h-7V2Z"/>',
 flow:'<rect x="8" y="2" width="8" height="6" rx="2"/><rect x="1" y="16" width="8" height="6" rx="2"/><rect x="15" y="16" width="8" height="6" rx="2"/><path d="M12 8v4H5v4m7-4h7v4"/>',
 database:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.5"/>',
 warning:'<path d="M10.3 3.8 1.8 18.3A2 2 0 0 0 3.5 21h17a2 2 0 0 0 1.7-2.7L13.7 3.8a2 2 0 0 0-3.4 0Z"/><path d="M12 9v5m0 3v.5"/>',
 lock:'<rect x="4" y="10" width="16" height="12" rx="2"/><path d="M7 10V6a5 5 0 0 1 10 0v4m-5 5v3"/>',
 shield:'<path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6l9-4Z"/><path d="m8 12 3 3 5-6"/>',
 edit:'<path d="m15 3 6 6M3 21l6-2L21 7l-4-4L5 15l-2 6Z"/>',
 trash:'<path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7"/>',
 monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M12 17v4m-5 0h10"/>',
 mobile:'<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4m-3 14h2"/>',
 menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
 refresh:'<path d="M21 3v6h-6M3 21v-6h6"/><path d="M4.5 9a8 8 0 0 1 13-5l3.5 5M3 15l3.5 5a8 8 0 0 0 13-5"/>',
 leaf:'<path d="M20 3S8 1 4 9c-3 7 3 13 9 10 8-4 7-16 7-16ZM3 21 15 9"/>',
 globe:'<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
 eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
 spark:'<path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z"/>',
 sort:'<path d="M8 3v18m-4-4 4 4 4-4M16 21V3m-4 4 4-4 4 4"/>',
 alignLeft:'<path d="M3 5h18M3 10h12M3 15h18M3 20h12"/>',alignCenter:'<path d="M3 5h18M6 10h12M3 15h18M6 20h12"/>',alignRight:'<path d="M3 5h18M9 10h12M3 15h18M9 20h12"/>',
 expand:'<path d="M3 9V3h6m6 0h6v6M3 15v6h6m6 0h6v-6"/>',
 inbox:'<path d="m5 3-3 10v8h20v-8L19 3H5ZM2 13h6l2 4h4l2-4h6"/>',
 circle:'<circle cx="12" cy="12" r="9"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
};

export const uid = prefix => `${prefix}-${useId()}`;
export const clamp = (v,min=0,max=100) => Math.min(max,Math.max(min,Number.isFinite(Number(v))?Number(v):min));
export const displayTime = s => `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`;
export function dialogSetup(p,{emit}){
  const el=ref(null),titleId=uid('dialog-title');
  let timer;
  function sync(){
    nextTick(()=>{
      if(!el.value)return;
      clearTimeout(timer);
      if(p.modelValue){
        el.value.classList.remove('sf-dialog-closing');
        if(!el.value.open)el.value.showModal();
      }else if(el.value.open){
        el.value.classList.add('sf-dialog-closing');
        const duration=globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches?0:180;
        timer=setTimeout(()=>{if(!p.modelValue&&el.value?.open)el.value.close();el.value?.classList.remove('sf-dialog-closing')},duration);
      }
    });
  }
  watch(()=>p.modelValue,sync);
  onMounted(sync);
  onBeforeUnmount(()=>clearTimeout(timer));
  function close(){if(p.modelValue)emit('update:modelValue',false)}
  function backdrop(e){
    if(e.target!==el.value)return;
    const b=el.value.getBoundingClientRect();
    if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)close();
  }
  return{el,titleId,close,backdrop};
}
