(function(a){"use strict";function d(){a('body').addClass('preloader-deactive')}a('[data-bg-img]').each(function(){a(this).css('background-image','url('+a(this).data("bg-img")+')')}),a('[data-bg-color]').each(function(){a(this).css('background-color',a(this).data("bg-color"))}),a('[data-height]').each(function(){a(this).css('height',a(this).data("height"))}),a('[data-padding-bottom]').each(function(){a(this).css('padding-bottom',a(this).data("padding-bottom"))});var b=a(".off-canvas-wrapper");a(".btn-menu").on('click',function(){b.addClass('active'),a("body").addClass('fix')}),a(".close-action > .btn-close, .off-canvas-overlay").on('click',function(){b.removeClass('active'),a("body").removeClass('fix')}),a('.main-menu').slicknav({appendTo:'.res-mobile-menu',closeOnClick:!0,removeClasses:!0,closedSymbol:'<i class="icon-arrows-plus"></i>',openedSymbol:'<i class="icon-arrows-minus"></i>'}),a(document).ready(function(){var a=new Swiper('.service-slider-container',{slidesPerView:3,speed:1e3,loop:!0,spaceBetween:30,autoplay:!1,breakpoints:{1200:{slidesPerView:3,spaceBetween:84},992:{slidesPerView:3,spaceBetween:30},768:{slidesPerView:2,spaceBetween:50},576:{slidesPerView:2,spaceBetween:30},0:{slidesPerView:1}}}),b=new Swiper('.team-slider-container',{slidesPerView:3,speed:1e3,loop:!0,spaceBetween:30,autoplay:!1,pagination:{el:'.swiper-pagination',clickable:!0},breakpoints:{1200:{slidesPerView:3},991:{slidesPerView:2},767:{slidesPerView:2},560:{slidesPerView:2},0:{slidesPerView:1}}}),c=new Swiper('.case-slider-container',{slidesPerView:2,speed:1e3,loop:!0,spaceBetween:30,autoplay:!1,pagination:{el:'.swiper-pagination',clickable:!0},breakpoints:{1200:{slidesPerView:2},991:{slidesPerView:2},767:{slidesPerView:2},576:{slidesPerView:2},0:{slidesPerView:1}}}),d=new Swiper('.testimonial-slider-container',{slidesPerView:1,speed:1e3,loop:!0,spaceBetween:0,effect:'fade',fadeEffect:{crossFade:!0},autoplay:{delay:2500,disableOnInteraction:!0},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}}),e=new Swiper('.department-gallery',{slidesPerView:1,speed:1e3,loop:!0,spaceBetween:10,autoplay:{delay:2500,disableOnInteraction:!0},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}}),f=new Swiper('.brand-logo-slider-container',{slidesPerView:5,loop:!0,speed:1e3,spaceBetween:30,autoplay:!1,breakpoints:{1200:{slidesPerView:5,spaceBetween:100},992:{slidesPerView:4,spaceBetween:90},768:{slidesPerView:3,spaceBetween:110},576:{slidesPerView:3,spaceBetween:60},380:{slidesPerView:3,spaceBetween:30},0:{slidesPerView:2,spaceBetween:30}}})}),a('.lightbox-image').fancybox(),a('.play-video-popup').fancybox(),a(window).on('scroll',function(){if(a(this).scrollTop()>250?a('.scroll-to-top').fadeIn():a('.scroll-to-top').fadeOut(),a('.sticky-header').length){var b=a(this).scrollTop();b>=80?a('.sticky-header').addClass('sticky'):a('.sticky-header').removeClass('sticky')}}),jQuery(document).ready(function(a){var c=a('#contact-form'),b=a('.form-message');a(c).submit(function(d){d.preventDefault();var e=c.serialize();a.ajax({type:'POST',url:c.attr('action'),data:e}).done(function(c){a(b).removeClass('alert alert-danger'),a(b).addClass('alert alert-success fade show'),b.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>"),b.append(c),a('#contact-form input,#contact-form textarea').val('')}).fail(function(c){a(b).removeClass('alert alert-success'),a(b).addClass('alert alert-danger fade show'),c.responseText!==''?(b.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>"),b.append(c.responseText)):a(b).text('Oops! An error occurred and your message could not be sent.')})})}),a("#datepicker").datepicker(),a('.scroll-to-top').on('click',function(){return a('html, body').animate({scrollTop:0},800),!1});let e=a(".reveal-footer"),c=e.outerHeight(),f=a(window).width(),g=a(window).outerHeight();f>991&&g>c&&a(".site-wrapper-reveal").css({'margin-bottom':c+'px'}),a(window).on('load',function(){AOS.init(),d()}),a(window).on('scroll',function(){}),a(window).on('resize',function(){})})(window.jQuery)