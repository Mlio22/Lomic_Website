$(document).ready(function() {


    $('.arrow').on('click', function() {
        if ($('.arrow.fa').hasClass('fa-arrow-right')) {
            $('.fa-arrow-right').removeClass('fa-arrow-right').addClass('fa-arrow-left');
            $('.navbar.navbarAtas').addClass('showed');
            $('.navbar.navbarKiri.notShowed').removeClass('notShowed');
            $('.navbar.navbarKiri ul').removeClass('notShowed');
            console.log('berhasil kanan');
        } else {
            $('.fa-arrow-left').removeClass('fa-arrow-left').addClass('fa-arrow-right');
            $('.navbar.navbarAtas.showed').removeClass('showed');
            $('.navbar.navbarKiri').addClass('notShowed');
            $('.navbar.navbarKiri ul').addClass('notShowed');
            console.log('berhasil kiri');
        }
    });
});