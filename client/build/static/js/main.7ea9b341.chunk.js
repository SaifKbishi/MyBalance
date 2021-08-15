(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{107:function(e,t,n){},126:function(e,t,n){},134:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},247:function(e,t,n){},248:function(e,t,n){},249:function(e,t,n){},250:function(e,t,n){},251:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(32),s=n.n(r),o=(n(107),n(29)),i=n(6),l=n(256),u=n(257),j=n(8),d=n.n(j),b="/exp/auth/",p=function(e,t,n){return d.a.post(b+"signup",{username:e,email:t,password:n})},h=function(e,t){return d.a.post(b+"signin",{username:e,password:t}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},x=function(){localStorage.removeItem("user")},m=function(){return JSON.parse(localStorage.getItem("user"))},O=(n(126),n(0));var v=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(void 0),s=Object(i.a)(r,2),o=s[0],j=s[1];return Object(a.useEffect)((function(){var e=m();e&&(j(e),c(e.roles.includes("ROLE_ADMIN")))}),[]),Object(O.jsxs)(l.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(O.jsx)(l.a.Brand,{href:"/",children:"My Balance"}),Object(O.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsxs)(l.a.Collapse,{id:"responsive-navbar-nav",children:[Object(O.jsxs)(u.a,{className:"mr-auto",children:[Object(O.jsx)(u.a.Link,{href:"/",children:"Home"}),Object(O.jsx)(u.a.Link,{href:"/addExpense",to:"/addExpense",children:"New Expense"}),o&&Object(O.jsx)(u.a.Link,{href:"/viewbymonth",children:"Month View"}),o&&Object(O.jsx)(u.a.Link,{href:"/allExpenses",children:"Year View"}),o&&Object(O.jsx)(u.a.Link,{href:"/charts",children:"Charts"})]}),Object(O.jsxs)(u.a,{children:[Object(O.jsxs)("div",{className:"navbar-nav mr-auto",children:[n&&Object(O.jsx)(u.a.Link,{href:"/admin",children:"Admin Board"}),o&&Object(O.jsx)(u.a.Link,{href:"/user",children:"User"})]}),o?Object(O.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(O.jsx)(u.a.Link,{href:"/profile",children:o.username}),Object(O.jsx)(u.a.Link,{href:"/login",onClick:function(){x()},children:"LogOut"})]}):Object(O.jsxs)("div",{className:"log_in_out nabvar-nav ml-auto",children:[Object(O.jsx)(u.a.Link,{href:"/login",children:"Login"}),Object(O.jsx)(u.a.Link,{href:"/register",children:"Sign up"})]})]})]})]})},f=n(9),g=n(7),y=n.n(g),N=n(12),C=n(255),k=(n(134),function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],r=n[1],s=new Date,o=Object(a.useState)(),l=Object(i.a)(o,2),u=l[0],j=l[1],b=Object(f.f)(),p=function(){var e=Object(N.a)(y.a.mark((function e(){var t,n,a,c=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:s.getMonth()+1,e.prev=1,e.next=4,d.a.get("/exp/viewbymonth/".concat(t));case 4:n=e.sent,(a=n.data).sort((function(e,t){return e.expenseType<t.expenseType?1:-1})),r(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("MonthView, could not fetch data",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){p(u)}),[u]);var h=function(){var e=Object(N.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.prev=1,e.next=4,d.a.delete("/exp/deleteExpense/".concat(n));case 4:b.push("/viewbymonth/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log("error with the delete: ",e.t0);case 10:window.location.reload();case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),x={onRowClick:function(e){console.log(e)}},m=function(){var e=0;return c.forEach((function(t){"income"===t.expenseType?e+=t.amount:e-=t.amount})),e};return Object(O.jsxs)("div",{className:"monthView",children:[Object(O.jsxs)("select",{onChange:function(e){console.log(Number(e.target.value)),j(e.target.name=Number(e.target.value))},value:u,children:[Object(O.jsx)("option",{value:"-1",children:"select month"}),Object(O.jsx)("option",{value:"1",children:"January"}),Object(O.jsx)("option",{value:"2",name:"February",children:"February"}),Object(O.jsx)("option",{value:"3",children:"March"}),Object(O.jsx)("option",{value:"4",children:"April"}),Object(O.jsx)("option",{value:"5",children:"May"}),Object(O.jsx)("option",{value:"6",children:"June"}),Object(O.jsx)("option",{value:"7",children:"July"}),Object(O.jsx)("option",{value:"8",children:"August"}),Object(O.jsx)("option",{value:"9",children:"September"}),Object(O.jsx)("option",{value:"10",children:"October"}),Object(O.jsx)("option",{value:"11",children:"November"}),Object(O.jsx)("option",{value:"12",children:"December"})]}),Object(O.jsx)("hr",{}),Object(O.jsxs)(C.a,{bordered:!0,hover:!0,size:"sm",options:x,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"X"}),Object(O.jsx)("th",{children:"Expense Name"}),Object(O.jsx)("th",{children:"Amount in $"}),Object(O.jsx)("th",{children:"Description"}),Object(O.jsx)("th",{children:"Category"})]})}),Object(O.jsxs)("tbody",{children:[c.map((function(e,t){return Object(O.jsxs)("tr",{className:"expensesItem + ".concat(e.expenseType," ? 'income' : 'expense'"),children:[Object(O.jsx)("td",{className:"deleteExpItem","data-delete_tooltipmv":"Delete Expense",onClick:function(){return h(e._id)},children:"X"}),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("td",{onClick:function(e){return b.push("/updateExpense/".concat(c[t]._id))},children:e.name}),Object(O.jsx)("td",{onClick:function(e){return b.push("/updateExpense/".concat(c[t]._id))},children:e.amount}),Object(O.jsx)("td",{onClick:function(e){return b.push("/updateExpense/".concat(c[t]._id))},children:e.description}),Object(O.jsx)("td",{onClick:function(e){return b.push("/updateExpense/".concat(c[t]._id))},children:e.repeats})]})]},e._id)})),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{}),Object(O.jsx)("th",{}),Object(O.jsxs)("th",{children:[m()>0?-m():m()," $"]}),Object(O.jsx)("th",{}),Object(O.jsx)("th",{})]})]})]})]})}),w=n(10),S=n(18),T=(n(137),function(e){var t=e.divCN,n=e.labelText,a=e.name,c=e.type,r=e.value,s=e.onChange,o=e.inputCN,i=e.required;return Object(O.jsxs)("div",{className:t,children:[Object(O.jsx)("label",{children:n}),Object(O.jsx)("input",{name:a,type:c,value:r,onChange:s,className:o,required:i})]})}),E=(n(138),function(e){var t=e.divCN,n=e.inputType,a=e.inputID,c=e.name,r=e.value,s=e.labelID,o=e.htmlFor,i=e.labelText,l=e.checked;return Object(O.jsxs)("div",{className:t,children:[Object(O.jsx)("input",{type:n,id:a,name:c,value:r,checked:l}),Object(O.jsx)("label",{id:s,htmlFor:o,children:i})]})}),D=function(e){var t={name:"",amount:"",description:"",repeats:"",date:"",expenseType:"",expense:"expense",income:"income"},n=Object(a.useState)(t),c=Object(i.a)(n,2),r=c[0],s=c[1],o=d.a.CancelToken.source(),l=function(){var t=Object(N.a)(y.a.mark((function t(){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("/exp/getExpenseByID/".concat(e.match.params._id),{cancelToken:o.token});case 3:n=t.sent,s(n.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),d.a.isCancel(t.t0)?console.log("axios cancelled"):console.log("error editing: ",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){return l(),function(){o.cancel()}}),[e.match.params._id]);var u=function(e){s(Object(S.a)(Object(S.a)({},r),{},Object(w.a)({},e.target.name,e.target.value)))};return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h2",{children:["Editing ",r.name]}),Object(O.jsxs)("form",{className:"expensesForm",onSubmit:function(n){if(n.preventDefault(),r.name&&r.amount){var a=function(){var e=Object(N.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.patch("/exp/updateExpense/".concat(r._id),r);case 3:console.log("edit is done"),s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("ExpenseEdit, could not save the expense",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e.history.goBack(),a()}},children:[Object(O.jsxs)("span",{className:"radioBtns",onChange:u,children:[Object(O.jsx)(E,{divCN:"input-radio",inputType:"radio",inputID:"expensepay",name:"expenseType",value:r.expense,labelID:"expenseLabel",htmlFor:"expensepay",labelText:"Add Expense"}),Object(O.jsx)(E,{divCN:"input-radio",inputType:"radio",inputID:"income",name:"expenseType",value:r.income,labelID:"incomeLabel",htmlFor:"income",labelText:"Add Income"})]}),Object(O.jsx)(T,{divCN:"form-group",labelText:"Date: ",name:"date",type:"date",value:r.date,onChange:u,inputCN:"form-control"}),Object(O.jsx)(T,{divCN:"form-group",labelText:"Name: ",name:"name",type:"text",value:r.name,onChange:u,inputCN:"form-control",required:"required"}),Object(O.jsx)(T,{divCN:"form-group",labelText:"Amount: ",name:"amount",type:"text",value:r.amount,onChange:u,inputCN:"form-control",required:"required"}),Object(O.jsx)(T,{divCN:"form-group",labelText:"Description: ",name:"description",type:"text",value:r.description,onChange:u,inputCN:"form-control"}),Object(O.jsx)(T,{divCN:"form-group",labelText:"Category: ",name:"repeats",type:"text",value:r.repeats,onChange:u,inputCN:"form-control"}),Object(O.jsxs)("label",{id:"catLbl",children:["Category:",Object(O.jsxs)("select",{name:"repeats",onChange:u,children:[Object(O.jsx)("option",{value:"-1",children:"Select Category"}),Object(O.jsx)("option",{value:"1",children:"Last Balance - \u05d9\u05ea\u05e8\u05d4"}),Object(O.jsx)("option",{value:"2",children:"Salary - \u05de\u05e9\u05db\u05d5\u05e8\u05ea"}),Object(O.jsx)("option",{value:"3",children:"Monthly Expenses - \u05ea\u05e9\u05dc\u05d5\u05de\u05d9\u05dd \u05e7\u05d1\u05d5\u05e2\u05d9\u05dd"}),Object(O.jsx)("option",{value:"6",children:"Gas - \u05d3\u05dc\u05e7"}),Object(O.jsx)("option",{value:"7",children:"Food/Babay - \u05de\u05d6\u05d5\u05df \u05d5\u05ea\u05d9\u05e0\u05d5\u05e7"}),Object(O.jsx)("option",{value:"8",children:"Local Taxes - \u05de\"\u05de \u05d2'\u05d5\u05dc\u05d9\u05e1"}),Object(O.jsx)("option",{value:"9",children:"Electricity - \u05d7\u05e9\u05de\u05dc"}),Object(O.jsx)("option",{value:"13",children:"CC - \u05ea\u05d5\u05e1\u05e4\u05d5\u05ea \u05d0\u05e9\u05e8\u05d0\u05d9"})]})]}),Object(O.jsx)("div",{className:"btn-group",children:Object(O.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-primary"})})]})]})},L=(n(139),function(){var e={name:"",amount:"",description:"",repeats:"",date:"",expenseType:"expense",expense:"expense",income:"income"},t=Object(a.useState)(e),n=Object(i.a)(t,2),c=n[0],r=n[1],s=function(e){r(Object(S.a)(Object(S.a)({},c),{},Object(w.a)({},e.target.name,e.target.value)))};return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{className:"expensesForm",onSubmit:function(t){(t.preventDefault(),c.name&&c.amount)&&(function(){var e=Object(N.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.post("/exp/addExpense/",c);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("ExpenseForm, could not save the expense",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()(),r(e))},children:[Object(O.jsxs)("span",{className:"radioBtns",onChange:s,children:[Object(O.jsx)(E,{divCN:"input-radio",inputType:"radio",inputID:"expensepay",name:"expenseType",value:c.expense,labelID:"expenseLabel",htmlFor:"expensepay",labelText:"Add Expense"}),Object(O.jsx)(E,{divCN:"input-radio",inputType:"radio",inputID:"income",name:"expenseType",value:c.income,labelID:"incomeLabel",htmlFor:"income",labelText:"Add Income"})]}),Object(O.jsx)(T,{divCN:"form-group",labelText:"Date: ",name:"date",type:"date",value:c.date,onChange:s,inputCN:"form-control",required:"required"}),Object(O.jsx)(T,{divCN:"form-group",labelText:"Name: ",name:"name",type:"text",value:c.name,onChange:s,inputCN:"form-control",required:"required"}),Object(O.jsx)(T,{divCN:"form-group",labelText:"Amount: ",name:"amount",type:"text",value:c.amount,onChange:s,inputCN:"form-control",required:"required"}),Object(O.jsx)(T,{divCN:"form-group",labelText:"Description: ",name:"description",type:"text",value:c.description,onChange:s,inputCN:"form-control"}),Object(O.jsx)(T,{divCN:"form-group",labelText:"Category : ",name:"repeats",type:"text",value:c.repeats,onChange:s,inputCN:"form-control"}),Object(O.jsxs)("label",{id:"catLbl",children:["Category:",Object(O.jsxs)("select",{name:"repeats",onChange:s,children:[Object(O.jsx)("option",{value:"-1",children:"Select Category"}),Object(O.jsx)("option",{value:"1",children:"Last Balance - \u05d9\u05ea\u05e8\u05d4"}),Object(O.jsx)("option",{value:"2",children:"Salary - \u05de\u05e9\u05db\u05d5\u05e8\u05ea"}),Object(O.jsx)("option",{value:"3",children:"Monthly Expenses - \u05ea\u05e9\u05dc\u05d5\u05de\u05d9\u05dd \u05e7\u05d1\u05d5\u05e2\u05d9\u05dd"}),Object(O.jsx)("option",{value:"6",children:"Gas - \u05d3\u05dc\u05e7"}),Object(O.jsx)("option",{value:"7",children:"Food/Babay - \u05de\u05d6\u05d5\u05df \u05d5\u05ea\u05d9\u05e0\u05d5\u05e7"}),Object(O.jsx)("option",{value:"8",children:"Local Taxes - \u05de\"\u05de \u05d2'\u05d5\u05dc\u05d9\u05e1"}),Object(O.jsx)("option",{value:"9",children:"Electricity - \u05d7\u05e9\u05de\u05dc"}),Object(O.jsx)("option",{value:"13",children:"CC - \u05ea\u05d5\u05e1\u05e4\u05d5\u05ea \u05d0\u05e9\u05e8\u05d0\u05d9"})]})]}),Object(O.jsx)("div",{className:"btn-group",id:"ExpenseFormSubmitBtn",children:Object(O.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-primary"})})]})})}),I=(n(140),function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],r=n[1],s=new Date,o=Object(a.useState)(s.getMonth()+1),l=Object(i.a)(o,2),u=l[0],j=(l[1],function(){var e=Object(N.a)(y.a.mark((function e(t){var n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/exp/viewbymonth/".concat(t));case 3:n=e.sent,(a=n.data).sort((function(e,t){return e.repeats>t.repeats?1:-1})),r(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("MonthView, could not fetch data",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}());Object(a.useEffect)((function(){j(e.month)}),[u]);var b=Object(f.f)(),p={onRowClick:function(e){console.log(e)}};return Object(O.jsx)("div",{children:Object(O.jsx)(C.a,{bordered:!0,hover:!0,size:"sm",options:p,children:Object(O.jsx)("tbody",{children:c.map((function(e,t){return Object(O.jsxs)("tr",{className:"expensesItem + ".concat(1===e.repeats?"yellow":2===e.repeats?"green":3===e.repeats?"red":4===e.repeats?"white":5===e.repeats?"darkred":6===e.repeats?"mediumblue":7===e.repeats?"darkgray":8===e.repeats?"yellowgreen":9===e.repeats?"whitesmoke":10===e.repeats?"indigo":11===e.repeats?"gold":12===e.repeats?"olive":(e.repeats,"slateblue")),onClick:function(e){return b.push("/updateExpense/".concat(c[t]._id))},children:[Object(O.jsx)("td",{children:e.name}),Object(O.jsxs)("td",{children:[1===e.repeats?"-":"",e.amount]})]},e._id)}))})})})}),B=(n(141),function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=(t[0],t[1]),c=Object(f.f)(),r=new AbortController,s=r.signal,o=function(){var e=Object(N.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/exp/allExpenses/",{signal:s});case 3:t=e.sent,n(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("could not fetch data",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){return o(),function(){r.abort()}}),[]);var l=function(){var e=Object(N.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("month value: ",t.target.cellIndex+1),n=t.target.cellIndex+1,c.push("/viewbymonth/".concat(n));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"yearView",children:[Object(O.jsxs)(C.a,{bordered:!0,hover:!0,size:"sm",variant:"dark",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{className:"monthDropDown",onClick:l,children:[Object(O.jsx)("th",{value:"1",children:"January"}),Object(O.jsx)("th",{value:"2",children:"February"}),Object(O.jsx)("th",{value:"3",children:"March"}),Object(O.jsx)("th",{value:"4",children:"April"}),Object(O.jsx)("th",{value:"5",children:"May"}),Object(O.jsx)("th",{value:"6",children:"June"}),Object(O.jsx)("th",{value:"7",children:"July"}),Object(O.jsx)("th",{value:"8",children:"August"}),Object(O.jsx)("th",{value:"9",children:"September"}),Object(O.jsx)("th",{value:"10",children:"October"}),Object(O.jsx)("th",{value:"11",children:"November"}),Object(O.jsx)("th",{value:"12",children:"December"})]})}),Object(O.jsx)("tbody",{children:Object(O.jsx)("tr",{children:function(){for(var e=[],t=1;t<=12;t++)e.push(Object(O.jsx)("td",{children:Object(O.jsx)(I,{month:t})},t));return e}()})})]}),Object(O.jsx)("hr",{})]})}),F=n(102),M=(n(247),[]),A=[],q="rgb(255, 00, 00)",_="rgb(0, 204, 0)",J=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),s=Object(i.a)(r,2),o=(s[0],s[1],Object(a.useState)([])),l=Object(i.a)(o,2),u=l[0],j=l[1],b=function(){var e=Object(N.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("hello getSumByMonth2"),e.next=3,new Promise((function(e){d.a.get("/exp/allExpenses/").then((function(e){console.log("32: ",e),j(e.data)})),e(u)})).then((function(){console.log("59: ",u);for(var e=function(e){var t=0;u.forEach((function(n){var a=new Date(n.date);Number(a.getMonth()+1)===e&&("income"===n.expenseType?t+=n.amount:t-=n.amount)})),M.push(t)},t=1;t<=12;t++)e(t)}));case 3:return console.log("63: ",M),e.abrupt("return",M);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(N.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=0;t<=12;t++)M[t]>0?A[t]=_:A[t]=q;case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(N.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b().then((function(){c({labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"balance by month: ",backgroundColor:A,borderColor:"rgba(0,0,0,1)",borderWidth:1,data:M}]})}));case 2:console.log("chart");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){h(),p()}),[]),Object(O.jsx)("div",{className:"charts",children:Object(O.jsx)(F.a,{data:n,options:{title:{display:!0,text:"balance after expenses",fontSize:20},legend:{display:!0,position:"right"}}})})};var R=function(){var e=Object(a.useState)(void 0),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=m();e&&c(e)}),[]),Object(O.jsxs)("div",{className:"homepage",children:[Object(O.jsx)("h5",{children:"Welcome"}),!n&&Object(O.jsx)("h6",{children:"This is the basic view, you need to SignUp/Login to enjoy the variety of MyBalance features"}),n&&Object(O.jsx)(L,{}),Object(O.jsx)("hr",{}),Object(O.jsx)(B,{})]})},U=(n(44),n(248),function(e){var t=Object(a.useRef)(),n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),u=l[0],j=l[1],d=Object(a.useState)(""),b=Object(i.a)(d,2),p=b[0],x=b[1],m=Object(a.useState)(""),v=Object(i.a)(m,2),f=v[0],g=v[1];return document.title="My Balance | Login",Object(O.jsx)("div",{className:"reg col-md-12",children:Object(O.jsxs)("div",{className:"card card-container",children:[Object(O.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault(),g(""),x(!0),h(r,u).then((function(){e.history.push("/profile"),window.location.reload()}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();console.log(t),x(!1)}))},ref:t,className:"LoginForm",children:[Object(O.jsx)(T,{divCN:"form-group",labelText:"Username",name:"username",type:"text",value:r,onChange:function(e){var t=e.target.value;console.log("Login /username: ",t),s(t)},inputCN:"form-control"}),Object(O.jsx)(T,{divCN:"form-group",labelText:"Password",name:"pw",type:"text",value:u,onChange:function(e){var t=e.target.value;j(t)},inputCN:"form-control"}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsxs)("button",{className:"btn btn-primary btn-block",disabled:p,children:[p&&Object(O.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(O.jsx)("span",{children:"Login"})]})}),f&&Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("div",{className:"alert alert-danger",role:"alert",children:f})})]})]})})}),P=(n(249),function(){var e=m();return Object(O.jsxs)("div",{className:"container profile",children:[Object(O.jsx)("header",{className:"jumbotron",children:Object(O.jsxs)("h3",{children:[Object(O.jsx)("strong",{children:e.username})," profile"]})}),Object(O.jsxs)("div",{className:"userDetails",children:[Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Token:"})," ",e.accessToken.substring(0,20)," ..."," ",e.accessToken.substr(e.accessToken.length-20)]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Id:"})," ",e.id]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Email:"})," ",e.email]}),Object(O.jsx)("strong",{children:"Authorities:"}),Object(O.jsx)("ul",{children:e.roles&&e.roles.map((function(e,t){return Object(O.jsx)("li",{className:"authorities",children:e},t)}))})]})]})}),V=(n(250),function(){var e=Object(a.useRef)(),t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),o=Object(i.a)(s,2),l=o[0],u=o[1],j=Object(a.useState)(""),d=Object(i.a)(j,2),b=d[0],h=d[1],x=Object(a.useState)(!1),m=Object(i.a)(x,2),v=m[0],f=m[1],g=Object(a.useState)(""),y=Object(i.a)(g,2),N=y[0],C=y[1];return document.title="My Balance | Register",Object(O.jsxs)("div",{className:"reg col-md-12",children:["Register",Object(O.jsxs)("div",{className:"card card-container",children:[Object(O.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),C(""),f(!1),p(c,l,b).then((function(e){console.log("86 Register: ",e.data.message),C(e.data.message),f(!0)}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();C(t),f(!1)}))},ref:e,className:"RegisterForm",children:[!v&&Object(O.jsxs)("div",{children:[Object(O.jsx)(T,{divCN:"form-group",labelText:"Username",name:"username",type:"text",value:c,onChange:function(e){var t=e.target.value;r(t)},inputCN:"form-control",required:"required"}),Object(O.jsx)(T,{divCN:"form-group",labelText:"Email",name:"email",type:"text",value:l,onChange:function(e){var t=e.target.value;u(t)},inputCN:"form-control",required:"required"}),Object(O.jsx)(T,{divCN:"form-group",labelText:"Password",name:"password",type:"password",value:b,onChange:function(e){var t=e.target.value;h(t)},inputCN:"form-control",required:"required"}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("button",{className:"btn btn-primary btn-block",children:"Sign Up"})})]}),N&&Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("div",{className:v?"alert alert-success":"alert alert-danger",role:"alert",children:N})})]})]})]})}),z=n(3),G=n(4);function H(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}var W="http://localhost:3008/exp/",X=new(function(){function e(){Object(z.a)(this,e)}return Object(G.a)(e,[{key:"getPublicContent",value:function(){return d.a.get(W+"all")}},{key:"getUserBoard",value:function(){return d.a.get(W+"user",{headers:H()})}},{key:"getAdminBoard",value:function(){return d.a.get(W+"admin",{headers:H()})}}]),e}()),$=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){X.getUserBoard().then((function(e){c(e.data)}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();c(t)}))}),[]),Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("header",{className:"jumbtron",children:Object(O.jsx)("h3",{children:n})})})},Y=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){X.getUserBoard().then((function(e){c(e.data)}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();c(t)}))}),[]),Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("header",{className:"jumbtron",children:Object(O.jsx)("h3",{children:n})})})};var K=function(){return Object(O.jsxs)(f.c,{children:[Object(O.jsx)(f.a,{exact:!0,path:["/","/Home"],component:R}),Object(O.jsx)(f.a,{exact:!0,path:"/viewbymonth/",component:k}),Object(O.jsx)(f.a,{exact:!0,path:"/viewbymonth/:month",component:k}),Object(O.jsx)(f.a,{exact:!0,path:"/allExpenses/",component:B}),Object(O.jsx)(f.a,{exact:!0,path:"/charts/",component:J}),Object(O.jsx)(f.a,{exact:!0,path:"/addExpense/",component:L}),Object(O.jsx)(f.a,{exact:!0,path:"/updateExpense/:_id/",component:D}),Object(O.jsx)(f.a,{exact:!0,path:"/login",component:U}),Object(O.jsx)(f.a,{exact:!0,path:"/register",component:V}),Object(O.jsx)(f.a,{exact:!0,path:"/profile",component:P}),Object(O.jsx)(f.a,{exact:!0,path:"/user",component:$}),Object(O.jsx)(f.a,{exact:!0,path:"/admin",component:Y})]})};n(251),n(252);var Q=function(){return document.title="My Balance",Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(v,{}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{children:"My Balance"}),Object(O.jsx)("hr",{}),Object(O.jsx)(K,{})]})]})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,258)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(Q,{})}),document.getElementById("root")),Z()}},[[253,1,2]]]);
//# sourceMappingURL=main.7ea9b341.chunk.js.map