(this["webpackJsonpmy-app1"]=this["webpackJsonpmy-app1"]||[]).push([[0],{12:function(e,t,a){e.exports=a(25)},17:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(9),o=a.n(i),s=(a(17),a(11)),l=a(1),r=a(2),m=a(5),v=a(4),u=a(3),d=a(8),h=function(e){Object(v.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={willWatch:!1},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.movie,n=t.removeMovie,i=t.addMovieToWillWatch,o=t.removeMovieToWillWatch,s=d({"btn btn-success":this.state.willWatch,"btn btn-secondary":!this.state.willWatch});return c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:"https:image.tmdb.org/t/p/w500".concat(a.backdrop_path||a.poster_path),alt:""}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h6",{className:"card-title"},a.title),c.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},c.a.createElement("p",{className:"mb-0"},"Rating: ",a.vote_average),c.a.createElement("button",{onClick:function(){e.setState({willWatch:!e.state.willWatch}),e.state.willWatch?o(a):i(a)},type:"button",className:s},this.state.willWatch?"Remove Will Watch":"Add Will Watch"))),c.a.createElement("button",{onClick:n.bind(this,a)},"Delete movie"))}}]),a}(c.a.Component),p=a(8),b=function(e){Object(v.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).getClass=function(t){return p({"nav-link":!0,active:e.props.sort_by===t})},e.handleClick=function(t){return function(){e.props.updateSortBy(t)}},e}return Object(r.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.sort_by!==this.props.sort_by}},{key:"render",value:function(){return c.a.createElement("ul",{className:"tabs nav nav-pills"},c.a.createElement("li",{className:this.getClass("popularity.desc"),onClick:this.handleClick("popularity.desc")},c.a.createElement("div",{className:"nav-link"},"Popularity desc")),c.a.createElement("li",{className:this.getClass("revenue.desc"),onClick:this.handleClick("revenue.desc")},c.a.createElement("div",{className:"nav-link"},"Revenue desc")),c.a.createElement("li",{className:this.getClass("vote_average.desc"),onClick:this.handleClick("vote_average.desc")},c.a.createElement("div",{className:"nav-link"},"Vote average desc")))}}]),a}(c.a.Component),g=a(10),f=a.n(g),W=(a(23),function(e){Object(v.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handlePageClick=function(t){var a=t.selected,n=a*e.state.perPage;e.setState({currentPage:a+1,offset:n},(function(){e.getMovies()}))},e.getMovies=function(){fetch("".concat("https://api.themoviedb.org/3","/discover/movie?api_key=").concat("3f4ca4f3a9750da53450646ced312397","&sort_by=").concat(e.state.sort_by,"&page=").concat(e.state.currentPage)).then((function(e){return e.json()})).then((function(t){e.setState({movies:t.results,currentPage:t.page,pageCount:t.total_pages})}))},e.removeMovie=function(t){var a=e.state.movies.filter((function(e){return e.id!==t.id}));e.setState({movies:a})},e.addMovieToWillWatch=function(t){var a=[].concat(Object(s.a)(e.state.moviesWillWatch),[t]);e.setState({moviesWillWatch:a})},e.removeMovieToWillWatch=function(t){var a=e.state.moviesWillWatch.filter((function(e){return e.id!==t.id}));e.setState({moviesWillWatch:a})},e.updateSortBy=function(t){e.setState({sort_by:t})},e.state={movies:[],moviesWillWatch:[],sort_by:"popularity.desc",offset:0,perPage:20,currentPage:1,pageCount:0},e.handlePageClick=e.handlePageClick.bind(Object(m.a)(e)),e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentDidUpdate",value:function(e,t){t.sort_by!==this.state.sort_by&&this.getMovies()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row mt-4"},c.a.createElement("div",{className:"col-9"},c.a.createElement("div",{className:"row mb-4"},c.a.createElement("div",{className:"col-12"},c.a.createElement(b,{sort_by:this.state.sort_by,updateSortBy:this.updateSortBy}))),c.a.createElement("div",{className:"row"},this.state.movies.map((function(t){return c.a.createElement("div",{className:"col-6 mb-4",key:t.id},c.a.createElement(h,{movie:t,removeMovie:e.removeMovie,addMovieToWillWatch:e.addMovieToWillWatch,removeMovieToWillWatch:e.removeMovieToWillWatch}))})))),c.a.createElement("div",{className:"col-3"},c.a.createElement("p",null,"Will watch: ",this.state.moviesWillWatch.length))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement(f.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))))}}]),a}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(24);o.a.render(c.a.createElement(c.a.StrictMode,null," ",c.a.createElement(W,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.5f3962d3.chunk.js.map