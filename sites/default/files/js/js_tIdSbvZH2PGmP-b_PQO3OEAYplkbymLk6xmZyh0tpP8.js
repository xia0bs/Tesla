(function (window, document, $, Drupal) {
    "use strict";

    Drupal.behaviors.stickyHeader = {
        attach: function() {
            $(window).scroll(function() {
                if( $(window).scrollTop() > 42 ) {
                    $("#sticky-header").css({position: 'fixed', top: '0px'});
                } else {
                    $("#sticky-header").css({position: ''});
                }
            });
        }
    }

}(this, this.document, this.jQuery, this.Drupal));
;
/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.2
 */
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});;
/**
 * Copyright (c) 2007 Ariel Flesler - aflesler<a>gmail<d>com | https://github.com/flesler
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.0.0
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(t,o,n){var i=o.hash.slice(1),a=document.getElementById(i)||document.getElementsByName(i)[0];if(a){t&&t.preventDefault();var l=e(n.target);if(!(n.lock&&l.is(":animated")||n.onBefore&&!1===n.onBefore(t,a,l))){if(n.stop&&l.stop(!0),n.hash){var r=a.id===i?"id":"name",s=e("<a> </a>").attr(r,i).css({position:"absolute",top:e(window).scrollTop(),left:e(window).scrollLeft()});a[r]="",e("body").prepend(s),location.hash=o.hash,s.remove(),a[r]=i}l.scrollTo(a,n).trigger("notify.serialScroll",[a])}}}var o=location.href.replace(/#.*/,""),n=e.localScroll=function(t){e("body").localScroll(t)};return n.defaults={duration:1e3,axis:"y",event:"click",stop:!0,target:window,autoscroll:!0},e.fn.localScroll=function(i){function a(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")===o&&(!i.filter||e(this).is(i.filter))}return(i=e.extend({},n.defaults,i)).autoscroll&&i.hash&&location.hash&&(i.target&&window.scrollTo(0,0),t(0,location,i)),i.lazy?this.on(i.event,"a,area",function(e){a.call(this)&&t(e,this,i)}):this.find("a,area").filter(a).bind(i.event,function(e){t(e,this,i)}).end().end()},n.hash=function(){},n});
;
/**
 * include this file and it will make specific nav sticky
 * it attaches to elements with class .nav-sticky
 * and uses data attributes of this object:
 * data-sticky-extra="20" || data-sticky-extra-bottom="400"
 * int amount of extra pixels to add to top position before detaching to fixed position
 * data-sticky-top="#top-anchor" can be jquery selectors like:
 * #top-anchor || .top-anchor || [name=top-anchor] || "220px" || "220"
 * position of from where object needs to be detached to fixed position
 * data-sticky-bottom="#bottom-anchor" or data-sticky-disappear="#bottom-anchor"
 *
 * can be jquery selectors like:
 * #bottom-anchor || .bottom-anchor || [name=bottom-anchor] || "240px" || "240"
 *
 * stop following content at this position
 */
(function (window, document, $, Drupal) {
    "use strict";

    Drupal.behaviors.scroll_to_fixed = {
        attach: function () {
            var $win = $(window),
                $stickyObject = $(".nav-sticky"),
                animationEnabled = $stickyObject.hasClass('nav-animate'),
                extraTop = $stickyObject.data('sticky-extra') || 0,
                extraBottom = $stickyObject.data('sticky-extra-bottom') || 0,
                THRESHOLD = 640;

            // if you are logged in and the admin bar is present
            if (Drupal.admin !== undefined) {
                extraTop += Drupal.admin.height();
                extraBottom += Drupal.admin.height();
            }

            var getPosition = function($obj, dataAttribute) {
                if ($obj.data(dataAttribute) === undefined) { return null; }
                if ($obj.data(dataAttribute).toString().indexOf('#') === 0 || $obj.data(dataAttribute).toString().indexOf('.') === 0 || $obj.data(dataAttribute).toString().indexOf('[') === 0) {
                    return $($obj.data(dataAttribute)).offset().top;
                } else if ($obj.data(dataAttribute).toString().indexOf('px') !== -1) {
                    return $obj.data(dataAttribute).replace('px', '');
                } else {
                    return $obj.data(dataAttribute);
                }
            };

            var reachedPageBottom = function () {
                return ($win.height() + $win.scrollTop() == $(document).height());
            };

            var scrollCallback = function () {
                var topPosition = $win.scrollTop(),
                    windowWidth = $win.width(),
                    disappear = false,
                    topPlaceholderPosition = getPosition($stickyObject, 'sticky-top'),
                    bottomPlaceholderPosition = getPosition($stickyObject, 'sticky-bottom');

                // TWS-17106 - Only apply to specific breakpoint if indicated
                var applyForBreakpoint = true;
                if ($stickyObject.hasClass('nav-sticky--desk_only') && windowWidth < THRESHOLD) {
                    applyForBreakpoint = false;
                } else if ($stickyObject.hasClass('nav-sticky--mobile_only') && windowWidth >= THRESHOLD) {
                    applyForBreakpoint = false;
                }

                // do nothing if required attribute is missing
                if (!topPlaceholderPosition) { return; }

                if (bottomPlaceholderPosition === null) {
                    bottomPlaceholderPosition = getPosition($stickyObject, 'sticky-disappear');
                    if (bottomPlaceholderPosition) { disappear = true; }
                }

                if (topPosition + extraTop > topPlaceholderPosition && applyForBreakpoint) {
                    if (bottomPlaceholderPosition !== null
                        && topPosition > (bottomPlaceholderPosition - extraBottom)) {
                        if (!disappear) {
                            $stickyObject.css({
                                position: "fixed",
                                top: extraTop - (topPosition - bottomPlaceholderPosition + extraBottom) + "px"
                            });
                        } else {
                            if (animationEnabled && reachedPageBottom()) {
                                // disabling animation if we reached page bottom and animation was enabled
                                $stickyObject.removeClass('nav-animate');
                            } else if (animationEnabled && !reachedPageBottom()) {
                                // re-enabling animation if it was enabled before
                                $stickyObject.addClass('nav-animate');
                            }

                            $stickyObject.css({position: "fixed", top: "-100px"});
                            $stickyObject.addClass('nav-animate-away');
                        }
                    } else {
                        $stickyObject.css({position: "fixed", top: extraTop + "px"});
                        $stickyObject.addClass('is-stuck').removeClass('nav-animate-away');
                    }
                } else if (!applyForBreakpoint) {
                    $stickyObject.css({ position: "", top: "" });
                    $stickyObject.removeClass('nav-animate-away').removeClass('is-stuck');
                } else {
                    $stickyObject.css({position: "absolute", top: ""});
                    $stickyObject.removeClass('nav-animate-away').removeClass('is-stuck');
                }
            };
            $(window).scroll(scrollCallback);
            $(window).resize(scrollCallback);
            scrollCallback();
        }
    };
}(this, this.document, this.jQuery, this.Drupal));
;
// --- set up OBJ Object
var GALLERY = GALLERY || {};

// --- set up keys available
GALLERY.Keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    ESCAPE: 27,
    SPACE: 32,
    BACKSPACE: 8,
    DELETE: 46,
    END: 35,
    HOME: 36,
    PAGEDOWN: 34,
    PAGEUP: 33,
    RETURN: 13,
    TAB: 9
};

(function($) {
    $.fn.nextWrap = function() {
        var $next = this.next();
        return ($next.length === 0) ? this.siblings().first() : $next;
    };
    $.fn.prevWrap = function() {
        var $prev = this.prev();
        return ($prev.length === 0) ? this.siblings().last() : $prev;
    };

    // toggling the active slide
    function switchActiveSlide(slide, allSlides, slideType) {
        var dotNav = slide.parent().next().find('.gallery-navigation--dots');
        var thumbNav = slide.parent().next().find('.gallery-navigation--thumbs');

        // add `is-selected` class to the appropriate slide
        slide.addClass('is-selected').siblings("[class*='-slide']").removeClass('is-selected');
    }

    // Create dot navigation from slide count
    function createDotNavFromSlideCount(slides, isThumbnail, assetLocation) {
        var dotNavMarkup = '',
        cachebusterString = GALLERY.cachebustingString || '20170705';

        dotNavMarkup += '<ol class="nav-items">';

        // iterate over the slides to generate dot nav markup
        $.each(slides, function(index, value) {
            if(isThumbnail) {
                var thumbnailIndex = index + 1;
            }

            // which item in the array has the selected class?
            if($(slides[index]).hasClass('is-selected')) {
                dotActiveClass = ' is-selected';
            } else {
                dotActiveClass = '';
            }
            dotNavMarkup +=  '<li class="nav-item' + dotActiveClass + '">';
            if(isThumbnail) {
                dotNavMarkup +=  '<img src="/tesla_theme/assets/img/' + assetLocation + '/gallery/thumbnail-' + thumbnailIndex + '.jpg?' + cachebusterString + '" class="nav-thumb">';
            }
            dotNavMarkup +=  '</li>';
        });

        dotNavMarkup +=  '</ol>';

        return dotNavMarkup;
    }

    // Autoplay currently only supported by .section gallery with or without Thumbnail navs.
    // Use data-gallery-autoplay="on" in Markup to enable.
    function autoplay(id) {
        var loopedNum = 0;

        var intID = setInterval(play, GALLERY.intervalDelay);

        function play() {
          var selectedSlide = $('#' + id).find('.is-selected');

          if(selectedSlide.next().length === 0) {
            selectedSlide.removeClass('is-selected').siblings().first().addClass('is-selected');
            loopedNum++;
          } else {
            selectedSlide.removeClass('is-selected').next().addClass('is-selected');
          }
          if(loopedNum >= GALLERY.loopMax) {
             clearInterval(intID);
           }
        }

        $('#' + id  +' .gallery-navigation--thumbs').on('click', '.nav-item', function(e) {
            clearInterval(intID);
        });

        $('#' + id  +' .gallery-navigation').on('click', '.arrow', function(e) {
            clearInterval(intID);
        });
    }

    $(document).ready(function() {
        var activeSlide = $('.gallery-container').find('.is-selected'),
            prevSlide = activeSlide.prevWrap(),
            nextSlide = activeSlide.nextWrap();

        $('.gallery-navigation').on('click', '.arrow', function(e) {
            var $this = $(this),
                slideDirection = $(this).data('slide'),
                navigationContainer = $this.closest('.gallery-navigation'),
                dotnav = $this.parent().siblings().find('.dot-nav, .nav-item'),
                slideContainer = navigationContainer.closest('.section-container').find('.slide-container'),
                selectedSlide = slideContainer.find('.is-selected'),
                displaySlide;

            if (slideDirection === 'next') {
                var $next = selectedSlide.next();

                if($next.length === 0) {
                    displaySlide = selectedSlide.siblings().first();
                    dotnav.removeClass('is-selected').first().addClass('is-selected');
                } else {
                    displaySlide = $next;
                    $this.parent().siblings().find('.is-selected').removeClass('is-selected').next().addClass('is-selected');
                }
            } else if (slideDirection === 'prev') {
                var $prev = selectedSlide.prev();

                if($prev.length === 0) {
                    displaySlide = selectedSlide.siblings().last();
                    dotnav.removeClass('is-selected').last().addClass('is-selected');
                } else {
                    displaySlide = $prev;
                    $this.parent().siblings().find('.is-selected').removeClass('is-selected').prev().addClass('is-selected');
                }
            }
            switchActiveSlide(displaySlide, activeSlide.siblings().andSelf());
        });

        $('.gallery-navigation--dots, .gallery-navigation--pill-nav, .gallery-navigation--thumbs').on('click', '.nav-item', function(e) {
            e.preventDefault();

            var $this         = $(this),
                mySiblings    = $this.siblings().andSelf(),
                slideToSelect = mySiblings.index($this),
                allSlides     = $this.closest('.section-container').find('.slide-container').children();

            $this.addClass('is-selected').siblings().removeClass('is-selected');

            switchActiveSlide(allSlides.eq(slideToSelect), allSlides);
        });
    });

    $(window).on('load', function() {
        var parentContainer = $('.section-container'),
            pillNavGallery  = $('.section-inside'),
            dotNavGallery   = $('.section-testimonials'),
            dotNavCPOGallery = $('.section-compositor-grid'),
            thumbNavGallery = $('.section-gallery'),

            dotNavGallerySlideContainer  = dotNavGallery.find('.slide-container'),
            dotNavCPOGallerySlideContainer  = dotNavCPOGallery.find('.slide-container'),
            pillNavGallerySlideContainer = pillNavGallery.find('.slide-container'),
            thumbNavGallerySlideContainer   = thumbNavGallery.find('.slide-container'),

            dotNavGallerySlides = dotNavGallerySlideContainer.children(),
            dotNavCPOGallerySlides = dotNavCPOGallerySlideContainer.children(),
            dotNavGalleryNavContainer = dotNavGallerySlideContainer.next('.gallery-navigation'),
            dotNavCPOGalleryNavContainer = dotNavCPOGallerySlideContainer.next('.gallery-navigation'),

            pillNavGallerySlides = pillNavGallerySlideContainer.children(),
            pillNavGalleryNavContainer = pillNavGallerySlideContainer.next('.gallery-navigation'),

            thumbNavGallerySlides = thumbNavGallerySlideContainer.children(),
            thumbNavGalleryNavContainer = thumbNavGallerySlideContainer.next('.gallery-navigation'),

            dotNav = dotNavGalleryNavContainer.children('.gallery-navigation--dots'),
            dotNavCPO = dotNavCPOGalleryNavContainer.children('.gallery-navigation--dots'),
            thumbnailNav = thumbNavGalleryNavContainer.children('.gallery-navigation--thumbs');

            $('.section-gallery .gallery-container').each(
              function(index) {
                isAutoplay = $(this).data('gallery-autoplay'); //currently only supported and tested on
                if(isAutoplay === "on") {
                    autoplay($(this).parent().attr('id'));
                }
              });

        // if there are no slides, we don't need to show the left/right and we don't need to create the dot nav markup.
        if(pillNavGallerySlides.length > 1) {
            pillNavGalleryNavContainer.addClass('has-slides');
        }
        if(thumbNavGallerySlides.length > 1) {
            thumbNavGalleryNavContainer.addClass('has-slides');

            assetLocation = thumbNavGallery.data('assettype');

            // Let's create the dot nav based on how many slides there are
            if (typeof(assetLocation) != "undefined") {
                thumbnailNav.html(createDotNavFromSlideCount(thumbNavGallerySlides, true, assetLocation));
            }

        }
        if(dotNavGallerySlides.length > 1) {

            // Let's create the dot nav based on how many slides there are
            dotNav.html(createDotNavFromSlideCount(dotNavGallerySlides));

            dotNavGalleryNavContainer.addClass('has-slides');
        }
        if(dotNavCPOGallerySlides.length > 1) {

            // Let's create the dot nav based on how many slides there are
            dotNavCPO.html(createDotNavFromSlideCount(dotNavCPOGallerySlides));

            dotNavCPOGalleryNavContainer.addClass('has-slides');
        }
    });

})(jQuery);
;
/*global window */
/*global $ */
/*global debug */
/*global getDockOverlayLocalStorage */
/*global getDockOverlayLocalStorageKeyValue */
/*global setDockOverlayLocalStorageKeyValue */

/**
 * Show popup.
 *
 * @param object dockOverlayStorage Dock overlay local storage object.
 * @return boolean Show dock overlay.
 */
function showPopupForOneWeekWithModelX(dockOverlayStorage) {
    'use strict';

    var dockOverlaySubmitted,
        dockOverlayViewed;

    // Submitted corresponds to viewing campaign page.
    dockOverlaySubmitted = getDockOverlayLocalStorageKeyValue('submitted', dockOverlayStorage);

    // View corresponds to seeing popup.
    dockOverlayViewed = getDockOverlayLocalStorageKeyValue('viewed', dockOverlayStorage);

    return dockOverlaySubmitted === 0 && dockOverlayViewed === 0;
}

/**
 * Initialize popup (experiment).
 */
function initPopupForOneWeekWithModelX() {
    'use strict';

    // Define constants.
    var BREAKPOINT = 640;
    var DELAY = 30000;

    // Define popup.
    var $dockOverlay,
        $dockOverlayMobile,
        dockOverlayStorage;

    $dockOverlay = $('#one-week-w-mx-modal');
    $dockOverlayMobile = $('#one-week-w-mx-overlay');

    dockOverlayStorage = getDockOverlayLocalStorage('lc_one_week_w_mx');

    // Only show popup if exists and doesn't have local storage.
    var hasDockOverlay = $dockOverlay.length > 0;
    var hasDockOverlayMobile = $dockOverlayMobile.length > 0;
    var showPopup = showPopupForOneWeekWithModelX(dockOverlayStorage);
    var isMobile = $(window).width() < BREAKPOINT;

    // Show popup modal on desktop if no local storage set.
    if (hasDockOverlay && showPopup && !isMobile) {
        // Show popup after 30 seconds.
        setTimeout(function() {
            $dockOverlay.modal('show');

            // Bind popup close action
            $dockOverlay.on('hide.bs.modal', function() {
                setDockOverlayLocalStorageKeyValue('closed', null, 'lc_one_week_w_mx');
            });

            setDockOverlayLocalStorageKeyValue('viewed', dockOverlayStorage, 'lc_one_week_w_mx');
        }, DELAY);
    }

    // Show popup overlay on mobile if no cookie set.
    if (hasDockOverlayMobile && showPopup && isMobile) {
        // Show popup after 30 seconds.
        setTimeout(function() {
            // Show overlay on mobile and show modal on deskop
            $dockOverlayMobile.removeClass('hidden');

            // Trigger transition after overlay is unhidden
            setTimeout(function() {
                $dockOverlayMobile.addClass('overlay--enter');
            }, 0);

            // Bind popup close action
            $dockOverlayMobile.find('.btn-close').click(function() {
                $dockOverlayMobile.addClass('hidden');
                setDockOverlayLocalStorageKeyValue('closed', null, 'lc_one_week_w_mx');
            });

            setDockOverlayLocalStorageKeyValue('viewed', dockOverlayStorage, 'lc_one_week_w_mx');
        }, DELAY);
    }
}

/**
 * Init - uncomment for testing.
 */
// $(document).ready(function() {
//     'use strict';
//
//     // Initialize popup.
//     // Important: This is triggered via Google Optimize.
//     localStorage.removeItem('lc_one_week_w_mx');
//     initPopupForOneWeekWithModelX();
// });
;
/**
 * In order to prevent form duplication on the same page, in cases where both a
 *   mobile and desktop version of the same form is required, we should only
 *   load the desktop form and move it in the DOM if the window is resize to
 *   mobile.
 */
(function (window, document, $, Drupal) {
    "use strict";
    $(function () {
        // Setup vars.
        var MOBILE,
            $window,
            $sticky,
            $stickyParent,
            $altInlineForm,
            $stickyNavForm,
            $footerForm,
            $mobileForm,
            $desktopForm,
            hasAltInlineForm,
            hasStickyNavForm,
            hasFooterForm,
            hasMobileForm,
            hasDesktopForm,
            stickyTop;

        // Constants.
        MOBILE = 640;

        // Forms.
        $window = $(window);
        $altInlineForm = $('#feature--newsletter-form');
        $stickyNavForm = $('.sticky-nav').find('#tesla-insider-form');
        $footerForm = $('.insider-container').find('#tesla-insider-form');
        $mobileForm = $('.tesla-insider-form--mobile');
        $desktopForm = $('.tesla-insider-form--desk');

        hasAltInlineForm = $altInlineForm.length > 0;
        hasStickyNavForm = $stickyNavForm.length > 0;
        hasFooterForm = $footerForm.length > 0;
        hasMobileForm = $mobileForm.length > 0;
        hasDesktopForm = $desktopForm.length > 0;

        // Remove unused instance of the Tesla Insider form in the case that
        // there are multiple copies of the form within the DOM. There are 2
        // situations in which a form shoud be removed:
        //   1. There's an inline or sticky nav form (desktop) and a footer form
        //      (mobile) on the same page.
        //   2. There's an indicated desktop form and an indicated mobile form
        //      on the same page. These forms are identified for their
        //      associated breakpoints via css classes:
        //          .tesla-insider-form--desk and .tesla-insider-form--mobile
        var removeFormsCase1 = (hasAltInlineForm || hasStickyNavForm) && hasFooterForm;
        var removeFormsCase2 = hasMobileForm && hasDesktopForm;

        if (removeFormsCase1 || removeFormsCase2) {
            // Remove the desktop form on mobile and vice versa.
            if ($(window).width() > MOBILE) {
                $footerForm.remove();
                $mobileForm.remove();
            } else {
                $altInlineForm.remove();
                $stickyNavForm.remove();
                $desktopForm.remove();
            }
            // Re-attach js bindings.
            Drupal.behaviors.tesla_insider_form.attach();
        }

        // Stick insider form to the top of the page when scrolling down with
        // fixed positioning when the form has the tesla-newsletter--sticky
        // class. Only sticks for desktop widths above small desktop breakpoint.
        $sticky = $('.tesla-newsletter--sticky');
        $stickyParent = $sticky.closest('.tesla-insider-form');

        if ($sticky.length && $stickyParent.length) {
            stickyTop = $sticky.offset().top;

            $window.scroll(stickNewsletter);
            $window.resize(stickNewsletter);
            stickNewsletter($sticky);
        }

        function stickNewsletter() {
            var OFFSET_TOP = 20;

            var currentScroll = $window.scrollTop();
            var width = $stickyParent.width();
            var left = $stickyParent.offset().left - window.scrollX;

            if ($window.width() >= MOBILE && currentScroll >= (stickyTop - OFFSET_TOP)) {
                // Stick newsletter form on desktop when scrolled past top
                // of sticky object.
                $sticky.css({
                    position: "fixed",
                    top: OFFSET_TOP,
                    width: width,
                    left: left
                });
            } else {
                // Do not stick newsletter on mobile or when not scrolled
                // past sticky object.
                $sticky.css({
                    position: "",
                    top: "",
                    width: ""
                });
            }
        }
    });
}(this, this.document, this.jQuery, this.Drupal));
;
(function ($) {

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
  this.element.html('<div class="bar"><div class="filled"></div></div>' +
                    '<div class="percentage"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage + '%');
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="messages error"></div>').html(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);
;
/**
 * Created by jdolinsky on 12/1/16.
 * best to include at the bottom of the page
 */


/* OLD CHAT TOOL FOR US */
(function () {
    var DEFAULT_DELAY = 0;

    // For all major browsers, except IE 8 and earlier
    if (window.addEventListener) {
        window.addEventListener("load", onLoad);
    } // For IE 8 and earlier versions
    else if (window.attachEvent) {
        window.attachEvent("load", onLoad);
    }
    function onLoad () {

        try {
            var country =  Drupal.settings.tesla.country;

            if (country === 'US') {
              return;
            }
            else {
                var delay = (this.chatDelay == undefined) ? DEFAULT_DELAY : this.chatDelay;
                teslaChat().getChatWidget({delay:delay, country:country});
            }


        } catch(e){
            debug.error("Unable to detect country for chat with us. chat terminated");
        }

    };

    function teslaChat () {

        var country_chat_id = {
            "GB": "e4bcc4ed-55d4-4fc2-9606-4a86db07a452",
            "NL": "b1855617-d8a6-430a-9901-ffc17337a003",
            "HK": "ab8b31cb-b4fc-45fa-a99e-8668ce1091d6",
            "JP": "b7d53248-c698-4fea-8048-c0080f9c8f57",
            "CN": "e54ad98d-3330-4a28-838e-4b3721752060",
            "AU": "d5edb0b6-d3f8-4f45-9231-887fc29682f6",
            "DE": "fc54a0ec-32cc-40af-a5e0-13c676f5a6ae",
            "FR": "d26113ee-30b7-4e60-b294-a7e25f3a50a1",
            "NO": "44587f3f-1dcf-49de-b8bb-e20e5a369065"
        };

        var countries_alternative_url = ["CN"];
        var storage_google_url = "storage.googleapis.com/code.snapengage.com";
        var storage_snap_url = "www.snapengage.com/cdn";

        this.getChatWidget = function (options) {
            if (options) {
                try {
                    this.country = options.country;
                    this.delay = (null === options.delay)? 0 : options.delay;
                }
                catch(e) {
                    debug.info("teslaChat.getChatWidget requires country");
                }

            }
            else {
                debug.info("teslaChat.getChatWidget requires option parameter");
                return;
            }
            //get chat ID for country
            var chat_id = country_chat_id[this.country];
            if (chat_id) {
                return this.defaultChat(chat_id);
            }
            else {
                debug.info("chat country is not supported");
            }

        };
        // returns correct url to load for chat
        this.getStorageURL = function () {
            if (countries_alternative_url.indexOf(this.country) !== -1) {
               return  storage_snap_url;
            }

            return storage_google_url
        };

        //returns the correct widget for country
        this.defaultChat = function (chat_id) {
            var se = document.createElement ('script');
            se.delay = this.delay;
            se.type = 'text/javascript';
            se.async = true;
            se.src = '//' +  this.getStorageURL() + '/js/' + chat_id + '.js';
            var done = false;
            se.onload = se.onreadystatechange = function () {
                if (!done && (!this.readyState || this.readyState==='loaded' || this.readyState==='complete')) {
                    done = true;
                    /* Place your SnapEngage JS API code below */
                    /* SnapEngage.allowChatSound(true); Example JS API: Enable sounds for Visitors. */
                    if(se.delay > 0){
                        //hiding button
                        SnapEngage.hideButton();
                        setTimeout( 'SnapEngage.showButton()', this.delay*1000 );
                    }

                    SnapEngage.setCallback('Open', function () {
                        window.dataLayer.push({
                            'event': 'widget-interaction',
                            'widget name': 'Live Chat - Open'
                        });
                    });
                    SnapEngage.setCallback('StartChat', function (email, msg, type) {
                        window.dataLayer.push({
                            'event': 'widget-interaction',
                            'widget name': 'Live Chat - Chat'
                        });
                    });
                }
            };
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(se, s);
        };

        return this;
    }

})();
;
/*!
* Parsleyjs
* Guillaume Potier - <guillaume@wisembly.com>
* Version 2.2.0-rc1 - built Sun Aug 16 2015 14:04:07
* MIT Licensed
*
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function b(a,b){return a.parsleyAdaptedCallback||(a.parsleyAdaptedCallback=function(){var c=Array.prototype.slice.call(arguments,0);c.unshift(this),a.apply(b||x,c)}),a.parsleyAdaptedCallback}function c(a){return 0===a.lastIndexOf(z,0)?a.substr(z.length):a}"undefined"==typeof a&&"undefined"!=typeof window.jQuery&&(a=window.jQuery);var d=1,e={},f={attr:function(a,b,c){var d,e,f=new RegExp("^"+b,"i");if("undefined"==typeof c)c={};else for(var g in c)c.hasOwnProperty(g)&&delete c[g];if("undefined"==typeof a||"undefined"==typeof a[0])return c;e=a[0].attributes;for(var g=e.length;g--;)d=e[g],d&&d.specified&&f.test(d.name)&&(c[this.camelize(d.name.slice(b.length))]=this.deserializeValue(d.value));return c},checkAttr:function(a,b,c){return a.is("["+b+c+"]")},setAttr:function(a,b,c,d){a[0].setAttribute(this.dasherize(b+c),String(d))},generateID:function(){return""+d++},deserializeValue:function(b){var c;try{return b?"true"==b||("false"==b?!1:"null"==b?null:isNaN(c=Number(b))?/^[\[\{]/.test(b)?a.parseJSON(b):b:c):b}catch(d){return b}},camelize:function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},dasherize:function(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()},warn:function(){window.console&&"function"==typeof window.console.warn&&window.console.warn.apply(window.console,arguments)},warnOnce:function(a){e[a]||(e[a]=!0,this.warn.apply(this,arguments))},_resetWarnings:function(){e={}},trimString:function(a){return a.replace(/^\s+|\s+$/g,"")},objectCreate:Object.create||function(){var a=function(){};return function(b){if(arguments.length>1)throw Error("Second argument not supported");if("object"!=typeof b)throw TypeError("Argument must be an object");a.prototype=b;var c=new a;return a.prototype=null,c}}()},g={namespace:"data-parsley-",inputs:"input, textarea, select",excluded:"input[type=button], input[type=submit], input[type=reset], input[type=hidden]",priorityEnabled:!0,multiple:null,group:null,uiEnabled:!0,validationThreshold:3,focus:"first",trigger:!1,errorClass:"parsley-error",successClass:"parsley-success",classHandler:function(){},errorsContainer:function(){},errorsWrapper:'<ul class="parsley-errors-list"></ul>',errorTemplate:"<li></li>"},h=function(){};h.prototype={asyncSupport:!0,actualizeOptions:function(){return f.attr(this.$element,this.options.namespace,this.domOptions),this.parent&&this.parent.actualizeOptions&&this.parent.actualizeOptions(),this},_resetOptions:function(a){this.domOptions=f.objectCreate(this.parent.options),this.options=f.objectCreate(this.domOptions);for(var b in a)a.hasOwnProperty(b)&&(this.options[b]=a[b]);this.actualizeOptions()},_listeners:null,on:function(a,b){this._listeners=this._listeners||{};var c=this._listeners[a]=this._listeners[a]||[];return c.push(b),this},subscribe:function(b,c){a.listenTo(this,b.toLowerCase(),c)},off:function(a,b){var c=this._listeners&&this._listeners[a];if(c)if(b)for(var d=c.length;d--;)c[d]===b&&c.splice(d,1);else delete this._listeners[a];return this},unsubscribe:function(b){a.unsubscribeTo(this,b.toLowerCase())},trigger:function(a,b){b=b||this;var c,d=this._listeners&&this._listeners[a];if(d)for(var e=d.length;e--;)if(c=d[e].call(b,b),c===!1)return c;return this.parent?this.parent.trigger(a,b):!0},reset:function(){if("ParsleyForm"!==this.__class__)return this._trigger("reset");for(var a=0;a<this.fields.length;a++)this.fields[a]._trigger("reset");this._trigger("reset")},destroy:function(){if("ParsleyForm"!==this.__class__)return this.$element.removeData("Parsley"),this.$element.removeData("ParsleyFieldMultiple"),void this._trigger("destroy");for(var a=0;a<this.fields.length;a++)this.fields[a].destroy();this.$element.removeData("Parsley"),this._trigger("destroy")},asyncIsValid:function(){return f.warnOnce("asyncIsValid is deprecated; please use whenIsValid instead"),this.whenValid.apply(this,arguments)},_findRelatedMultiple:function(){return this.parent.$element.find("["+this.options.namespace+'multiple="'+this.options.multiple+'"]')}};var i={string:function(a){return a},integer:function(a){if(isNaN(a))throw'Requirement is not an integer: "'+a+'"';return parseInt(a,10)},number:function(a){if(isNaN(a))throw'Requirement is not a number: "'+a+'"';return parseFloat(a)},reference:function(b){var c=a(b);if(0===c.length)throw'No such reference: "'+b+'"';return c},"boolean":function(a){return"false"!==a},object:function(a){return f.deserializeValue(a)},regexp:function(a){var b="";return/^\/.*\/(?:[gimy]*)$/.test(a)&&(b=a.replace(/.*\/([gimy]*)$/,"$1"),a=a.replace(new RegExp("^/(.*?)/"+b+"$"),"$1")),new RegExp(a,b)}},j=function(a,b){var c=a.match(/^\s*\[(.*)\]\s*$/);if(!c)throw'Requirement is not an array: "'+a+'"';var d=c[1].split(",").map(f.trimString);if(d.length!==b)throw"Requirement has "+d.length+" values when "+b+" are needed";return d},k=function(a,b){var c=i[a||"string"];if(!c)throw'Unknown requirement specification: "'+a+'"';return c(b)},l=function(a,b,c){var d=null,e={};for(var f in a)if(f){var g=c(f);"string"==typeof g&&(g=k(a[f],g)),e[f]=g}else d=k(a[f],b);return[d,e]},m=function(b){a.extend(!0,this,b)};m.prototype={validate:function(b,c){if(this.fn)return arguments.length>3&&(c=[].slice.call(arguments,1,-1)),this.fn.call(this,b,c);if(a.isArray(b)){if(!this.validateMultiple)throw"Validator `"+this.name+"` does not handle multiple values";return this.validateMultiple.apply(this,arguments)}if(this.validateNumber)return isNaN(b)?!1:(b=parseFloat(b),this.validateNumber.apply(this,arguments));if(this.validateString)return this.validateString.apply(this,arguments);throw"Validator `"+this.name+"` only handles multiple values"},parseRequirements:function(b,c){if("string"!=typeof b)return a.isArray(b)?b:[b];var d=this.requirementType;if(a.isArray(d)){for(var e=j(b,d.length),f=0;f<e.length;f++)e[f]=k(d[f],e[f]);return e}return a.isPlainObject(d)?l(d,b,c):[k(d,b)]},requirementType:"string",priority:2};var n=function(a,b){this.__class__="ParsleyValidatorRegistry",this.locale="en",this.init(a||{},b||{})},o={email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,number:/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/,integer:/^-?\d+$/,digits:/^\d+$/,alphanum:/^\w+$/i,url:new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$","i")};o.range=o.number,n.prototype={init:function(b,c){this.catalog=c,this.validators=a.extend({},this.validators);for(var d in b)this.addValidator(d,b[d].fn,b[d].priority);window.Parsley.trigger("parsley:validator:init")},setLocale:function(a){if("undefined"==typeof this.catalog[a])throw new Error(a+" is not available in the catalog");return this.locale=a,this},addCatalog:function(a,b,c){return"object"==typeof b&&(this.catalog[a]=b),!0===c?this.setLocale(a):this},addMessage:function(a,b,c){return"undefined"==typeof this.catalog[a]&&(this.catalog[a]={}),this.catalog[a][b.toLowerCase()]=c,this},addValidator:function(a){if(this.validators[a])f.warn('Validator "'+a+'" is already defined.');else if(g.hasOwnProperty(a))return void f.warn('"'+a+'" is a restricted keyword and is not a valid validator name.');return this._setValidator.apply(this,arguments)},updateValidator:function(a){return this.validators[a]?this._setValidator(this,arguments):(f.warn('Validator "'+a+'" is not already defined.'),this.addValidator.apply(this,arguments))},removeValidator:function(a){return this.validators[a]||f.warn('Validator "'+a+'" is not defined.'),delete this.validators[a],this},_setValidator:function(a,b,c){"object"!=typeof b&&(b={fn:b,priority:c}),b.validate||(b=new m(b)),this.validators[a]=b;for(var d in b.messages||{})this.addMessage(d,a,b.messages[d]);return this},getErrorMessage:function(a){var b;if("type"===a.name){var c=this.catalog[this.locale][a.name]||{};b=c[a.requirements]}else b=this.formatMessage(this.catalog[this.locale][a.name],a.requirements);return b||this.catalog[this.locale].defaultMessage||this.catalog.en.defaultMessage},formatMessage:function(a,b){if("object"==typeof b){for(var c in b)a=this.formatMessage(a,b[c]);return a}return"string"==typeof a?a.replace(new RegExp("%s","i"),b):""},validators:{notblank:{validateString:function(a){return/\S/.test(a)},priority:2},required:{validateMultiple:function(a){return a.length>0},validateString:function(a){return/\S/.test(a)},priority:512},type:{validateString:function(a,b){var c=o[b];if(!c)throw new Error("validator type `"+b+"` is not supported");return c.test(a)},priority:256},pattern:{validateString:function(a,b){return b.test(a)},requirementType:"regexp",priority:64},minlength:{validateString:function(a,b){return a.length>=b},requirementType:"integer",priority:30},maxlength:{validateString:function(a,b){return a.length<=b},requirementType:"integer",priority:30},length:{validateString:function(a,b,c){return a.length>=b&&a.length<=c},requirementType:["integer","integer"],priority:30},mincheck:{validateMultiple:function(a,b){return a.length>=b},requirementType:"integer",priority:30},maxcheck:{validateMultiple:function(a,b){return a.length<=b},requirementType:"integer",priority:30},check:{validateMultiple:function(a,b,c){return a.length>=b&&a.length<=c},requirementType:["integer","integer"],priority:30},min:{validateNumber:function(a,b){return a>=b},requirementType:"number",priority:30},max:{validateNumber:function(a,b){return b>=a},requirementType:"number",priority:30},range:{validateNumber:function(a,b,c){return a>=b&&c>=a},requirementType:["number","number"],priority:30},equalto:{validateString:function(b,c){var d=a(c);return d.length?b===d.val():b===c},priority:256}}};var p=function(){this.__class__="ParsleyUI"};p.prototype={listen:function(){var a=this;return window.Parsley.on("form:init",function(){a.setupForm(this)}).on("field:init",function(){a.setupField(this)}).on("field:validated",function(){a.reflow(this)}).on("form:validated",function(){a.focus(this)}).on("field:reset",function(){a.reset(this)}).on("form:destroy",function(){a.destroy(this)}).on("field:destroy",function(){a.destroy(this)}),this},reflow:function(a){if("undefined"!=typeof a._ui&&!1!==a._ui.active){var b=this._diff(a.validationResult,a._ui.lastValidationResult);a._ui.lastValidationResult=a.validationResult,a._ui.validatedOnce=!0,this.manageStatusClass(a),this.manageErrorsMessages(a,b),this.actualizeTriggers(a),(b.kept.length||b.added.length)&&!0!==a._ui.failedOnce&&this.manageFailingFieldTrigger(a)}},getErrorsMessages:function(a){if(!0===a.validationResult)return[];for(var b=[],c=0;c<a.validationResult.length;c++)b.push(this._getErrorMessage(a,a.validationResult[c].assert));return b},manageStatusClass:function(a){a.hasConstraints()&&a.needsValidation()&&!0===a.validationResult?this._successClass(a):a.validationResult.length>0?this._errorClass(a):this._resetClass(a)},manageErrorsMessages:function(b,c){if("undefined"==typeof b.options.errorsMessagesDisabled){if("undefined"!=typeof b.options.errorMessage)return c.added.length||c.kept.length?(this._insertErrorWrapper(b),0===b._ui.$errorsWrapper.find(".parsley-custom-error-message").length&&b._ui.$errorsWrapper.append(a(b.options.errorTemplate).addClass("parsley-custom-error-message")),b._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(b.options.errorMessage)):b._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();for(var d=0;d<c.removed.length;d++)this.removeError(b,c.removed[d].assert.name,!0);for(d=0;d<c.added.length;d++)this.addError(b,c.added[d].assert.name,void 0,c.added[d].assert,!0);for(d=0;d<c.kept.length;d++)this.updateError(b,c.kept[d].assert.name,void 0,c.kept[d].assert,!0)}},addError:function(b,c,d,e,f){this._insertErrorWrapper(b),b._ui.$errorsWrapper.addClass("filled").append(a(b.options.errorTemplate).addClass("parsley-"+c).html(d||this._getErrorMessage(b,e))),!0!==f&&this._errorClass(b)},updateError:function(a,b,c,d,e){a._ui.$errorsWrapper.addClass("filled").find(".parsley-"+b).html(c||this._getErrorMessage(a,d)),!0!==e&&this._errorClass(a)},removeError:function(a,b,c){a._ui.$errorsWrapper.removeClass("filled").find(".parsley-"+b).remove(),!0!==c&&this.manageStatusClass(a)},focus:function(a){if(a._focusedField=null,!0===a.validationResult||"none"===a.options.focus)return null;for(var b=0;b<a.fields.length;b++){var c=a.fields[b];if(!0!==c.validationResult&&c.validationResult.length>0&&"undefined"==typeof c.options.noFocus&&(a._focusedField=c.$element,"first"===a.options.focus))break}return null===a._focusedField?null:a._focusedField.focus()},_getErrorMessage:function(a,b){var c=b.name+"Message";return"undefined"!=typeof a.options[c]?window.Parsley.formatMessage(a.options[c],b.requirements):window.Parsley.getErrorMessage(b)},_diff:function(a,b,c){for(var d=[],e=[],f=0;f<a.length;f++){for(var g=!1,h=0;h<b.length;h++)if(a[f].assert.name===b[h].assert.name){g=!0;break}g?e.push(a[f]):d.push(a[f])}return{kept:e,added:d,removed:c?[]:this._diff(b,a,!0).added}},setupForm:function(b){b.$element.on("submit.Parsley",!1,a.proxy(b.onSubmitValidate,b)),!1!==b.options.uiEnabled&&b.$element.attr("novalidate","")},setupField:function(b){var c={active:!1};!1!==b.options.uiEnabled&&(c.active=!0,b.$element.attr(b.options.namespace+"id",b.__id__),c.$errorClassHandler=this._manageClassHandler(b),c.errorsWrapperId="parsley-id-"+(b.options.multiple?"multiple-"+b.options.multiple:b.__id__),c.$errorsWrapper=a(b.options.errorsWrapper).attr("id",c.errorsWrapperId),c.lastValidationResult=[],c.validatedOnce=!1,c.validationInformationVisible=!1,b._ui=c,this.actualizeTriggers(b))},_manageClassHandler:function(b){if("string"==typeof b.options.classHandler&&a(b.options.classHandler).length)return a(b.options.classHandler);var c=b.options.classHandler(b);return"undefined"!=typeof c&&c.length?c:!b.options.multiple||b.$element.is("select")?b.$element:b.$element.parent()},_insertErrorWrapper:function(b){var c;if(0!==b._ui.$errorsWrapper.parent().length)return b._ui.$errorsWrapper.parent();if("string"==typeof b.options.errorsContainer){if(a(b.options.errorsContainer).length)return a(b.options.errorsContainer).append(b._ui.$errorsWrapper);f.warn("The errors container `"+b.options.errorsContainer+"` does not exist in DOM")}else"function"==typeof b.options.errorsContainer&&(c=b.options.errorsContainer(b));if("undefined"!=typeof c&&c.length)return c.append(b._ui.$errorsWrapper);var d=b.$element;return b.options.multiple&&(d=d.parent()),d.after(b._ui.$errorsWrapper)},actualizeTriggers:function(b){var c=b.$element;if(b.options.multiple&&(c=a("["+b.options.namespace+'multiple="'+b.options.multiple+'"]')),c.off(".Parsley"),!1!==b.options.trigger){var d=b.options.trigger.replace(/^\s+/g,"").replace(/\s+$/g,"");""!==d&&c.on(d.split(" ").join(".Parsley ")+".Parsley",a.proxy("function"==typeof b.eventValidate?b.eventValidate:this.eventValidate,b))}},eventValidate:function(a){new RegExp("key").test(a.type)&&!this._ui.validationInformationVisible&&this.getValue().length<=this.options.validationThreshold||(this._ui.validatedOnce=!0,this.validate())},manageFailingFieldTrigger:function(b){return b._ui.failedOnce=!0,b.options.multiple&&a("["+b.options.namespace+'multiple="'+b.options.multiple+'"]').each(function(){return new RegExp("change","i").test(a(this).parsley().options.trigger||"")?void 0:a(this).on("change.ParsleyFailedOnce",!1,a.proxy(b.validate,b))}),b.$element.is("select")&&!new RegExp("change","i").test(b.options.trigger||"")?b.$element.on("change.ParsleyFailedOnce",!1,a.proxy(b.validate,b)):new RegExp("keyup","i").test(b.options.trigger||"")?void 0:b.$element.on("keyup.ParsleyFailedOnce",!1,a.proxy(b.validate,b))},reset:function(a){this.actualizeTriggers(a),a.$element.off(".ParsleyFailedOnce"),"undefined"!=typeof a._ui&&"ParsleyForm"!==a.__class__&&(a._ui.$errorsWrapper.removeClass("filled").children().remove(),this._resetClass(a),a._ui.validatedOnce=!1,a._ui.lastValidationResult=[],a._ui.validationInformationVisible=!1,a._ui.failedOnce=!1)},destroy:function(a){this.reset(a),"ParsleyForm"!==a.__class__&&("undefined"!=typeof a._ui&&a._ui.$errorsWrapper.remove(),delete a._ui)},_successClass:function(a){a._ui.validationInformationVisible=!0,a._ui.$errorClassHandler.removeClass(a.options.errorClass).addClass(a.options.successClass)},_errorClass:function(a){a._ui.validationInformationVisible=!0,a._ui.$errorClassHandler.removeClass(a.options.successClass).addClass(a.options.errorClass)},_resetClass:function(a){a._ui.$errorClassHandler.removeClass(a.options.successClass).removeClass(a.options.errorClass)}};var q=function(b,c,d){this.__class__="ParsleyForm",this.__id__=f.generateID(),this.$element=a(b),this.domOptions=c,this.options=d,this.parent=window.Parsley,this.fields=[],this.validationResult=null},r={pending:null,resolved:!0,rejected:!1};q.prototype={onSubmitValidate:function(a){var b=this;if(!0!==a.parsley)return a.stopImmediatePropagation(),a.preventDefault(),this.whenValidate(void 0,void 0,a).done(function(){b._submit()}).always(function(){b._submitSource=null}),this},_submit:function(){!1!==this._trigger("submit")&&(this.$element.find(".parsley_synthetic_submit_button").remove(),this._submitSource&&a('<input class=".parsley_synthetic_submit_button" type="hidden">').attr("name",this._submitSource.name).attr("value",this._submitSource.value).appendTo(this.$element),this.$element.trigger(a.extend(a.Event("submit"),{parsley:!0})))},validate:function(a,b,c){return r[this.whenValidate(a,b,c).state()]},whenValidate:function(b,c,d){var e=this;this.submitEvent=d,this.validationResult=!0,this._trigger("validate"),this._refreshFields();var f=this._withoutReactualizingFormOptions(function(){return a.map(this.fields,function(a){return!b||e._isFieldInGroup(a,b)?a.whenValidate(c):void 0})});return a.when.apply(a,f).done(function(){e._trigger("success")}).fail(function(){e.validationResult=!1,e._trigger("error")}).always(function(){e._trigger("validated")})},isValid:function(a,b){return r[this.whenValid(a,b).state()]},whenValid:function(b,c){var d=this;this._refreshFields();var e=this._withoutReactualizingFormOptions(function(){return a.map(this.fields,function(a){return!b||d._isFieldInGroup(a,b)?a.whenValid(c):void 0})});return a.when.apply(a,e)},_isFieldInGroup:function(b,c){return a.isArray(b.options.group)?-1!==a.inArray(c,b.options.group):b.options.group===c},_refreshFields:function(){return this.actualizeOptions()._bindFields()},_bindFields:function(){var b=this,c=this.fields;return this.fields=[],this.fieldsMappedById={},this._withoutReactualizingFormOptions(function(){this.$element.find(this.options.inputs).not(this.options.excluded).each(function(){var a=new A.Factory(this,{},b);"ParsleyField"!==a.__class__&&"ParsleyFieldMultiple"!==a.__class__||!0===a.options.excluded||"undefined"==typeof b.fieldsMappedById[a.__class__+"-"+a.__id__]&&(b.fieldsMappedById[a.__class__+"-"+a.__id__]=a,b.fields.push(a))}),a(c).not(b.fields).each(function(){this._trigger("reset")})}),this},_withoutReactualizingFormOptions:function(a){var b=this.actualizeOptions;this.actualizeOptions=function(){return this};var c=a.call(this);return this.actualizeOptions=b,c},_trigger:function(a){return a="form:"+a,this.trigger.apply(this,arguments)}};var s=function(b,c,d,e,f){if(!new RegExp("ParsleyField").test(b.__class__))throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");var g=window.Parsley._validatorRegistry.validators[c],h=new m(g);a.extend(this,{validator:h,name:c,requirements:d,priority:e||b.options[c+"Priority"]||h.priority,isDomConstraint:!0===f}),this._parseRequirements(b.options)},t=function(a){var b=a[0].toUpperCase();return b+a.slice(1)};s.prototype={validate:function(a,b){var c=this.requirementList.slice(0);return c.unshift(a),c.push(b),this.validator.validate.apply(this.validator,c)},_parseRequirements:function(a){var b=this;this.requirementList=this.validator.parseRequirements(this.requirements,function(c){return a[b.name+t(c)]})}};var u=function(b,c,d,e){this.__class__="ParsleyField",this.__id__=f.generateID(),this.$element=a(b),"undefined"!=typeof e&&(this.parent=e),this.options=d,this.domOptions=c,this.constraints=[],this.constraintsByName={},this.validationResult=[],this._bindConstraints()},r={pending:null,resolved:!0,rejected:!1};u.prototype={validate:function(a){var b=this.whenValidate(a);switch(b.state()){case"pending":return null;case"resolved":return!0;case"rejected":return this.validationResult}},whenValidate:function(a){var b=this;return this.value=this.getValue(),this._trigger("validate"),this.whenValid(a,this.value).done(function(){b._trigger("success")}).fail(function(){b._trigger("error")}).always(function(){b._trigger("validated")})},hasConstraints:function(){return 0!==this.constraints.length},needsValidation:function(a){return"undefined"==typeof a&&(a=this.getValue()),a.length||this._isRequired()||"undefined"!=typeof this.options.validateIfEmpty?!0:!1},isValid:function(a,b){return r[this.whenValid(a,b).state()]},whenValid:function(b,c){if(this.refreshConstraints(),this.validationResult=!0,!this.hasConstraints())return a.when();if(("undefined"==typeof c||null===c)&&(c=this.getValue()),!this.needsValidation(c)&&!0!==b)return a.when();var d=this._getGroupedConstraints(),e=[],f=this;return a.each(d,function(b,d){var g=a.when.apply(a,a.map(d,a.proxy(f,"_validateConstraint",c)));return e.push(g),"rejected"===g.state()?!1:void 0}),a.when.apply(a,e)},_validateConstraint:function(b,c){var d=this,e=c.validate(b,this);return!1===e&&(e=a.Deferred().reject()),a.when(e).fail(function(){!0===d.validationResult&&(d.validationResult=[]),d.validationResult.push({assert:c})})},getValue:function(){var a;return a="function"==typeof this.options.value?this.options.value(this):"undefined"!=typeof this.options.value?this.options.value:this.$element.val(),"undefined"==typeof a||null===a?"":this._handleWhitespace(a)},refreshConstraints:function(){return this.actualizeOptions()._bindConstraints()},addConstraint:function(a,b,c,d){if(window.Parsley._validatorRegistry.validators[a]){var e=new s(this,a,b,c,d);"undefined"!==this.constraintsByName[e.name]&&this.removeConstraint(e.name),this.constraints.push(e),this.constraintsByName[e.name]=e}return this},removeConstraint:function(a){for(var b=0;b<this.constraints.length;b++)if(a===this.constraints[b].name){this.constraints.splice(b,1);break}return delete this.constraintsByName[a],this},updateConstraint:function(a,b,c){return this.removeConstraint(a).addConstraint(a,b,c)},_bindConstraints:function(){for(var a=[],b={},c=0;c<this.constraints.length;c++)!1===this.constraints[c].isDomConstraint&&(a.push(this.constraints[c]),b[this.constraints[c].name]=this.constraints[c]);this.constraints=a,this.constraintsByName=b;for(var d in this.options)this.addConstraint(d,this.options[d],void 0,!0);return this._bindHtml5Constraints()},_bindHtml5Constraints:function(){(this.$element.hasClass("required")||this.$element.attr("required"))&&this.addConstraint("required",!0,void 0,!0),"string"==typeof this.$element.attr("pattern")&&this.addConstraint("pattern",this.$element.attr("pattern"),void 0,!0),"undefined"!=typeof this.$element.attr("min")&&"undefined"!=typeof this.$element.attr("max")?this.addConstraint("range",[this.$element.attr("min"),this.$element.attr("max")],void 0,!0):"undefined"!=typeof this.$element.attr("min")?this.addConstraint("min",this.$element.attr("min"),void 0,!0):"undefined"!=typeof this.$element.attr("max")&&this.addConstraint("max",this.$element.attr("max"),void 0,!0),"undefined"!=typeof this.$element.attr("minlength")&&"undefined"!=typeof this.$element.attr("maxlength")?this.addConstraint("length",[this.$element.attr("minlength"),this.$element.attr("maxlength")],void 0,!0):"undefined"!=typeof this.$element.attr("minlength")?this.addConstraint("minlength",this.$element.attr("minlength"),void 0,!0):"undefined"!=typeof this.$element.attr("maxlength")&&this.addConstraint("maxlength",this.$element.attr("maxlength"),void 0,!0);var a=this.$element.attr("type");return"undefined"==typeof a?this:"number"===a?"undefined"==typeof this.$element.attr("step")||0===parseFloat(this.$element.attr("step"))%1?this.addConstraint("type","integer",void 0,!0):this.addConstraint("type","number",void 0,!0):/^(email|url|range)$/i.test(a)?this.addConstraint("type",a,void 0,!0):this},_isRequired:function(){return"undefined"==typeof this.constraintsByName.required?!1:!1!==this.constraintsByName.required.requirements},_trigger:function(a){return a="field:"+a,this.trigger.apply(this,arguments)},_handleWhitespace:function(a){return!0===this.options.trimValue&&f.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'),"squish"===this.options.whitespace&&(a=a.replace(/\s{2,}/g," ")),("trim"===this.options.whitespace||"squish"===this.options.whitespace||!0===this.options.trimValue)&&(a=f.trimString(a)),a},_getGroupedConstraints:function(){if(!1===this.options.priorityEnabled)return[this.constraints];for(var a=[],b={},c=0;c<this.constraints.length;c++){var d=this.constraints[c].priority;b[d]||a.push(b[d]=[]),b[d].push(this.constraints[c])}return a.sort(function(a,b){return b[0].priority-a[0].priority}),a}};var v=function(){this.__class__="ParsleyFieldMultiple"};v.prototype={addElement:function(a){return this.$elements.push(a),this},refreshConstraints:function(){var b;if(this.constraints=[],this.$element.is("select"))return this.actualizeOptions()._bindConstraints(),this;for(var c=0;c<this.$elements.length;c++)if(a("html").has(this.$elements[c]).length){b=this.$elements[c].data("ParsleyFieldMultiple").refreshConstraints().constraints;for(var d=0;d<b.length;d++)this.addConstraint(b[d].name,b[d].requirements,b[d].priority,b[d].isDomConstraint)}else this.$elements.splice(c,1);return this},getValue:function(){if("undefined"!=typeof this.options.value)return this.options.value;if(this.$element.is("input[type=radio]"))return this._findRelatedMultiple().filter(":checked").val()||"";if(this.$element.is("input[type=checkbox]")){var b=[];return this._findRelatedMultiple().filter(":checked").each(function(){b.push(a(this).val())}),b}return this.$element.is("select")&&null===this.$element.val()?[]:this.$element.val()},_init:function(){return this.$elements=[this.$element],this}};var w=function(b,c,d){this.$element=a(b);var e=this.$element.data("Parsley");if(e)return"undefined"!=typeof d&&e.parent===window.Parsley&&(e.parent=d,e._resetOptions(e.options)),e;if(!this.$element.length)throw new Error("You must bind Parsley on an existing element.");if("undefined"!=typeof d&&"ParsleyForm"!==d.__class__)throw new Error("Parent instance must be a ParsleyForm instance");return this.parent=d||window.Parsley,this.init(c)};w.prototype={init:function(a){return this.__class__="Parsley",this.__version__="2.2.0-rc1",this.__id__=f.generateID(),this._resetOptions(a),this.$element.is("form")||f.checkAttr(this.$element,this.options.namespace,"validate")&&!this.$element.is(this.options.inputs)?this.bind("parsleyForm"):this.isMultiple()?this.handleMultiple():this.bind("parsleyField")},isMultiple:function(){return this.$element.is("input[type=radio], input[type=checkbox]")||this.$element.is("select")&&"undefined"!=typeof this.$element.attr("multiple")},handleMultiple:function(){var b,c,d=this;if(this.options.multiple||("undefined"!=typeof this.$element.attr("name")&&this.$element.attr("name").length?this.options.multiple=b=this.$element.attr("name"):"undefined"!=typeof this.$element.attr("id")&&this.$element.attr("id").length&&(this.options.multiple=this.$element.attr("id"))),this.$element.is("select")&&"undefined"!=typeof this.$element.attr("multiple"))return this.options.multiple=this.options.multiple||this.__id__,this.bind("parsleyFieldMultiple");if(!this.options.multiple)return f.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.",this.$element),this;this.options.multiple=this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g,""),"undefined"!=typeof b&&a('input[name="'+b+'"]').each(function(){a(this).is("input[type=radio], input[type=checkbox]")&&a(this).attr(d.options.namespace+"multiple",d.options.multiple)});for(var e=this._findRelatedMultiple(),g=0;g<e.length;g++)if(c=a(e.get(g)).data("Parsley"),"undefined"!=typeof c){this.$element.data("ParsleyFieldMultiple")||c.addElement(this.$element);break}return this.bind("parsleyField",!0),c||this.bind("parsleyFieldMultiple")},bind:function(b,c){var d;switch(b){case"parsleyForm":d=a.extend(new q(this.$element,this.domOptions,this.options),window.ParsleyExtend)._bindFields();break;case"parsleyField":d=a.extend(new u(this.$element,this.domOptions,this.options,this.parent),window.ParsleyExtend);break;case"parsleyFieldMultiple":d=a.extend(new u(this.$element,this.domOptions,this.options,this.parent),new v,window.ParsleyExtend)._init();break;default:throw new Error(b+"is not a supported Parsley type")}return this.options.multiple&&f.setAttr(this.$element,this.options.namespace,"multiple",this.options.multiple),"undefined"!=typeof c?(this.$element.data("ParsleyFieldMultiple",d),d):(this.$element.data("Parsley",d),d._trigger("init"),d)}};var x=a({}),y=function(){f.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")},z="parsley:";a.listen=function(a,d){var e;if(y(),"object"==typeof arguments[1]&&"function"==typeof arguments[2]&&(e=arguments[1],d=arguments[2]),"function"!=typeof arguments[1])throw new Error("Wrong parameters");window.Parsley.on(c(a),b(d,e))},a.listenTo=function(a,d,e){if(y(),!(a instanceof u||a instanceof q))throw new Error("Must give Parsley instance");if("string"!=typeof d||"function"!=typeof e)throw new Error("Wrong parameters");a.on(c(d),b(e))},a.unsubscribe=function(a,b){if(y(),"string"!=typeof a||"function"!=typeof b)throw new Error("Wrong arguments");window.Parsley.off(c(a),b.parsleyAdaptedCallback)},a.unsubscribeTo=function(a,b){if(y(),!(a instanceof u||a instanceof q))throw new Error("Must give Parsley instance");a.off(c(b))},a.unsubscribeAll=function(b){y(),window.Parsley.off(c(b)),a("form,input,textarea,select").each(function(){var d=a(this).data("Parsley");d&&d.off(c(b))})},a.emit=function(a,b){y();var d=b instanceof u||b instanceof q,e=Array.prototype.slice.call(arguments,d?2:1);e.unshift(c(a)),d||(b=window.Parsley),b.trigger.apply(b,e)},window.ParsleyConfig=window.ParsleyConfig||{},window.ParsleyConfig.i18n=window.ParsleyConfig.i18n||{},window.ParsleyConfig.i18n.en=jQuery.extend(window.ParsleyConfig.i18n.en||{},{defaultMessage:"This value seems to be invalid.",type:{email:"This value should be a valid email.",url:"This value should be a valid url.",number:"This value should be a valid number.",
integer:"This value should be a valid integer.",digits:"This value should be digits.",alphanum:"This value should be alphanumeric."},notblank:"This value should not be blank.",required:"This value is required.",pattern:"This value seems to be invalid.",min:"This value should be greater than or equal to %s.",max:"This value should be lower than or equal to %s.",range:"This value should be between %s and %s.",minlength:"This value is too short. It should have %s characters or more.",maxlength:"This value is too long. It should have %s characters or fewer.",length:"This value length is invalid. It should be between %s and %s characters long.",mincheck:"You must select at least %s choices.",maxcheck:"You must select %s choices or fewer.",check:"You must select between %s and %s choices.",equalto:"This value should be the same."}),"undefined"!=typeof window.ParsleyValidator&&window.ParsleyValidator.addCatalog("en",window.ParsleyConfig.i18n.en,!0);var A=a.extend(new h,{$element:a(document),actualizeOptions:null,_resetOptions:null,Factory:w,version:"2.2.0-rc1"});a.extend(u.prototype,h.prototype),a.extend(q.prototype,h.prototype),a.extend(w.prototype,h.prototype),a.fn.parsley=a.fn.psly=function(b){if(this.length>1){var c=[];return this.each(function(){c.push(a(this).parsley(b))}),c}return a(this).length?new w(this,b):void f.warn("You must bind Parsley on an existing element.")},"undefined"==typeof window.ParsleyExtend&&(window.ParsleyExtend={}),A.options=a.extend(f.objectCreate(g),window.ParsleyConfig),window.ParsleyConfig=A.options,window.Parsley=window.psly=A,window.ParsleyUtils=f;var B=window.Parsley._validatorRegistry=new n(window.ParsleyConfig.validators,window.ParsleyConfig.i18n);return window.ParsleyValidator={},a.each("setLocale addCatalog addMessage getErrorMessage formatMessage addValidator updateValidator removeValidator".split(" "),function(b,c){window.Parsley[c]=a.proxy(B,c),window.ParsleyValidator[c]=function(){return f.warnOnce("Accessing the method `"+c+"` through ParsleyValidator is deprecated. Simply call `window.Parsley."+c+"(...)`"),window.Parsley[c].apply(window.Parsley,arguments)}}),window.ParsleyUI="function"==typeof window.ParsleyConfig.ParsleyUI?(new window.ParsleyConfig.ParsleyUI).listen():(new p).listen(),!1!==window.ParsleyConfig.autoBind&&a(function(){a("[data-parsley-validate]").length&&a("[data-parsley-validate]").parsley()}),window.Parsley});;
(function( jQuery ) {
    if ( window.XDomainRequest && !jQuery.support.cors ) {
        jQuery.ajaxTransport(function( s ) {
            if ( s.crossDomain && s.async ) {
                if ( s.timeout ) {
                    s.xdrTimeout = s.timeout;
                    delete s.timeout;
                }
                var xdr;
                return {
                    send: function( _, complete ) {
                        function callback( status, statusText, responses, responseHeaders ) {
                            xdr.onload = xdr.onerror = xdr.ontimeout = xdr.onprogress = jQuery.noop;
                            xdr = undefined;
                            jQuery.event.trigger( "ajaxStop" );
                            complete( status, statusText, responses, responseHeaders );
                        }
                        xdr = new XDomainRequest();
                        xdr.open( s.type, s.url );
                        xdr.onload = function() {
                            var status = 200;
                            var message = xdr.responseText;
                            var r = JSON.parse(xdr.responseText);
                            if (r.StatusCode && r.Message) {
                                status = r.StatusCode;
                                message = r.Message;
                            }
                            callback( status , message, { text: message }, "Content-Type: " + xdr.contentType );
                        };
                        xdr.onerror = function() {
                            callback( 500, "Unable to Process Data" );
                        };
                        xdr.onprogress = function() {};
                        if ( s.xdrTimeout ) {
                            xdr.ontimeout = function() {
                                callback( 0, "timeout" );
                            };
                            xdr.timeout = s.xdrTimeout;
                        }
                        xdr.send( ( s.hasContent && s.data ) || null );
                    },
                    abort: function() {
                        if ( xdr ) {
                            xdr.onerror = jQuery.noop();
                            xdr.abort();
                        }
                    }
                };
            }
        });
    }
})( jQuery );
;
/**
 * Gatekeeper namespace
 */
var Gatekeeper = window.Gatekeeper || {};

/**
 * Gatekeeper settings
 *
 * @todo find a better way to define this settings
 * @example Gatekeeper.settings = Drupal.settings.Gatekeeper
 * @type {Object}
 */
Gatekeeper.settings = {};

/**
 * Gatekeeper debug messages
 *
 * @type {Boolean}
 */
Gatekeeper.debug = false;

/**
 * Gatekeeper Api
 */
Gatekeeper.Api = (function (window, document) {
    'use strict';

    /**
     * Ajax helper
     *
     * @param  {string} url  request url
     * @param  {object} data request data
     * @param  {string} verb http verb
     * @return {object}
     */
    function _request(url, data, verb) {
        return $.ajax({
            type: verb || 'GET',
            url: Gatekeeper.settings.host + url,
            data: data || {},
        });
    }

    /**
     * Gatekeeper server status
     *
     * @param  {Object} callbacks callback functions
     */
    return {
        getStatus: function (callbacks) {
            var request = _request('/status/app');

            request.complete(function (response) {
                var status = (response.status === 200);

                if (status && typeof callbacks.success === 'function') {
                    return callbacks.success();
                }

                if (typeof callbacks.fail === 'function') {
                    return callbacks.fail();
                }

            }).always(function (response) {
                if (Gatekeeper.debug) {
                    Gatekeeper.Helpers.log(response, 'Gatekeeper.Api.getStatus');
                }
            });
        },

        /**
         * Performs authentication request
         *
         * @param {string} user user name
         * @param {string} pass user password
         * @param  {Function} callback functions
         */
        auth: function (user, pass, callbacks) {
            var that = this;

            that.getStatus({
                success: function () {
                    var request = _request('/auth', {
                        email: user,
                        password: pass
                    }, 'POST');

                    request.success(function (response) {
                        var json = (typeof response === 'string') ? $.parseJSON(response) : response;
                        if (json.status === true && json.code === '200') {
                            if (typeof callbacks.success === 'function') {
                                return callbacks.success(json);
                            }
                        }

                    }).error(function (response) {

                        /* CN gatekeeper response*/
                        if (response.status === 302) {
                            var json = $.parseJSON(response.responseText);
                            if (json.status === true && json.code === 302) {
                                if (typeof callbacks.success === 'function') {
                                    return callbacks.success(json);
                                }
                            }
                        }

                        // blocked out after 5 mistakes
                        if (response.status === 403 && typeof callbacks.blockedOut === 'function') {
                            return callbacks.blockedOut();
                        }

                        // wrong credentials
                        if (response.status === 401 && typeof callbacks.invalid === 'function') {
                            return callbacks.invalid();
                        }

                        // failback
                        if (response.status === 0 && typeof callbacks.fail === 'function') {
                            return callbacks.fail();
                        }

                    }).always(function (response) {
                        if (Gatekeeper.Helpers.debug) {
                            Gatekeeper.Helpers.log(response, 'Gatekeeper.Api.auth');
                        }
                    });
                },
                fail: function () {
                    // failback
                    if (typeof callbacks.fail === 'function') {
                        return callbacks.fail();
                    }
                }
            });
        }
    };

}(window, document));

/**
 * Gatekeeper Helpers
 */
Gatekeeper.Helpers = (function (window, document) {
    'use strict';

    return {

        /**
         * Debug helper
         *
         * @param  {mixed} data
         * @param  {string} msg description message
         */
        log: function (data, msg) {
            debug.log(msg + ': ' + JSON.stringify(data));
        },

        /**
         * Redirects to specific user hosts
         *
         * @param  {string} token authentication token
         * @param  {string} userRegion user region
         * @param  {string} prefix user locale prefix
         * @param  {string} destination redirect destination
         */
        startSession: function (token, userRegion, prefix, destination) {
            var that   = this,
                region = $.trim(userRegion) || Gatekeeper.settings.region,
                locale = $.trim(prefix) || Gatekeeper.settings.locale,
                dest   = destination || decodeURI(window.location.search.slice(1)) + window.location.hash,
                href   = Gatekeeper.settings.regions[region] +
                    Gatekeeper.settings.redirect_url +
                    '?key=' + token +
                    '&token=' + Gatekeeper.settings.token +
                    '&locale=' + locale;
            if (dest) {
                href += '&' + $.trim(dest);
            }
            if (Gatekeeper.debug) {
                that.log(href, 'Gatekeeper.Helpers.redirect');
            }
            window.location.href = href;
        },

        /**
         * Set user cookies
         *
         * @param {string} user user name
         * @param {string} persistent persistent login
         */
        setCookies: function (user, persistent) {
            var that           = this,
                keep_signed_in = persistent || 0,
                tesla_cookie   = readCookie('tesla_login'),
                tesla_username = readCookie('tesla_username');

            createCookie('tesla_username', encodeURIComponent($.trim(user)), 360);

            if (keep_signed_in === '1') {
                if (!tesla_cookie) {
                    createCookie('tesla_login', 'true', 360);
                }
            } else {
                if (tesla_cookie) {
                    eraseCookie('tesla_login');
                }
            }
            if (Gatekeeper.debug) {
                that.log({
                    persistent: keep_signed_in,
                    login: tesla_cookie,
                    username: tesla_username
                }, 'Gatekeeper.Helpers.setCookies');
            }
        }
    };

}(window, document));
;
Drupal.behaviors.teslaLoginBehavior = {

    attach: function (context, settings) {
        Drupal.behaviors.tesla_user.submitLoginForm = function () {};

        // Set Gatekeeper Api configuration
        Gatekeeper.settings = settings.Gatekeeper;
        Gatekeeper.debug    = true;

        // common selectors
        var locale   = Drupal.settings.tesla.localePrefix,
            $form    = $('#user-login', context),
            $name    = $('#edit-name', context),
            $pass    = $('#edit-pass', context),
            $errors  = $('.messages', context),
            messages = {
                invalid: Drupal.t('We could not sign you in using the information you provided. Please try again.'),
                blockedOut: Drupal.t('Your account has been locked due to too many failed login attempts. To unlock your account') + ' <a href="' + locale + '/user/password">' + Drupal.t('reset your password') + '</a>.'
            };

        if (!$errors.length) {
            $('.my-form-wrapper').prepend('<div class="messages error"></div>');
        }

        /**
         * Display error messages
         *
         * @param  {string} message error message
         */
        function displayError(message) {
            $('.messages').empty()
                .html(message)
                .fadeIn('slow');
        }

        // form submission
        $form.on('submit', function () {
            var name = $.trim($name.val()),
                pass = $.trim($pass.val());

            if (name !== '' && pass !== '') {
                Gatekeeper.Api.auth(name, pass, {
                    success: function (auth) {
                        Gatekeeper.Helpers.setCookies(name);
                        Gatekeeper.Helpers.startSession(auth.data, auth.region);
                    },
                    invalid: function () {
                        displayError(messages.invalid);
                    },
                    blockedOut: function () {
                        displayError(messages.blockedOut);
                    },
                    fail: function () {
                        $form.off('submit').submit();
                    }
                });

            } else {
                displayError(messages.invalid);

            }
            return false;
        });
    }
};
;
/*global window */
/**
 * Parsley minint validator allows for a field to have a minimum number of
 *   digits in a given string, however is only applicable if the field is
 *   populated. A minint of 3 would accept:
 *   - 123
 *   - A123
 *   - 1A2B3
 *   - (empty)
 */
(function () {
    'use strict';
    window.Parsley.addValidator(
        'minint',
        function (value, minimum) {
            var hasValue,
                intValue,
                hasIntValue,
                hasMinimum;
            // Strip non numeric.
            intValue = value.replace(/\D/g, '');
            minimum = parseInt(minimum);
            // Ensure either is empty, or is not empty and has enough digits.
            hasValue = (value !== undefined && value !== null && value !== '');
            hasIntValue = (intValue !== undefined && intValue !== null && intValue !== '');
            hasMinimum = !hasValue || (hasIntValue && intValue.length >= minimum);
            return hasMinimum;
        },
        32
    ).addMessage('en', 'minint', 'minimum characters not met');
}());
;
(function () {

window.Parsley.addValidator(
    'notequalto',
    function (value, nbReference) {
        $reference = $('#'+nbReference).val();
        $net = value == $reference;
        return !$net;
    }, 32)
    .addMessage('en', 'notequalto', 'invalid duplicate entry');

})();;
// Hack to make localizeDate() work.
if (typeof curCarInfo === 'undefined') {
    curCarInfo = {};
}

(function (window, document, $, Drupal) {
    "use strict";

    $(function() {
        var $form = $('#tesla-insider-form');
        // Initialize BrowserDetect object if it hasn't already been done.
        if (typeof BrowserDetect !== "undefined" && typeof BrowserDetect.summary === "undefined") {
            BrowserDetect.init();

            // WEB-24227:
            if (BrowserDetect.summary.browser == 'Explorer' && BrowserDetect.summary.version == 8) {
                $('input[name="post-submit"]').removeClass('hide-on-desk').addClass('hide-on-mobile');
                $('input[name="ajax-submit"]').removeClass('hide-on-mobile').addClass('hide-on-desk');
            }
        }
    });

    Drupal.behaviors.tesla_insider_form_prepopulate = {
        attach: function() {
            $(document).ready(function() {
                // Check if user is logged in. If so, populate email field.
                if (Drupal.behaviors.common.isLoggedIn()) {
                    Drupal.behaviors.tesla_insider_form_prepopulate.populate();
                }
            });
        },
        populate: function () {
            // Retrieve the email field for the Tesla insider form.
            var $insiderForm = $('#tesla-insider-form');

            // If the email field is on the page, update it with the locally
            //   cached email address.
            var $insiderFormEmailV1      = $insiderForm.find('#edit-usermail');
            var $insiderFormEmailV2      = $insiderForm.find('#edit-usermail--2');

            if ($insiderFormEmailV1.length) {
                $insiderFormEmailV1.val(Drupal.behaviors.common.getEmailAddress());
            }

            if ($insiderFormEmailV2.length) {
                $insiderFormEmailV2.val(Drupal.behaviors.common.getEmailAddress());
            }
        }
    };

    Drupal.behaviors.tesla_insider_form = {
        attach: function () {

            var $form = $('#tesla-insider-form');
            $('#edit-submit-ti-ajax').on('click', function(e) {
                var reg = new RegExp("(^|&)bd=([^&]*)(&|$)", "i");
                var param = window.location.search.substr(1).match(reg);
                var $adword;
                if (param != null) $adword = unescape(param[2]);
                var cookie = $.cookie('bd');

                if ($adword != null) {
                    $.cookie('bd', $adword, {expires : 30});
                    $('input[name=ad_word_ti]').val($adword);
                } else {
                    if (cookie != null && cookie != '') {
                        $('input[name=ad_word_ti]').val(cookie);
                    }
                }
            });

            var $zip_code = $('#edit-zipcode-ti');
            var $ajax_country = true;
            if ($form.length) {
                $form.parsley().destroy();
                $form.parsley();

                // Fire view-open on first input click (for embedded forms).
                $form.find('.form-item input, .form-item textarea').click(function () {
                    TeslaAnalytics.NewsletterSignup.interactionViewOpen();
                });

                $('#tesla-insider-modal').on('show.bs.modal', function (event) {
                    TeslaAnalytics.NewsletterSignup.interactionViewOpen();
                });

                $('#tesla-insider-modal').on('hide.bs.modal', function (event) {

                    // var mymodal = $(this);
                    if ($('#tesla-insider-modal .thanks').length) {

                        // e.preventDefault();
                        var country = (_.indexOf(['en_US', 'zh_CN'], Drupal.settings.tesla.locale) === -1) ? "/" + Drupal.settings.tesla.locale : '';
                        $('.modal-body', '#tesla-insider-modal').load(country + "/drive/ajax", function () {
                            Drupal.attachBehaviors();
                        });
                        $('#tesla-insider-modal .modal-title').html(Drupal.t('Tesla Insider'));

                    }
                });

                $('.btn-ajax', '#tesla-insider-form').click(function (event) {
                    event.preventDefault(); // Prevent default form submit.
                    var valid = $form.parsley().validate();
                    if (valid && $ajax_country) {
                        $('#tesla-insider-modal .modal-throbber').removeClass('hidden');
                        $(this).trigger('submit_form');
                    }
                });

                // Add browser values to form.
                if (typeof(BrowserDetect) !== "undefined" && typeof(BrowserDetect.summary) === "undefined") {
                    BrowserDetect.init();
                }
                $('#tesla-insider-form').append('<input type="hidden" name="browser_type" value="' + BrowserDetect.summary.browser + '">').
                    append('<input type="hidden" name="browser_version" value="' + BrowserDetect.summary.version + '">').
                    append('<input type="hidden" name="browser_os" value="' + BrowserDetect.summary.OS + '">');

                $('#tesla-insider-form input[type="text"]').keypress(function(e) {
                    if (e.keyCode == 13) {
                        e.stopPropagation();
                        var btn1 = $('#edit-submit-ti-ajax');
                        var btn2 = $('#edit-submit-ti-ajax--2');
                        if (btn1) {
                            btn1.click();
                        }
                        else if (btn2) {
                            btn2.click();
                        }
                        return false;
                    }
                });
                $('#edit-location').change();
            }
        }
    };

}(this, this.document, this.jQuery, this.Drupal));
;
(function ($) {
    "use strict";

    Drupal.behaviors.request_callback_form = {
        attach: function (context, settings) {
            var $form = $('#callback-form');
            var modelCode = $('input:hidden[name=model_code]').val();
            $('input:hidden[name=model_code_request_callback]').attr('value', (modelCode ? modelCode : 'ms'));
            $('input:hidden[name=is_preowned]').attr('value', ($( "#order-form").hasClass("cpo") && $( "#order-form").hasClass("used")));
            $('#edit-submit-request-callback').click(function(e){
                var reg = new RegExp("(^|&)bd=([^&]*)(&|$)", "i");
                var param = window.location.search.substr(1).match(reg);
                var $adword;
                if (param != null) $adword = unescape(param[2]);
                var cookie = $.cookie('bd');

                if ($adword != null) {
                    $.cookie('bd', $adword, {expires : 30});
                    $('input[name=ad_word_request_callback]').val($adword);
                } else {
                    if (cookie != null && cookie != '') {
                        $('input[name=ad_word_request_callback]').val(cookie);
                    }
                }
            });
            if ($form.length) {
                $form.parsley().destroy();
                $form.parsley();

                $('#request-callback-modal').once(
                    function(){
                        // do this once - start
                        $('#request-callback-modal').on('show.bs.modal', function (event) {
                            TeslaAnalytics.RequestCallback.interactionViewOpen();
                        });
                        // do this once - end
                    }
                );

                //Stop the submit of the form if it is not valid
                $('#edit-submit-request-callback', '#callback-form').click(function (e) {
                    e.preventDefault(); //prevent default form submit
                    var valid = $form.parsley().validate();
                    if (valid) {
                        var $formModal = $('#request-quote-modal').length ? $('#request-quote-modal') : $('#request-callback-modal');
                        $('#' + $formModal.attr('id') + ' .modal-throbber').removeClass('hidden');
                        $(this).trigger('submit_form');
                        if ($formModal.attr('id') == 'request-quote-modal') {
                            $("html, body").animate({ scrollTop: 0 }, "slow");
                        }
                    }
                });

                //Regenerate the modal (form) on close AND when it is displaying the thank you page
                $('#request-callback-modal').on('hide.bs.modal', function (e) {
                    //var mymodal = $(this);
                    if ($('#request-callback-modal .thanks').length) {
                        //e.preventDefault();
                        var country = (_.indexOf(['en_US', 'zh_CN'], Drupal.settings.tesla.locale) === -1) ? "/" + Drupal.settings.tesla.locale : '';
                        $('.modal-body', '#request-callback-modal').load(country + "/tesla_request_callback/regenerate", function () {
                            $('#request-callback-modal input[name=current_path]').attr('value', window.location.pathname);
                            Drupal.attachBehaviors();
                            // wait until the form have been created
                            //mymodal.modal('hide');
                        });
                    }
                });

                $('#trade-in-value-vin').on('click', function (e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = false;
                    var $rn = $('#edit-rn-tradein'),
                        $mileage = $('#edit-mileage-tradein'),
                        validateRN = $rn.parsley().validate(),
                        validateMileage = $mileage.parsley().validate();

                    if (validateRN === true && validateMileage === true) {
                        var $valuation         = $('#trade-in-valuation'),
                            $valuationInput    = $('input[name="tradein_valuation"]'),
                            $description       = $('#trade-in-description'),
                            $descriptionInput  = $('input[name="tradein_description"]'),
                            $responseContainer = $('#tradein-calculation-response');

                        var request = $.get(Drupal.settings.tesla.localePrefix + '/autotrader/valuation/' + $.trim($rn.val()) + '/' + $.trim($mileage.val()));
                        $responseContainer.find('div').html('');
                        $responseContainer.find('input').attr('value', '');
                        $responseContainer.addClass('trade-in-spinner');
                        request.done(function (response) {
                            $responseContainer.removeClass('trade-in-spinner');
                            $descriptionInput.attr('value', JSON.stringify(response.car_details));
                            if (response.hasOwnProperty('Error')) {
                                $description.html(response.Error);
                                if (!response.hasOwnProperty('car_description')) {
                                    $descriptionInput.attr('value', JSON.stringify({
                                        error: response.Error,
                                        registration_number: $rn.val(),
                                        mileage: $mileage.val()
                                    }));
                                }
                            } else {
                                $description.html(response.car_description);
                                $valuation.html(Drupal.t('Your estimated trade-in value is: @amount. Subject to inspection.', {
                                    '@amount': Tesla.formatMoney(response.valuation, Drupal.settings.tesla.locale, 0)
                                }));
                                $valuationInput.attr('value', response.valuation);
                            }
                        }).fail(function () {
                            $responseContainer.removeClass('trade-in-spinner');
                            $description.html(Drupal.t('Car not found'));
                            $descriptionInput.attr('value', JSON.stringify({
                                error: Drupal.t('Car not Found'),
                                registration_number: $rn.val(),
                                mileage: $mileage.val()
                            }));
                        });
                    }
                });

                //Make the phone call option default only for en_US
                if (Drupal.settings.tesla.locale == 'en_US') {
                    Drupal.behaviors.request_callback_form.handleContactPrefChange('phone');
                }

                $('#edit-method-of-contact-request-callback').change(function () {
                    if (this.value === 'Phone Call') {
                        Drupal.behaviors.request_callback_form.handleContactPrefChange('phone');
                    }
                    else if (this.value === 'Email') {
                        Drupal.behaviors.request_callback_form.handleContactPrefChange('email');
                    }
                });
            }
        },
        handleContactPrefChange: function (preference) {
            var phoneNumberField = $('#edit-phone-number-request-callback');
            if (preference === 'phone') {
                phoneNumberField.addClass('required').attr({'data-parsley-required-message' : 'required', 'data-parsley-required' : 'true'});
            }
            else if (preference === 'email') {
                phoneNumberField.removeClass('required').removeAttr('data-parsley-required-message data-parsley-required');
            }
        }
    };

})(jQuery);

/*
 * Helper function that will select a quote for the modal, this require that the link to the modal have a new attribute
 * onclick="multiple_choice( $('#name-of-the-quote-to-select')
 *
 * Possible values for the quotes are:
 *
 * edit-request-leasing-request-callback == Leasing
 * edit-request-financing-request-callback == Financing
 * edit-request-trade-in-request-callback == Trade In
 * edit-request-callback-request-callback == Request Callback (US only)
 * */
var multiple_choice = function (the_checkbox) {
    $('.sending-options').find(':checkbox').attr('checked', false);
    if (typeof the_checkbox !== 'undefined') {
        the_checkbox.attr('checked', true);
    }
};
;
