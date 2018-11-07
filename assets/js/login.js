$(document).ready(function() {

    // JIKA KOTAK PENUKAR DITEKAN

    $('.pengubahTampilan').on('click', function() {
        $('.pengubahTampilan.active').removeClass('active');
        $(this).addClass('active');

        // MENGUBAH ISI DARI FORMULIR SESUAI DENGAN PERMINTAAN

        if ($(this).hasClass('tampilKiri')) {
            $('.formInput.active').removeClass('active').addClass('nonActive');
            $('.formInput.formLogin').addClass('active');

        } else if ($(this).hasClass('tampilKanan')) {
            $('.formInput.active').removeClass('active').addClass('nonActive');
            $('.formInput.formDaftar').addClass('active');
        }
    });

    // JIKA SALAH SATU INPUT SEDANG FOKUS

    $('input').on('focus', function() {
        $(this).siblings('label').addClass('active');
        $(this).siblings('.garisBawah').addClass('active');

    });

    // KEBALIKAN DARI FUNGSI DIATAS JIKA FOCUSOUT
    // KECUALI JIKA KOTAK TELAH TERISI

    $('input').on('focusout', function() {
        if ($(this).val() == '') {
            $(this).siblings('label').removeClass('active');
        }
        $(this).siblings('.garisBawah.active').removeClass('active');

    });

    // JIKA TERDAPAT ERROR INPUT SETELAH MENEKAN TOMBOL SUBMIT

    $('input').on('invalid', function() {
        if ($(this).val() == '') {
            $(this).css('border', '0px');
            $(this).siblings('.garisBawah.error').removeClass('error');
        } else {
            $(this).css('border', '0px');
            $(this).siblings('.garisBawah').addClass('error');
        }
    });

});