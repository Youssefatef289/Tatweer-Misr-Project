var easingFn = function (t, b, c, d) {
    var ts = (t /= d) * t;
    var tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
}

function counterAnimation() {
    var options = {
        easingFn: easingFn
    };
    $.each($('.counter'), function () {
        var numAnim = new CountUp(this, 0, $(this).attr('number'), $(this).attr('decimal'), $(this).attr('duration'), options);
        if (!numAnim.error) {
            numAnim.start();
        } else {
            console.error(numAnim.error);
        }
    });
}

function runAnimations() {
    // console.log('ANIMATIONS Run!');
    ////ANIMATIONS
    // $('#facts-figures-text').removeClass('slideInDown');
    // $('#facts-figures-slider').removeClass('slideInUp');
    $('.double .project:nth-child(1)').removeClass('slideInDown');
    $('.double .project:nth-child(2)').removeClass('slideInUp');
    $('.single .project').removeClass('slideInRight');
    $('.single--one .project').removeClass('slideInUp');
    setTimeout(function () {
        $('#ff-slider').removeClass('drawn');
    }, 400);
    $('#dream-home .double .project:nth-child(1)').removeClass('slideInDown');
    $('#dream-home .double .project:nth-child(2)').removeClass('slideInUp');
    // $('#dream-home .single .project').removeClass('slideInRight');
    // $('#dream-home .single--one .project').removeClass('slideInUp');
    $('#dream-home .single--two .project').removeClass('slideInRight');
    $('#dream-home .single--one .project').removeClass('slideInLeft');
    $('#innovation .double .visual:nth-child(1)').removeClass('slideInDown');
    $('#innovation .double .visual:nth-child(2)').removeClass('slideInUp');
    $('#innovation .single .visual').removeClass('slideInLeft');
    $('#facts-figures-text > label').removeClass('fadeIn');
    $('#dream-home #projects-container label').removeClass('fadeIn');
    $('#dream-home .project-container .animation1').removeClass('animationone');
    $('#dream-home .project-container .animation4').removeClass('animationfour');
    $('#dream-home .project-container .animation2').removeClass('animationtwo');
    $('#dream-home .project-container .animation5').removeClass('animationfive');
    $('#dream-home .project-container .animation3').removeClass('animationthree');
    $('#innovation .single > label').removeClass('fadeIn');
    $('#partners-slider').trigger('stop.owl.autoplay');
}

