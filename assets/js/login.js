$(document).ready(function() {

    // JIKA KOTAK PENUKAR DITEKAN

    $('.pengubahTampilan').on('click', function() {
        $('.pengubahTampilan.active').removeClass('active');
        $(this).addClass('active');

    });

    // JIKA SALAH SATU INPUT SEDANG FOKUS

    $('input').on('focus', function() {
        // $('label.active').removeClass('active');
        $(this).siblings('label').addClass('active');
    });

    // KEBALIKAN DARI FUNGSI DIATAS JIKA FOCUSOUT
    // KECUALI JIKA KOTAK TELAH TERISI

    $('input').on('focusout', function() {
        if ($(this).val() == '') {
            $(this).siblings('label').removeClass('active');
        }
    });

});