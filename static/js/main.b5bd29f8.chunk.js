(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(12),i=a.n(r),c=a(2),m=a.n(c),o=a(13),l=a(14),u=a(15),v=a(18),d=a(17),p=a(16),_=a.n(p);a(42);var g=function(e){var t=e.year,a=e.title,n=e.summary,r=e.poster,i=e.genres;return s.a.createElement("div",{className:"movie"},s.a.createElement("img",{src:r,alt:a,title:a}),s.a.createElement("div",{className:"movies__data"},s.a.createElement("h3",{className:"movies__title"},a),s.a.createElement("ul",{className:"genres"},i.map((function(e,t){return s.a.createElement("li",{key:t,className:"genres__genre"},e)}))),s.a.createElement("h5",{className:"movies__year"},t),s.a.createElement("p",{className:"movies__summary"},n.slice(0,140),"...")))},y=(a(43),function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getMovies=Object(o.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:t=e.sent,a=t.data.data.movies,n.setState({movies:a,isLoding:!1});case 5:case"end":return e.stop()}}),e)}))),n.state={isLoding:!0,movies:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoding,a=e.movies;return s.a.createElement("section",{className:"container"},t?s.a.createElement("div",{className:"loader"},s.a.createElement("span",{className:"loader__text"},'"Loding..."')):s.a.createElement("div",{className:"movies"},a.map((function(e){return s.a.createElement(g,{key:e.id,id:e.id,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(s.a.Component));i.a.render(s.a.createElement(y,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b5bd29f8.chunk.js.map