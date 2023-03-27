(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[351],{3671:function(e,t,n){Promise.resolve().then(n.bind(n,3184))},4598:function(e){e.exports={DialogOverlay:"styles_DialogOverlay__jTiwH",overlayShow:"styles_overlayShow__oJOm6",DialogContent:"styles_DialogContent__ghXHJ"}},3184:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var s=n(6118),i=n(9268),r=n(9119),l=n(4717),a=n(6006),c=n(1733),o=n(6622),d=n(5846),x=n.n(d);function u(e){let{name:t,id:n}=e;return(0,i.jsx)(x(),{href:"/my-lists/".concat(n),children:(0,i.jsxs)("div",{className:"h-[150px] rounded-md overflow-hidden flex items-center justify-center  relative  hover:scale-105 active:scale-95 transition-[0.15s]",children:[(0,i.jsx)("div",{className:"absolute z-[0]",children:(0,i.jsx)(o.default,{account:t,size:500})}),(0,i.jsx)("div",{className:"w-full h-full absolute z-[1] px-5 hover:bg-[#00000088] bg-[#00000001] flex items-center justify-center text-white text-2xl hover:text-3xl font-bold transition-[0.15s]",children:(0,i.jsx)("p",{className:"truncate",children:t})})]})})}var h=n(5954),m=n(4598),f=n.n(m),p=n(6008);function g(){let e=(0,s.Z)(["\n      mutation CreateNewList($input: CreateListInput!) {\n        createList(input: $input) {\n          name\n          id\n        }\n      }\n    "]);return g=function(){return e},e}function v(e){let{children:t}=e,n=(0,p.useRouter)(),[s,c]=(0,a.useState)(""),[o,d]=(0,a.useState)(""),[x,u]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let e=localStorage.getItem("email");e&&c(e)},[]);let m=async()=>{let e=(0,r.Ps)(g()),t=await l.L.request(e,{input:{email:s,name:o}});n.push("/my-lists/".concat(t.createList.id))};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(h.fC,{open:x,onOpenChange:u,children:[(0,i.jsx)(h.xz,{className:"text-primary",children:(0,i.jsx)("div",{children:t})}),(0,i.jsx)(h.aV,{className:f().DialogOverlay,children:(0,i.jsx)(h.VY,{className:f().DialogContent,children:(0,i.jsxs)("div",{className:"px-5 pb-5",children:[(0,i.jsxs)("div",{className:"flex items-center h-[60px] justify-between",children:[(0,i.jsx)(h.Dx,{className:"text-xl font-bold text-black",children:"New List"}),(0,i.jsx)(h.x8,{className:"flex items-center justify-center h-10 w-10 rounded-full text-gray-500 text-2xl hover:bg-slate-100 hover:ring-2 text-center align-middle transition-[0.15s] hover:scale-105 active:scale-95",children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"16",fill:"none",viewBox:"0 0 17 16",children:[(0,i.jsx)("rect",{width:"20",height:"2",x:"2.025",y:"0.222",fill:"#666",rx:"1",transform:"rotate(45 2.025 .222)"}),(0,i.jsx)("rect",{width:"20",height:"2",x:"0.833",y:"14.586",fill:"#666",rx:"1",transform:"rotate(-45 .833 14.586)"})]})})]}),(0,i.jsx)(h.dk,{className:"mb-4 text-gray-500",children:"Please enter the new list name"}),(0,i.jsx)("input",{type:"text",value:o,onChange:e=>d(e.target.value),className:"w-full border border-gray-400 p-2 rounded-md mb-4 text-black disabled:text-gray-400",placeholder:"Name"}),(0,i.jsx)("button",{onClick:m,className:"bg-primary text-white px-5 py-2 rounded-md hover:scale-[1.02] active:scale-[0.98] transition-[0.15s]",children:"Create List"})]})})})]})})}function j(){let e=(0,s.Z)(["\n  query GetMovieLists($email: String!) {\n    getMovieLists(email: $email) {\n      name\n      id\n    }\n  }\n"]);return j=function(){return e},e}let y=(0,r.Ps)(j());async function w(e){let{getMovieLists:t}=await l.L.request(y,{email:e});return t}function b(){let[e,t]=(0,a.useState)(""),[n,s]=(0,a.useState)([]),[r,l]=(0,a.useState)(!0);return((0,a.useEffect)(()=>{let e=localStorage.getItem("email");e?(t(e),w(e).then(e=>{s(e),l(!1)})):l(!1)},[]),r)?(0,i.jsx)("div",{children:"Loading..."}):(0,i.jsxs)("div",{children:[n.length>0&&(0,i.jsx)("h1",{className:"text-3xl font-bold pt-5 pb-12",children:"My Lists"}),n.length>0?(0,i.jsx)("div",{className:"grid grid-cols-1 min-[800px]:grid-cols-3 min-[400px]:grid-cols-2 gap-5 w-full min-[1000px]:grid-cols-4 mx-auto max-w-[1200px]",children:n.map(e=>(0,i.jsx)(u,{...e},e.id))}):(0,i.jsx)(c.Z,{message:"You don't have any lists yet!"}),0==n.length?(0,i.jsx)("div",{className:"flex items-center justify-center pt-5",children:e?(0,i.jsx)(v,{children:(0,i.jsx)("div",{className:" bg-primary text-white px-5 py-2 rounded-md hover:scale-[1.05] active:scale-[0.95] transition-[0.15s]",children:"Create new List"})}):"You need to be logged in to create a list."}):(0,i.jsxs)("div",{className:"pt-10",children:[" ",(0,i.jsx)(v,{children:(0,i.jsx)("div",{className:" bg-primary text-white px-5 py-2 rounded-md hover:scale-[1.05] active:scale-[0.95] transition-[0.15s]",children:"Create new List"})})]})]})}},6622:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var s=n(9268),i=n(2972),r=n.n(i),l=n(6006);function a(e){let{account:t,size:n=20}=e;t=function(e){for(var t="",n=0;n<e.length;n++)t+=e.charCodeAt(n).toString(16);return t}(t);let i=(0,l.useRef)();return(0,l.useEffect)(()=>{let e=i.current;if(e&&t){let s=t.slice(2,10),i=parseInt(s,16),l=r()(n,i);e.firstChild&&e.removeChild(e.firstChild),e.appendChild(l)}},[t,i]),(0,s.jsx)("div",{ref:i,style:{height:n,width:n,minWidth:n,minHeight:n,borderRadius:"9999px"}})}},1733:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(9268),i=n(6394),r=n.n(i);function l(e){let{message:t}=e;return(0,s.jsxs)("div",{className:"text-center flex flex-col items-center gap-5",children:[(0,s.jsx)("h1",{className:"font-bold text-[40px] text-gray-500",children:"Oh No!"}),(0,s.jsx)("h2",{className:"text-bold text-[30px] pb-5",children:t}),(0,s.jsx)("div",{className:"max-w-[200px] w-[200px]",children:(0,s.jsx)(r(),{src:"/ohno.png",alt:"Oh no!",width:200,height:200})})]})}},4717:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var s=n(9119);let i=new s.g6("https://harbour-movies.vercel.app/api/graphql",{headers:{"Content-Type":"application/json"}})},6394:function(e,t,n){e.exports=n(7059)},5846:function(e,t,n){e.exports=n(3920)}},function(e){e.O(0,[59,920,288,954,972,455,744],function(){return e(e.s=3671)}),_N_E=e.O()}]);