function initFullpage() {
    if ($(window).width() > 1024) {
        //Fullpage
        $('#full-page').fullpage({
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            scrollOverflow: true,
            fixedElements: '.modal',
            touchSensitivity: 10,
            scrollingSpeed: 1500,
            // verticalCentered: false,
            // keyboardScrolling: false,
            onLeave: function (index, nextIndex, direction) {

                if (index.index == 2)
                    $('#dream-home .project-close.active').click();
                //Find Your Dream Home
                setTimeout(function () {
                    var projectWidth = $('#dream-home #first-position').width();
                    var projectHeight = $('#dream-home #first-position').height();

                    $('#dream-home .single, #dream-home .double').width(parseInt(projectWidth) + 5);
                    $('#dream-home .single, #dream-home .double').height((parseInt(projectHeight) * 2) + 5);
                }, 1200);

                if (nextIndex.index !== 0) {

                    // $('header a#logo > img').css({"width":"40px"});
                    if ($("body").hasClass("dark-mode")) {
                        $('header a#logo > img.white-logo-big').removeClass("active");
                        $('header a#logo > img.blue-logo').removeClass("active");
                        $('header a#logo > img.white-logo-small').addClass("active");

                        // $('header a#logo > img').attr('src', assetUrl + 'images/logo-white2.svg');
                    }
                    else {
                        $('header a#logo > img.white-logo-big').removeClass("active");
                        $('header a#logo > img.blue-logo').addClass("active");
                        $('header a#logo > img.white-logo-small').removeClass("active");

                        // $('header a#logo > img').attr('src', assetUrl + 'images/logo-blue.svg');
                    }
                } else {
                    // $('header a#logo > img').css({"width":"220px"});
                    $('header a#logo > img.white-logo-big').addClass("active");
                    $('header a#logo > img.blue-logo').removeClass("active");
                    $('header a#logo > img.white-logo-small').removeClass("active");

                    // $('header a#logo > img').attr('src', assetUrl + 'images/logo-white.svg');
                }

                if (nextIndex.index == 2 || nextIndex.index == 3 || nextIndex.index == 4) {
                    $('header #navigation').addClass('blue');
                } else {
                    $('header #navigation').removeClass('blue');
                }

                if (nextIndex.index == 5) {
                    $('header').removeClass('top');
                } else {
                    $('header').addClass('top');
                }

                runAnimations();

                if (nextIndex.index !== 4) {
                    setTimeout(function () {
                        $('#partners-slider .fadeIn').removeClass('fadeIn');
                    }, 400);
                }
                if (nextIndex.index !== 5) {
                    setTimeout(function () {
                        $('#news-slider .news-item > img').removeClass('fadeInDown');
                        $('#news-slider .news-date').removeClass('fadeInUp');
                        $('#news-slider .news-summary').removeClass('fadeInUp');
                    }, 400);
                }
                switch (nextIndex.index) {
                    case 1:
                        // $('#facts-figures-text').addClass('slideInDown');
                        // $('#facts-figures-slider').addClass('slideInUp');
                        setTimeout(function () {
                            counterAnimation();
                            $('#ff-slider').addClass('drawn');
                        }, 400);
                        $('#facts-figures-text > label').addClass('fadeIn');
                        break;

                    case 2:
                        //Find Your Dream Home
                        setTimeout(function () {
                            var projectWidth = $('#dream-home #first-position').width();
                            var projectHeight = $('#dream-home #first-position').height();

                            $('#dream-home .single, #dream-home .double').width(parseInt(projectWidth) + 5);
                            $('#dream-home .single, #dream-home .double').height((parseInt(projectHeight) * 2) + 5);
                        }, 200);
                        $('#dream-home .double .project:nth-child(1)').addClass('slideInDown');
                        $('#dream-home .double .project:nth-child(2)').addClass('slideInUp');
                        $('#dream-home .single--two .project').addClass('slideInRight');
                        $('#dream-home .single--one .project').addClass('slideInLeft');
                        $('#dream-home #projects-container label').addClass('fadeIn');
                        $('#dream-home .project-container .animation1').addClass('animationone');
                        $('#dream-home .project-container .animation4').addClass('animationfour');
                        $('#dream-home .project-container .animation2').addClass('animationtwo');
                        $('#dream-home .project-container .animation5').addClass('animationfive');
                        $('#dream-home .project-container .animation3').addClass('animationthree');
                        $('#dream-home .project-container .popup-image1').addClass('popup-open');
                        break;
                    case 3:
                        $('#innovation .double .visual:nth-child(1)').addClass('slideInDown');
                        $('#innovation .double .visual:nth-child(2)').addClass('slideInUp');
                        $('#innovation .single .visual').addClass('slideInLeft');
                        $('#innovation .single > label').addClass('fadeIn');
                        break;

                    case 4:
                        var timeoutDelay = 300;
                        $.each($('#partners-slider .active'), function (key, value) {
                            setTimeout(function () {
                                $(value).addClass('fadeIn');
                            }, timeoutDelay);
                            timeoutDelay += 300;
                        });
                        setTimeout(function () {
                            $('#partners-slider .owl-item').addClass('fadeIn');
                        }, 1000);
                        $('#partners-slider').trigger('play.owl.autoplay');
                        break;

                    case 5:
                        $('#news-slider .news-item > img').addClass('fadeInDown');
                        $('#news-slider .news-date').addClass('fadeInUp');
                        $('#news-slider .news-summary').addClass('fadeInUp');
                        break;
                }

                if (index.index == 0 && nextIndex.index == 1) {
                    // alert("going to 1");
                }

                if (index.index == 1 && nextIndex.index == 0) {
                    // alert("back to 0! ");
                }
            },
            afterLoad: function (index, nextIndex, direction) {
                if (nextIndex.index == 5)
                    $.fn.fullpage.reBuild();
            },
        });
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
    }
    $('#full-page').removeClass('before-init');
}

