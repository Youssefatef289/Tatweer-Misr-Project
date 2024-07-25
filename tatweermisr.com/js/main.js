function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    if ($(window).width() > 1025)
        var elemHeightBuffer = $(elem).height() * 0.8;
    else
        var elemHeightBuffer = $(elem).height() * 0.9;

    return ((elemBottom <= (docViewBottom + elemHeightBuffer)) && (elemTop >= docViewTop));
}

function checkFullPageApi() {
    var fullPageDiv = $('#full-page');
    return $(fullPageDiv).hasClass('fullpage-wrapper') && !$(fullPageDiv).hasClass('fullpage-destroyed');
}

function initMobileMenu() {
    var $menu = $('div#mobile-menu');
    var $icon = $('.hamburger');
    var $header = $('header');

    $menu.mmenu({
        pageSelector: 'body > div#page',
        slidingSubmenus: false,
        "extensions": [
            "position-back",
            "position-bottom",
            "fullscreen"
        ],
        offCanvas: {
            "position": "bottom"
        }
    }, {
        // configuration
        classNames: {
            fixedElements: {
                fixed: "fixed",
                sticky: "stick"
            }
        }
    });

    var API = $menu.data("mmenu");
    var $top = 0;

    $icon.on("click", function () {
        if ($icon.hasClass("is-active"))
            API.close();
        else
            API.open();
    });
    API.bind("open:start", function () {

        $header.addClass('menu-opened');
        if ($('header').hasClass('top')) {
            $top = 1;
        } else {
            $top = 0;
        }

        checkHeader();
        $icon.addClass("is-active");
        if (checkFullPageApi())
            $.fn.fullpage.setAllowScrolling(false);

        var timeoutDelay = 0;
        $.each($('.mm-listitem.animated'), function (key, value) {
            setTimeout(function () {
                $(value).addClass('fadeInLeft');
            }, timeoutDelay);
            timeoutDelay += 100;
        });
    });
    API.bind("close:start", function () {
        $header.removeClass('menu-opened');
        checkHeader();
        $icon.removeClass("is-active");

        if(document.documentElement.scrollTop > 80 || window.pageYOffset > 80){
            // $('header a#logo > img').css({"width":"40px"});
            if($("body").hasClass("dark-mode")){
                $('header a#logo > img.white-logo-big').removeClass("active");
                $('header a#logo > img.blue-logo').removeClass("active");
                $('header a#logo > img.white-logo-small').addClass("active");
                $('header a#logo > img.blue-logo-big').removeClass("active");

                // $('header a#logo > img').attr('src', assetUrl + 'images/logo-white2.svg');
            }
            else{
                $('header a#logo > img.white-logo-big').removeClass("active");
                $('header a#logo > img.blue-logo').addClass("active");
                $('header a#logo > img.white-logo-small').removeClass("active");
                $('header a#logo > img.blue-logo-big').removeClass("active");

                // $('header a#logo > img').attr('src', assetUrl + 'images/logo-blue.svg');
            }
        }
        else if(document.documentElement.scrollTop < 80 || window.pageYOffset < 80){
            if($(window).width() < 767){
                if($("body").hasClass("dark-mode")){
                    $('header a#logo > img.white-logo-big').removeClass("active");
                    $('header a#logo > img.blue-logo').removeClass("active");
                    $('header a#logo > img.white-logo-small').addClass("active");
                    $('header a#logo > img.blue-logo-big').removeClass("active");

                    // $('header a#logo > img').attr('src', assetUrl + 'images/logo-white2.svg');
                }
                else{
                    $('header a#logo > img.white-logo-big').removeClass("active");
                    $('header a#logo > img.blue-logo').addClass("active");
                    $('header a#logo > img.white-logo-small').addClass("active");
                    $('header a#logo > img.blue-logo-big').removeClass("active");

                    // $('header a#logo > img').attr('src', assetUrl + 'images/logo-blue.svg');
                }
            }
            else{
                $('header a#logo > img.white-logo-big').addClass("active");
                $('header a#logo > img.blue-logo').removeClass("active");
                $('header a#logo > img.white-logo-small').removeClass("active");
                $('header a#logo > img.blue-logo-big').removeClass("active");

                // $('header a#logo > img').attr('src', assetUrl + 'images/logo-white.svg');
            }
        }
        if(!$("header").hasClass('dynamic')){
            if($("body").hasClass("dark-mode")){
                $('header a#logo > img.white-logo-big').removeClass("active");
                $('header a#logo > img.blue-logo').removeClass("active");
                $('header a#logo > img.white-logo-small').addClass("active");
                $('header a#logo > img.blue-logo-big').removeClass("active");

                // $('header a#logo > img').attr('src', assetUrl + 'images/logo-white2.svg');
            }
            else{
                $('header a#logo > img.white-logo-big').removeClass("active");
                $('header a#logo > img.blue-logo').addClass("active");
                $('header a#logo > img.white-logo-small').removeClass("active");
                $('header a#logo > img.blue-logo-big').removeClass("active");

                // $('header a#logo > img').attr('src', assetUrl + 'images/logo-blue.svg');
            }
            // $('header a#logo > img').css({"width":"40px"});
        }

        if (checkFullPageApi()) {
            $.fn.fullpage.setAllowScrolling(true);
            var activeSection = $.fn.fullpage.getActiveSection();
            if (activeSection.index == 5) {
                $('header').removeClass('top');
            }

            if (!$('body').hasClass('fp-viewing-0')){
                if($("body").hasClass("dark-mode")){
                    $('header a#logo > img.white-logo-big').removeClass("active");
                    $('header a#logo > img.blue-logo').removeClass("active");
                    $('header a#logo > img.white-logo-small').addClass("active");
                    $('header a#logo > img.blue-logo-big').removeClass("active");

                    // $('header a#logo > img').attr('src', assetUrl + 'images/logo-white2.svg');
                }
                else{
                    $('header a#logo > img.white-logo-big').removeClass("active");
                    $('header a#logo > img.blue-logo').addClass("active");
                    $('header a#logo > img.white-logo-small').removeClass("active");
                    $('header a#logo > img.blue-logo-big').removeClass("active");

                    // $('header a#logo > img').attr('src', assetUrl + 'images/logo-blue.svg');
                }
                // $('header a#logo > img').css({"width":"40px"});
            }
        }
        $('.mm-listitem.fadeInLeft').removeClass('fadeInLeft');
    });

    $menu.removeClass('before-init');

    $('#mm-1').scroll(function () {
        checkHeaderOnMenu();
    });
}

