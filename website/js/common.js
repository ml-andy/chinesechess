function getUrlVars(){for(var i,e=[],n=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),o=0;o<n.length;o++)i=n[o].split("="),e.push(i[0]),e[i[0]]=i[1];return e}$(document).ready(function(){function e(){}function n(i){return i.addClass("on"),O.userdata={postdate:(new Date).getFullYear()+"/"+(1*(new Date).getMonth()+1)+"/"+(new Date).getDate()+"星期"+T((new Date).getDay()),userword:$(".user_word").val(),username:$(".user_name").val(),userphone:$(".user_phone").val(),useremail:$(".user_email").val()},O.userdata.userword&&O.userdata.username&&O.userdata.userphone&&O.userdata.useremail?(k(!0),void $.ajax({url:"https://api.mlab.com/api/1/databases/chinesechess2016/collections/emailbox1?apiKey="+O.mlabApikey,type:"POST",contentType:"application/json",data:JSON.stringify(O.userdata),success:function(e){o(),alert("我們已收到您的意見，將由專人盡快回覆處理，謝謝你。"),i.removeClass("on"),k(!1)},error:function(e,n,o){i.removeClass("on"),k(!1),console.log("error:",e,n,o)}})):(alert("請填寫完整資料"),void i.removeClass("on"))}function o(){$(".user_word").val(""),$(".user_name").val(""),$(".user_phone").val(""),$(".user_email").val("")}function t(i){$(".contact_boxin .addr").html(i[0].addr),2==getUrlVars().page&&$("body,html").animate({scrollTop:$(".pg2").offset().top-50},0),k(!1)}function a(e){$(".about_boxin").html('<div class="title">'+e[0].title+'</div><div class="cover"><img src="'+e[0].cover+'" alt=""></div><div class="info">'+e[0].info+'</div><div class="teacher"><div class="t">專業師資</div><div class="box"></div></div>');for(i in e[0].list)$(".teacher .box").append('<div class="per"><div class="pic"><img src="'+e[0].list[i].pic+'"></div><div class="name">'+e[0].list[i].name+'</div><div class="w">'+e[0].list[i].des+"</div></div>");$(".sec_menu a").eq(O.nowpage-1).addClass("on"),k(!1)}function s(e){e=e.reverse(),$(".link_boxin").html("");for(i in e)$(".link_boxin").append('<a href="'+e[i].link+'" class="n" target="_blank"><img src="'+e[i].pic+'"></a>');k(!1)}function l(e){e=e.reverse(),$(".award_boxin").html("");for(i in e){$(".award_boxin").append('<div class="award_list"><div class="title">'+e[i].title+'</div><ul><li class="t"><div class="lt">姓名</div><div class="rt">獎項</div></li></ul></div>');for(j in e[i].list)$(".award_boxin .award_list").eq(i).find("ul").append('<li><div class="lt">'+e[i].list[j].name+'</div><div class="rt">'+e[i].list[j].word+"</div></li>")}k(!1)}function p(i){$(".learn_boxin .title").eq(0).html(i[0].title),$(".learn_boxin .main").html('<div class="lt paperpic"><div class="pic photoimg"><div class="icon learnicon"></div><img src="'+i[0].photo+'"></div></div><div class="rt"><div class="t">【課程資訊】</div><div class="w">'+i[0].classinfo+'</div><div class="t">【課表說明】</div><div class="w">'+i[0].classdes+"</div></div>"),$(".sec_menu a").eq(O.nowpage-1).addClass("on"),$(".learnicon").click(function(){u(!0,$(this).parent().find("img").attr("src"),"paperpic",$(this).parent().index())}),k(!1)}function r(e){$(".learn_boxin .photo").html("");for(i in e)$(".learn_boxin .photo").prepend('<div class="pic photoimg"><img src="'+e[i].pic+'" alt=""></div>');$(".learn_box .photo .pic").click(function(){u(!0,$(this).find("img").attr("src"),"photo",$(this).index())}),k(!1)}function c(e){$(".news_content_boxin").html("");var n=getUrlVars().id;n||(alert("沒有該則消息"),_("news.html?page=1"));var o=!0;for(i in e)e[i]._id.$oid==n&&(o=!1,$(".news_content_boxin").html('<div class="title">'+e[i].title+'</div><div class="date">'+e[i].date+'</div><div class="pic"><img src="'+e[i].bpic+'"></div><div class="w">'+e[i].bword+"</div>"));o&&(alert("沒有該則消息"),_("news.html?page=1")),4==O.nowpage?$(".sec_menu .back").attr("href","index.html?newspage=1"):$(".sec_menu .back").attr("href","news.html?page="+O.nowpage),k(!1)}function d(e){e=e.reverse(),$(".news_boxin").html("");for(i in e)$(".news_boxin").append('<a href="news_content.html?id='+e[i]._id.$oid+"&page="+O.nowpage+'" class="n"><div class="pic"><div class="picin"><img src="'+e[i].spic+'"></div></div><div class="t">'+e[i].title+'</div><div class="w">'+e[i].sword+'</div><div class="date">'+e[i].date+'</div><div class="more">觀看更多</div></a>');$(".sec_menu a").eq(O.nowpage-1).addClass("on"),k(!1)}function h(e,n){if(e&&(e.collectname=n,O.indexphoto.push(e)),O.indexcomplete+=1,console.log(O.indexcomplete),7==O.indexcomplete){console.log("complete");for(i in O.indexphoto)if("index_banner"==O.indexphoto[i].collectname){$(".banner .swiper-wrapper").html("");for(var o=0;o<O.indexphoto[i].length;o++)$(".banner .swiper-wrapper").append('<div class="swiper-slide"><a href="javascript:;"><img src="'+O.indexphoto[i][o].pic+'"></a></div>')}else if("index_photo"==O.indexphoto[i].collectname){$(".photo_video .swiper-wrapper").html("");for(var o=0;o<O.indexphoto[i].length;o++)$(".photo_video .swiper-wrapper").append('<div class="swiper-slide photoimg"><a href="javascript:;"><img src="'+O.indexphoto[i][o].pic+'" alt=""></a></div>')}else if("index_video"==O.indexphoto[i].collectname){var t=O.indexphoto[i][0].video.split("v=")[1];$(".photo_video .video").html('<dvi class="t">相關影音</dvi><iframe width="100" height="100" src="https://www.youtube.com/embed/'+t+'" frameborder="0" allowfullscreen></iframe>')}$(".news .boxall .box").html(""),$(".paper .paperin").html("");for(i in O.indexNews)if(4!=O.indexNews[i].collections)for(var o=0;o<O.indexNews[i].length;o++)$(".news .boxall .box").eq(1*O.indexNews[i].collections-1).append('<a href="news_content.html?id='+O.indexNews[i][o]._id.$oid+"&page="+O.indexNews[i].collections+'" class="n"><div class="pic"><div class="picin"><img src="'+O.indexNews[i][o].spic+'" alt=""></div></div><div class="t">'+O.indexNews[i][o].title+'</div><div class="w">'+O.indexNews[i][o].sword+'</div><div class="date">'+O.indexNews[i][o].date+'</div><div class="more">觀看更多</div></a>');else for(var o=0;o<O.indexNews[i].length;o++)$(".paper .paperin").append('<a href="news_content.html?id='+O.indexNews[i][o]._id.$oid+"&page="+O.indexNews[i].collections+'" class="n"><div class="t">'+O.indexNews[i][o].title+'</div><div class="w">'+O.indexNews[i][o].sword+'</div><div class="date">'+O.indexNews[i][o].date+"</div></a>");O.banner_swiper=new Swiper(".banner_container",{speed:1e3,wrapperClass:"swiper-wrapper",slideClass:"swiper-slide",slidesPerView:1,pagination:".banner-pagination",paginationClickable:!0,spaceBetween:0,loop:!0,autoplay:6e3,autoplayDisableOnInteraction:!1}),O.photo_swiper=new Swiper(".photo_container",{speed:500,wrapperClass:"swiper-wrapper",slideClass:"swiper-slide",slidesPerView:1,spaceBetween:0,loop:!0,autoplay:4e3,autoplayDisableOnInteraction:!1}),f(),g(0),getUrlVars().newspage&&$("html,body").animate({scrollTop:$(".paper").offset().top-50},0),k(!1),$(".photo_video .photo a").click(function(){u(!0,$(this).find("img").attr("src"),"photo_video",$(this).parent().index())})}}function w(){O.indexcomplete=0,O.indexphoto=[],O.indexNews=[];for(var i=1;5>i;i++)v(i);y("index_banner",h),y("index_photo",h),y("index_video",h)}function v(i){$.ajax({url:"https://api.mlab.com/api/1/databases/chinesechess2016/collections/news_page"+i+'?s={"_id":-1}&l=3&apiKey='+O.mlabApikey,type:"GET",contentType:"application/json",success:function(e){e.collections=i,O.indexNews.push(e),h()},error:function(i,e,n){console.log("error:",i,e,n)}})}function f(){for(var i=0;i<$(".banner .swiper-slide").length;i++){var e=($(window).width()-$(".banner .swiper-slide").eq(i).find("img").width())/2;0>e&&$(".banner .swiper-slide").eq(i).find("img").css("margin-left",e)}}function u(i,e,n,o){i?(O.nowphotopop=$("."+n),O.nowphotopopnum=o,O.nowphotopop.find(".photoimg").length<2?$(".photo_pop .ctrl").hide():$(".photo_pop .ctrl").show(),$(".photo_pop").fadeIn(300,function(){$(".photo_pop .photo").addClass("on")}),$(".photo_pop .photo img").attr("src",e)):$(".photo_pop").fadeOut(300,function(){$(".photo_pop .photo").removeClass("on")})}function m(i){"next"==i?O.nowphotopopnum+=1:"prev"==i&&(O.nowphotopopnum-=1),O.nowphotopopnum>O.nowphotopop.find(".photoimg").length-1?O.nowphotopopnum=0:O.nowphotopopnum<0&&O.nowphotopop.find(".photoimg").length-1;var e=O.nowphotopop.find(".photoimg").eq(O.nowphotopopnum).find("img").attr("src");$(".photo_pop .photo img").attr("src",e)}function g(i){$(".newsbar li").removeClass("on").eq(i).addClass("on"),$(".news .boxall .box").removeClass("on").eq(i).addClass("on")}function b(i){0==i?_("about.html?page=1"):1==i?_("news.html?page=1"):2==i?_("learn.html?page=1"):3==i?_("award.html"):4==i?_("link.html"):5==i?_("contact.html?page=1"):6==i&&_("contact.html?page=2")}function _(i){window.location.href=i}function x(){window.pageYOffset>0?$(".gotopbtn").fadeIn():$(".gotopbtn").fadeOut()}function k(i){i?$(".loading").fadeIn(1e3):$(".loading").fadeOut(1e3)}function C(){O.wrp.hasClass("index")&&f(),$(".banner_inside").length>0&&q()}function y(i,e){$.ajax({url:"https://api.mlab.com/api/1/databases/chinesechess2016/collections/"+i+O.nowpage+'?s={"_id":-1}&apiKey='+O.mlabApikey,type:"GET",contentType:"application/json",success:function(n){e(n,i)},error:function(i,e,n){console.log("error:",i,e,n)}})}function N(i,e){$.ajax({url:"https://api.mlab.com/api/1/databases/chinesechess2016/collections/"+i+O.nowpage+"?apiKey="+O.mlabApikey,type:"GET",contentType:"application/json",success:function(i){e(i)},error:function(i,e,n){console.log("error:",i,e,n)}})}function q(){var i=($(window).width()-$(".banner_inside").find("img").width())/2;0>i&&$(".banner_inside").find("img").css("margin-left",i)}function T(i){return 0==i?i="日":1==i?i="一":2==i?i="二":3==i?i="三":4==i?i="四":5==i?i="五":6==i&&(i="六"),i}var O={};O.wrp=$(".wrapper"),O.mlabApikey="n6FXodWWCdM14KrePZHrRPPovbzboRn6",O.nowpage=getUrlVars().page,O.nowpage||(O.nowpage=1),O.wrp.hasClass("index")&&w(),O.wrp.hasClass("news")&&N("news_page",d),O.wrp.hasClass("news_content")&&N("news_page",c),O.wrp.hasClass("learn")&&(N("learning_page",p),N("learning_photo_page",r)),O.wrp.hasClass("award")&&N("awards",l),O.wrp.hasClass("link")&&N("otherlink",s),O.wrp.hasClass("about")&&N("aboutus_page",a),O.wrp.hasClass("contact")&&(O.nowpage=1,N("contactus",t)),$(".banner_inside").length>0&&q(),$(".contact_box .user_btn").click(function(){$(this).hasClass("on")||n($(this))}),$(".photo_pop .rightbtn").click(function(){m("next")}),$(".photo_pop .leftbtn").click(function(){m("prev")}),$(".photo_pop .closebtn").click(function(){u(!1)}),$(".photo_pop .cover").click(function(){u(!1)}),$(".newsbar li").click(function(){g($(this).index())}),$(".menua").click(function(){b($(this).index())}),$(".gotopbtn").click(function(){$("html,body").animate({scrollTop:0},500)}),$(".banner .leftbtn").click(function(){O.banner_swiper.slidePrev()}),$(".banner .rightbtn").click(function(){O.banner_swiper.slideNext()}),$(".photo .leftbtn").click(function(){O.photo_swiper.slidePrev()}),$(".photo .rightbtn").click(function(){O.photo_swiper.slideNext()}),$(".top .logo").click(function(){_("index.html")}),window.onscroll=x,$(window).load(function(){e()}),$(window).resize(function(){C()})});