function homepageSliderAspectRatio() {
    var windowWidth = $(window).width();
    if (windowWidth > 767 && windowWidth < 1025) {
        $('#homepage-slider .item').height((windowWidth * 0.532) + 'px');
    } else if (windowWidth > 1024) {
        $('#homepage-slider .item').height('100%');
    } else {
        $('#homepage-slider .item').height('auto');
    }
}


$(window).resize(function () {
    homepageSliderAspectRatio();
    if ($(window).width() > 1024)
        initFullpage();
    else
        $.fn.fullpage.destroy('all');
});

$(window).scroll(function () {
    if (isScrolledIntoView('#ff-slider') && $(window).width() < 1025 && !$('#ff-slider').hasClass('visible')) {
        counterAnimation();
        $('#ff-slider').addClass('drawn');
        $('#ff-slider').addClass('visible');
    }
});
// console.log('ready!!!!!');

$(document).ready(function () {
    // console.log('ready!');
    runAnimations();

    initFullpage();
    setTimeout(function () {
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
    }, 400);

    // if ($("._video-banner")){
    //     $("._video-banner").get(0).play();
    // }


    homepageSliderAspectRatio();

    let homepageslider = $("#homepage-slider");
    homepageslider.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        items: 1,
        lazyLoad: true,
        onTranslate: function () {
            $('.owl-item').find('video').each(function () {
                this.play();
            });
        }
    });

    $('.sound').click(function () {
        $video = $(this).next();
        $sound = $(this).find("img.volume");
        $mute = $(this).find("img.mute");
        if ($video.prop("muted")) {
            $mute.show();
            $sound.hide();
            $video.prop("muted", false);
        }
        else if (!$video.prop("muted")) {
            $mute.hide();
            $sound.show();
            $video.prop("muted", true);
        }
    });

    // homepageslider.on('changed.owl.carousel', function(event) {
    //     console.log(event);
    // });
    $('#scroll-indicator').click(function () {
        $.fn.fullpage.moveSectionDown();
    });
    //Project Navigation
    $('.project-navigator').click(function (e) {
        e.preventDefault();

        var slide = $(this).attr('slide');
        $('#homepage-slider').trigger('to.owl.carousel', slide);
    });

    //Check on Slide Change
    $('#homepage-slider').on('changed.owl.carousel', function (event) {
        var itemIndex = $(this).find('.owl-dots .owl-dot.active').index() + 1;
        $('#project-navigators .project-navigator').removeClass('active');
        $('#project-navigators .project-navigator:nth-child(' + itemIndex + ')').addClass('active');
    });

    //Facts and figures slider
    $('#ff-slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1,
        dotsContainer: "#facts-figures-slider #dots-container",
        animateOut: "fadeOut",
        animateIn: "fadeIn",
    });
    $('#ff-slider').on('change.owl.carousel', function () {
        $('#ff-slider').removeClass('drawn');
    });
    $('#ff-slider').on('changed.owl.carousel', function () {
        setTimeout(function () {
            $('#ff-slider').addClass('drawn');
        }, 100);
        counterAnimation();
    });

    $('#dream-home .project-close').click(function () {
        if ($(this).hasClass('active')) {
            $('#dream-home .scale-up').removeClass('scale-up');
            $('#dream-home .project-brief').removeClass('expand').removeClass('fadeInUp').addClass('fadeOut');
            // setTimeout(function() {
            $(this).removeClass('active');
            $(this).siblings('.project-expand').css('opacity', 1);
            $('#dream-home .up').removeClass('up');
            $('#dream-home .down').removeClass('down');
            $('#dream-home .down-right').removeClass('down-right');
            $('#dream-home .left').removeClass('left');
            $('#dream-home .right').removeClass('right');
            $('#dream-home .fadeIn:not(label)').removeClass('fadeIn');
            $('#dream-home .single > label').fadeIn();
            //one
            // $('#projects-container .single').removeClass('d-none');
            $('#projects-container .single--one').removeClass('animate-start1'); 
             $('#projects-container .single--two').removeClass('animate-start1');
            //  $('#projects-container .single--one').addClass('animate-end1');
            $('#projects-container .double').removeClass('double--style');
            $('#projects-container #first-position').removeClass('first-position1');
            //two
            $('#projects-container #second-position').removeClass('second-position1');
            
            $('#dream-home #second-position').removeClass('d-none');
            $('#dream-home #first-position').removeClass('d-none');
             // third
            //  $('#projects-container .single--one').removeClass('d-none'); 
            //  $('#projects-container .double').removeClass('d-none');  
             $('#projects-container .single--one').removeClass('animate-start1');
             $('#projects-container .double').removeClass('animate-start1');
             $('#dream-home #third-position').removeClass('third-position1');
             $('#projects-container .single--two').removeClass('single--two-style');
             $('#dream-home #third-position').removeClass('fourth-position1');
             $('#dream-home #fourth-position').removeClass('fourth-position2');
             $('#dream-home #six-position').removeClass('d-none');
              // fourth
            //   $('#projects-container .single--one').removeClass('d-none'); 
            //   $('#projects-container .double').removeClass('d-none');
              $('#projects-container .single--one').removeClass('animate-start1');

              $('#projects-container .double').removeClass('animate-start1')
              $('#dream-home #fourth-position').removeClass('fourth-position1');
              $('#projects-container .single--one').removeClass('single--two-style'); 
              $('#dream-home #third-position').removeClass('third-position2');
              //fifth 
            //   $('#projects-container .single--two').removeClass('d-none'); 
            //   $('#projects-container .double').removeClass('d-none');
            $('#projects-container .single--two').removeClass('animate-start3');
            $('#projects-container .double').removeClass('animate-start2')
              $('#dream-home #fifth-position').removeClass('fifth-position1'); 
              $('#projects-container .single--one').removeClass('single--two-style'); 
              $('#dream-home #projects-container .single--one').removeClass('d-none');
              $('#dream-home #projects-container .double').removeClass('d-none');



            // }, 800);
        }
        else {
            $(this).siblings('.project-expand').css('opacity', 0);
            var position = $(this).closest('.project').attr('id');
            switch (position) {
                case 'first-position':
                    $('#dream-home #second-position').addClass('down');
                    $('#dream-home #third-position').addClass('down-right');
                    $('#dream-home #fourth-position').addClass('down-right');
                    $('#dream-home #fifth-position').addClass('left');
                    $('#dream-home .dream-home-text').addClass('right');
                    $('#dream-home #first-position').addClass('scale-up');
                    $('#dream-home #first-position .project-close').addClass('active');
                    $('#dream-home #first-position .project-brief').removeClass('fadeOut').addClass('fadeInUp');
                    $('#dream-home #projects-container .single--one').addClass('d-none');
                    //firse 
                    // $('#projects-container .single--one').addClass('animate-start1');
                    // $('#projects-container .single--two').addClass('animate-start1');  
                    // $('#projects-container .double').addClass('double--style');
                    // $('#dream-home #first-position').addClass('first-position1'); 
                    // $('#dream-home #second-position').addClass('d-none');
                    setTimeout(function () {
                        $('#dream-home #first-position .project-brief').addClass('expand');
                    }, 600);
                    $('#dream-home .single > label').fadeOut();
                    break;
                case 'second-position':
                    $('#dream-home #first-position').addClass('up');
                    $('#dream-home #third-position').addClass('right');
                    $('#dream-home #fourth-position').addClass('right');
                    $('#dream-home .dream-home-text').addClass('right');
                    $('#dream-home #fifth-position').addClass('left');
                    $('#dream-home #second-position').addClass('scale-up');
                    $('#dream-home #second-position .project-close').addClass('active');
                    $('#dream-home #second-position .project-brief').removeClass('fadeOut').addClass('fadeInUp');
                    $('#dream-home #projects-container .single--one').addClass('d-none');
                    // second
                    // $('#projects-container .single').addClass('d-none'); 
                    // $('#projects-container .single--one').addClass('animate-start1');
                    // $('#projects-container .single--two').addClass('animate-start1');
                    // $('#projects-container .double').addClass('double--style');
                    // $('#dream-home #second-position').addClass('second-position1'); 
                    // $('#dream-home #first-position').addClass('d-none');
                    setTimeout(function () {
                        $('#dream-home #second-position .project-brief').addClass('expand');
                    }, 600);
                    $('#dream-home .single > label').fadeOut();
                    break;
                case 'third-position':
                    $('#dream-home #first-position').addClass('left');
                    $('#dream-home #second-position').addClass('left');
                    $('#dream-home #fourth-position').addClass('up');
                    $('#dream-home #fifth-position').addClass('left');
                    $('#dream-home .dream-home-text').addClass('up');
                    $('#dream-home #third-position').addClass('scale-up');
                    $('#dream-home #third-position .project-close').addClass('active');
                    $('#dream-home #third-position .project-brief').removeClass('fadeOut').addClass('fadeInUp'); 
                    $('#dream-home #projects-container .single--one').addClass('d-none');

                     // third
                    //  $('#projects-container .single--one').addClass('d-none'); 
                    //  $('#projects-container .double').addClass('d-none'); 
                    //  $('#projects-container .single--one').addClass('animate-start1');
                    //  $('#projects-container .double').addClass('animate-start1');
                    //  $('#dream-home #third-position').addClass('third-position1');
                    //  $('#dream-home #fourth-position').addClass('fourth-position2');
                    // //  $('#projects-container .fourth-position').addClass('d-none');
                    //  $('#projects-container .single--two').addClass('single--two-style'); 
                    setTimeout(function () {
                        $('#dream-home #third-position .project-brief').addClass('expand');
                    }, 600);
                    $('#dream-home .single > label').fadeOut();
                    break;
                case 'fourth-position':
                    $('#dream-home #first-position').addClass('left');
                    $('#dream-home #second-position').addClass('left');
                    $('#dream-home #third-position').addClass('down');
                    $('#dream-home #fifth-position').addClass('left');
                    $('#dream-home .dream-home-text').addClass('up');
                    $('#dream-home #fourth-position').addClass('scale-up');
                    $('#dream-home #fourth-position .project-close').addClass('active');
                    $('#dream-home #fourth-position .project-brief').removeClass('fadeOut').addClass('fadeInUp');
                    $('#dream-home #projects-container .single--one').addClass('d-none');
                     // fourth
                    //  $('#projects-container .single--one').addClass('d-none'); 
                    //  $('#projects-container .double').addClass('d-none');
                    // $('#projects-container .single--one').addClass('animate-start1');
                    // $('#projects-container .double').addClass('animate-start1')
                    //  $('#dream-home #fourth-position').addClass('fourth-position1');
                    //  $('#projects-container .single--two').addClass('single--two-style'); 
                    //  $('#dream-home #third-position').addClass('third-position2');

                    setTimeout(function () {
                        $('#dream-home #fourth-position .project-brief').addClass('expand');
                    }, 600);
                    $('#dream-home .single > label').fadeOut();
                    break;
                case 'fifth-position':
                    $('#dream-home #first-position').addClass('left');
                    $('#dream-home #second-position').addClass('left');
                    $('#dream-home #third-position').addClass('right');
                    $('#dream-home .dream-home-text').addClass('right');
                    $('#dream-home #fourth-position').addClass('up');
                    $('#dream-home #fifth-position').addClass('scale-up');
                    $('#dream-home #fifth-position .project-close').addClass('active');
                    $('#dream-home #fifth-position .project-brief').removeClass('fadeOut').addClass('fadeInUp');
                    $('#dream-home #six-position').addClass('d-none');
                    $('#dream-home #projects-container .double').addClass('d-none');
                     //fifth 
                    //  $('#projects-container .single--two').addClass('d-none'); 
                    //  $('#projects-container .double').addClass('d-none');
                    // $('#projects-container .single--two').addClass('animate-start3');
                    // $('#projects-container .double').addClass('animate-start2');
                    //  $('#dream-home #fifth-position').addClass('fifth-position1'); 
                    //  $('#projects-container .single--one').addClass('single--two-style'); 
                    //  $('#dream-home #second-position').addClass('d-none');
                    setTimeout(function () {
                        $('#dream-home #fifth-position .project-brief').addClass('expand');
                    }, 600);
                    $('#dream-home .single > label').fadeOut();
                    break;
                    case 'six-position':
                        $('#dream-home #first-position').addClass('left');
                        $('#dream-home #second-position').addClass('left');
                        $('#dream-home #third-position').addClass('right');
                        $('#dream-home .dream-home-text').addClass('right');
                        $('#dream-home #fourth-position').addClass('up');
                        $('#dream-home #fifth-position').addClass('down');
                        $('#dream-home #six-position').addClass('scale-up');
                        $('#dream-home #six-position .project-close').addClass('active');
                        $('#dream-home #six-position .project-brief').removeClass('fadeOut').addClass('fadeInUp');
                        // $('#dream-home #six-position').addClass('d-none');
                        $('#dream-home #projects-container .double').addClass('d-none');
                        setTimeout(function () {
                            $('#dream-home #six-position .project-brief').addClass('expand');
                        }, 600);
                        $('#dream-home .single > label').fadeOut();
                        break;    
            }
        }
    });

    $('#dream-home').on('click', function (event) {
        var selector = '.project';
        if (!$(event.target).closest(selector).length) {
            $('.project.scale-up').find('.project-close').trigger('click');
        }
    });

    //Projects Slider
    $('#projects-slider').owlCarousel({
        margin: 20,
        responsive: {
            0: {
                items: 1,
                stagePadding: 5
            },
            600: {
                items: 2,
                stagePadding: 5
            }
        }
    });
    //Innovation Slider
    $('#innovation-slider').owlCarousel({
        margin: 20,
        responsive: {
            0: {
                items: 1,
                stagePadding: 5
            },
            600: {
                items: 2,
                stagePadding: 5
            }
        }
    });
    //Partners + News Slider
    $('#partners-slider').owlCarousel({
        autoplayHoverPause: true,
        loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 1,
                stagePadding: 40,
            },
            600: {
                items: 2,
                stagePadding: 40
            },
            1025: {
                items: 4,
                stagePadding: 0,
                dots: false
            }
        }
    });
    $('#news-slider').owlCarousel({
        loop: false,
        margin: 20,
        responsive: {
            0: {
                items: 1,
                stagePadding: 40,
            },
            600: {
                items: 2,
                stagePadding: 40
            },
            1025: {
                items: 3,
                stagePadding: 0,
                dots: false
            }
        }
    });

    //Horizontal Arrows
    $('.horizontal-arrow').click(function () {
        var btn = $(this);
        var slider = btn.siblings('.owl-carousel');
        if (btn.hasClass('prev'))
            slider.trigger('prev.owl.carousel');
        if (btn.hasClass('next'))
            slider.trigger('next.owl.carousel');
    });
    // Facts and Figures Arrows
    $('#facts-figures-slider .vertical-arrow').click(function () {
        if ($(this).hasClass('prev')) {
            $('#ff-slider').trigger('prev.owl.carousel');
        } else if ($(this).hasClass('next')) {
            $('#ff-slider').trigger('next.owl.carousel');
        }
    });


    $('#homepage-slider .slider-text').addClass('fadeIn');

    /********************** Brochure Form Validation **********************/


    $("#brochure-form-id").validate({

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

            if (this.numberOfInvalids() >= 1 && $("#brochure-email-error").text() != "Please enter a valid email address." && $("#brochure-phone-error").text() != "Please enter a valid phone number." && $("#brochure-name-error").text() != "Name should be at least 2 characters.") {
                $("#summary-brochure").html("* All fields are required"); //" + this.numberOfInvalids() + "  
                $("#summary-brochure").show();
            }
            else if (this.numberOfInvalids() == 0 || $("#brochure-email-error").text() == "Please enter a valid email address." || $("#brochure-phone-error").text() == "Please enter a valid phone number." || $("#brochure-name-error").text() == "Name should be at least 2 characters.") {
                $("#summary-brochure").hide();
            }

        },

        errorPlacement: function (error, element) {
            error.appendTo('#summary-brochure-' + element.attr('property'));
        },


        submitHandler: function (form, e) {

            e.preventDefault();

            var form = $(form);

            //form.find('.error').removeClass('error');
            form.find('.brochure-response').empty();

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
                    form.find('.download-file').css('display', 'inline-block');
                    form.closest('.modal').find('.custom-header h1.website-title').text('Thank You');
                    // window.open('http://beyond-creation.net/tatweer-misr/docs/tatweer-misr-corporate-brochure.pdf');
                },

                error: function (response) {
                    var err = JSON.parse(response.responseText);

                    //console.log(err);

                    form.find('p.brochure-response').removeClass('success')
                    form.find('p.brochure-response').addClass('error').append(err.message);

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


            });

            $("#brochure-name").hide();
            $("#brochure-email").hide();
            $("#brochure-phone").hide();
            $("#brochure-btn").hide();
            $("#brochure-p").hide();

            // setTimeout(function () {
            //     $("#download-brochure-modal").hide();
            //     $(".modal-backdrop.fade.show").hide();
            // }, 5000);
        }
    });

    $('#summary-brochure-name').bind("DOMSubtreeModified", function () {
        if ($("#brochure-name-error").text() == "* Name should be 2 characters at least.") {
            $("#summary-brochure-name").show();
        }
        else {
            $("#summary-brochure-name").hide();
        }
    });

    $('#summary-brochure-email').bind("DOMSubtreeModified", function () {
        if ($("#brochure-email-error").text() == "Please enter a valid email address.") {
            $("#summary-brochure-email").show();
        }
        else {
            $("#summary-brochure-email").hide();
        }
    });

    $('#summary-brochure-phone').bind("DOMSubtreeModified", function () {
        if ($("#brochure-phone-error").text() == "Please enter a valid phone number.") {
            $("#summary-brochure-phone").show();
        }
        else {
            $("#summary-brochure-phone").hide();
        }
    });
});
//////new structure of dream home animation//////////////////
var background = document.getElementsByClassName("background-img");
// var boxes=document.querySelectorAll('.projects-box')
      document.querySelectorAll(".project-container .projects-box .expand").forEach((image , index) => {
        image.onclick = () => {
            // let open_image = image.getAttribute("open-image");
          document.getElementById(`test${index}`).style.display = "flex";
        // boxes.forEach((box,i)=>{
        //     if(i!==index){
        //     boxes[i].style.display="none";
        //     }else{
        //         boxes[i].style.scale="1.5";
        //     }
        // })
          document.getElementById(`test${index}`).classList.remove("popup-open");
          (document.getElementById(`close${index}`)).addEventListener("click",()=>{
            document.getElementById(`test${index}`).classList.add("popup-open");
          })
        }
      });