function checkHeader() {
    if ((document.documentElement.scrollTop >= 80 || window.pageYOffset >= 80 || $(window).width() < 1025 || !$('header').hasClass('dynamic')) && !$('header').hasClass('menu-opened')) {
        $('header').removeClass('top');
        $('#page').css('padding-top', '60px');
        // $('header a#logo > img').css({"width":"40px"});

        if($("body").hasClass("dark-mode")){
            $('header a#logo > img.white-logo-big').removeClass("active");
            $('header a#logo > img.blue-logo').removeClass("active");
            $('header a#logo > img.white-logo-small').addClass("active");
            $('header a#logo > img.blue-logo-big').removeClass("active");
        }
        else{
            $('header a#logo > img.white-logo-big').removeClass("active");
            $('header a#logo > img.blue-logo').addClass("active");
            $('header a#logo > img.white-logo-small').removeClass("active");
            $('header a#logo > img.blue-logo-big').removeClass("active");
            // $('header a#logo > img').attr('src', assetUrl + 'images/logo-blue.svg');
            // $('header a#logo > img.blue-logo').addClass("active");
        }
    } else if ($('header').hasClass('dynamic') || $('header').hasClass('menu-opened')) {
        
        $('header').addClass('top');
        $('#page').css('padding-top', 0);

        $('header a#logo > img.white-logo-big').addClass("active");
        $('header a#logo > img.blue-logo').removeClass("active");
        $('header a#logo > img.white-logo-small').removeClass("active");
        $('header a#logo > img.blue-logo-big').removeClass("active");

        // $("header.top a#logo > img").attr('src', assetUrl + 'images/logo-white.svg');
    }
    if (document.documentElement.scrollTop < 80 || window.pageYOffset < 80) {
        if($(window).width() < 767){
            // $('header a#logo > img').css({"width":"40px"});
        }
        else{
            // $('header a#logo > img').css({"width":"220px"});
        }

    }
    if(!$("header").hasClass('dynamic')){
        // $('header a#logo > img').css({"width":"40px"});
    }
    if($('header').hasClass('menu-opened')  ){
        if($(window).width() < 767){
            if($("body").hasClass("dark-mode")){
                $('header a#logo > img.white-logo-big').removeClass("active");
                $('header a#logo > img.blue-logo').removeClass("active");
                $('header a#logo > img.white-logo-small').addClass("active");
                $('header a#logo > img.blue-logo-big').removeClass("active");

                // $('header a#logo > img').attr('src', assetUrl + 'images/logo-white2.svg');
            }
            else{
                $('header a#logo > img.white-logo-big').removeClass("active");
                $('header a#logo > img.blue-logo').addClass("active");
                $('header a#logo > img.white-logo-small').removeClass("active");
                $('header a#logo > img.blue-logo-big').removeClass("active");

                // $('header a#logo > img').attr('src', assetUrl + 'images/logo-blue.svg');
            }
            // $('header a#logo > img').css({"width":"40px"});
        }
        else{
            // $('header a#logo > img').css({"width":"220px"});

            if($("body").hasClass("dark-mode")){
                $('header a#logo > img.white-logo-big').addClass("active");
                $('header a#logo > img.blue-logo').removeClass("active");
                $('header a#logo > img.white-logo-small').removeClass("active");
                $('header a#logo > img.blue-logo-big').removeClass("active");

                // $('header a#logo > img').attr('src', assetUrl + 'images/logo-white.svg');
            }
            else{

                $('header a#logo > img.white-logo-big').removeClass("active");
                $('header a#logo > img.blue-logo').removeClass("active");
                $('header a#logo > img.white-logo-small').removeClass("active");
                $('header a#logo > img.blue-logo-big').addClass("active");


                // $('header a#logo > img').attr('src', assetUrl + 'images/logo-blue-full.svg');
            }
        }
        
    }
    $('header').removeClass('before-init');
}

