(this.webpackJsonpcatalogue=this.webpackJsonpcatalogue||[]).push([[0],{113:function(e,t,a){e.exports=a.p+"static/media/card8.c93e6d3b.png"},114:function(e,t,a){e.exports=a.p+"static/media/cabana.b17839a4.png"},115:function(e,t,a){e.exports=a.p+"static/media/corbel.c77ffae5.png"},116:function(e,t,a){e.exports=a.p+"static/media/ritrain.5285ccde.png"},121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(45),c=a.n(o),i=(a(53),a(3)),l=a(8),s=a.n(l);var m=a(11);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=a(7),v=a(14),f=a.n(v),d=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(),m=Object(i.a)(l,2),u=m[0],v=m[1],d=e.keyword,g=e.type,E=e.year;Object(n.useEffect)((function(){if(o||s.a.get("".concat("https://dev.trainingcontent.embl.org","/apitest/ebi-training/events?_format=json&time").concat(Date.now())).then((function(e){c(e.data),v(e.data)})),d&&g&&E){var e=o.filter((function(e){return e.title.toLowerCase().includes(d.toLowerCase())&&e.event_type==g&&e.year==E}));v(e),console.log("all three set")}else if(d&&g){var t=o.filter((function(e){return e.title.toLowerCase().includes(d.toLowerCase())&&e.event_type==g}));v(t)}else if(d&&E){var a=o.filter((function(e){return e.title.toLowerCase().includes(d.toLowerCase())&&e.year==E}));v(a)}else if(g&&E){var n=o.filter((function(e){return e.event_type==g&&e.year==E}));v(n)}else if(d){var r=o.filter((function(e){return e.title.toLowerCase().includes(d.toLowerCase())}));v(r)}else if(g){var i=o.filter((function(e){return e.event_type==g}));v(i)}else if(E){var l=o.filter((function(e){return e.year==E}));v(l),console.log("only year set")}else v(o)}),[d,g,E]);return r.a.createElement("div",null,console.log(u),u&&0==u.length?r.a.createElement("p",{className:"callout"},"No events found"):"",u?u.map((function(e){return r.a.createElement("div",{className:"eventsCard"},r.a.createElement("h3",null,r.a.createElement("a",{href:e.url}," ",e.title)," "),r.a.createElement("div",{className:"eventOverview"},f()(e.overview.substring(0,220))),r.a.createElement("div",{className:"keyinfo"},r.a.createElement("div",{className:"keyinfo-dates"},r.a.createElement("div",{className:"eventLocation"},r.a.createElement("i",{class:"icon icon-common icon-location"})," ",e.location),r.a.createElement("div",{className:"eventDates"},r.a.createElement("i",{class:"icon icon-common icon-calendar-alt"})," ",e.event_date_formatted," ")),r.a.createElement("div",{className:"registerbutton"},f()(function(e){var t=o.filter((function(t){return t.id==e}));if("Onsite"==t[0].event_type||"Offsite"==t[0].event_type){if("closed"==t[0].registration.status)return'<span class="text-danger"> Registration Closed </span>';if("register_interest"==t[0].registration.status)return'<a href="mailto:'+t[0].registration.register_interest_email+'" class="vf-button vf-button--primary vf-button--sm | vf-button--show-hide"> Register Interest</a>';if("open"==t[0].registration.status)return'<a href="'+t[0].registration.link+'" class="vf-button vf-button--primary vf-button--sm | vf-button--show-hide"> Register Now</a>'}}(e.id)))))})):"Loading events")},g=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(),m=Object(i.a)(l,2),u=m[0],v=m[1],d=e.keyword,g=e.type;return Object(n.useEffect)((function(){if(o||s.a.get("".concat("https://dev.trainingcontent.embl.org","/apitest/ebi-training/online-courses?_format=json&time").concat(Date.now())).then((function(e){c(e.data),v(e.data)})),d&&g){var e=o.filter((function(e){return e.title.toLowerCase().includes(d.toLowerCase())&&e.event_category==g}));v(e)}else if(d){var t=o.filter((function(e){return e.title.toLowerCase().includes(d.toLowerCase())}));v(t)}else if(g){var a=o.filter((function(e){return e.event_category==g}));v(a)}else v(o)}),[d,g]),r.a.createElement(r.a.Fragment,null,u&&0==u.length?r.a.createElement("p",{className:"callout"}," No courses found "):"",u?u.map((function(e){return r.a.createElement("div",{className:"BooksCard column"},r.a.createElement("a",{href:e.url},r.a.createElement("div",{className:"book_cover_image_container"},r.a.createElement("img",{src:e.course_image[0].url,className:"book_cover_image"})),r.a.createElement("div",{className:"book_overview_container"},r.a.createElement("h5",null,e.title),r.a.createElement("div",{className:"book_overview"},e.overview?f()(e.overview.substring(0,200)):""),r.a.createElement("div",{className:"book_icons"},r.a.createElement("i",{class:"icon icon-common icon-clock"})," ",e.time_to_complete))))})):"Loading online courses")},E=(a(113),a(114),a(115),a(116),function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(),l=Object(i.a)(c,2),s=l[0],m=l[1],u=Object(n.useState)(),v=Object(i.a)(u,2),f=v[0],E=v[1],p=Object(n.useState)(),b=Object(i.a)(p,2),h=b[0],y=b[1];Object(n.useEffect)((function(){f||E(Math.floor(7*Math.random())+1)}),[]);var w={backgroundImage:"Url(./images/"+f+".jpeg)",backgroundSize:"cover",backgroundPosition:"top",minHeight:"600px",position:"relative"};return r.a.createElement("div",null,r.a.createElement("div",{role:"img","aria-label":"Hero image","data-vf-js-masthead":!0,className:"vf-masthead vf-hero--intense",style:w},r.a.createElement("div",{className:"vf-body"},r.a.createElement("div",{className:"embl-grid",style:{marginBottom:"0px"}},r.a.createElement("div",null),r.a.createElement("div",{className:"hero-image-search acc"},r.a.createElement("h1",{style:{color:"white"}},"EMBL-EBI Training"),r.a.createElement("form",{role:"search"},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{class:"search-label",for:"search_box","aria-labelledby":"searchTitle"},r.a.createElement("i",{class:"icon icon-common icon-search icon-search-custom"},r.a.createElement("title",{id:"searchTitle"},"Search"))),r.a.createElement("input",{id:"search_box",onChange:function(e){return function(e){o(e.target.value)}(e)},type:"search",className:"hero-image-input",placeholder:"Search keyword"}),r.a.createElement("select",{onChange:function(e){return function(e){"0"==e.target.value?m(null):m(e.target.value)}(e)}},r.a.createElement("option",{value:"0"},"Type - All"),r.a.createElement("option",{value:"Onsite"},"Onsite - In person at EMBL-EBI"),r.a.createElement("option",{value:"Offsite"},"Offsite - At your institute"),r.a.createElement("option",{value:"Online-event"},"Online Events - Live webinars or remote classrooms"),r.a.createElement("option",{value:"Online-course"},"Online Courses - Instant and freely available")),r.a.createElement("select",{onChange:function(e){return function(e){"0"==e.target.value?y(null):y(e.target.value),console.log(e.target.value)}(e)}},r.a.createElement("option",{value:"0"},"Year - All"),r.a.createElement("option",{value:"2020"},"2020"),r.a.createElement("option",{value:"2021"},"2021")))))))),r.a.createElement("div",{className:"vf-body"},r.a.createElement("div",{className:"embl-grid"},r.a.createElement("div",{class:"vf-section-header__heading",style:{marginTop:"30px"}},"Training Events"),r.a.createElement("div",{className:"acc"},r.a.createElement(d,{keyword:a,type:s,year:h}))),r.a.createElement("div",{className:"embl-grid"},r.a.createElement("div",{class:"vf-section-header__heading",style:{marginTop:"30px"}},"Online Courses"),r.a.createElement("div",{className:"acc"},r.a.createElement("div",{className:"vf-grid vf-grid__col-2"}," ",r.a.createElement(g,{keyword:a,type:s}))))))}),p=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:E}))},b=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",component:p}))},h=document.getElementById("root");c.a.render(r.a.createElement(m.a,{basename:"/training-catalogue"},r.a.createElement(b,null)),h),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,t,a){e.exports=a(121)},53:function(e,t,a){},95:function(e,t){}},[[48,1,2]]]);
//# sourceMappingURL=main.640fa8e7.chunk.js.map