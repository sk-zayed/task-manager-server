(function(){"use strict";var t={2420:function(t,e,a){var s=a(144),r=a(8345),o=a(8620),n=a(629),i=a(4009),l=a.n(i);s.ZP.use(r.ZP),s.ZP.use(o.ZP),s.ZP.use(n.ZP),s.ZP.use(l());var c=a(8945),d={duration:2e3,BASE_URL:"https://taskmanager-fuon.onrender.com"};const u=async t=>{delete t["cnfrmpass"];const e=await c.Z.post(`${d.BASE_URL}/api/auth/register`,t,{headers:{"Content-Type":"application/json"}});return e.data},m=async t=>{const e=await c.Z.post(`${d.BASE_URL}/api/auth/login`,t,{headers:{"Content-Type":"application/json"}});return e.data.data};var p={signup:u,login:m};const h="id",f="name",g="email",v="token",w="role",b={state:{id:localStorage.getItem(h)||"",name:localStorage.getItem(f)||"",email:localStorage.getItem(g)||"",token:localStorage.getItem(v)||"",role:localStorage.getItem(w)||""},getters:{isAuthenticated(t){return!!t.token},isAdmin(t){return"admin"===t.role},userId(t){return t.id},username(t){return t.name},token(t){return t.token}},mutations:{setId(t,e){t.id=e},setName(t,e){t.name=e},setEmail(t,e){t.email=e},setToken(t,e){t.token=e},setRole(t,e){t.role=e}},actions:{login({commit:t},e){return p.login(e).then((e=>{const{user:a,name:s,email:r,token:o,role:n}=e;return localStorage.setItem(h,a),localStorage.setItem(f,s),localStorage.setItem(g,r),localStorage.setItem(v,o),localStorage.setItem(w,n),t("setId",a),t("setName",s),t("setEmail",r),t("setToken",o),t("setRole",n),s}))},logout({commit:t}){return localStorage.removeItem(h),localStorage.removeItem(f),localStorage.removeItem(g),localStorage.removeItem(v),localStorage.removeItem(w),t("setId",""),t("setName",""),t("setEmail",""),t("setToken",""),t("setRole",""),Promise.resolve()}}};var y=b;const Z={state:{loading:!1,toDoArr:[],doingArr:[],doneArr:[],cardObject:{}},getters:{loading(t){return t.loading},toDoArr(t){return t.toDoArr},doingArr(t){return t.doingArr},doneArr(t){return t.doneArr},cardObject(t){return t.cardObject}},mutations:{setLoading(t){t.loading=!t.loading},setToDoArr(t,e){t.toDoArr=e},setDoingArr(t,e){t.doingArr=e},setDoneArr(t,e){t.doneArr=e},setCardObject(t,e){t.cardObject=e}}};var _=Z;const k=new n.ZP.Store({modules:{auth:y,board:_}});var C=k;c.Z.interceptors.request.use((t=>((t.url.includes("boards")||t.url.includes("calendar")||t.url.includes("teams"))&&(t.headers["Authorization"]=C.getters.token),t)),(t=>Promise.reject(t)));var x=a(998),D=function(){var t=this,e=t._self._c;return e(x.Z,[e("NavbarComponent"),e("router-view")],1)},B=[],S=a(5550),$=a(3423),T=a(4562),A=a(9223),j=a(1267),L=a(4324),P=a(3201),E=a(5808),M=a(4525),I=a(4611),O=a(4813),z=a(8515),q=a(3687),R=a(7808),U=a(6313),N=a(7953),H=function(){var t=this,e=t._self._c;return e("nav",[e(U.Z,{attrs:{dark:""}},[e(S.Z,{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),e(N.qW,{staticClass:"text-uppercase grey--text px-0"},[e("router-link",{staticClass:"d-flex",staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[e("img",{staticClass:"ma-auto pb-3",attrs:{src:a(5e3),width:"60"}}),e("div",{staticClass:"ma-auto"},[e("span",{staticClass:"font-weight-light"},[t._v("Task")]),e("span",{staticClass:"white--text"},[t._v("Manager")])])])],1),e(q.Z),e(N.lj,{staticClass:"hidden-sm-and-down mr-4"},[e(R.Z,{staticClass:"my-3 width",attrs:{"hide-details":"",placeholder:"Search",filled:"",rounded:"",dense:"","single-line":"","append-icon":"mdi-magnify"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.search.apply(null,arguments))}},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1),t.authenticated?e(N.lj,{staticClass:"hidden-sm-and-down",attrs:{to:"/profile"}},[e(T.Z,{staticClass:"font-weight-light",attrs:{text:""}},[t._v(" Welcome "+t._s(t.username)+"!! ")])],1):t._e(),t.authenticated?e(N.lj,{staticClass:"hidden-sm-and-down",on:{click:t.logout}},[e(T.Z,{staticClass:"font-weight-light",attrs:{text:""}},[t._v(" Logout "),e(L.Z,{attrs:{right:""}},[t._v("mdi-export")])],1)],1):t._e(),t.authenticated?t._e():e(N.lj,{staticClass:"hidden-sm-and-down"},[e(T.Z,{staticClass:"font-weight-light",attrs:{text:"",to:"/login"}},[t._v(" Login "),e(L.Z,{attrs:{right:""}},[t._v("mdi-import")])],1)],1),t.authenticated?t._e():e(N.lj,{staticClass:"hidden-sm-and-down"},[e(T.Z,{staticClass:"font-weight-light",attrs:{text:"",to:"/signup"}},[t._v(" SignUp "),e(L.Z,{attrs:{right:""}},[t._v("mdi-account-plus")])],1)],1)],1),e(z.Z,{attrs:{absolute:"",temporary:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(P.Z,{attrs:{column:"","align-center":""}},[e(j.Z,{staticClass:"mt-6"},[e($.Z,{attrs:{size:"100"}},[t.authenticated?e("img",{attrs:{src:a(4005),alt:"Profile picture"}}):e(L.Z,{attrs:{"aria-label":"Account",role:"img",size:"100"}},[t._v(" mdi-account ")])],1)],1),e("p",{staticClass:"subheading white--text mt-2"},[t._v(" "+t._s(t.username||"Welcome to task manager!")+" ")])],1),e(A.Z),e(E.Z,{staticClass:"pt-0"},[t._l(t.links,(function(a){return e(M.Z,{key:a.title,attrs:{to:a.route}},[e(I.Z,[e(L.Z,[t._v(t._s(a.icon))])],1),e(O.V9,{staticClass:"font-weight-light"},[t._v(t._s(a.title)+" ")])],1)})),t.authenticated?e(M.Z,{on:{click:t.logout}},[e(I.Z,[e(L.Z,[t._v("mdi-export")])],1),e(O.V9,{staticClass:"font-weight-light"},[t._v("Logout")])],1):t._e(),t.authenticated?t._e():e(M.Z,{attrs:{to:"/signup"}},[e(I.Z,[e(L.Z,[t._v("mdi-account-plus")])],1),e(O.V9,{staticClass:"font-weight-light"},[t._v("SignUp")])],1),t.authenticated?t._e():e(M.Z,{attrs:{to:"/login"}},[e(I.Z,[e(L.Z,[t._v("mdi-import")])],1),e(O.V9,{staticClass:"font-weight-light"},[t._v("Login")])],1)],2)],1)],1)},W=[];a(7658);const F=t=>new Date(t).toGMTString().substr(0,16),V=t=>{if(t)return t.slice(0,100)},Q=(t,e)=>{s.ZP.$toast.open({message:t,duration:d.duration,type:e})};var Y={formatDate:F,sliceStr:V,showToast:Q},G={data(){return{store:{email:C.getters.email,profile:""},drawer:null,query:"",links:[{route:"/",icon:"mdi-home",title:"Home"},{route:"/boards",icon:"mdi-view-dashboard-variant",title:"Boards"},{route:"/calendar",icon:"mdi-calendar",title:"Calender"},{route:"/teams",icon:"mdi-account-group",title:"Teams"}]}},computed:{authenticated(){return C.getters.isAuthenticated},username(){return C.getters.username}},methods:{search(){console.log(this.query)},logout(){C.dispatch("logout").then((()=>{this.$router.push("/"),Y.showToast("Logout successful.","success")})).catch((t=>{Y.showToast(t.response.data.message,"error")}))}}},J=G,K=a(1001),X=(0,K.Z)(J,H,W,!1,null,"54e17bfd",null),tt=X.exports,et={name:"App",components:{NavbarComponent:tt}},at=et,st=(0,K.Z)(at,D,B,!1,null,null,null),rt=st.exports,ot=a(6475),nt=a(6760),it=a(266),lt=a(9256),ct=a(8271),dt=a(5495),ut=a(1713),mt=function(){var t=this,e=t._self._c;return e("div",[e(ot.Z,{attrs:{cycle:"",interval:"3000","hide-delimiters":"","show-arrows-on-hover":""}},t._l(t.items,(function(t,a){return e(nt.Z,{key:a,attrs:{src:t.src}})})),1),e(lt.Z,[e(ut.Z,[e(it.Z,{attrs:{cols:"12",sm:"6"}},[e(dt.Z,{staticClass:"ma-auto img-size",attrs:{src:"kanban.png"}})],1),e(it.Z,{staticClass:"pa-16 ma-auto",attrs:{cols:"12",sm:"6"}},[e("div",{staticClass:"text-h4 pa-2"},[t._v(" Manage tasks using kanban board ")]),e("div",{staticClass:"text-body-1 pa-2"},[t._v(" Have a plan, organize everything, schedule it and use the kanban tool to track the progress. It helps visualizing work, limit work-in-progress, and maximize efficiency (or flow). Task manger provides a kanban board to track the progress of you plan. A perfect execution of plan leads to successful results. Happy growing!! ")])])],1),e(ut.Z,[e(it.Z,{staticClass:"pa-16 ma-auto",attrs:{cols:"12",sm:"6"}},[e("div",{staticClass:"text-h4 pa-2"},[t._v(" Have a calendar to visulalize ")]),e("div",{staticClass:"text-body-1 pa-2"},[t._v(" Having a plan is good but a perfect execution is must. In order to have a perfect execution one should visualize its on-going and upcoming tasks. Visualizing the progress of tasks helps in further planning and time management. So visualize your tasks with task manager and achieve whatever you want. ")])]),e(it.Z,{attrs:{cols:"12",sm:"6"}},[e(dt.Z,{staticClass:"ma-auto img-size",attrs:{src:"calendar.png"}})],1)],1),e(ut.Z,[e(it.Z,{attrs:{cols:"12",sm:"6"}},[e(dt.Z,{staticClass:"ma-auto img-size",attrs:{src:"team.png"}})],1),e(it.Z,{staticClass:"pa-16 ma-auto",attrs:{cols:"12",sm:"6"}},[e("div",{staticClass:"text-h4 pa-2"},[t._v(" Team up with your driven fellows ")]),e("div",{staticClass:"text-body-1 pa-2"},[t._v(" Teamwork is the collaborative effort of a group to achieve a common goal or to complete a task in the most effective and efficient way. Task manager helps you track the overall progress of tasks contributed by each team member. Let the teamwork show the world what you are! ")])])],1)],1),e(ct.Z,{attrs:{color:"primary lighten-1",padless:""}},[e(ut.Z,{attrs:{justify:"center","no-gutters":""}},[e(T.Z,{staticClass:"my-2",attrs:{color:"white",text:""}},[t._v(" Home ")]),e(T.Z,{staticClass:"my-2",attrs:{color:"white",text:"",rounded:""}},[t._v(" About ")]),e(T.Z,{staticClass:"my-2",attrs:{color:"white",text:""}},[t._v(" Contact ")]),e(it.Z,{staticClass:"lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[t._v(" Made with 🧡 by "),e("strong",[t._v("Zayed")])])],1)],1)],1)},pt=[],ht={name:"HomeComponent",data(){return{items:[{src:"c-1.jpg"},{src:"c-2.jpg"},{src:"c-3.jpg"}]}}},ft=ht,gt=(0,K.Z)(ft,mt,pt,!1,null,"8c806308",null),vt=gt.exports,wt=a(5125),bt=function(){var t=this,e=t._self._c;return e(lt.Z,[e(wt.Z,{ref:"loginForm",staticClass:"pt-4"},[e(R.Z,{attrs:{rules:[t.rules.required,t.rules.email],label:"Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),e(R.Z,{attrs:{"append-icon":t.show?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.password],type:t.show?"text":"password",label:"Password"},on:{"click:append":function(e){t.show=!t.show},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),e(T.Z,{attrs:{dark:""},on:{click:t.login}},[t._v("Login")])],1),e("div",{staticClass:"pt-8"},[e("div",{staticClass:"text--secondary pb-3"},[t._v("Tesing credentials:")]),e("div",{staticClass:"text--secondary"},[t._v("email: zayed@example.com")]),e("div",{staticClass:"text--secondary"},[t._v("password: zayed@123")])])],1)},yt=[],Zt={name:"LoginPage",data(){return{show:!1,processing:!1,rules:{required:t=>!!t||"Required.",email:t=>{const e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."},password:t=>t.length>=8||"Min 8 characters are required"},form:{email:"",password:""}}},methods:{login(){this.$refs.loginForm.validate()&&C.dispatch("login",this.form).then((t=>{Y.showToast(`Welcome ${t}!!`,"success"),this.$router.push({name:"home"})})).catch((t=>{Y.showToast(t.response.data.message,"error"),this.form.email="",this.form.password=""}))}}},_t=Zt,kt=(0,K.Z)(_t,bt,yt,!1,null,null,null),Ct=kt.exports,xt=function(){var t=this,e=t._self._c;return e(lt.Z,[e(wt.Z,{ref:"form",staticClass:"pt-4"},[e(R.Z,{attrs:{rules:[t.rules.required],label:"Name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),e(R.Z,{attrs:{rules:[t.rules.required,t.rules.email],label:"Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),e(R.Z,{attrs:{"append-icon":t.show?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.password],type:t.show?"text":"password",label:"Password"},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),e(R.Z,{attrs:{"append-icon":t.show?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.cnfrmpass],type:t.show?"text":"password",label:"Confirm password"},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.form.cnfrmpass,callback:function(e){t.$set(t.form,"cnfrmpass",e)},expression:"form.cnfrmpass"}}),e(T.Z,{attrs:{dark:""},on:{click:t.signUp}},[t._v("SignUp")])],1)],1)},Dt=[],Bt={name:"SignupPage",data(){return{show:!1,processing:!1,rules:{required:t=>!!t||"Required.",email:t=>{const e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."},password:t=>t.length>=8||"Min 8 characters are required",cnfrmpass:t=>this.cnfrmpass(t)||"Password did not match"},form:{name:"",email:"",password:"",cnfrmpass:""}}},methods:{cnfrmpass(t){return this.form.password===t},async signUp(){try{if(this.$refs.form.validate()){const t=await p.signup(this.form);"success"===t.status?(Y.showToast("Registration successful. Please login.","success"),this.$router.push({name:"login"})):"error"===t.status&&Y.showToast(t.message,"error")}}catch(t){Y.showToast(t.response.data.message,"error")}}}},St=Bt,$t=(0,K.Z)(St,xt,Dt,!1,null,null,null),Tt=$t.exports,At=function(){var t=this,e=t._self._c;return e(lt.Z,[e("ShowLoading"),e("h1",[t._v(" "+t._s("boards"===t.$route.name?"Your Boards":"Teams' Boards")+" ")]),e(A.Z,{staticClass:"my-3"}),0===t.boards.length?e(lt.Z,{attrs:{"fill-height":""}},[e(P.Z,{staticClass:"text-h5 font-weight-medium",attrs:{"align-center":"","justify-center":""}},[t._v(" No board found :( ")])],1):t._e(),e(ut.Z,t._l(t.boards,(function(a){return e(it.Z,{key:a._id,staticClass:"d-flex",attrs:{sm:"6",md:"4",lg:"3"}},[e("BoardCard",{attrs:{board:a},on:{reload:t.fetchBoards}})],1)})),1),e("CreateBoard",{attrs:{dialog:t.createDialog},on:{reload:t.fetchBoards,close:function(e){t.createDialog=!1}}}),e(T.Z,{staticClass:"ma-16",attrs:{fab:"",bottom:"",right:"",fixed:"",large:"",dark:""},on:{click:function(e){t.createDialog=!0}}},[e(L.Z,[t._v("mdi-plus")])],1)],1)},jt=[],Lt=a(4145),Pt=a(4886),Et=a(4061),Mt=a(9592),It=function(){var t=this,e=t._self._c;return e(Et.Z,{attrs:{persistent:"",width:"500"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[e(Lt.Z,{attrs:{color:"primary",dark:""}},[e(Pt.ZB,{staticClass:"py-2 px-3"},[t._v(" Please stand by "),e(Mt.Z,{staticClass:"my-2",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)},Ot=[],zt={name:"ShowLoading",computed:{loading(){return this.$store.getters.loading}}},qt=zt,Rt=(0,K.Z)(qt,It,Ot,!1,null,null,null),Ut=Rt.exports,Nt=function(){var t=this,e=t._self._c;return e(Lt.Z,{staticClass:"px-auto d-flex flex-column"},[e("div",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.openBoard(t.board._id)}}},[e(dt.Z,{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}}),e(Pt.EB,[t._v(t._s(t.board.title))]),"teams"===t.$route.name?e(Pt.Qq,{staticClass:"py-1"},[t._v(" Created by: "+t._s(t.board.owner.name)+" ")]):t._e(),e(Pt.Qq,{staticClass:"py-1"},[t._v(" Due: "+t._s(t.utils.formatDate(t.board.dueDate)||"Not set!")+" ")])],1),e(Pt.ZB,{staticClass:"text--primary"},[t._v(" "+t._s(t.utils.sliceStr(t.board.description)||"No description :(")+" "),t.board.description&&t.board.description.length>100?e("div",{staticClass:"read-more",on:{click:function(e){return t.openBoard(t.board._id)}}},[t._v(" read more ")]):t._e()]),e(q.Z),e(Pt.ZB,[e(ut.Z,{staticClass:"px-3 pb-2",attrs:{justify:"space-between"}},[e("div",[e(L.Z,[t._v("mdi-account-multiple")]),t._v(" "+t._s(t.board.members.length)+" ")],1),e("div",[e(L.Z,{attrs:{color:t.board.likedBy.includes(t.userId)?"red":"default"},on:{click:function(e){return t.likeBoard(t.board._id)}}},[t._v("mdi-heart")])],1),e("div",[e(L.Z,{on:{click:function(e){return t.deleteBoard(t.board._id)}}},[t._v("mdi-delete")])],1),e("div",[e(L.Z,[t._v("mdi-check")]),t._v(" "+t._s(t.board.completed)+"/"+t._s(t.board.cards.length)+" ")],1)]),e(Mt.Z,{staticClass:"my-4",attrs:{color:t.board.progress<=30?"red":t.board.progress>30&&t.board.progress<=70?"yellow":"green",height:"15",rounded:""},scopedSlots:t._u([{key:"default",fn:function({value:a}){return[e("strong",[t._v(t._s(Math.ceil(a))+"%")])]}}]),model:{value:t.progress,callback:function(e){t.progress=e},expression:"progress"}})],1)],1)},Ht=[];const Wt=async t=>{await c.Z.post(`${d.BASE_URL}/api/boards/createboard`,t,{headers:{"Content-Type":"application/json"}})},Ft=async()=>{const t=await c.Z.get(`${d.BASE_URL}/api/boards/getmyboards`,{headers:{"Content-Type":"Application/json"}});return t.data},Vt=async()=>{const t=await c.Z.get(`${d.BASE_URL}/api/boards/getteamsboards`);return t.data},Qt=async t=>{await c.Z.patch(`${d.BASE_URL}/api/boards/likeboard/${t}`)},Yt=async t=>{const e=await c.Z.get(`${d.BASE_URL}/api/boards/${t}`,{headers:{"Content-Type":"Application/json"}});return e.data},Gt=async t=>{await c.Z.post(`${d.BASE_URL}/api/boards/createcard`,t,{headers:{"Content-Type":"Application/json"}})},Jt=async t=>{const e=await c.Z.patch(`${d.BASE_URL}/api/boards/updatecard`,t,{headers:{"Content-Type":"Application/json"}});return e.data},Kt=async t=>{await c.Z["delete"](`${d.BASE_URL}/api/boards/deleteboard/${t}`)},Xt=async t=>{await c.Z["delete"](`${d.BASE_URL}/api/boards/deletecard/${t}`)},te=async t=>{const e=await c.Z.post(`${d.BASE_URL}/api/boards/addmember`,t,{headers:{"Content-Type":"Application/json"}});return e.data},ee=async t=>{const e=await c.Z.patch(`${d.BASE_URL}/api/boards/removemember`,t);return e.data};var ae={createBoard:Wt,likeBoard:Qt,fetchMyBoards:Ft,fetchTeamsBoards:Vt,fetchBoardById:Yt,createCard:Gt,updateCard:Jt,deleteBoard:Kt,deleteCard:Xt,addMember:te,removeMember:ee},se={name:"BoardCard",props:{board:Object},data(){return{utils:Y}},computed:{progress(){return this.board.progress},userId(){return C.getters.userId}},methods:{async likeBoard(t){try{C.commit("setLoading"),await ae.likeBoard(t),this.$emit("reload")}catch(e){Y.showToast(e.response.data.message,"error")}},openBoard(t){C.commit("setLoading"),this.$router.push({name:"board-details",params:{id:t}}),C.commit("setLoading")},async deleteBoard(t){try{C.commit("setLoading"),await ae.deleteBoard(t),this.$emit("reload"),Y.showToast("Filling trash ;(","error")}catch(e){Y.showToast(e.response.data.message,"error")}}}},re=se,oe=(0,K.Z)(re,Nt,Ht,!1,null,null,null),ne=oe.exports,ie=a(2318),le=a(4528),ce=a(2648),de=function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(Et.Z,{attrs:{width:"800"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e(Lt.Z,[e(wt.Z,{ref:"newBoardData"},[e(Pt.EB,{staticClass:"text-h5 grey lighten-2"},[t._v("Create board")]),e(Pt.ZB,{staticClass:"pt-6"},[e(R.Z,{attrs:{label:"Title",solo:"","prepend-icon":"mdi-file-chart-check-outline",rules:[t.rules.required]},model:{value:t.newBoardData.title,callback:function(e){t.$set(t.newBoardData,"title",e)},expression:"newBoardData.title"}}),e(ce.Z,{attrs:{solo:"","auto-grow":"",rows:"1",counter:"",clearable:"","clear-icon":"mdi-close-circle",label:"Description","prepend-icon":"mdi-text"},model:{value:t.newBoardData.description,callback:function(e){t.$set(t.newBoardData,"description",e)},expression:"newBoardData.description"}}),e(le.Z,{ref:"showDatePicker",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(R.Z,t._g(t._b({attrs:{solo:"",label:"Due date","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.formatDate,callback:function(e){t.formatDate=e},expression:"formatDate"}},"v-text-field",s,!1),a))]}}]),model:{value:t.showDatePicker,callback:function(e){t.showDatePicker=e},expression:"showDatePicker"}},[e(ie.Z,{attrs:{"no-title":""},on:{input:function(e){t.showDatePicker=!1}},model:{value:t.newBoardData.dueDate,callback:function(e){t.$set(t.newBoardData,"dueDate",e)},expression:"newBoardData.dueDate"}})],1)],1),e(Pt.h7,[e(q.Z),e(T.Z,{attrs:{text:""},on:{click:function(e){return t.$emit("close")}}},[t._v("Close")]),e(T.Z,{attrs:{text:""},on:{click:t.createBoard}},[t._v("Create")])],1)],1)],1)],1)],1)},ue=[],me={name:"CreateBoard",props:{dialog:Boolean},computed:{formatDate(){return Y.formatDate(this.newBoardData.dueDate)},show(){return this.dialog}},data(){return{rules:{required:t=>!!t||"Required."},showDatePicker:!1,dateMenu:!1,newBoardData:this.resetBoardData(),boards:[],utils:Y}},methods:{resetBoardData(){return{title:null,description:null,dueDate:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),image:null}},async createBoard(){try{this.$refs.newBoardData.validate()&&(this.$emit("close"),C.commit("setLoading"),await ae.createBoard(this.newBoardData),this.$emit("reload"),this.newBoardData=this.resetBoardData(),Y.showToast("Woahh!!, a board was created","success"))}catch(t){Y.showToast(t.response.data.message,"error")}}}},pe=me,he=(0,K.Z)(pe,de,ue,!1,null,null,null),fe=he.exports,ge={name:"UserBoards",components:{ShowLoading:Ut,BoardCard:ne,CreateBoard:fe},data(){return{createDialog:!1,boards:[],utils:Y}},methods:{async fetchBoards(){try{if("boards"===this.$route.name){const t=await ae.fetchMyBoards();this.boards=t.data}if("teams"===this.$route.name){const t=await ae.fetchTeamsBoards();this.boards=t.data}}catch(t){Y.showToast(t.response.data.message,"error")}finally{C.commit("setLoading")}}},watch:{$route:{immediate:!0,handler(){C.commit("setLoading"),this.fetchBoards()}}}},ve=ge,we=(0,K.Z)(ve,At,jt,!1,null,null,null),be=we.exports,ye=a(5715),Ze=a(343),_e=a(7423),ke=function(){var t=this,e=t._self._c;return e(lt.Z,[e("ShowLoading"),e(ut.Z,{attrs:{tile:"",height:"54"}},[e(T.Z,{staticClass:"ma-auto",attrs:{icon:""},on:{click:function(e){return t.$refs.calendar.prev()}}},[e(L.Z,[t._v("mdi-chevron-left")])],1),e(it.Z,{attrs:{cols:"3"}},[e(Ze.Z,{staticClass:"ma-2",attrs:{items:t.types,dense:"",outlined:"","hide-details":"",label:"type"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),e(it.Z,{attrs:{cols:"3"}},[e(Ze.Z,{staticClass:"ma-2",attrs:{items:t.modes,dense:"",outlined:"",width:"500","hide-details":"",label:"event-overlap-mode"},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}})],1),e(it.Z,{attrs:{cols:"3"}},[e(Ze.Z,{staticClass:"ma-2",attrs:{items:t.weekdays,dense:"",outlined:"","hide-details":"",label:"weekdays"},model:{value:t.weekday,callback:function(e){t.weekday=e},expression:"weekday"}})],1),e(T.Z,{staticClass:"ma-auto",attrs:{icon:""},on:{click:function(e){return t.$refs.calendar.next()}}},[e(L.Z,[t._v("mdi-chevron-right")])],1)],1),e(_e.Z,{attrs:{height:"600"}},[e(ye.Z,{ref:"calendar",attrs:{weekdays:t.weekday,type:t.type,events:t.events,"event-overlap-mode":t.mode,"event-overlap-threshold":30,"event-color":"black"},on:{"click:event":t.pushBoards},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1)},Ce=[];const xe=async()=>{try{const t=await c.Z.get(`${d.BASE_URL}/api/calendar/getevents`);return t.data}catch(t){return t}};var De={fetchEvents:xe},Be={name:"CalendarComponent",components:{ShowLoading:Ut},data:()=>({type:"month",types:["month","week","day","4day"],mode:"stack",modes:["stack","column"],weekday:[0,1,2,3,4,5,6],weekdays:[{text:"Sun - Sat",value:[0,1,2,3,4,5,6]},{text:"Mon - Sun",value:[1,2,3,4,5,6,0]},{text:"Mon - Fri",value:[1,2,3,4,5]},{text:"Mon, Wed, Fri",value:[1,3,5]}],value:"",events:[]}),methods:{pushBoards(t){this.$router.push({name:"board-details",params:{id:t.event.boardId}})}},async created(){try{if(C.getters.isAuthenticated){C.commit("setLoading");const t=await De.fetchEvents();this.events=t.data,C.commit("setLoading")}}catch(t){Y.showToast(t.response.data.message,"error")}}},Se=Be,$e=(0,K.Z)(Se,ke,Ce,!1,null,null,null),Te=$e.exports,Ae=function(){var t=this,e=t._self._c;return e(lt.Z,{staticClass:"pb-0"},[e("ShowLoading"),e(ut.Z,[e(it.Z,{staticClass:"ma-auto",attrs:{cols:"7"}},[e("div",{staticClass:"text-h5",attrs:{text:""}},[t._v(t._s(t.response.data.title))])]),e(it.Z,{attrs:{align:"end"}},[e(L.Z,{staticClass:"pr-3",on:{click:function(e){t.infoDialog=!0}}},[t._v("mdi-information")]),e("BoardMembers",{attrs:{response:t.response}})],1)],1),e(A.Z),e("BoardInfo",{attrs:{dialog:t.infoDialog,boardData:t.response.data},on:{close:function(e){t.infoDialog=!1}}}),e("div",{staticClass:"overflow-x-auto d-flex",staticStyle:{"background-color":"none"}},t._l(t.columns,(function(a,s){return e("div",{key:s,staticClass:"pa-6",staticStyle:{"min-width":"375px",display:"inline"}},[e("BoardColumn",{attrs:{column:a},on:{openCard:function(e){t.cardDialog=!0},reload:t.fetchCards}})],1)})),0),e("CardDialog",{attrs:{dialog:t.cardDialog},on:{reload:t.fetchCards,close:function(e){t.cardDialog=!1}}})],1)},je=[],Le=a(3305),Pe=function(){var t=this,e=t._self._c;return e(Et.Z,{attrs:{width:"600"},on:{"click:outside":function(e){return t.$emit("close")}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e(Lt.Z,{staticClass:"pa-5"},[e("div",{staticClass:"text-h5 pa-1"},[t._v(" "+t._s(t.boardData.title)+" ")]),e("div",{staticClass:"text--secondary pa-1"},[t._v(" Created by: "+t._s(t.boardData.owner.name)+" ")]),e("div",{staticClass:"text--secondary pa-1"},[t._v(" Due: "+t._s(t.utils.formatDate(t.boardData.dueDate)||"Not set!")+" ")]),e("div",{staticClass:"pa-1"},[t._v(" "+t._s(t.boardData.description||"No description!")+" ")]),e("div",[e(ut.Z,{staticClass:"ma-0 pt-2"},[e(it.Z,{staticClass:"pa-0"},[e("div",{staticClass:"text--secondary pa-1"},[t._v("Completed Cards:")]),e("div",{staticClass:"py-3 pl-1",staticStyle:{"font-size":"35px"}},[t._v(" "+t._s(t.boardData.completed)+"/"+t._s(t.boardData.cards?t.boardData.cards.length:0)+" ")])]),e(it.Z,{staticClass:"pa-0"},[e("div",{staticClass:"text--secondary pa-1"},[t._v("Progress:")]),e("div",{staticClass:"py-1 pl-3"},[e(Le.Z,{attrs:{rotate:360,size:75,width:10,value:t.boardData.progress,caption:"",color:t.boardData.progress<=30?"red":t.boardData.progress>30&&t.boardData.progress<=70?"yellow":"green"}},[e("div",{staticStyle:{"font-size":"0.7em"}},[t._v(" "+t._s(Math.ceil(t.boardData.progress))+"% ")])])],1)])],1)],1)])],1)},Ee=[],Me={name:"BoardInfo",props:{dialog:Boolean,boardData:Object},data(){return{utils:Y}},computed:{show(){return this.dialog}}},Ie=Me,Oe=(0,K.Z)(Ie,Pe,Ee,!1,null,null,null),ze=Oe.exports,qe=a(6900),Re=function(){var t=this,e=t._self._c;return e(le.Z,{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e("div",t._g(t._b({staticClass:"d-inline"},"div",s,!1),a),[e(L.Z,{attrs:{size:"40",color:"primary"}},[t._v("mdi-account-multiple")]),e(L.Z,{attrs:{color:"primary"}},[t._v("mdi-chevron-down")])],1)]}}])},[e(Lt.Z,[e(Pt.EB,[t._v("Members ("+t._s(t.members?t.members.length:0)+")")]),e("div",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"50vh"}},[e(E.Z,{staticClass:"text-center"},[t.loading?e(Le.Z,{staticClass:"ma-3",attrs:{size:50,color:"primary",indeterminate:""}}):t._l(t.members,(function(s){return e(M.Z,{key:s._id},[e(qe.Z,{staticClass:"ma-0",attrs:{size:"40"}},[e("img",{attrs:{src:a(4005)}})]),e(O.km,{staticClass:"px-2"},[t._v(t._s(s.email))]),t.isOwner?e(L.Z,{on:{click:function(e){return t.removeMember(s._id)}}},[t._v("mdi-close")]):t._e()],1)}))],2)],1),e(A.Z),e(Pt.h7,[t.isOwner?e(wt.Z,{ref:"addMember",staticClass:"d-flex"},[e(R.Z,{staticClass:"pr-2",staticStyle:{width:"11em"},attrs:{label:"Member email",solo:"","prepend-inner-icon":"mdi-account",dense:"","hide-details":"",rules:[t.rules.required,t.rules.email]},model:{value:t.memberEmail,callback:function(e){t.memberEmail=e},expression:"memberEmail"}}),e(T.Z,{attrs:{dark:"",loading:t.adding},on:{click:t.addMember}},[t._v("Add")])],1):e(T.Z,{staticStyle:{width:"100%"},attrs:{dark:""},on:{click:function(e){return t.removeMember(null,!0)}}},[t._v("Leave Board")])],1)],1)],1)},Ue=[],Ne={name:"BoardMembers",props:{response:Object},data(){return{rules:{required:t=>!!t||"Required.",email:t=>{const e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."}},members:[],adding:!1,loading:!1,memberEmail:null,isOwner:null}},methods:{async fetchMembers(){try{const t=await ae.fetchBoardById(this.$route.params.id);if(!t.data)return;this.members=t.data.members}catch(t){Y.showToast(t.response.data.message,"error")}},async addMember(){try{this.$refs.addMember.validate()&&(this.loading=!0,this.adding=!0,await ae.addMember({boardId:this.$route.params.id,memberEmail:this.memberEmail}),this.fetchMembers(),Y.showToast("Member added successfully","success"))}catch(t){Y.showToast(t.response.data.message,"error")}finally{this.memberEmail=null,this.adding=!1,this.loading=!1}},async removeMember(t,e=!1){try{if(this.loading=!0,await ae.removeMember({boardId:this.$route.params.id,userId:t}),e)return this.loading=!1,this.$router.push({name:"teams"});this.fetchMembers(),Y.showToast("Member was removed!","success")}catch(a){Y.showToast(a.response.data.message,"error")}finally{this.loading=!1}}},created(){this.loading=!0,this.members=this.response.data.members,this.isOwner=this.response.isOwner,this.loading=!1}},He=Ne,We=(0,K.Z)(He,Re,Ue,!1,null,null,null),Fe=We.exports,Ve=function(){var t=this,e=t._self._c;return e(Lt.Z,[e(Pt.EB,{staticClass:"pa-2 pl-4"},[t._v(t._s(t.column.name))]),e("div",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"67vh"}},t._l(t.column.cards,(function(a){return e(Lt.Z,{key:a._id,staticClass:"ma-3",attrs:{"max-width":"400"}},[e(dt.Z,{staticClass:"white--text align-end",staticStyle:{cursor:"pointer"},attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"},on:{click:function(e){return t.viewCard(a._id,a.lane)}}}),e(Pt.EB,[t._v(t._s(a.title))]),e(Pt.Qq,{staticClass:"pt-1"},[t._v(" Due: "+t._s(t.utils.formatDate(a.dueDate)||"Not set!")+" ")]),e(Pt.ZB,{staticClass:"text--primary"},[e(ut.Z,{staticClass:"px-3 py-2",attrs:{justify:"space-between"}},[e("div",[e(L.Z,[t._v("mdi-check")]),t._v(" "+t._s(a.completed)+"/"+t._s(a.tasks.length)+" ")],1),e("div",[e(L.Z,{on:{click:function(e){return t.deleteCard(a._id)}}},[t._v("mdi-delete")])],1),e(Le.Z,{attrs:{rotate:360,size:25,width:2,value:a.progress,caption:"",color:a.progress<=30?"red":a.progress>30&&a.progress<=70?"yellow":"green"}},[e("div",{staticStyle:{"font-size":"0.7em"}},[t._v(" "+t._s(Math.ceil(a.progress))+"% ")])])],1)],1)],1)})),1),t.column.addCard?e(Pt.h7,[e(T.Z,{attrs:{block:"",dark:""},on:{click:t.createCard}},[t._v("Create card")])],1):t._e()],1)},Qe=[],Ye={name:"BoardColumn",props:{column:Object},data(){return{utils:Y}},methods:{createCard(){const t={title:"New card",description:null,priority:null,dueDate:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),tasks:[],image:null};C.commit("setCardObject",t),this.$emit("openCard")},viewCard(t,e){if("ToDo"===e){const e=C.getters.toDoArr.filter((e=>e._id===t))[0];C.commit("setCardObject",e)}else if("Doing"===e){const e=C.getters.doingArr.filter((e=>e._id===t))[0];C.commit("setCardObject",e)}else if("Done"===e){const e=C.getters.doneArr.filter((e=>e._id===t))[0];C.commit("setCardObject",e)}this.$emit("openCard")},async deleteCard(t){try{C.commit("setLoading"),await ae.deleteCard(t),this.$emit("reload"),Y.showToast("Added to trash!","error")}catch(e){Y.showToast(e.response.data.message,"error")}}}},Ge=Ye,Je=(0,K.Z)(Ge,Ve,Qe,!1,null,null,null),Ke=Je.exports,Xe=a(120),ta=a(7394),ea=a(5187),aa=function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(Et.Z,{attrs:{width:"800"},on:{"click:outside":function(e){return t.$emit("close")}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e(Lt.Z,[e(wt.Z,{ref:"cardData"},[e(Pt.EB,{staticClass:"text-h5 grey lighten-2"},[t._v("Card details")]),e(Pt.ZB,{staticClass:"pt-6"},[e(R.Z,{attrs:{label:"Title",solo:"","prepend-icon":"mdi-folder",rules:[t.rules.required]},model:{value:t.cardData.title,callback:function(e){t.$set(t.cardData,"title",e)},expression:"cardData.title"}}),e(ce.Z,{attrs:{solo:"","auto-grow":"",rows:"1",counter:"",clearable:"","clear-icon":"mdi-close-circle",label:"Description","prepend-icon":"mdi-text"},model:{value:t.cardData.description,callback:function(e){t.$set(t.cardData,"description",e)},expression:"cardData.description"}}),e(Ze.Z,{attrs:{solo:"",items:t.items,label:"Priority","prepend-icon":"mdi-label"},model:{value:t.cardData.priority,callback:function(e){t.$set(t.cardData,"priority",e)},expression:"cardData.priority"}}),e(le.Z,{ref:"showDatePicker",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(R.Z,t._g(t._b({attrs:{solo:"",label:"Due date","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.formatDate,callback:function(e){t.formatDate=e},expression:"formatDate"}},"v-text-field",s,!1),a))]}}]),model:{value:t.showDatePicker,callback:function(e){t.showDatePicker=e},expression:"showDatePicker"}},[e(ie.Z,{attrs:{"no-title":""},on:{input:function(e){t.showDatePicker=!1}},model:{value:t.cardData.dueDate,callback:function(e){t.$set(t.cardData,"dueDate",e)},expression:"cardData.dueDate"}})],1),e(R.Z,{attrs:{label:"What are you working on?",solo:"","prepend-icon":"mdi-order-bool-ascending-variant"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask.apply(null,arguments)}},scopedSlots:t._u([{key:"append",fn:function(){return[e(ta.Z5,[t.newTask?e(L.Z,{on:{click:t.addTask}},[t._v(" mdi-plus-circle ")]):t._e()],1)]},proxy:!0}]),model:{value:t.newTask,callback:function(e){t.newTask=e},expression:"newTask"}}),t.cardData.tasks?e(Lt.Z,{staticClass:"ml-8"},[e(Mt.Z,{attrs:{value:t.progress}}),e(ta.cu,{staticClass:"py-0",attrs:{group:""}},[t._l(t.cardData.tasks,(function(a,s){return e(M.Z,{key:s},[e(ea.Z,[e(Xe.Z,{attrs:{color:a.done?"grey":"primary"},scopedSlots:t._u([{key:"label",fn:function(){return[e("div",{staticClass:"ml-4",class:a.done?"grey--text":"primary--text",domProps:{textContent:t._s(a.title)}})]},proxy:!0}],null,!0),model:{value:a.done,callback:function(e){t.$set(a,"done",e)},expression:"task.done"}})],1),e(q.Z),e(ta.vQ,[a.done?e(L.Z,{attrs:{color:"success"}},[t._v(" mdi-check ")]):t._e()],1)],1)}))],2)],1):t._e()],1),e(Pt.h7,[e(q.Z),e(T.Z,{attrs:{text:""},on:{click:function(e){return t.$emit("close")}}},[t._v("Close")]),e(T.Z,{attrs:{text:""},on:{click:t.saveCard}},[t._v("Commit")])],1)],1)],1)],1)],1)},sa=[],ra={name:"CardDialog",props:{dialog:Boolean},data(){return{showDatePicker:!1,items:["High","Medium","Low"],dateMenu:!1,newTask:null,rules:{required:t=>!!t||"Required."}}},computed:{show(){return this.dialog},cardData(){return C.getters.cardObject},formatDate(){return Y.formatDate(this.cardData.dueDate)},progress(){if(this.cardData.tasks.length>0){const t=this.cardData.tasks.filter((t=>!0===t.done)).length;return t/this.cardData.tasks.length*100}return 0}},methods:{async saveCard(){try{if(this.$refs.cardData.validate())if(this.$emit("close"),this.cardData._id)C.commit("setLoading"),await ae.updateCard(this.cardData),this.$emit("reload"),Y.showToast("Updation triggered!","success");else{const t={...this.cardData,board:this.$route.params.id};C.commit("setLoading"),await ae.createCard(t),this.$emit("reload"),Y.showToast("Seems like you have a plan ;)","success")}}catch(t){Y.showToast(t.response.data.message,"error")}},addTask(){this.newTask&&(this.cardData.tasks.push({done:!1,title:this.newTask}),this.newTask=null)}}},oa=ra,na=(0,K.Z)(oa,aa,sa,!1,null,null,null),ia=na.exports,la={name:"CreateBoard",components:{ShowLoading:Ut,BoardInfo:ze,BoardMembers:Fe,BoardColumn:Ke,CardDialog:ia},data(){return{response:{},columns:[{name:"ToDo",cards:[],addCard:!0},{name:"Doing",cards:[]},{name:"Done",cards:[]}],infoDialog:!1,cardDialog:!1}},methods:{async fetchCards(){try{const t=await ae.fetchBoardById(this.$route.params.id);if(!t.data)return this.$router.push({name:"page-not-found"});this.response=t;const e=[],a=[],s=[];t.data.cards.forEach((t=>{"ToDo"===t.lane?e.push(t):"Doing"===t.lane?a.push(t):"Done"===t.lane&&s.push(t),this.columns[0].cards=e,this.columns[1].cards=a,this.columns[2].cards=s})),C.commit("setLoading"),C.commit("setToDoArr",e),C.commit("setDoingArr",a),C.commit("setDoneArr",s)}catch(t){this.$router.push({name:"page-not-found"})}}},created(){C.commit("setLoading"),this.fetchCards()}},ca=la,da=(0,K.Z)(ca,Ae,je,!1,null,null,null),ua=da.exports,ma=function(){var t=this,e=t._self._c;return e("img",{staticClass:"img-size",attrs:{src:a(6825)}})},pa=[],ha={},fa=(0,K.Z)(ha,ma,pa,!1,null,null,null),ga=fa.exports;const va={authorize:["admin","general"]},wa=new r.ZP({mode:"history",routes:[{name:"home",path:"/",component:vt},{name:"signup",path:"/signup",component:Tt},{name:"login",path:"/login",component:Ct},{name:"boards",path:"/boards",component:be,meta:va},{name:"board-details",path:"/board/:id",props:!0,component:ua,meta:va},{name:"calendar",path:"/calendar",component:Te},{name:"teams",path:"/teams",component:be,meta:va},{name:"page-not-found",path:"*",component:ga}]});wa.beforeEach(((t,e,a)=>{const s=t.meta.authorize;return s&&!C.getters.isAuthenticated?(Y.showToast("Please login first.","error"),a({name:"login"})):s&&!s.includes(C.state.auth.role)?(Y.showToast("You do not have sufficient access to this page.","error"),a({path:"/"})):void a()}));var ba=wa,ya=a(1705);s.ZP.use(ya.Z);var Za=new ya.Z({theme:{themes:{light:{primary:"#000"}}}});s.ZP.config.productionTip=!1,new s.ZP({vuetify:Za,router:ba,store:C,render:t=>t(rt)}).$mount("#app")},6825:function(t,e,a){t.exports=a.p+"img/page-not-found.98ae77ee.png"},5e3:function(t,e,a){t.exports=a.p+"img/title.33062876.png"},4005:function(t,e,a){t.exports=a.p+"img/user.df1d3409.png"}},e={};function a(s){var r=e[s];if(void 0!==r)return r.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,s,r,o){if(!s){var n=1/0;for(d=0;d<t.length;d++){s=t[d][0],r=t[d][1],o=t[d][2];for(var i=!0,l=0;l<s.length;l++)(!1&o||n>=o)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(i=!1,o<n&&(n=o));if(i){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[s,r,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,o,n=s[0],i=s[1],l=s[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var d=l(a)}for(e&&e(s);c<n.length;c++)o=n[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},s=self["webpackChunktask_manager_vue"]=self["webpackChunktask_manager_vue"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(2420)}));s=a.O(s)})();
//# sourceMappingURL=app.fcef638b.js.map