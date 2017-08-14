webpackHotUpdate(0,{674:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),u=a(0),i=l(u),m=a(36),s=l(m),d=a(8),p=(l(d),a(14)),f=(l(p),function(e){function t(e){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return c(t,e),r(t,[{key:"crearTicket",value:function(){var e={origen:document.getElementsByName("origen")[0].value,fechaPago:document.getElementsByName("fechaPago")[0].value,destino:document.getElementsByName("destino")[0].value,adquiriente:document.getElementsByName("adquiriente")[0].value,puesto:document.getElementsByName("puesto")[0].value,precio:Number.parseFloat(document.getElementsByName("precio")[0].value)};s.default.put("/api/tickets",e).then(function(e){location.replace("/tickets")}).catch(function(e){alert(e.response.data)})}},{key:"updateTicket",value:function(){var e={origen:document.getElementsByName("origen")[0].value,fechaPago:document.getElementsByName("fechaPago")[0].value,destino:document.getElementsByName("destino")[0].value,adquiriente:document.getElementsByName("adquiriente")[0].value,puesto:document.getElementsByName("puesto")[0].value,precio:Number.parseFloat(document.getElementsByName("precio")[0].value)};s.default.post("/api/tickets/"+this.props.fid,e).then(function(e){alert("Ticket actualizado"),location.replace("/tickets")}).catch(function(e){alert(e.response.data)})}},{key:"handleSubmit",value:function(){return this.props.update?this.updateTicket():this.crearTicket()}},{key:"componentDidMount",value:function(){this.props.update&&s.default.get("/api/tickets/"+this.props.fid,ticket).then(function(e){var t=e.data;document.getElementsByName("origen")[0].value=t.origen,document.getElementsByName("destino")[0].value=t.destino,document.getElementsByName("precio")[0].value=t.precio,document.getElementsByName("adquiriente")[0].value=t.adquiriente;var a=new Date(t.fechaPago),l=a.getMonth(),n=a.getDay();document.getElementsByName("date")[0].value=String(a.getFullYear())+"-"+(l<9?"0":"")+String(l)+"-"+(n<9?"0":"")+String(n)}).catch(function(e){location.replace("/tickets")})}},{key:"render",value:function(){var e=this;return i.default.createElement("form",{action:"/api/ticket",className:"well form-horizontal",name:"ticket",id:"formulario-ticket",form:!0},i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Origen"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-pencil"})),i.default.createElement("input",{name:"origen",placeholder:"Origen",className:"form-control",type:"text",required:!0})))),i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Destino"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-user"})),i.default.createElement("input",{name:"destino",placeholder:"nombre",className:"form-control",type:"text",required:!0})))),i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Cédula Adquiriente"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-user"})),i.default.createElement("input",{name:"adquiriente",placeholder:"adquiriente",className:"form-control",type:"text",required:!0})))),i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Puesto"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-user"})),i.default.createElement("input",{name:"puesto",placeholder:"puesto",className:"form-control",type:"text",required:!0})))),i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Fecha de Pago"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-calendar"})),i.default.createElement("input",{name:"fechaPago",placeholder:"Fecha de Pago",className:"form-control",type:"date",required:!0})))),i.default.createElement("div",{className:"form-group"},i.default.createElement("label",{className:"col-md-3 control-label"},"Precio"),i.default.createElement("div",{className:"col-md-9 inputGroupContainer"},i.default.createElement("div",{className:"input-group"},i.default.createElement("span",{className:"input-group-addon"},i.default.createElement("i",{className:"glyphicon glyphicon-usd"})),i.default.createElement("input",{name:"precio",placeholder:"Precio",className:"form-control",type:"number",min:"0",step:"0.01",required:!0})))),i.default.createElement("div",{className:"form-group"},i.default.createElement("div",{className:"col-md-8 col-md-offset-2"},i.default.createElement("div",{className:"btn btn-success",onClick:function(){return e.handleSubmit()}},"Guardar",i.default.createElement("span",{className:"glyphicon glyphicon-save"})))))}}]),t}(i.default.Component));t.default=f}});