function checkHeaderOnMenu() {
    if (document.getElementById('mm-1').scrollTop > 10) {
        $('header').removeClass('fadeIn');
        $('header').addClass('fadeOut');
    } else {
        $('header').removeClass('fadeOut');
        $('header').addClass('fadeIn');
    }
}

$(window).resize(function () {
    checkHeader();
});
$(window).scroll(function () {
    checkHeader();
});
$(document).ready(function () {
    initMobileMenu();
    checkHeader();

    /* $('.mm-listitem_vertical').click(function () {
        var myMenuId = $(this).attr('id');
        $('.mm-listitem_vertical:not(#' + myMenuId + ')').removeClass('mm-listitem_opened');
    }); */

    $('.mm-btn_next').on('click', function() {
        setTimeout(function() {
            $(this).closest('.mm-listitem_vertical').removeClass('mm-listitem_opened');
        }, 500);
    });

    $('.newsletter-subscription').submit(function (e) {
        e.preventDefault();
        var form = $(this);

        form.find('.error').removeClass('error');
        form.find('.response').empty();

        var dataString = form.serialize();
        $.ajax({
            type: "POST",
            url: form.attr('action'),
            data: dataString,
            dataType: "json",
            success: function (response) {
                form.find('p.response').append(response.messages);
                form.find('input[name="email"]').val('');
            }
        }).fail(function (response) {
            var errors = response.responseJSON.errors;
            if (errors.email.length > 0) {
                console.log(response.responseJSON.errors);
                form.find('p.response').append(errors.email);
                form.find('p.response').addClass('error');
            }
        });
    });

    $('.mm-listitem > a:not(.mm-btn_next)').removeClass('active');
    $('.mm-listitem > a:not(.mm-btn_next)[href="' + window.location.href + '"]').addClass('active');

    /*AOS.init({
        duration: 800,
    });*/

    $('.modal').on('show.bs.modal', function () {
        $('html, .mm-page, #page').addClass('modal-open');
    }).on('hide.bs.modal', function () {
        $('html, .mm-page, #page').removeClass('modal-open');
    });

    /********************** Book Now Form Validation **********************/
    $("#generic-book-now form").validate({

        focusInvalid: false,

        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                rangelength: [9, 15]
            },
            project: {
                required: true
            },
            unit_type: {
                required: true
            }
        },

        messages: {

            name: {
                minlength: "Name should be at least 2 characters."
            },
            email: {
                email: "Please enter a valid email address."
            },
            phone: {
                rangelength: "Please enter a valid phone number."
            }
        },

        showErrors: function (errorMap, errorList) {

            this.defaultShowErrors();

            if (this.numberOfInvalids() >= 1 && $("#book-now-email-error").text() != "Please enter a valid email address." && $("#book-now-phone-error").text() != "Please enter a valid phone number." && $("#book-now-name-error").text() != "Name should be at least 2 characters.") {
                $("#summary-book-now").html("Please fill all fields"); //" + this.numberOfInvalids() + "  
                $("#summary-book-now").show();
            }
            else if (this.numberOfInvalids() == 0 || $("#book-now-email-error").text() == "Please enter a valid email address." || $("#book-now-phone-error").text() == "Please enter a valid phone number." || $("#book-now-name-error").text() == "Name should be at least 2 characters.") {
                $("#summary-book-now").hide();
            }

        },

        errorPlacement: function (error, element) {
            error.appendTo('#summary-book-now-' + element.attr('property'));
        },


        submitHandler: function (form, e) {

            e.preventDefault();

            var form = $(form);

            //form.find('.error').removeClass('error');
            form.find('.response').empty();

            var dataString = form.serialize();
            //var dataString = new FormData($(form)[0]);

            $.ajax({

                /*cache: false,
                processData: false, // Don't process the files
                contentType: false, */// Set content type to false as jQuery will tell the server its a query string request

                type: "POST",
                url: form.attr('action'),
                data: dataString,
                dataType: "json",

                success: function (response) {
                    form.find('p.response').append(response.messages);

                    gtag('event', 'conversion', {'send_to': 'AW-664787822/UvF2CIP408gBEO62_7wC'});
                    // GTM Event Tracking
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                    'event': 'success.gtm.load',
                    'formType': 'Generic Book Now'
                    });
                },

                error: function (response) {
                    var err = JSON.parse(response.responseText);

                    //console.log(err);

                    form.find('p.response').removeClass('success')
                    form.find('p.response').addClass('error').append(err.message);

                    $.each(err.errors, function (key, value) {
                        // var $key = key;

                        form.find("input[name='" + key + "']").addClass('error');

                        // alert(key + ": " + value);
                        /*form.find('p.response').append(value + '<br>');
                        err.errors = jQuery.grep(err.errors, function( a ) {
                            return a !== 9;
                        });*/
                    });

                }


            }).fail(function (response) {
                var errors = response.responseJSON.errors;
                if (errors.email.length > 0) {
                    console.log(response.responseJSON.errors);
                    form.find('p.response').append(errors.email);
                    form.find('p.response').addClass('error');
                }
            });
            ;

            $("#book-now-name").hide();
            $("#book-now-email").hide();
            $("#book-now-phone").hide();
            $("#book-now-project").hide();
            $("#book-now-unit-type").hide();
            $("#book-now-btn").hide();
            $("#book-now-p").hide();

            setTimeout(function () {
                $("#generic-book-now").fadeOut();
                $(".modal-backdrop.fade.show").fadeOut();
            }, 5000);
        }
    });

    $('#summary-book-now-name').bind("DOMSubtreeModified", function () {
        if ($("#book-now-name-error").text() == "Name should be at least 2 characters.") {
            $("#summary-book-now-name").show();
        }
        else {
            $("#summary-book-now-name").hide();
        }
    });

    $('#summary-book-now-email').bind("DOMSubtreeModified", function () {
        if ($("#book-now-email-error").text() == "Please enter a valid email address.") {
            $("#summary-book-now-email").show();
        }
        else {
            $("#summary-book-now-email").hide();
        }
    });

    $('#summary-book-now-phone').bind("DOMSubtreeModified", function () {
        if ($("#book-now-phone-error").text() == "Please enter a valid phone number.") {
            $("#summary-book-now-phone").show();
        }
        else {
            $("#summary-book-now-phone").hide();
        }
    });
    $('#summary-book-now-project').bind("DOMSubtreeModified", function () {
        $("#summary-book-now-project").hide();
    });
    $('#summary-book-now-unit-type').bind("DOMSubtreeModified", function () {
        $("#summary-book-now-unit-type").hide();
    });

    $('#happening-now button').on('click', function() {
        $('#happening-now').toggleClass('opened');
        $('#happening-now button svg').toggleClass('fa-chevron-down');
        $('#happening-now button svg').toggleClass('fa-chevron-up');
    });
});