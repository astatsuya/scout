(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),i=t(3),r=t.n(i),c=(t(14),t(4)),o=t(5),p=t(8),u=t(6),s=t(7),m=t(1),d=(t(16),function(e){return l.a.createElement("div",{className:"Form"},l.a.createElement("button",{type:"submit",value:"excellent",onClick:e.addHappening},"Excellent"),l.a.createElement("button",{type:"submit",value:"good",onClick:e.addHappening},"Good"),l.a.createElement("button",{type:"submit",value:"bad",onClick:e.addHappening},"Bad"),l.a.createElement("button",{type:"submit",value:"poor",onClick:e.addHappening},"Poor"))}),E=function(e){for(var n=e.happening.length,t=0,a=0,i=0,r=0,c=0;c<n;c++)"excellent"===e.happening[c]?t++:"good"===e.happening[c]?a++:"bad"===e.happening[c]?i++:"poor"===e.happening[c]&&r++;var o=t/n?(t/n*100).toFixed(2):"0.00",p=a/n?(a/n*100).toFixed(2):"0.00",u=i/n?(i/n*100).toFixed(2):"0.00",s=r/n?(r/n*100).toFixed(2):"0.00";return l.a.createElement("div",{className:"Result"},l.a.createElement("div",{className:"top-part"},l.a.createElement("div",{className:"left-container"},l.a.createElement("ul",null,l.a.createElement("li",null,"Excellent:"),l.a.createElement("li",null,"Good:"),l.a.createElement("li",null,"Bad:"),l.a.createElement("li",null,"Poor:"))),l.a.createElement("div",{className:"middle-container"},l.a.createElement("ul",null,l.a.createElement("li",null,t,"\u56de"),l.a.createElement("li",null,a,"\u56de"),l.a.createElement("li",null,i,"\u56de"),l.a.createElement("li",null,r,"\u56de"))),l.a.createElement("div",{className:"right-container"},l.a.createElement("ul",null,l.a.createElement("li",null,o,"%"),l.a.createElement("li",null,p,"%"),l.a.createElement("li",null,u,"%"),l.a.createElement("li",null,s,"%")))),l.a.createElement("div",{className:"bottom-part"},l.a.createElement("p",null,"Total: ",n,"\u56de"),l.a.createElement("button",{onClick:e.resetCurrentHappening},"Reset")))},g=function(e){var n=e.happening.map(function(e,n){return l.a.createElement("li",{key:n},n+1,"\u56de\u76ee\u306e\u8a18\u9332\u306f",e)});return l.a.createElement("div",{className:"PreviousResult"},l.a.createElement("div",{className:"Previous-ul"},l.a.createElement("ul",null,n)))},h=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(p.a)(this,Object(u.a)(n).call(this,e))).state={happening:[]},t.addHappening=t.addHappening.bind(Object(m.a)(Object(m.a)(t))),t.resetCurrentHappening=t.resetCurrentHappening.bind(Object(m.a)(Object(m.a)(t))),t}return Object(s.a)(n,e),Object(o.a)(n,[{key:"addHappening",value:function(e){var n=this.state.happening.concat([e.target.value]);this.setState({happening:n})}},{key:"resetCurrentHappening",value:function(){this.setState({happening:[]})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{addHappening:this.addHappening}),l.a.createElement(E,{happening:this.state.happening,resetCurrentHappening:this.resetCurrentHappening}),l.a.createElement(g,{happening:this.state.happening}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,n,t){e.exports=t(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.8c8634d0.chunk.js.map