(self.webpackChunkgotec_pos=self.webpackChunkgotec_pos||[]).push([[241],{9241:function(e,t,n){"use strict";n.r(t),n.d(t,{ExpensesModule:function(){return H}});var o=n(61116),i=n(25548),s=n(42590),r=n(76675),a=n(64762),l=function(){return function(){this.documents=[]}}(),d=n(83361),u=n(42744),p=n(529),c=n(93820),m=n(93957),g=n(4244),h=n(66425),f=n(40068),Z=n(36212),v=n(57750),x=n(47988),A=n(11462),q=n(40920),T=n(6711),y=n(47671),b=n(82589),C=n(99624),_=n(1509),M=n(63978),w=["modalContent"],D=function(e,t){return{"fa-plus":e,"fa-pencil":t}},L=function(e){return{"is-invalid":e}};function J(e,t){if(1&e){var n=c.EpF();c.TgZ(0,"div",1),c.TgZ(1,"h5",2),c._UZ(2,"i",3),c._uU(3),c.ALo(4,"i18n"),c.qZA(),c.TgZ(5,"button",4),c.NdJ("click",function(){return t.$implicit.dismiss("Cross click")}),c.TgZ(6,"span",5),c._uU(7,"\xd7"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(8,"form",6,7),c.NdJ("ngSubmit",function(){c.CHM(n);var e=c.MAs(9),t=c.oxw();return e.valid&&t.save(e)}),c.TgZ(10,"div",8),c.TgZ(11,"div",9),c.TgZ(12,"div",10),c.TgZ(13,"label",11),c.TgZ(14,"span"),c._uU(15,"*"),c.qZA(),c._uU(16),c.ALo(17,"i18n"),c.qZA(),c.TgZ(18,"input",12,13),c.NdJ("ngModelChange",function(e){return c.CHM(n),c.oxw().model.amount=e}),c.qZA(),c.TgZ(20,"div",14),c._uU(21," This field is required "),c.qZA(),c.qZA(),c.qZA(),c.TgZ(22,"div",9),c.TgZ(23,"div",10),c.TgZ(24,"label",15),c.TgZ(25,"span"),c._uU(26,"*"),c.qZA(),c._uU(27),c.ALo(28,"i18n"),c.qZA(),c.TgZ(29,"input",16,17),c.NdJ("ngModelChange",function(e){return c.CHM(n),c.oxw().model.type=e}),c.qZA(),c.TgZ(31,"div",14),c._uU(32," This field is required "),c.qZA(),c.qZA(),c.qZA(),c.TgZ(33,"div",9),c.TgZ(34,"div",10),c.TgZ(35,"label",18),c.TgZ(36,"span"),c._uU(37,"*"),c.qZA(),c._uU(38),c.ALo(39,"i18n"),c.qZA(),c.TgZ(40,"input",19,20),c.NdJ("ngModelChange",function(e){return c.CHM(n),c.oxw().model.expenseDate=e}),c.qZA(),c.TgZ(42,"div",14),c._uU(43," This field is required "),c.qZA(),c.qZA(),c.qZA(),c.TgZ(44,"div",9),c.TgZ(45,"div",10),c.TgZ(46,"label",21),c._uU(47),c.ALo(48,"i18n"),c.qZA(),c.TgZ(49,"textarea",22,23),c.NdJ("ngModelChange",function(e){return c.CHM(n),c.oxw().model.description=e}),c._uU(51,"          "),c.qZA(),c.qZA(),c.qZA(),c.TgZ(52,"app-documents-preview",24),c.NdJ("onFileRemove",function(e){return c.CHM(n),c.oxw().onFileRemove(e)})("onBrowse",function(e){return c.CHM(n),c.oxw().onBrowse(e)}),c.qZA(),c.qZA(),c.TgZ(53,"div",25),c.TgZ(54,"button",26),c.NdJ("click",function(){return t.$implicit.dismiss("Cross click")}),c._uU(55),c.ALo(56,"i18n"),c.qZA(),c.TgZ(57,"button",27),c._uU(58),c.ALo(59,"i18n"),c.qZA(),c.qZA(),c.qZA()}if(2&e){var o=c.MAs(9),i=c.MAs(19),s=c.MAs(30),r=c.MAs(41),a=c.oxw();c.xp6(2),c.Q6J("ngClass",c.WLB(31,D,!(null!=a.model&&a.model._id),null==a.model?null:a.model._id)),c.xp6(1),c.hij(" ",c.lcZ(4,17,"text_expenses"),""),c.xp6(13),c.hij(" ",c.lcZ(17,19,"text_amount"),""),c.xp6(2),c.Q6J("ngModel",a.model.amount)("ngClass",c.VKq(34,L,o.submitted&&i.invalid)),c.xp6(9),c.hij(" ",c.lcZ(28,21,"text_type"),""),c.xp6(2),c.Q6J("ngModel",a.model.type)("ngClass",c.VKq(36,L,o.submitted&&s.invalid)),c.xp6(9),c.hij(" ",c.lcZ(39,23,"text_date"),""),c.xp6(2),c.Q6J("ngModel",a.model.expenseDate)("ngClass",c.VKq(38,L,o.submitted&&r.invalid)),c.xp6(7),c.hij(" ",c.lcZ(48,25,"text_description"),""),c.xp6(2),c.Q6J("ngModel",a.model.description),c.xp6(3),c.Q6J("documents",a.model.documents)("files",a.files),c.xp6(3),c.Oqu(c.lcZ(56,27,"text_close")),c.xp6(3),c.Oqu(c.lcZ(59,29,"text_save"))}}var U=function(){function e(e,t,n,o,i,s,r,a){this.formBuilder=e,this.modalService=t,this.commonService=n,this.apiService=o,this.urlHandler=i,this.utilCtrl=s,this.ngxSpinnerService=r,this._sanitizer=a,this.model=new l,this.onPopupClose=new c.vpe,this.apiURL=p.N.apiUrl,this.years=[],this.months=[],this.files=[]}return e.prototype.ngOnChanges=function(){var e=this;console.log(this.model.documents),this.files=[],this.showPopup&&this.modalService.open(this.modalContent,{ariaLabelledBy:"modal-basic-title"}).result.then(function(e){console.log("Closed with")},function(t){e.onPopupClose.emit(t),console.log(t)})},e.prototype.ngOnInit=function(){},e.prototype.onBrowse=function(e){var t=this;e.files.forEach(function(e){t.files.push(e)})},e.prototype.onFileRemove=function(e){this.model.documents=e.documents,this.files=e.files},e.prototype.save=function(e){return(0,a.mG)(this,void 0,void 0,function(){var t,n,o=this;return(0,a.Jh)(this,function(i){switch(i.label){case 0:return t=null,this.model.expenseId=this.model._id,t=this.model._id?this.urlHandler.url.expenses.update:this.urlHandler.url.expenses.create,this.files.length?[4,this.apiService.uploadFile("uploadFiles","file",this.files)]:[3,2];case 1:if(!(n=i.sent()).success)return[2,this.utilCtrl.showToast(n.message,this.utilCtrl.toastTypeArr.DANGER)];n.body&&n.body.length&&(n.body.forEach(function(e){var t=o.model.documents.find(function(t){return t.name==e.name});e.title=t.title}),this.model.documents.forEach(function(e,t){e.local&&o.model.documents.splice(t,1)}),n.body.forEach(function(e){o.model.documents.push(e)})),i.label=2;case 2:return this.apiService.post(t,this.model).then(function(t){t.success?(e.resetForm(),o.utilCtrl.showToast(t.message,o.utilCtrl.toastTypeArr.SUCCESS),o.modalService.dismissAll()):o.utilCtrl.showToast(t.message,o.utilCtrl.toastTypeArr.DANGER)},function(e){return console.log(e)}),[2]}})})},e.\u0275fac=function(t){return new(t||e)(c.Y36(A.qu),c.Y36(v.FF),c.Y36(y.v_),c.Y36(m.s),c.Y36(h.z),c.Y36(f.b),c.Y36(b.t2),c.Y36(C.H7))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-add-expenses"]],viewQuery:function(e,t){var n;1&e&&c.Gf(w,7),2&e&&c.iGM(n=c.CRH())&&(t.modalContent=n.first)},inputs:{showPopup:"showPopup",model:"model"},outputs:{onPopupClose:"onPopupClose"},features:[c.TTD],decls:2,vars:0,consts:[["modalContent",""],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","f-w-600"],[1,"fa",3,"ngClass"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["novalidate","",1,"needs-validation","user-add",3,"ngSubmit"],["f","ngForm"],[1,"modal-body"],[1,"form-row"],[1,"form-group","col-md-12"],["for","amount"],["name","amount","type","text","required","",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["amount","ngModel"],[1,"invalid-feedback"],["for","type"],["name","type","type","text","required","",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["type","ngModel"],["for","expenseDate"],["name","expenseDate","type","date","required","",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["expenseDate","ngModel"],["for","description"],["name","description","type","text",1,"form-control",3,"ngModel","ngModelChange"],["description","ngModel"],[3,"documents","files","onFileRemove","onBrowse"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-light",3,"click"],["type","submit",1,"btn","btn-primary"]],template:function(e,t){1&e&&c.YNc(0,J,60,40,"ng-template",null,0,c.W1O)},directives:[o.mk,A._Y,A.JL,A.F,A.Fj,A.Q7,A.JJ,A.On,_.Z],pipes:[M.X],styles:[""]}),e}(),k=n(53083),P=function(e){return{"is-invalid":e}},F=JSON.parse(localStorage.getItem("lang")),S=[{canActivate:[s.e],path:"expenses-list",component:function(){function e(e,t,n,o,i,s,r,a){var c=this;this.apiService=e,this.events=t,this.urlHandler=n,this.utilCtrl=o,this.socket=i,this.datePipe=s,this.parserFormatter=r,this.authGuard=a,this.apiURL=p.N.apiUrl,this.settings={actions:{position:"right",add:!1},mode:"external",add:{confirmCreate:!0},delete:{confirmDelete:!1},edit:{confirmSave:!0},columns:{amount:{title:F.text_amount,type:"html",valuePrepareFunction:function(e,t){return c.user.company.country.currency.symbol+" "+e}},type:{title:F.text_type},expenseDate:{title:F.text_date,type:"string",valuePrepareFunction:function(e,t){if(e)return c.datePipe.transform(e,"MMM d, y")}},description:{title:F.text_description},documents:{title:F.text_documents,type:"custom",valuePrepareFunction:function(e,t){return e},renderComponent:u.K,onComponentInitFunction:function(e){e.save.subscribe(function(e){console.log(e)})}}}},this.expensesList=[],this.totalAmount=0,this.user=new d.n,this.selectedExpense=new l,this.user=this.authGuard.getLoggedInUser();var m=new Date,g={day:m.getDate(),month:m.getMonth()+1,year:m.getFullYear()};this.startDate=g,this.endDate={day:m.getDate(),month:m.getMonth()+1,year:m.getFullYear()},this.socketEvents()}return e.prototype.ngOnDestroy=function(){this.socket.removeListener("expense_created"),this.socket.removeListener("expense_updated"),this.socket.removeListener("expense_deleted")},e.prototype.socketEvents=function(){var e=this;this.socket.on("expense_created",function(t){e.expensesList.unshift(t),e.expensesList=(0,a.ev)([],(0,a.CR)(e.expensesList)),e.totalAmount=e.totalAmount+t.amount}),this.socket.on("expense_updated",function(t){var n=e.expensesList.findIndex(function(e){return e._id==t._id});e.expensesList[n]=t,e.expensesList=(0,a.ev)([],(0,a.CR)(e.expensesList))}),this.socket.on("expense_deleted",function(t){var n=e.expensesList.findIndex(function(e){return e._id==t._id});e.expensesList.splice(n,1),e.expensesList=(0,a.ev)([],(0,a.CR)(e.expensesList))})},e.prototype.ngOnInit=function(){this.getData()},e.prototype.getData=function(){return(0,a.mG)(this,void 0,void 0,function(){var e,t,n;return(0,a.Jh)(this,function(o){switch(o.label){case 0:return e=this.parserFormatter.format(this.startDate),t=this.parserFormatter.format(this.endDate),[4,this.apiService.get(this.urlHandler.url.expenses.get_expenses+"?startDate="+e+"&endDate="+t)];case 1:return n=o.sent(),this.expensesList=n.body,this.getTotalAmount(),[2]}})})},e.prototype.getTotalAmount=function(){return(0,a.mG)(this,void 0,void 0,function(){var e,t,n;return(0,a.Jh)(this,function(o){switch(o.label){case 0:return e=this.parserFormatter.format(this.startDate),t=this.parserFormatter.format(this.endDate),[4,this.apiService.get(this.urlHandler.url.expenses.get_total_amount+"?startDate="+e+"&endDate="+t)];case 1:return n=o.sent(),this.totalAmount=n.body.total,[2]}})})},e.prototype.edit=function(e){console.log(e.data),this.showPopup=!0,this.selectedExpense=e.data,this.selectedExpense.expenseDate=this.datePipe.transform(e.data.expenseDate,"yyyy-MM-dd")},e.prototype.delete=function(e){this.showDeletePopup=!0,this.deleteURL=this.urlHandler.url.expenses.delete+e.data._id},e.prototype.onAddPopupClose=function(e){this.showPopup=!1,this.selectedExpense=new l},e.\u0275fac=function(t){return new(t||e)(c.Y36(m.s),c.Y36(g.n),c.Y36(h.z),c.Y36(f.b),c.Y36(Z.sk),c.Y36(o.uU),c.Y36(v.NG),c.Y36(x.a))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-expenses-list"]],decls:61,vars:38,consts:[[1,"container-fluid"],[1,"card"],[1,"card-header"],[1,"row"],["novalidate","",1,"col-md-6","row",3,"ngSubmit"],["f","ngForm"],[1,"form-group","col-md-4","pr-0"],[1,"col-xl-12","col-md-12","pl-0"],[1,"input-group"],["type","text","id","inputStartDate","name","inputStartDate","ngbDatepicker","","required","",1,"form-control","p-2",3,"ngModel","ngClass","ngModelChange"],["d1","ngbDatepicker","inputStartDate","ngModel"],[1,"input-group-append"],[1,"input-group-text",3,"click"],[1,"fa","fa-calendar",2,"cursor","pointer"],[1,"invalid-feedback"],["type","text","id","inputEndDate","name","inputEndDate","ngbDatepicker","","required","",1,"form-control","p-2",3,"ngModel","ngClass","ngModelChange"],["d2","ngbDatepicker","inputEndDate","ngModel"],[1,"form-group","col-md-3"],["type","submit",1,"btn","btn-primary","mt-4","btn-sm"],[1,"col-xl-3","col-md-3"],[1,"card","o-hidden","widget-cards","mb-0"],[1,"bg-primary","card-body","p-2","text-center"],[1,"media","static-top-widget","row"],[1,"media-body"],[1,"m-0"],[1,"mb-0"],[1,"counter"],["type","button","data-toggle","modal","data-original-title","test","data-target","#exampleModal",1,"btn","btn-primary","mt-4","pull-right","btn-sm",3,"click"],[1,"fa","fa-plus"],[1,"card-body","vendor-table","pt-0"],["id","batchDelete",1,"custom-datatable","vendor-list"],[1,"table-responsive"],[3,"settings","source","edit","delete"],[3,"deleteURL","showPopup","onPopupClose"],[3,"model","showPopup","onPopupClose"]],template:function(e,t){if(1&e){var n=c.EpF();c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c.TgZ(3,"div",3),c.TgZ(4,"form",4,5),c.NdJ("ngSubmit",function(){return c.CHM(n),c.MAs(5).form.valid&&t.getData()}),c.TgZ(6,"div",6),c.TgZ(7,"label",7),c._uU(8),c.ALo(9,"i18n"),c.qZA(),c.TgZ(10,"div",8),c.TgZ(11,"input",9,10),c.NdJ("ngModelChange",function(e){return t.startDate=e}),c.qZA(),c.TgZ(14,"div",11),c.TgZ(15,"div",12),c.NdJ("click",function(){return c.CHM(n),c.MAs(12).toggle()}),c._UZ(16,"i",13),c.qZA(),c.qZA(),c.TgZ(17,"div",14),c._uU(18),c.ALo(19,"i18n"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(20,"div",6),c.TgZ(21,"label",7),c._uU(22),c.ALo(23,"i18n"),c.qZA(),c.TgZ(24,"div",8),c.TgZ(25,"input",15,16),c.NdJ("ngModelChange",function(e){return t.endDate=e}),c.qZA(),c.TgZ(28,"div",11),c.TgZ(29,"div",12),c.NdJ("click",function(){return c.CHM(n),c.MAs(26).toggle()}),c._UZ(30,"i",13),c.qZA(),c.qZA(),c.TgZ(31,"div",14),c._uU(32),c.ALo(33,"i18n"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(34,"div",17),c.TgZ(35,"button",18),c._uU(36),c.ALo(37,"i18n"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(38,"div",19),c.TgZ(39,"div",20),c.TgZ(40,"div",21),c.TgZ(41,"div",22),c.TgZ(42,"div",23),c.TgZ(43,"span",24),c._uU(44),c.ALo(45,"i18n"),c.qZA(),c.TgZ(46,"h3",25),c.TgZ(47,"span",26),c._uU(48),c.ALo(49,"round"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(50,"div",17),c.TgZ(51,"button",27),c.NdJ("click",function(){return t.showPopup=!0}),c._UZ(52,"i",28),c._uU(53),c.ALo(54,"i18n"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(55,"div",29),c.TgZ(56,"div",30),c.TgZ(57,"div",31),c.TgZ(58,"ng2-smart-table",32),c.NdJ("edit",function(e){return t.edit(e)})("delete",function(e){return t.delete(e)}),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(59,"app-delete-record",33),c.NdJ("onPopupClose",function(){return t.showDeletePopup=!1}),c.qZA(),c.TgZ(60,"app-add-expenses",34),c.NdJ("onPopupClose",function(e){return t.onAddPopupClose(e)}),c.qZA()}if(2&e){var o=c.MAs(5),i=c.MAs(13),s=c.MAs(27);c.xp6(8),c.Oqu(c.lcZ(9,18,"text_startDate")),c.xp6(3),c.Q6J("ngModel",t.startDate)("ngClass",c.VKq(34,P,o.submitted&&i.invalid)),c.xp6(7),c.hij(" ",c.lcZ(19,20,"text_startDate")," "),c.xp6(4),c.Oqu(c.lcZ(23,22,"text_endDate")),c.xp6(3),c.Q6J("ngModel",t.endDate)("ngClass",c.VKq(36,P,o.submitted&&s.invalid)),c.xp6(7),c.hij(" ",c.lcZ(33,24,"text_endDate")," "),c.xp6(4),c.Oqu(c.lcZ(37,26,"text_search")),c.xp6(8),c.hij("",c.lcZ(45,28,"text_totalAmount")," "),c.xp6(4),c.Oqu((null==t.user||null==t.user.company||null==t.user.company.country?null:t.user.company.country.currency.symbol)+" "+c.lcZ(49,30,t.totalAmount)),c.xp6(5),c.hij(" ",c.lcZ(54,32,"text_add")," "),c.xp6(5),c.Q6J("settings",t.settings)("source",t.expensesList),c.xp6(1),c.Q6J("deleteURL",t.deleteURL)("showPopup",t.showDeletePopup),c.xp6(1),c.Q6J("model",t.selectedExpense)("showPopup",t.showPopup)}},directives:[A._Y,A.JL,A.F,v.J4,A.Fj,A.Q7,A.JJ,A.On,o.mk,q.T5,T.c,U],pipes:[M.X,k.L],styles:[""]}),e}(),data:{title:"text_expenses",breadcrumb:"text_expenses",id:r.AN.ExpensesList}}],N=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[i.Bz.forChild(S)],i.Bz]}),e}(),E=n(75425),Y=n(70557),H=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[o.ez,N,A.UX,v.IJ,q.ne,E.m,A.u5,Y.P]]}),e}()}}]);