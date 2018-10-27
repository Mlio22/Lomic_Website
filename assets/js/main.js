$(document).ready(function() {


    $('.arrow').on('click', function() {
        if ($('.arrow.fa').hasClass('fa-arrow-right')) {
            $('.fa-arrow-right').removeClass('fa-arrow-right').addClass('fa-arrow-left');
            $('.navbar.navbarAtas').addClass('showed');
            console.log('berhasil kanan');
        } else {
            $('.fa-arrow-left').removeClass('fa-arrow-left').addClass('fa-arrow-right');
            $('.navbar.navbarAtas.showed').removeClass('showed');
            console.log('berhasil kiri');
        }
    });

});