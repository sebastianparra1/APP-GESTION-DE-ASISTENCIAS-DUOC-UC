"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4936],{4936:(R,u,c)=>{c.r(u),c.d(u,{QrAppPageModule:()=>f});var g=c(177),p=c(4341),a=c(4742),d=c(3799),e=c(4438);function m(n,t){if(1&n&&(e.j41(0,"ion-row")(1,"ion-col",9),e.nrm(2,"img",10),e.j41(3,"h3"),e.EFF(4),e.k0s()()()),2&n){const i=e.XpG();e.R7$(2),e.Y8G("src",i.qrImage,e.B4B),e.R7$(2),e.Lme("",i.asignaturaSeleccionada," - ",i.seccionSeleccionada,"")}}const h=[{path:"",component:(()=>{var n;class t{constructor(){this.asignaturaSeleccionada=null,this.seccionSeleccionada=null,this.puedeGenerarQR=!1,this.mostrarQR=!1,this.qrImage=null}verificarSeleccion(){this.puedeGenerarQR=!!this.asignaturaSeleccionada&&!!this.seccionSeleccionada}generarQR(){this.puedeGenerarQR&&(this.qrImage=`https://api.qrserver.com/v1/create-qr-code/?data=Asignatura:${this.asignaturaSeleccionada}+Seccion:${this.seccionSeleccionada}&size=200x200`,this.mostrarQR=!0)}}return(n=t).\u0275fac=function(r){return new(r||n)},n.\u0275cmp=e.VBU({type:n,selectors:[["app-qr-app"]],decls:31,vars:5,consts:[[3,"translucent"],["size","12"],[3,"ngModelChange","ionChange","ngModel"],["value","Matematicas"],["value","mat001"],["value","mat002"],["value","mat003"],["expand","full","color","primary",3,"click","disabled"],[4,"ngIf"],["size","12","text-center",""],["alt","QR Code",2,"width","200px","height","200px","margin","20px auto",3,"src"]],template:function(r,o){1&r&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"Generar QR"),e.k0s()()(),e.j41(4,"ion-content")(5,"ion-grid")(6,"ion-row")(7,"ion-col",1)(8,"ion-item")(9,"ion-label"),e.EFF(10,"Asignatura"),e.k0s(),e.j41(11,"ion-select",2),e.mxI("ngModelChange",function(l){return e.DH7(o.asignaturaSeleccionada,l)||(o.asignaturaSeleccionada=l),l}),e.bIt("ionChange",function(){return o.verificarSeleccion()}),e.j41(12,"ion-select-option",3),e.EFF(13,"Matematicas"),e.k0s()()()()(),e.j41(14,"ion-row")(15,"ion-col",1)(16,"ion-item")(17,"ion-label"),e.EFF(18,"Secci\xf3n"),e.k0s(),e.j41(19,"ion-select",2),e.mxI("ngModelChange",function(l){return e.DH7(o.seccionSeleccionada,l)||(o.seccionSeleccionada=l),l}),e.bIt("ionChange",function(){return o.verificarSeleccion()}),e.j41(20,"ion-select-option",4),e.EFF(21,"mat001"),e.k0s(),e.j41(22,"ion-select-option",5),e.EFF(23,"mat002"),e.k0s(),e.j41(24,"ion-select-option",6),e.EFF(25,"mat003"),e.k0s()()()()(),e.j41(26,"ion-row")(27,"ion-col",1)(28,"ion-button",7),e.bIt("click",function(){return o.generarQR()}),e.EFF(29," Generar QR "),e.k0s()()(),e.DNE(30,m,5,3,"ion-row",8),e.k0s()()),2&r&&(e.Y8G("translucent",!0),e.R7$(11),e.R50("ngModel",o.asignaturaSeleccionada),e.R7$(8),e.R50("ngModel",o.seccionSeleccionada),e.R7$(9),e.Y8G("disabled",!o.puedeGenerarQR),e.R7$(2),e.Y8G("ngIf",o.mostrarQR))},dependencies:[g.bT,p.BC,p.vS,a.Jm,a.hU,a.W9,a.lO,a.eU,a.uz,a.he,a.ln,a.Nm,a.Ip,a.BC,a.ai,a.Je]}),t})()}];let Q=(()=>{var n;class t{}return(n=t).\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[d.iI.forChild(h),d.iI]}),t})(),f=(()=>{var n;class t{}return(n=t).\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[g.MD,p.YN,a.bv,Q]}),t})()}}]);