import{E as a,c as C,J as n,m as s,a as E,o as F}from"./chunks/framework.DRO9vf8U.js";const t=s("h1",{id:"press-长按手势",tabindex:"-1"},[E("Press 长按手势 "),s("a",{class:"header-anchor",href:"#press-长按手势","aria-label":'Permalink to "Press 长按手势"'},"​")],-1),r=s("p",null,"按下后并在一定时间后抬起的手势",-1),c=s("h2",{id:"基础用法",tabindex:"-1"},[E("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),A=s("p",null,[E("使用在元素挂载完成后，初始化识别器，监听手势."),s("br"),E(" 在下面的区域中尝试：长按蓝色区域1秒，且手指移动距离小于5px，会弹出提示."),s("br"),E(" 你可以打开控制台查看详细的手势数据.")],-1),D=s("h2",{id:"api",tabindex:"-1"},[E("API "),s("a",{class:"header-anchor",href:"#api","aria-label":'Permalink to "API"'},"​")],-1),m=JSON.parse('{"title":"Press 长按手势","description":"","frontmatter":{},"headers":[],"relativePath":"guide/recognizer/press.md","filePath":"guide/recognizer/press.md","lastUpdated":1712418047000}'),y={name:"guide/recognizer/press.md"},h=Object.assign(y,{setup(i){const l=[{prop:"attr",label:"属性"},{prop:"desc",label:"说明"},{prop:"type",label:"类型"},{prop:"defaultValue",label:"默认值"}],e=[{attr:"time",type:"number",defaultValue:"251(ms)",desc:"识别为长按手势的最短时间"},{attr:"threshold",type:"number",defaultValue:"9(px)",desc:"识别成功的最大允许位移距离"},{attr:"pointers",type:"number",defaultValue:"1",desc:"需要识别的输入点数量"}];return(B,d)=>{const p=a("demo"),o=a("attr-table");return F(),C("div",null,[t,r,c,A,n(p,{src:"press/demo-1.vue",codeStr:"%3Ctemplate%3E%0A%20%20%3Cdiv%20ref%3D%22detectRef%22%20class%3D%22press-detect-area%22%3E%0A%20%20%20%20%E6%89%8B%E5%8A%BF%E8%A7%A6%E5%8F%91%E5%8C%BA%E5%9F%9F%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%2C%20onMounted%20%7D%20from%20'vue'%3B%0Aimport%20FSTouch%20from%20'%40touch-fusion%2Flib'%3B%0Aimport%20%7B%20ElMessage%20%7D%20from%20'element-plus'%3B%0A%0Aconst%20detectRef%20%3D%20ref(null)%0A%0AonMounted(()%20%3D%3E%20%7B%0A%20%20const%20manager%20%3D%20new%20FSTouch.Core.Manager(detectRef.value!)%0A%20%20const%20recognizer%20%3D%20new%20FSTouch.Core.Recognizer.PressRecognizer(%7B%0A%20%20%20%20threshold%3A%205%2C%0A%20%20%20%20time%3A%201000%0A%20%20%7D)%0A%20%20manager.add(recognizer)%0A%20%20manager.on(%5BFSTouch.Constants.RECOGNIZER_TYPE.Press%5D%2C%20(e)%20%3D%3E%20%7B%0A%20%20%20%20console.log(e)%0A%20%20%20%20ElMessage.success('%E6%A3%80%E6%B5%8B%E5%88%B0%E9%95%BF%E6%8C%89%E6%89%8B%E5%8A%BF%E8%A7%A6%E5%8F%91%E4%BA%86%EF%BC%81')%0A%20%20%7D)%0A%7D)%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0A.press-detect-area%20%7B%0A%20%20width%3A%20100%25%3B%0A%20%20height%3A%20100px%3B%0A%20%20line-height%3A%20100px%3B%0A%20%20background-color%3A%20var(--vp-c-brand-2)%3B%0A%20%20color%3A%20var(--vp-c-gray-1)%3B%0A%20%20text-align%3A%20center%3B%0A%20%20cursor%3A%20pointer%3B%0A%20%20%26%3Aactive%20%7B%0A%20%20%20%20background-color%3A%20var(--vp-c-brand-1)%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E%0A",htmlStr:"%3Cpre%20class%3D%22shiki%20github-dark%22%20style%3D%22background-color%3A%2324292e%3Bcolor%3A%23e1e4e8%22%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22detectRef%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22press-detect-area%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20%E6%89%8B%E5%8A%BF%E8%A7%A6%E5%8F%91%E5%8C%BA%E5%9F%9F%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%22ts%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%20ref%2C%20onMounted%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%20'vue'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20FSTouch%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%20'%40touch-fusion%2Flib'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%20ElMessage%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E%20'element-plus'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20detectRef%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3Enull%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EonMounted%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%20const%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20manager%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20new%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20FSTouch.Core.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EManager%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(detectRef.value%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E!%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%20const%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20recognizer%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%20new%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20FSTouch.Core.Recognizer.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3EPressRecognizer%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20threshold%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E5%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20time%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E1000%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20manager.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Eadd%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(recognizer)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20manager.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Eon%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%5BFSTouch.Constants.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3ERECOGNIZER_TYPE%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E.Press%5D%2C%20(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23FFAB70%22%3Ee%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20console.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Elog%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(e)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20ElMessage.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3Esuccess%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%239ECBFF%22%3E'%E6%A3%80%E6%B5%8B%E5%88%B0%E9%95%BF%E6%8C%89%E6%89%8B%E5%8A%BF%E8%A7%A6%E5%8F%91%E4%BA%86%EF%BC%81'%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E%20scoped%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23B392F0%22%3E.press-detect-area%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20%20width%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E100%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3E%25%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20%20height%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E100%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20%20line-height%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E100%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F97583%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20%20background-color%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3Evar%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23FFAB70%22%3E--vp-c-brand-2%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20%20color%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3Evar%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23FFAB70%22%3E--vp-c-gray-1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20%20text-align%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3Ecenter%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3E%20%20cursor%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3Epointer%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%26%23x26%3B%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3Eactive%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%20%20background-color%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2379B8FF%22%3Evar%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23FFAB70%22%3E--vp-c-brand-1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2385E89D%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",description:"",codePath:"../../../examples/press/demo-1.vue"}),D,n(o,{columns:l,data:e})])}}});export{m as __pageData,h as default};
