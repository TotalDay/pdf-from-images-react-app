(this["webpackJsonppdf-from-images-react-app"]=this["webpackJsonppdf-from-images-react-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),c=n(7),r=n.n(c),o=(n(20),n(12)),s=n(8),h=n(9),l=n(10),u=n(13),d=n(14),g=n(11),m=(n(21),n(0)),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this)).mimeType=e,i}return Object(h.a)(n,[{key:"imageType",get:function(){return this.mimeType.split("/")[1]}}]),n}(Object(d.a)(Image)),f=function(e){return new Promise((function(t,n){var i=new b(e.type);i.onload=function(){t(i)},i.onerror=function(){n(new Error("Failed to convert File to Image"))},i.src=URL.createObjectURL(e)}))},p=210,j=297,w=p/j,O=function(e){var t=new g.a;t.deletePage(1),e.forEach((function(e){var n=function(e){if(e.width>=e.height)return{width:p,height:p/(e.width/e.height)};var t=e.width/e.height;if(t>w){var n=w*e.height/e.width,i=j*n;return{height:i,width:i*t}}return{width:j/(e.height/e.width),height:j}}({width:e.width,height:e.height});t.addPage(),t.addImage(e.src,e.imageType,(p-n.width)/2,(j-n.height)/2,n.width,n.height)}));var n=t.output("bloburl");window.open(n,"_blank")};var v=function(){var e=a.a.useState([]),t=Object(o.a)(e,2),n=t[0],i=t[1],c=a.a.useCallback((function(e){var t=e.target.files,n=(t?Array.from(t):[]).map(f);Promise.all(n).then(i)}),[i]),r=a.a.useCallback((function(){i([]),n.forEach((function(e){URL.revokeObjectURL(e.src)}))}),[i,n]),s=a.a.useCallback((function(){O(n),r()}),[n,r]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Convert images to PDFs"}),Object(m.jsx)("div",{className:"images-container",children:n.length>0?n.map((function(e){return Object(m.jsx)("img",{src:e.src,className:"uploaded-image"},e.src)})):Object(m.jsx)("p",{children:"Upload some images..."})}),Object(m.jsxs)("div",{className:"buttons-container",children:[Object(m.jsxs)("label",{htmlFor:"file-input",children:[Object(m.jsx)("span",{className:"button",children:"Upload images"}),Object(m.jsx)("input",{id:"file-input",type:"file",accept:"image/*",onChange:c,style:{display:"none"},multiple:!0})]}),Object(m.jsx)("button",{onClick:s,className:"button",disabled:0===n.length,children:"Generate PDF"})]})]})},x=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,400)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),x()}},[[23,1,3]]]);
//# sourceMappingURL=main.011d4671.chunk.js.map