$(document).ready(function(){function e(e){$(".newsbar li").removeClass("on").eq(e).addClass("on"),$(".news .boxall .box").removeClass("on").eq(e).addClass("on")}function n(e){0==e?a("about.html?page=1"):1==e?a("news.html?page=1"):2==e?a("learn.html?page=1"):3==e?a("award.html"):4==e?a("link.html"):5==e?a("contact.html?page=1"):6==e&&a("contact.html?page=2")}function i(){e(0),o.banner_swiper=new Swiper(".banner_container",{speed:1e3,wrapperClass:"swiper-wrapper",slideClass:"swiper-slide",slidesPerView:1,pagination:".banner-pagination",paginationClickable:!0,spaceBetween:0,loop:!0,autoplay:6e3,autoplayDisableOnInteraction:!1}),o.photo_swiper=new Swiper(".photo_container",{speed:500,wrapperClass:"swiper-wrapper",slideClass:"swiper-slide",slidesPerView:1,spaceBetween:0,loop:!0,autoplay:4e3,autoplayDisableOnInteraction:!1})}function a(e){window.location.href=e}function t(){window.pageYOffset>0?$(".gotopbtn").fadeIn():$(".gotopbtn").fadeOut()}var o={};o.wrp=$(".wrapper"),o.wrp.hasClass("index")&&i(),$(".newsbar li").click(function(){e($(this).index())}),$(".menua").click(function(){n($(this).index())}),$(".gotopbtn").click(function(){$("html,body").animate({scrollTop:0},500)}),$(".banner .leftbtn").click(function(){o.banner_swiper.slidePrev()}),$(".banner .rightbtn").click(function(){o.banner_swiper.slideNext()}),$(".photo .leftbtn").click(function(){o.photo_swiper.slidePrev()}),$(".photo .rightbtn").click(function(){o.photo_swiper.slideNext()}),window.onscroll=t});