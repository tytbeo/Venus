$(document).ready(function() {
  $(".filter-button").on('click' ,function() {
    var value = $(this).attr('data-filter');
    $(".filter-button").removeClass("actives");
    $(this).addClass("actives");
    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $('.filter').show('1000');
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter").not('.' + value).hide('slow');
      $('.filter').filter('.' + value).show('slow');

    }
  });

});
