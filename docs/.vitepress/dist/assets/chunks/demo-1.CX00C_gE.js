import{_ as r,y as f,m as i}from"./touch-fusion.DPlEwUH5.js";import{E as u}from"./theme.WgAQQ7_D.js";import{d as m,h as s,l as d,o as _,c as p}from"./framework.DRO9vf8U.js";const R=m({__name:"demo-1",setup(g){const n=s(null),t=s(!1),a=s(r.DIRECTION.None),l=r.getDirectionStr;return d(()=>{n.value.oncontextmenu=()=>!1;const o=new f(n.value,{touchActions:["none"]}),c=new i.PanRecognizer;o.add(c),o.on(i.RECOGNIZER_TYPE.Pan,e=>{console.log(e.type,e),a.value!==e.offsetDirection&&(t.value=!1,a.value=e.offsetDirection),e.isFinal&&(t.value=!1),Math.abs(e.distance)>50&&!t.value&&(t.value=!0,u.success(`检测到拖动手势在${l(e.direction)}方向触发了！`))})}),(o,c)=>(_(),p("div",{ref_key:"detectRef",ref:n,class:"gesture-area"}," 手势触发区域 ",512))}});export{R as default};
