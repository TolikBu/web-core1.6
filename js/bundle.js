!function(e){var t={};function n(c){if(t[c])return t[c].exports;var i=t[c]={i:c,l:!1,exports:{}};return e[c].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(c,i,function(t){return e[t]}.bind(null,i));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);var c=function(){var e=document.querySelectorAll(".telephone"),t=document.querySelector(".overlays-backcall"),n=document.querySelector(".backcall-modal"),c=document.querySelector("body");e.forEach((function(e){e.addEventListener("click",(function(){t.classList.add("overlays-backcall--active"),n.classList.add("backcall-modal--active"),c.classList.add("scroll")}))})),t.addEventListener("click",(function(e){e.target.closest(".backcall-modal")&&!e.target.classList.contains("backcall-form__close")||(t.classList.remove("overlays-backcall--active"),n.classList.remove("backcall-modal--active"),c.classList.remove("scroll"))}))},i=function(){var e=document.querySelector(".about-info__btn"),t=document.querySelector(".about-info__btn-arrow"),n=document.querySelector(".about-info__hidden"),c=document.querySelector(".brands__btn"),i=document.querySelector(".brands-items"),o=document.querySelector(".brands__btn-arrow"),r=document.querySelector(".view__btn"),a=document.querySelector(".view-items"),s=document.querySelector(".view__btn-arrow");e.addEventListener("click",(function(){n.classList.toggle("about-info__hidden--active"),t.classList.toggle("about-info__btn-arrow--active")})),c.addEventListener("click",(function(){i.classList.toggle("brands-items--active"),o.classList.toggle("brands__btn-arrow--active")})),r.addEventListener("click",(function(){a.classList.toggle("view-items--active"),s.classList.toggle("view__btn-arrow--active")}))},o=function(){var e=document.querySelector(".head-logo__btn"),t=document.querySelector(".sidebar__close"),n=document.querySelector(".sidebar"),c=document.querySelector(".overlays"),i=document.querySelector(".telephone");e.addEventListener("click",(function(){n.classList.add("sidebar--active"),c.classList.add("overlays--active")})),c.addEventListener("click",(function(e){n.classList.remove("sidebar--active"),c.classList.remove("overlays--active")})),t.addEventListener("click",(function(e){n.classList.remove("sidebar--active"),c.classList.remove("overlays--active")})),i.addEventListener("click",(function(e){n.classList.remove("sidebar--active"),c.classList.remove("overlays--active")}))},r=function(){var e,t=!1;!function n(){window.innerWidth<=576?t||(t=!0,e=new Swiper(".swiper-brands",{slidesPerView:"auto",spaceBetween:16,pagination:{el:".swiper-pagination-brands",clickable:!0}})):t&&(e.destroy(),t=!1),window.addEventListener("resize",n)}()},a=function(){var e,t=!1;!function n(){window.innerWidth<=576?t||(t=!0,e=new Swiper(".swiper-view",{slidesPerView:"auto",spaceBetween:16,pagination:{el:".swiper-pagination-view",clickable:!0}})):t&&(e.destroy(),t=!1),window.addEventListener("resize",n)}()},s=function(){var e,t=!1;!function n(){window.innerWidth<=576?t||(t=!0,e=new Swiper(".swiper-price",{spaceBetween:16,pagination:{el:".swiper-pagination-price",clickable:!0}})):t&&(e.destroy(),t=!1),window.addEventListener("resize",n)}()},l=function(){var e,t=!1;!function n(){window.innerWidth<=768?t||(t=!0,e=new Swiper(".swiper-menu",{slidesPerView:"auto",spaceBetween:16})):t&&(e.destroy(),t=!1),window.addEventListener("resize",n)}(),console.log("work")};(function(){var e=document.querySelectorAll(".icon-message"),t=document.querySelector(".overlays"),n=document.querySelector(".feedback-modal"),c=document.querySelector("body");e.forEach((function(e){e.addEventListener("click",(function(){t.classList.add("overlays--active"),n.classList.add("feedback-modal--active"),c.classList.add("scroll")}))})),t.addEventListener("click",(function(e){e.target.closest(".feedback-modal")&&!e.target.classList.contains("feedback-form__close")||(t.classList.remove("overlays--active"),n.classList.remove("feedback-modal--active"),c.classList.remove("scroll"))}))})(),c(),i(),o(),r(),a(),s(),l()}]);
//# sourceMappingURL=bundle.js.map