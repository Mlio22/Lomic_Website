$(document).ready(function() {

    // PEMBERSIHAN INPUT JIKA CTRL + R

    $('input#inputLogin').val('');
    $('input#password').val('');
    $('input#namaLengkapDaftar').val('');
    $('input#emailDaftar').val('');
    $('input#usernameDaftar').val('');

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
        $(this).siblings('.fa').addClass('active');

    });

    // KEBALIKAN DARI FUNGSI DIATAS JIKA FOCUSOUT
    // KECUALI JIKA KOTAK TELAH TERISI

    $('input').on('focusout', function() {
        if ($(this).val() == '') {
            $(this).siblings('label').removeClass('active');
            $(this).siblings('.garisBawah.active').removeClass('active');
            $(this).siblings('.fa.active').removeClass('active');
        }
    });

    // JIKA TERDAPAT ERROR INPUT SETELAH MENEKAN TOMBOL SUBMIT

    $('input').on('invalid', function() {
        if ($(this).val() == '') {
            $(this).css('border', '0px');
            $(this).siblings('.garisBawah').removeClass('error');
        } else {
            // $(this).css('border', '0px');
            $(this).siblings().addClass('error');
        }
    });

    // ANIMASI HOVER TERHADAP INPUT

    $('input').on('mouseover', function() {
        $(this).siblings('label').addClass('onHover');
        $(this).siblings('.garisBawah').addClass('onHover');

    });

    // KEBALIKANNYA

    $('input').on('mouseout', function() {
        $(this).siblings('label.onHover').removeClass('onHover');
        $(this).siblings('.garisBawah.onHover').removeClass('onHover');
    });

    // CLICK TERHADAP LABEL UNTUK INPUTNYA

    $('label').on('click', function() {
        $(this).siblings('input').focus();
    });

    // AJAX REQUEST 

    $('.formInput').on('submit', function(e) {
        var data = $(this).serialize();
        console.log(data);
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "check.php",
            data: data,
            success: function(responseText) {
                console.log(responseText);
                console.log('success');

                // if (responseText == 'lioa') {
                //     window.location.href = "index..html";
                // }
            },
            error: function(xhr) {
                console.log(xhr.responseText);
                console.log('failed');
            }
        });
    });
});