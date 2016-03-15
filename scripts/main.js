smoothScroll.init();
var pageBody = $('#page-body');
var sideNav = $('#side-nav');

$('#nav-toggle').click(function(e){
    e.preventDefault();
    sideNav.removeClass('side-nav-hidden');
    sideNav.addClass('side-nav-displayed');
});

pageBody.click(function(){
    if(sideNav.hasClass('side-nav-displayed')){
        sideNav.removeClass('side-nav-displayed');
        sideNav.addClass('side-nav-hidden');
    }
});

$('.carousel').carousel({
    pause: "false"
});