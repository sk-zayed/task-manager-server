(function(){"use strict";var t={3300:function(t,e,a){var s=a(144),r=a(8345),o=a(8620),n=a(629),i=a(4009),l=a.n(i);s.ZP.use(r.ZP),s.ZP.use(o.ZP),s.ZP.use(n.ZP),s.ZP.use(l());var c=a(8945),d={BASE_URL:"http://localhost:3000"};const u=async t=>{try{delete t["cnfrmpass"];const e=await c.Z.post(`${d.BASE_URL}/api/auth/register`,t,{headers:{"Content-Type":"application/json"}});return e.data}catch(e){throw new Error(e.message)}},p=async t=>{try{const e=await c.Z.post(`${d.BASE_URL}/api/auth/login`,t,{headers:{"Content-Type":"application/json"}});return e.data.data}catch(e){throw new Error(e.message)}},m="name",h="email",g="token",f="role",v={state:{name:localStorage.getItem(m)||"",email:localStorage.getItem(h)||"",token:localStorage.getItem(g)||"",role:localStorage.getItem(f)||""},getters:{isAuthenticated(t){return!!t.token},isAdmin(t){return"admin"===t.role}},mutations:{setName(t,e){t.name=e},setEmail(t,e){t.email=e},setToken(t,e){t.token=e},setRole(t,e){t.role=e}},actions:{login({commit:t},e){return p(e).then((e=>{const{name:a,email:s,token:r,role:o}=e;return localStorage.setItem(m,a),localStorage.setItem(h,s),localStorage.setItem(g,r),localStorage.setItem(f,o),t("setName",a),t("setEmail",s),t("setToken",r),t("setRole",o),s}))},logout({commit:t}){return localStorage.removeItem(m),localStorage.removeItem(h),localStorage.removeItem(g),localStorage.removeItem(f),t("setName",""),t("setEmail",""),t("setToken",""),t("setRole",""),Promise.resolve()}}};var w=v;const y={state:{loading:!1,toDoArr:[],doingArr:[],doneArr:[],showBoardInfo:!1,showCardDialog:!1,cardObject:{}}};var Z=y;const _=new n.ZP.Store({modules:{auth:w,board:Z}});var b=_;c.Z.interceptors.request.use((t=>(t.url.includes("boards")&&(t.headers["Authorization"]=b.state.auth.token),t)),(t=>Promise.reject(t)));var k=a(998),C=function(){var t=this,e=t._self._c;return e(k.Z,[e("NavbarComponent"),e("router-view")],1)},D=[],x=a(5550),$=a(3423),B=a(4562),P=a(9223),S=a(1267),A=a(4324),T=a(3201),j=a(5808),E=a(4525),I=a(4611),z=a(6021),q=a(8515),L=a(3687),O=a(7808),R=a(6313),U=a(7953),M=function(){var t=this,e=t._self._c;return e("v-nav",[e(R.Z,{attrs:{dark:""}},[e(x.Z,{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),e(U.qW,{staticClass:"text-uppercase grey--text"},[e("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[e("span",{staticClass:"font-weight-light"},[t._v("Task")]),e("span",{staticClass:"white--text"},[t._v("Manager")])])],1),e(L.Z),e(U.lj,{staticClass:"hidden-sm-and-down mr-4"},[e(O.Z,{staticClass:"my-3 width",attrs:{"hide-details":"",placeholder:"Search",filled:"",rounded:"",dense:"","single-line":"","append-icon":"mdi-magnify"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.search.apply(null,arguments))}},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1),t.authenticated?e(U.lj,{staticClass:"hidden-sm-and-down",attrs:{to:"/profile"}},[e(B.Z,{staticClass:"font-weight-light",attrs:{text:""}},[t._v(" Welcome "+t._s(t.store.name)+"!! ")])],1):t._e(),t.authenticated?e(U.lj,{staticClass:"hidden-sm-and-down",on:{click:t.logout}},[e(B.Z,{staticClass:"font-weight-light",attrs:{text:""}},[t._v(" Logout "),e(A.Z,{attrs:{right:""}},[t._v("mdi-export")])],1)],1):t._e(),t.authenticated?t._e():e(U.lj,{staticClass:"hidden-sm-and-down"},[e(B.Z,{staticClass:"font-weight-light",attrs:{text:"",to:"/login"}},[t._v(" Login "),e(A.Z,{attrs:{right:""}},[t._v("mdi-import")])],1)],1),t.authenticated?t._e():e(U.lj,{staticClass:"hidden-sm-and-down"},[e(B.Z,{staticClass:"font-weight-light",attrs:{text:"",to:"/signup"}},[t._v(" SignUp "),e(A.Z,{attrs:{right:""}},[t._v("mdi-account-plus")])],1)],1)],1),e(q.Z,{attrs:{absolute:"",temporary:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(T.Z,{attrs:{column:"","align-center":""}},[e(S.Z,{staticClass:"mt-6"},[e($.Z,{attrs:{size:"100"}},[t.authenticated?e("img",{attrs:{src:"favicon.ico",alt:"Profile picture"}}):e(A.Z,{attrs:{"aria-label":"Account",role:"img",size:"100"}},[t._v(" mdi-account ")])],1)],1),e("p",{staticClass:"subheading white--text mt-2"},[t._v(" "+t._s(t.store.name||"Welcome to task manager!")+" ")])],1),e(P.Z),e(j.Z,{staticClass:"pt-0"},[t._l(t.links,(function(a){return e(E.Z,{key:a.title,attrs:{to:a.route}},[e(I.Z,[e(A.Z,[t._v(t._s(a.icon))])],1),e(z.V9,{staticClass:"font-weight-light"},[t._v(t._s(a.title)+" ")])],1)})),t.authenticated?e(E.Z,{on:{click:t.logout}},[e(I.Z,[e(A.Z,[t._v("mdi-export")])],1),e(z.V9,{staticClass:"font-weight-light"},[t._v("Logout")])],1):t._e(),t.authenticated?t._e():e(E.Z,{attrs:{to:"/signup"}},[e(I.Z,[e(A.Z,[t._v("mdi-account-plus")])],1),e(z.V9,{staticClass:"font-weight-light"},[t._v("SignUp")])],1),t.authenticated?t._e():e(E.Z,{attrs:{to:"/login"}},[e(I.Z,[e(A.Z,[t._v("mdi-import")])],1),e(z.V9,{staticClass:"font-weight-light"},[t._v("Login")])],1)],2)],1)],1)},N=[],H=(a(7658),{data(){return{store:{authenticated:this.$store.getters.isAuthenticated,name:this.$store.state.auth.name,email:this.$store.state.auth.email,profile:""},drawer:null,query:"",links:[{route:"/",icon:"mdi-home",title:"Home"},{route:"/boards",icon:"mdi-view-dashboard-variant",title:"Boards"},{route:"/calendar",icon:"mdi-calendar",title:"Calender"},{route:"/teams",icon:"mdi-account-group",title:"Teams"}]}},computed:{authenticated(){return this.$store.getters.isAuthenticated}},methods:{search(){console.log(this.query)},logout(){this.$store.dispatch("logout").then((()=>{this.$router.push("/"),s.ZP.$toast.open({message:"Logout successful.",duration:d.duration,type:"success"})})).catch((t=>{s.ZP.$toast.open({message:t.message,duration:d.duration,type:"error"})}))}}}),V=H,W=a(1001),F=(0,W.Z)(V,M,N,!1,null,"61c84d6e",null),Q=F.exports,G={name:"App",components:{NavbarComponent:Q}},Y=G,J=(0,W.Z)(Y,C,D,!1,null,null,null),K=J.exports,X=a(6475),tt=a(6760),et=a(266),at=a(9256),st=a(8271),rt=a(5495),ot=a(1713),nt=function(){var t=this,e=t._self._c;return e("div",[e(X.Z,{attrs:{cycle:"",interval:"3000","hide-delimiters":"","show-arrows-on-hover":""}},t._l(t.items,(function(t,a){return e(tt.Z,{key:a,attrs:{src:t.src}})})),1),e(at.Z,[e(ot.Z,[e(et.Z,{attrs:{cols:"12",sm:"6"}},[e(rt.Z,{staticClass:"ma-auto img-size",attrs:{src:"kanban.png"}})],1),e(et.Z,{staticClass:"pa-16 ma-auto",attrs:{cols:"12",sm:"6"}},[e("div",{staticClass:"text-h4 pa-2"},[t._v(" Manage tasks using kanban board ")]),e("div",{staticClass:"text-body-1 pa-2"},[t._v(" Have a plan, organize everything, schedule it and use the kanban tool to track the progress. It helps visualizing work, limit work-in-progress, and maximize efficiency (or flow). Task manger provides a kanban board to track the progress of you plan. A perfect execution of plan leads to successful results. Happy growing!! ")])])],1),e(ot.Z,[e(et.Z,{staticClass:"pa-16 ma-auto",attrs:{cols:"12",sm:"6"}},[e("div",{staticClass:"text-h4 pa-2"},[t._v(" Have a calendar to visulalize ")]),e("div",{staticClass:"text-body-1 pa-2"},[t._v(" Having a plan is good but a perfect execution is must. In order to have a perfect execution one should visualize its on-going and upcoming tasks. Visualizing the progress of tasks helps in further planning and time management. So visualize your tasks with task manager and achieve whatever you want. ")])]),e(et.Z,{attrs:{cols:"12",sm:"6"}},[e(rt.Z,{staticClass:"ma-auto img-size",attrs:{src:"calendar.png"}})],1)],1),e(ot.Z,[e(et.Z,{attrs:{cols:"12",sm:"6"}},[e(rt.Z,{staticClass:"ma-auto img-size",attrs:{src:"team.png"}})],1),e(et.Z,{staticClass:"pa-16 ma-auto",attrs:{cols:"12",sm:"6"}},[e("div",{staticClass:"text-h4 pa-2"},[t._v(" Team up with your driven fellows ")]),e("div",{staticClass:"text-body-1 pa-2"},[t._v(" Teamwork is the collaborative effort of a group to achieve a common goal or to complete a task in the most effective and efficient way. Task manager helps you track the overall progress of tasks contributed by each team member. Let the teamwork show the world what you are! ")])])],1)],1),e(st.Z,{attrs:{color:"primary lighten-1",padless:""}},[e(ot.Z,{attrs:{justify:"center","no-gutters":""}},[e(B.Z,{staticClass:"my-2",attrs:{color:"white",text:""}},[t._v(" Home ")]),e(B.Z,{staticClass:"my-2",attrs:{color:"white",text:"",rounded:""}},[t._v(" About ")]),e(B.Z,{staticClass:"my-2",attrs:{color:"white",text:""}},[t._v(" Contact ")]),e(et.Z,{staticClass:"lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[t._v(" Made with 🧡 by "),e("strong",[t._v("Zayed")])])],1)],1)],1)},it=[],lt={name:"HomeComponent",data(){return{items:[{src:"c-1.jpg"},{src:"c-2.jpg"},{src:"c-3.jpg"}]}}},ct=lt,dt=(0,W.Z)(ct,nt,it,!1,null,"41540c36",null),ut=dt.exports,pt=a(5125),mt=function(){var t=this,e=t._self._c;return e(at.Z,[e(pt.Z,{ref:"form",staticClass:"pt-4"},[e(O.Z,{attrs:{rules:[t.rules.required,t.rules.email],label:"Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),e(O.Z,{attrs:{"append-icon":t.show?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.password],type:t.show?"text":"password",label:"Password"},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),e(B.Z,{attrs:{dark:""},on:{click:t.login}},[t._v("Login")])],1),e("div",{staticClass:"pt-8"},[e("div",{staticClass:"text--secondary pb-3"},[t._v(" Tesing credentials: ")]),e("div",{staticClass:"text--secondary"},[t._v(" email: zayed@example.com ")]),e("div",{staticClass:"text--secondary"},[t._v(" password: zayed@123 ")])])],1)},ht=[],gt={name:"LoginPage",data(){return{show:!1,processing:!1,rules:{required:t=>!!t||"Required.",email:t=>{const e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."},password:t=>t.length>=8||"Min 8 characters are required"},form:{email:"",password:""}}},methods:{login(){this.$refs.form.validate()&&this.$store.dispatch("login",this.form).then((()=>{s.ZP.$toast.open({message:"Login successful.",duration:d.duration,type:"success"}),this.$router.push({name:"home"})})).catch((t=>{s.ZP.$toast.open({message:t.response.data.message,duration:d.duration,type:"error"}),this.form.email="",this.form.password=""}))}}},ft=gt,vt=(0,W.Z)(ft,mt,ht,!1,null,null,null),wt=vt.exports,yt=function(){var t=this,e=t._self._c;return e(at.Z,[e(pt.Z,{ref:"form",staticClass:"pt-4"},[e(O.Z,{attrs:{rules:[t.rules.required],label:"Name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),e(O.Z,{attrs:{rules:[t.rules.required,t.rules.email],label:"Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),e(O.Z,{attrs:{"append-icon":t.show?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.password],type:t.show?"text":"password",label:"Password"},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),e(O.Z,{attrs:{"append-icon":t.show?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.cnfrmpass],type:t.show?"text":"password",label:"Confirm password"},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.form.cnfrmpass,callback:function(e){t.$set(t.form,"cnfrmpass",e)},expression:"form.cnfrmpass"}}),e(B.Z,{attrs:{dark:""},on:{click:t.signUp}},[t._v("SignUp")])],1)],1)},Zt=[],_t={name:"SignupPage",data(){return{show:!1,processing:!1,rules:{required:t=>!!t||"Required.",email:t=>{const e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."},password:t=>t.length>=8||"Min 8 characters are required",cnfrmpass:t=>this.cnfrmpass(t)||"Password did not match"},form:{name:"",email:"",password:"",cnfrmpass:""}}},methods:{cnfrmpass(t){return this.form.password===t},async signUp(){if(this.$refs.form.validate())try{console.log("funn");const t=await u(this.form);console.log("vue --\x3e ",t),"success"===t.status?(s.ZP.$toast.open({message:"Registration successful. Please login.",duration:d.duration,type:"success"}),this.$router.push({name:"login"})):"error"===t.status&&s.ZP.$toast.open({message:t.message,duration:d.duration,type:"error"})}catch(t){s.ZP.$toast.open({message:t.message,duration:d.duration,type:"error"})}}}},bt=_t,kt=(0,W.Z)(bt,yt,Zt,!1,null,null,null),Ct=kt.exports,Dt=a(4145),xt=a(4886),$t=a(1030),Bt=a(4061),Pt=a(4528),St=a(9592),At=a(2648),Tt=function(){var t=this,e=t._self._c;return e(at.Z,[e("ShowLoading"),e("h1",[t._v("Boards")]),e(P.Z,{staticClass:"my-3"}),e(ot.Z,t._l(t.ownBoards,(function(a){return e(et.Z,{key:a.id,staticClass:"d-flex",attrs:{sm:"6",md:"4",lg:"3"}},[e(Dt.Z,{staticClass:"px-auto d-flex flex-column"},[e("div",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.openBoard(a._doc._id)}}},[e(rt.Z,{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}}),e(xt.EB,[t._v(t._s(a._doc.title))]),e(xt.Qq,{staticClass:"py-1"},[t._v(" Due: "+t._s(t.utils.formatDate(a._doc.dueDate)||"Not set!")+" ")])],1),e(xt.ZB,{staticClass:"text--primary"},[t._v(" "+t._s(t.utils.sliceStr(a._doc.description)||"No description :(")+" "),a._doc.description&&a._doc.description.length>100?e("div",{staticClass:"read-more",on:{click:function(e){return t.openBoard(a._doc._id)}}},[t._v(" read more ")]):t._e()]),e(L.Z),e(xt.ZB,[e(ot.Z,{staticClass:"px-3 pb-2",attrs:{justify:"space-between"}},[e("div",[e(A.Z,[t._v("mdi-account")]),t._v(" "+t._s(a.members||5)+" ")],1),e("div",[e(A.Z,{attrs:{color:a._doc.liked?"red":"default"},on:{click:function(e){return t.likeBoard(a._doc._id)}}},[t._v("mdi-heart")])],1),e("div",[e(A.Z,{on:{click:function(e){return t.deleteBoard(a._doc._id)}}},[t._v("mdi-delete")])],1),e("div",[e(A.Z,[t._v("mdi-check")]),t._v(" "+t._s(a.completed)+"/"+t._s(a.total)+" ")],1)]),e(St.Z,{staticClass:"my-4",attrs:{color:a.progress<=30?"red":a.progress>30&&a.progress<=70?"yellow":"green",height:"15",rounded:""},scopedSlots:t._u([{key:"default",fn:function({value:a}){return[e("strong",[t._v(t._s(Math.ceil(a))+"%")])]}}],null,!0),model:{value:a.progress,callback:function(e){t.$set(a,"progress",e)},expression:"board.progress"}})],1)],1)],1)})),1),e("div",{staticClass:"text-center"},[e(Bt.Z,{attrs:{width:"800"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(Dt.Z,[e(pt.Z,{ref:"newBoardData"},[e(xt.EB,{staticClass:"text-h5 grey lighten-2"},[t._v("Create board")]),e(xt.ZB,{staticClass:"pt-6"},[e(O.Z,{attrs:{label:"Title",solo:"","prepend-icon":"mdi-file-chart-check-outline",rules:[t.rules.required]},model:{value:t.newBoardData.title,callback:function(e){t.$set(t.newBoardData,"title",e)},expression:"newBoardData.title"}}),e(At.Z,{attrs:{solo:"","auto-grow":"",rows:"1",counter:"",clearable:"","clear-icon":"mdi-close-circle",label:"Description","prepend-icon":"mdi-text"},model:{value:t.newBoardData.description,callback:function(e){t.$set(t.newBoardData,"description",e)},expression:"newBoardData.description"}}),e(Pt.Z,{ref:"showDatePicker",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(O.Z,t._g(t._b({attrs:{solo:"",label:"Due date","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.formatDate,callback:function(e){t.formatDate=e},expression:"formatDate"}},"v-text-field",s,!1),a))]}}]),model:{value:t.showDatePicker,callback:function(e){t.showDatePicker=e},expression:"showDatePicker"}},[e($t.Z,{attrs:{"no-title":""},on:{input:function(e){t.showDatePicker=!1}},model:{value:t.newBoardData.dueDate,callback:function(e){t.$set(t.newBoardData,"dueDate",e)},expression:"newBoardData.dueDate"}})],1)],1),e(xt.h7,[e(L.Z),e(B.Z,{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),e(B.Z,{attrs:{text:""},on:{click:t.createBoard}},[t._v("Create")])],1)],1)],1)],1)],1),e(B.Z,{staticClass:"ma-16",attrs:{fab:"",bottom:"",right:"",fixed:"",large:"",dark:""},on:{click:function(e){t.dialog=!t.dialog}}},[e(A.Z,[t._v("mdi-plus")])],1)],1)},jt=[],Et=function(){var t=this,e=t._self._c;return e(Bt.Z,{attrs:{persistent:"",width:"500"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[e(Dt.Z,{attrs:{color:"primary",dark:""}},[e(xt.ZB,{staticClass:"py-2 px-3"},[t._v(" Please stand by "),e(St.Z,{staticClass:"my-2",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)},It=[],zt={name:"ShowLoading",computed:{loading(){return this.$store.state.board.loading}}},qt=zt,Lt=(0,W.Z)(qt,Et,It,!1,null,null,null),Ot=Lt.exports;const Rt=async t=>{try{await c.Z.post(`${d.BASE_URL}/api/boards/createboard`,t,{headers:{"Content-Type":"application/json"}})}catch(e){throw new Error(e.message)}},Ut=async t=>{try{await c.Z.patch(`${d.BASE_URL}/api/boards/likeboard/${t}`)}catch(e){throw new Error(e.message)}},Mt=async()=>{try{const t=await c.Z.get(`${d.BASE_URL}/api/boards/getboards`,{headers:{"Content-Type":"Application/json"}});return t.data}catch(t){throw new Error(t.message)}},Nt=async t=>{try{const e=await c.Z.get(`${d.BASE_URL}/api/boards/${t}`,{headers:{"Content-Type":"Application/json"}});return e.data}catch(e){throw new Error(e.message)}},Ht=async t=>{try{await c.Z.post(`${d.BASE_URL}/api/boards/createcard`,t,{headers:{"Content-Type":"Application/json"}})}catch(e){throw new Error(e.message)}},Vt=async t=>{try{const e=await c.Z.put(`${d.BASE_URL}/api/boards/updatecard`,t,{headers:{"Content-Type":"Application/json"}});return e.data}catch(e){throw new Error(e.message)}},Wt=async t=>{try{await c.Z["delete"](`${d.BASE_URL}/api/boards/deleteboard/${t}`)}catch(e){throw new Error(e.message)}},Ft=async t=>{try{await c.Z["delete"](`${d.BASE_URL}/api/boards/deletecard/${t}`)}catch(e){throw new Error(e.message)}};var Qt={createBoard:Rt,likeBoard:Ut,fetchBoards:Mt,fetchBoardById:Nt,createCard:Ht,updateCard:Vt,deleteBoard:Wt,deleteCard:Ft};const Gt=t=>new Date(t).toGMTString().substr(0,16),Yt=t=>{if(t)return t.slice(0,100)};var Jt={formatDate:Gt,sliceStr:Yt},Kt={name:"UserBoards",components:{ShowLoading:Ot},data(){return{error:null,rules:{required:t=>!!t||"Required."},showDatePicker:!1,dialog:!1,dateMenu:!1,newBoardData:{title:null,description:null,dueDate:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),image:null},ownBoards:[],utils:Jt,teamBoards:[]}},computed:{loading(){return this.$store.state.board.loading},formatDate(){return Jt.formatDate(this.newBoardData.dueDate)}},methods:{async fetchBoards(){try{const t=await Qt.fetchBoards();this.ownBoards=t.data,this.$store.state.board.loading=!1}catch(t){this.error=t}},async createBoard(){if(this.$refs.newBoardData.validate()){this.dialog=!1,this.$store.state.board.loading=!0;try{await Qt.createBoard(this.newBoardData),this.fetchBoards(),s.ZP.$toast.open({message:"Woahh!!, a board was created",duration:d.duration,type:"success"})}catch(t){s.ZP.$toast.open({message:t.response.data.message,duration:d.duration,type:"error"})}}},async likeBoard(t){this.$store.state.board.loading=!0;try{await Qt.likeBoard(t),this.fetchBoards()}catch(e){s.ZP.$toast.open({message:e.response.data.message,duration:d.duration,type:"error"})}},openBoard(t){this.$store.state.board.loading=!0,this.$router.push({name:"board-details",params:{id:t}})},async deleteBoard(t){this.$store.state.board.loading=!0;try{await Qt.deleteBoard(t),this.fetchBoards(),s.ZP.$toast.open({message:"Filling trash ;(",duration:d.duration,type:"error"})}catch(e){s.ZP.$toast.open({message:e.response.data.message,duration:d.duration,type:"error"})}}},mounted(){this.$store.state.board.loading=!0,this.fetchBoards()}},Xt=Kt,te=(0,W.Z)(Xt,Tt,jt,!1,null,null,null),ee=te.exports,ae=function(){var t=this,e=t._self._c;return e(at.Z,{staticClass:"pb-0"},[e("ShowLoading"),e(ot.Z,[e(et.Z,{attrs:{cols:"7"}},[e("div",{staticClass:"text-h6",attrs:{text:""}},[t._v(t._s(t.boardData.title))])]),e(et.Z,{attrs:{align:"end"}},[e(A.Z,{staticClass:"px-3",on:{click:t.showInfoFun}},[t._v("mdi-information")])],1)],1),e(P.Z,{staticClass:"mt-2"}),e("BoardInfo",{attrs:{boardData:t.boardData}}),e("div",{staticClass:"overflow-x-auto d-flex",staticStyle:{"background-color":"none"}},t._l(t.columns,(function(a){return e("div",{key:a,staticClass:"pa-6",staticStyle:{"min-width":"375px",display:"inline"}},[e("BoardColumn",{attrs:{name:a.name,cards:a.columnArray,addCard:a.addCard},on:{reload:t.fetchCards}})],1)})),0),e("CardDialog",{on:{reload:t.fetchCards}})],1)},se=[],re=a(3305),oe=function(){var t=this,e=t._self._c;return e(Bt.Z,{attrs:{width:"600"},on:{"click:outside":t.closeInfo},model:{value:t.showInfo,callback:function(e){t.showInfo=e},expression:"showInfo"}},[e(Dt.Z,{staticClass:"pa-5"},[e("div",{staticClass:"text-h5 pa-1"},[t._v(" "+t._s(t.boardData._doc.title)+" ")]),e("div",{staticClass:"text--secondary pa-1"},[t._v(" Due: "+t._s(t.utils.formatDate(t.boardData._doc.dueDate)||"Not set!")+" ")]),e("div",{staticClass:"pa-1"},[t._v(" "+t._s(t.boardData.desc||"No description!")+" ")]),e("div",[e(ot.Z,{staticClass:"ma-0 pt-2"},[e(et.Z,{staticClass:"pa-0"},[e("div",{staticClass:"text--secondary pa-1"},[t._v("Completed Cards:")]),e("div",{staticClass:"py-3 pl-1",staticStyle:{"font-size":"35px"}},[t._v(" "+t._s(t.boardData.completed)+"/"+t._s(t.boardData.total)+" ")])]),e(et.Z,{staticClass:"pa-0"},[e("div",{staticClass:"text--secondary pa-1"},[t._v("Progress:")]),e("div",{staticClass:"py-1 pl-3"},[e(re.Z,{attrs:{rotate:360,size:75,width:10,value:t.boardData.progress,caption:"",color:t.boardData.progress<=30?"red":t.boardData.progress>30&&t.boardData.progress<=70?"yellow":"green"}},[e("div",{staticStyle:{"font-size":"0.7em"}},[t._v(" "+t._s(Math.ceil(t.boardData.progress))+"% ")])])],1)])],1)],1)])],1)},ne=[],ie={name:"BoardInfo",props:{boardData:Object},data(){return{utils:Jt}},computed:{showInfo(){return this.$store.state.board.showBoardInfo}},methods:{closeInfo(){this.$store.state.board.showBoardInfo=!1}}},le=ie,ce=(0,W.Z)(le,oe,ne,!1,null,null,null),de=ce.exports,ue=function(){var t=this,e=t._self._c;return e(Dt.Z,[e(xt.EB,{staticClass:"pa-2 pl-4"},[t._v(t._s(t.name))]),e("div",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"69vh"}},t._l(t.cards,(function(a){return e(Dt.Z,{key:a._id,staticClass:"ma-3",attrs:{"max-width":"400"}},[e(rt.Z,{staticClass:"white--text align-end",staticStyle:{cursor:"pointer"},attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"},on:{click:function(e){return t.viewCard(a._id,a.lane)}}}),e(xt.EB,[t._v(t._s(a.title))]),e(xt.Qq,{staticClass:"pt-1"},[t._v(" Due: "+t._s(t.utils.formatDate(a.dueDate)||"Not set!")+" ")]),e(xt.ZB,{staticClass:"text--primary"},[e(ot.Z,{staticClass:"px-3 py-2",attrs:{justify:"space-between"}},[e("div",[e(A.Z,[t._v("mdi-account")]),t._v(" "+t._s(a.members||8)+" ")],1),e("div",[e(A.Z,[t._v("mdi-check")]),t._v(" "+t._s(a.completed)+"/"+t._s(a.tasks.length)+" ")],1),e("div",[e(A.Z,{on:{click:function(e){return t.deleteCard(a._id)}}},[t._v("mdi-delete")])],1),e(re.Z,{attrs:{rotate:360,size:25,width:2,value:a.progress,caption:"",color:a.progress<=30?"red":a.progress>30&&a.progress<=70?"yellow":"green"}},[e("div",{staticStyle:{"font-size":"0.7em"}},[t._v(" "+t._s(Math.ceil(a.progress))+"% ")])])],1)],1)],1)})),1),t.addCard?e(xt.h7,[e(B.Z,{attrs:{block:"",dark:""},on:{click:t.createCard}},[t._v("Create card")])],1):t._e()],1)},pe=[],me={name:"BoardColumn",props:{name:String,cards:Array,addCard:{type:Boolean,default:!1}},data(){return{utils:Jt}},methods:{createCard(){this.$store.state.board.cardObject={title:"New card",description:null,priority:null,dueDate:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),tasks:[],image:null},this.$store.state.board.showCardDialog=!0},viewCard(t,e){"ToDo"===e?this.$store.state.board.cardObject=this.$store.state.board.toDoArr.filter((e=>e._id===t))[0]:"Doing"===e?this.$store.state.board.cardObject=this.$store.state.board.doingArr.filter((e=>e._id===t))[0]:"Done"===e&&(this.$store.state.board.cardObject=this.$store.state.board.doneArr.filter((e=>e._id===t))[0]),this.$store.state.board.showCardDialog=!0},async deleteCard(t){this.$store.state.board.loading=!0;try{await Qt.deleteCard(t),this.$emit("reload"),s.ZP.$toast.open({message:"Added to trash!",duration:d.duration,type:"error"})}catch(e){s.ZP.$toast.open({message:e.response.data.message,duration:d.duration,type:"error"})}}}},he=me,ge=(0,W.Z)(he,ue,pe,!1,null,null,null),fe=ge.exports,ve=a(120),we=a(7394),ye=a(5187),Ze=a(343),_e=function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(Bt.Z,{attrs:{width:"800"},on:{"click:outside":t.closeDialog},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(Dt.Z,[e(pt.Z,{ref:"cardData"},[e(xt.EB,{staticClass:"text-h5 grey lighten-2"},[t._v("Card details")]),e(xt.ZB,{staticClass:"pt-6"},[e(O.Z,{attrs:{label:"Title",solo:"","prepend-icon":"mdi-folder",rules:[t.rules.required]},model:{value:t.cardData.title,callback:function(e){t.$set(t.cardData,"title",e)},expression:"cardData.title"}}),e(At.Z,{attrs:{solo:"","auto-grow":"",rows:"1",counter:"",clearable:"","clear-icon":"mdi-close-circle",label:"Description","prepend-icon":"mdi-text"},model:{value:t.cardData.description,callback:function(e){t.$set(t.cardData,"description",e)},expression:"cardData.description"}}),e(Ze.Z,{attrs:{solo:"",items:t.items,label:"Priority","prepend-icon":"mdi-label"},model:{value:t.cardData.priority,callback:function(e){t.$set(t.cardData,"priority",e)},expression:"cardData.priority"}}),e(Pt.Z,{ref:"showDatePicker",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(O.Z,t._g(t._b({attrs:{solo:"",label:"Due date","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.formatDate,callback:function(e){t.formatDate=e},expression:"formatDate"}},"v-text-field",s,!1),a))]}}]),model:{value:t.showDatePicker,callback:function(e){t.showDatePicker=e},expression:"showDatePicker"}},[e($t.Z,{attrs:{"no-title":""},on:{input:function(e){t.showDatePicker=!1}},model:{value:t.cardData.dueDate,callback:function(e){t.$set(t.cardData,"dueDate",e)},expression:"cardData.dueDate"}})],1),e(O.Z,{attrs:{label:"What are you working on?",solo:"","prepend-icon":"mdi-order-bool-ascending-variant"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask.apply(null,arguments)}},scopedSlots:t._u([{key:"append",fn:function(){return[e(we.Z5,[t.newTask?e(A.Z,{on:{click:t.addTask}},[t._v(" mdi-plus-circle ")]):t._e()],1)]},proxy:!0}]),model:{value:t.newTask,callback:function(e){t.newTask=e},expression:"newTask"}}),t.cardData.tasks.length>0?e(Dt.Z,{staticClass:"ml-8"},[e(St.Z,{attrs:{value:t.progress}}),e(we.cu,{staticClass:"py-0",attrs:{group:""}},[t._l(t.cardData.tasks,(function(a){return e(E.Z,{key:a.title},[e(ye.Z,[e(ve.Z,{attrs:{color:a.done?"grey":"primary"},scopedSlots:t._u([{key:"label",fn:function(){return[e("div",{staticClass:"ml-4",class:a.done?"grey--text":"primary--text",domProps:{textContent:t._s(a.title)}})]},proxy:!0}],null,!0),model:{value:a.done,callback:function(e){t.$set(a,"done",e)},expression:"task.done"}})],1),e(L.Z),e(we.vQ,[a.done?e(A.Z,{attrs:{color:"success"}},[t._v(" mdi-check ")]):t._e()],1)],1)}))],2)],1):t._e()],1),e(xt.h7,[e(L.Z),e(B.Z,{attrs:{text:""},on:{click:t.closeDialog}},[t._v("Close")]),e(B.Z,{attrs:{text:""},on:{click:t.saveCard}},[t._v("Commit")])],1)],1)],1)],1)],1)},be=[],ke={name:"CardDialog",data(){return{showDatePicker:!1,items:["High","Medium","Low"],dateMenu:!1,newTask:null,rules:{required:t=>!!t||"Required."},cardData:null}},computed:{dialog(){return this.setCardData(),this.$store.state.board.showCardDialog},formatDate(){return Jt.formatDate(this.cardData.dueDate)},progress(){const t=this.cardData.tasks.filter((t=>!0===t.done)).length;return t/this.cardData.tasks.length*100}},methods:{setCardData(){this.cardData=this.$store.state.board.cardObject},async saveCard(){if(this.$refs.cardData.validate()){this.closeDialog(),this.$store.state.board.loading=!0;try{if(this.cardData._id)await Qt.updateCard(this.cardData),this.$emit("reload"),s.ZP.$toast.open({message:"Updation triggered!",duration:d.duration,type:"success"});else{const t={...this.cardData,board:this.$route.params.id};await Qt.createCard(t),this.$emit("reload"),s.ZP.$toast.open({message:"Seems like you have a plan ;)",duration:d.duration,type:"success"})}}catch(t){s.ZP.$toast.open({message:t.response.data.message,duration:d.duration,type:"error"})}}},addTask(){this.newTask&&(this.cardData.tasks.push({done:!1,title:this.newTask}),this.newTask=null)},closeDialog(){this.$store.state.board.showCardDialog=!1}}},Ce=ke,De=(0,W.Z)(Ce,_e,be,!1,null,null,null),xe=De.exports,$e={name:"CreateBoard",components:{ShowLoading:Ot,BoardInfo:de,BoardColumn:fe,CardDialog:xe},data(){return{boardData:{},columns:[{name:"ToDo",columnArray:[],addCard:!0},{name:"Doing",columnArray:[]},{name:"Done",columnArray:[]}]}},methods:{showInfoFun(){this.$store.state.board.showBoardInfo=!0},async fetchCards(){try{const t=await Qt.fetchBoardById(this.$route.params.id);this.boardData=t.data;const e=[],a=[],s=[];t.data._doc.cards.forEach((t=>{"ToDo"===t.lane?e.push(t):"Doing"===t.lane?a.push(t):"Done"===t.lane&&s.push(t),this.columns[0].columnArray=e,this.columns[1].columnArray=a,this.columns[2].columnArray=s})),this.$store.state.board.loading=!1,this.$store.state.board.toDoArr=e,this.$store.state.board.doingArr=a,this.$store.state.board.doneArr=s}catch(t){s.ZP.$toast.open({message:t.response.data.message,duration:d.duration,type:"error"})}}},mounted(){this.$store.state.board.loading=!0,this.fetchCards()}},Be=$e,Pe=(0,W.Z)(Be,ae,se,!1,null,null,null),Se=Pe.exports;const Ae={authorize:["admin","general"]},Te=new r.ZP({mode:"history",routes:[{name:"home",path:"/",component:ut},{name:"signup",path:"/signup",component:Ct},{name:"login",path:"/login",component:wt},{name:"boards",path:"/boards",component:ee,meta:Ae},{name:"board-details",path:"/board/:id",props:!0,component:Se,meta:Ae},{name:"calendar",path:"/calendar",component:ut,meta:Ae},{name:"teams",path:"/teams",component:ut,meta:Ae}]});Te.beforeEach(((t,e,a)=>{const r=t.meta.authorize;return r&&!b.getters.isAuthenticated?(s.ZP.$toast.open({message:"Please login first.",duration:d.duration,type:"error"}),a({name:"login"})):r&&!r.includes(b.state.auth.role)?(s.ZP.$toast.open({message:"You do not have sufficient access to this page.",duration:d.duration,type:"error"}),a({path:"/"})):void a()}));var je=Te,Ee=a(1705);s.ZP.use(Ee.Z);var Ie=new Ee.Z({theme:{themes:{light:{primary:"#000"}}}});s.ZP.config.productionTip=!1,new s.ZP({vuetify:Ie,router:je,store:b,render:t=>t(K)}).$mount("#app")}},e={};function a(s){var r=e[s];if(void 0!==r)return r.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,s,r,o){if(!s){var n=1/0;for(d=0;d<t.length;d++){s=t[d][0],r=t[d][1],o=t[d][2];for(var i=!0,l=0;l<s.length;l++)(!1&o||n>=o)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(i=!1,o<n&&(n=o));if(i){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[s,r,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,o,n=s[0],i=s[1],l=s[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var d=l(a)}for(e&&e(s);c<n.length;c++)o=n[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},s=self["webpackChunktask_manager_vue"]=self["webpackChunktask_manager_vue"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(3300)}));s=a.O(s)})();
//# sourceMappingURL=app.0ef51321.js.map