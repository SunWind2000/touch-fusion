import{x as f,T as i,M as _}from"./touch-fusion.DiRtuJsB.js";import{d as x,h as a,l as m,E as y,o as d,c as h,J as R,w as B,a as b,m as v,b as k,av as T,F as E,_ as w}from"./framework.DRO9vf8U.js";const C=x({__name:"demo-2",setup($){const e=a(null),u=a(null),o=a(!1),n=a(0),s=a(0),p=()=>{o.value=!1,e.value.style.position="absolute",e.value.style.left=`${n.value}px`,e.value.style.top=`${s.value}px`,e.value.style.zIndex="0"};return m(()=>{const c=u.value.getBoundingClientRect(),t=e.value.getBoundingClientRect();n.value=c.width/2-t.width/2,s.value=c.height/2-t.height/2,e.value.style.left=`${n.value}px`,e.value.style.top=`${s.value}px`,e.value.oncontextmenu=()=>!1;const l=new f(e.value),g=new i.PanRecognizer;l.add(g),l.on(i.RECOGNIZER_TYPE.Pan,r=>{r.eventType!==_.INPUT_STATE.End&&(e.value.style.position="fixed",e.value.style.zIndex="9999",o.value=!0),e.value.style.left=`${r.center.x-t.width/2}px`,e.value.style.top=`${r.center.y-t.height/2}px`})}),(c,t)=>{const l=y("ElButton");return d(),h(E,null,[R(l,{type:"primary",onClick:p},{default:B(()=>[b("回到容器")]),_:1}),v("div",{ref_key:"containerRef",ref:u,class:"gesture-area"},[(d(),k(T,{to:"body",disabled:!o.value},[v("div",{ref_key:"draggableBlockRef",ref:e,class:"draggable-block"}," 尝试拖动我 ",512)],8,["disabled"]))],512)],64)}}}),z=w(C,[["__scopeId","data-v-36993cd8"]]);export{z as default};
