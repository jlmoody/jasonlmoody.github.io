(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(22)},15:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(8),r=a.n(i),c=(a(15),a(1)),s=a(2),l=a(4),m=a(3),u=a(5),h=a(6),p=a.n(h),d=a(9),f=a.n(d),E=(a(20),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.occupation,a=this.props.data.description,n=(this.props.data.address.city,this.props.data.social.map(function(e){return o.a.createElement("li",{key:e.name},o.a.createElement("a",{href:e.url},o.a.createElement("i",{className:e.className})))}));return o.a.createElement("header",{id:"home"},o.a.createElement("nav",{id:"nav-wrap"},o.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),o.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),o.a.createElement("ul",{id:"nav",className:"nav"})),o.a.createElement("div",{className:"row banner"},o.a.createElement("div",{className:"banner-text"},o.a.createElement("h1",{className:"responsive-headline"},e),o.a.createElement("h3",null,o.a.createElement("span",null,t)),o.a.createElement("h3",null,a),o.a.createElement("hr",null),o.a.createElement("ul",{className:"social"},n))),o.a.createElement("p",{className:"scrolldown"},o.a.createElement("a",{className:"smoothscroll",href:"#about"},o.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),v=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map(function(e){return o.a.createElement("li",{key:e.name},o.a.createElement("a",{href:e.url},o.a.createElement("i",{className:e.className})))});return o.a.createElement("footer",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"twelve columns"},o.a.createElement("ul",{className:"social-links"},e),o.a.createElement("ul",{className:"copyright"},o.a.createElement("li",null,"If you like this site then I suggest checking out the following github project: ",o.a.createElement("a",{href:"https://github.com/tbakerx/react-resume-template"},"React Resume Template")," "))),o.a.createElement("div",{id:"go-top"},o.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},o.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){if(this.props.data){this.props.data.name;var e="images/"+this.props.data.image,t=this.props.data.bio,a=(this.props.data.email,this.props.data.things),n=this.props.data.technologies}return o.a.createElement("section",{id:"about"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"three columns"},o.a.createElement("img",{className:"profile-pic",src:e,alt:"Jason L Moody Profile Pic"})),o.a.createElement("div",{className:"nine columns main-col"},o.a.createElement("h2",null,"About Me"),o.a.createElement("p",null,t),o.a.createElement("h2",null,"Things That Excite Me"),o.a.createElement("p",null,a),o.a.createElement("h2",null,"Technologies I Enjoy"),o.a.createElement("p",null,n))))}}]),t}(n.Component),b=(n.Component,n.Component,n.Component,n.Component,function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={foo:"bar",resumeData:{}},p.a.initialize("UA-121236764-1"),p.a.pageview(window.location.pathname),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"getResumeData",value:function(){f.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){console.log(a),alert(a)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(E,{data:this.state.resumeData.main}),o.a.createElement(g,{data:this.state.resumeData.main}),o.a.createElement(v,{data:this.state.resumeData.main}))}}]),t}(n.Component)),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(b,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");w?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):j(e)})}}()}},[[10,2,1]]]);
//# sourceMappingURL=main.ac116b5d.chunk.js.map