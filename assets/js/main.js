$(document).ready(function() {


    $('.arrow').on('click', function() {
        if ($('.arrow.fa').hasClass('fa-arrow-right')) {
            $('.fa-arrow-right').removeClass('fa-arrow-right').addClass('fa-arrow-left');
            $('.navbar.navbarAtas').addClass('showed');
            $('.navbar.navbarKiri.notShowed').removeClass('notShowed');
            $('.isi.notShowed').removeClass('notShowed');
            $('.judul h2.notShowed').removeClass('notShowed');
            $('.barIsi.showed').removeClass('showed');
            // $('.navbar.navbarKiri ul').removeClass('notShowed');
            // $('barIsi').addClass('showed');
            console.log('berhasil kanan');
        } else {
            $('.fa-arrow-left').removeClass('fa-arrow-left').addClass('fa-arrow-right');
            $('.navbar.navbarAtas.showed').removeClass('showed');
            $('.navbar.navbarKiri').addClass('notShowed');
            $('.isi').addClass('notShowed');
            $('.judul h2').addClass('notShowed');
            $('.barIsi').addClass('showed');
            // $('.navbar.navbarKiri ul').addClass('notShowed');
            console.log('berhasil kiri');
        }
    });

    $('li.navbarLists').on('click', function() {
        $('.chosen').removeClass('chosen');
        $(this).addClass('chosen');
        if ($('.chosen a').html() === 'Home') {
            $('.olimName h2').html('Lembaga...');
        } else {
            $('.olimName h2').html($('.chosen a').html());
        }
        $('.navbar.navbarKiri').addClass('notShowed');
        $('.navbar.navbarAtas.showed').removeClass('showed');
        $('.fa.fa-arrow-left').removeClass('fa-arrow-left').addClass('fa-arrow-right');
        $('.isi').addClass('notShowed');
        $('.judul h2').addClass('notShowed');
    });

    $('li.materiLists').on('click', function() {
        $('.active').removeClass('active');
        $(this).addClass('active');
    });

    // FOR STICKY HEADER

    var scr1 = window.pageYOffset;
    window.onscroll = function() {
        var scr2 = window.pageYOffset;
        if (scr2 <= 400) {
            $('.navbar.navbarAtas').css('top', '0px');
            console.log('ganteng4');

        } else if (scr1 > scr2) {
            $('.navbar.navbarAtas').css('top', '0px');

            $('.navbar.navbarAtas').on('mouseover', function() {
                clearInterval(inter);
            });

            var inter = setInterval(function() {
                var scr3 = window.pageYOffset;
                if (scr2 > scr3) {
                    $('.navbar.navbarAtas').css('top', '0px');
                    console.log('ganteng2');
                    clearInterval(inter);

                } else {
                    $('.navbar.navbarAtas').css('top', '-100px');
                    // $('.navbar.navbarKiri').css('left', '-20%');
                    console.log('ganteng3');
                    clearInterval(inter);

                }
                scr3 = scr2;
                console.log(scr3);
                console.log('ganteng');
                clearInterval(inter);
            }, 5000);
            console.log('berhasil 1');
        } else {
            $('.navbar.navbarAtas').css('top', '-100px');
            console.log('berhasil 2');
        }
        scr1 = scr2;
    }
});