webpackHotUpdate(0,{257:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function c(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function o(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=function(){function e(e,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(a,t,l){return t&&e(a.prototype,t),l&&e(a,l),a}}(),u=t(0),m=l(u),s=t(59),d=l(s),i=t(19),f=(l(i),t(22)),p=(l(f),function(e){function a(e){return n(this,a),c(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e))}return o(a,e),r(a,[{key:"crearFactura",value:function(){var e={numfactura:document.getElementsByName("numfactura")[0].value,cliente:document.getElementsByName("cliente")[0].value,costo:document.getElementsByName("costo")[0].value,estado:document.getElementsByName("estado")[0].value,date:document.getElementsByName("date")[0].value};d.default.put("/api/facturas",e).then(function(e){location.replace("/facturas")}).catch(function(e){alert(e.response.data)})}},{key:"updateFactura",value:function(){var e={numfactura:document.getElementsByName("numfactura")[0].value,cliente:document.getElementsByName("cliente")[0].value,costo:document.getElementsByName("costo")[0].value,estado:document.getElementsByName("estado")[0].value,date:document.getElementsByName("date")[0].value};d.default.post("/api/facturas/"+this.props.fid,e).then(function(e){alert("Factura actualizada"),location.replace("/facturas")}).catch(function(e){alert(e.response.data)})}},{key:"handleSubmit",value:function(){return this.props.update?updateFactura():crearFactura()}},{key:"componentDidMount",value:function(){this.props.update&&d.default.get("/api/facturas/"+this.props.fid,factura).then(function(e){var a=e.data;alert(JSON.stringify(a))}).catch(function(e){alert("la factura no existe"),location.replace("/facturas")})}},{key:"render",value:function(){var e=this;return m.default.createElement("form",{action:"/api/facturas",className:"well form-horizontal",name:"factura",id:"formulario-factura",form:!0},m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{className:"col-md-3 control-label"},"Número de Factura"),m.default.createElement("div",{className:"col-md-9 inputGroupContainer"},m.default.createElement("div",{className:"input-group"},m.default.createElement("span",{className:"input-group-addon"},m.default.createElement("i",{className:"glyphicon glyphicon-pencil"})),m.default.createElement("input",{name:"numfactura",placeholder:"Número de Factura",className:"form-control",type:"text",required:!0})))),m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{className:"col-md-3 control-label"},"Cliente"),m.default.createElement("div",{className:"col-md-9 inputGroupContainer"},m.default.createElement("div",{className:"input-group"},m.default.createElement("span",{className:"input-group-addon"},m.default.createElement("i",{className:"glyphicon glyphicon-user"})),m.default.createElement("input",{name:"cliente",placeholder:"Cliente",className:"form-control",type:"text",required:!0})))),m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{className:"col-md-3 control-label"},"Fecha Máxima de Pago"),m.default.createElement("div",{className:"col-md-9 inputGroupContainer"},m.default.createElement("div",{className:"input-group"},m.default.createElement("span",{className:"input-group-addon"},m.default.createElement("i",{className:"glyphicon glyphicon-calendar"})),m.default.createElement("input",{name:"date",placeholder:"Fecha Máxima de Pago",className:"form-control",type:"date",required:!0})))),m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{className:"col-md-3 control-label"},"Total a Pagar"),m.default.createElement("div",{className:"col-md-9 inputGroupContainer"},m.default.createElement("div",{className:"input-group"},m.default.createElement("span",{className:"input-group-addon"},m.default.createElement("i",{className:"glyphicon glyphicon-usd"})),m.default.createElement("input",{name:"costo",placeholder:"Total a Pagar",className:"form-control",type:"number",min:"0",step:"0.01",required:!0})))),m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{className:"col-md-3 control-label"},"Mensaje"),m.default.createElement("div",{className:"col-md-9 inputGroupContainer"},m.default.createElement("div",{className:"input-group"},m.default.createElement("span",{className:"input-group-addon"},m.default.createElement("i",{className:"glyphicon glyphicon-info-sign"})),m.default.createElement("select",{name:"estado",className:"form-control"},m.default.createElement("option",{disabled:!0,selected:!0,value:!0},"Seleccione un estado"),m.default.createElement("option",{value:"pagado"},"Pagado"),m.default.createElement("option",{value:"pendiente"},"Pendiente"),m.default.createElement("option",{value:"acumulado"},"Acumulado"))))),m.default.createElement("div",{className:"form-group"},m.default.createElement("div",{className:"col-md-8 col-md-offset-2"},m.default.createElement("div",{className:"btn btn-success",onClick:function(){return e.crearFactura()}},"Guardar",m.default.createElement("span",{className:"glyphicon glyphicon-save"})))))}}]),a}(m.default.Component));a.default=p}});