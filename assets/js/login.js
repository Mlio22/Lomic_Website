$(document).ready(function() {

    // JIKA KOTAK PENUKAR DITEKAN

    $('.pengubahTampilan').on('click', function() {
        $('.pengubahTampilan.active').removeClass('active');
        $(this).addClass('active');

    });

});