// $(document).ready(function(){
//     checkDark();
// });




let mode;
mode = localStorage.getItem('mode');


function checkDark(){
    if(mode === "light"){
        $("body").removeClass("dark-mode");
        $(".dark-mode-btn img.dark").addClass("active");
        // $(".dark-mode-btn").prev().html("Dark mode");
        $(".toggleWrapper input.mobileToggle").attr("checked",false);
    }
    else{
        $("body").addClass("dark-mode");
        $(".dark-mode-btn img.light").addClass("active");
        // $(".dark-mode-btn").prev().html("Light mode");
        $(".toggleWrapper input.mobileToggle").attr("checked",true);
    }
}

function toggleDarkMode(btn) {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    if( mode === "light"){
        localStorage.setItem('mode','dark');
    }
    else {
        localStorage.setItem('mode','light');
    }

    if($("body").hasClass("dark-mode")){
        // $(btn).prev().html("Dark mode");
        $(btn).parent().parent().prevAll(".dark-mode-btn").find("img.dark").addClass("active");
        $(btn).parent().parent().prevAll(".dark-mode-btn").find("img.light").removeClass("active");
        $(".toggleWrapper input.mobileToggle").attr("checked",true);
        console.log($(btn).parent().parent().prevAll(".dark-mode-btn"));
        if($(window).width() < 767){
            $('header a#logo > img.white-logo-big').removeClass("active");
            $('header a#logo > img.blue-logo').removeClass("active");
            $('header a#logo > img.white-logo-small').addClass("active");
            $('header a#logo > img.blue-logo-big').removeClass("active");

            // $('header.menu-opened a#logo > img').attr('src', assetUrl + 'images/logo-white2.svg');
        }
        else{
            $('header a#logo > img.white-logo-big').addClass("active");
                $('header a#logo > img.blue-logo').removeClass("active");
                $('header a#logo > img.white-logo-small').removeClass("active");
                $('header a#logo > img.blue-logo-big').removeClass("active");

            // $('header.menu-opened a#logo > img').attr('src', assetUrl + 'images/logo-white.svg');
        }
    }

    else if (!$("body").hasClass("dark-mode")){
        // $(btn).prev().html("Light mode");
        $(btn).parent().parent().prevAll(".dark-mode-btn").find("img.light").addClass("active");
        $(btn).parent().parent().prevAll(".dark-mode-btn").find("img.dark").removeClass("active");
        $(".toggleWrapper input.mobileToggle").removeAttr("checked");
        if($(window).width() < 767){
            $('header a#logo > img.white-logo-big').removeClass("active");
                $('header a#logo > img.blue-logo').addClass("active");
                $('header a#logo > img.white-logo-small').removeClass("active");
                $('header a#logo > img.blue-logo-big').removeClass("active");

            // $('header.menu-opened a#logo > img').attr('src', assetUrl + 'images/logo-blue.svg');
        }
        else{
            $('header a#logo > img.white-logo-big').removeClass("active");
                $('header a#logo > img.blue-logo').removeClass("active");
                $('header a#logo > img.white-logo-small').removeClass("active");
                $('header a#logo > img.blue-logo-big').addClass("active");

            // $('header.menu-opened a#logo > img').attr('src', assetUrl + 'images/logo-blue-full.svg');
        }
        
    }
}

checkDark();