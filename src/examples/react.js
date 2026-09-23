import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { SfBarChart } from '../react/SfBarChart.js';
import { SfBottomNav } from '../react/SfBottomNav.js';
import { SfButton } from '../react/SfButton.js';
import { SfInput } from '../react/SfInput.js';
import { SfTable } from '../react/SfTable.js';
import '../styles.css';
import './react.css';

const h = React.createElement;
const navigation = [
  { value:'home', label:'Home', icon:'home' },
  { value:'records', label:'Records', icon:'grid' },
];
const columns = [
  { key:'project', label:'Project' },
  { key:'owner', label:'Owner' },
  { key:'status', label:'Status', badge:true },
];
const rows = [
  { id:1, project:'Northstar site', owner:'Maya Chen', status:'Active' },
  { id:2, project:'Field notes', owner:'Alex Morgan', status:'Review' },
  { id:3, project:'Release kit', owner:'Sam Rivera', status:'Draft' },
];

function ReactExample() {
  const [page,setPage] = useState('home');
  const [name,setName] = useState('');
  const [view,setView] = useState('table');
  const [series,setSeries] = useState([32,44,38,61,54,77,68]);
  const [status,setStatus] = useState('Ready to explore.');

  function refresh() {
    setSeries(old => old.map((value,index) => Math.max(10,value + (index % 2 ? -8 : 11))));
    setStatus('Sample values changed. The bars are moving to the new values.');
  }

  return h('div',{className:'react-shell'},
    h('header',{className:'react-header'},
      h('a',{href:'/',className:'react-brand'},'softform'),
      h('nav',{'aria-label':'Examples'},
        h('a',{href:'/'},'Vue workspace'),
        h('a',{href:'/examples/elements.html'},'Plain JavaScript'),
        h('a',{href:'/docs.html'},'Docs'))),
    h('main',{className:'react-main'},
      h('p',{className:'react-eyebrow'},'FRAMEWORK EXAMPLE'),
      h('h1',null,'Softform in React'),
      h('p',{className:'react-lede'},'These are the same Softform custom elements used by the plain JavaScript page. The React adapters set array props as DOM properties and receive value changes as events.'),
      h('div',{className:'react-workspace'},
        h('section',{className:'react-card'},
          h('p',{className:'react-eyebrow'},'NAVIGATION'),
          h('h2',null,page==='home'?'Your workspace':'Project records'),
          h(SfBottomNav,{modelValue:page,items:navigation,motionDuration:520,onValueChange:value=>{setPage(value);setStatus('Opened '+value+'.');}}),
          page==='home'
            ? h('div',{className:'react-content'},
                h(SfInput,{label:'Your name',placeholder:'Enter a name',modelValue:name,onValueChange:value=>setName(String(value))}),
                h('p',null,name?'Hello, '+name+'.':'Enter your name to see controlled input state.'),
                h(SfButton,{variant:'dark',onClick:refresh},'Load new sample values'))
            : h('div',{className:'react-content'},
                h('div',{className:'react-view-choice'},
                  h('label',null,'Record layout ',
                    h('select',{value:view,onChange:event=>setView(event.target.value)},
                      h('option',{value:'table'},'Table'),
                      h('option',{value:'cards'},'Cards')))),
                h(SfTable,{columns,rows,caption:'Sample projects',view,searchable:true,pageSize:2}))),
        h('section',{className:'react-card'},
          h('p',{className:'react-eyebrow'},'LIVE DATA'),
          h('h2',null,'Activity'),
          h(SfBarChart,{values:series,labels:['M','T','W','T','F','S','S'],label:'Weekly activity',motionDelay:100,motionDuration:720,stagger:80}),
          h('p',{className:'react-status',role:'status'},status))),
      h('p',{className:'react-foot'},'Local sample data. No network request is made when values change.')));
}

createRoot(document.getElementById('app')).render(h(ReactExample));
