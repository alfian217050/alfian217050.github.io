// $(".page-scroll").click(function (e) {
//     e.preventDefault()
//     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 50 })
// })

$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
   
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    });
   
    e.preventDefault();
});