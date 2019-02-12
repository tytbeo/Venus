function expandChat() {
  document.getElementById('minimize').style.display = 'block';
  document.getElementById('maximize').style.display = 'none';
  document.getElementById('chat-text').style.display = 'block';
};

function collapseChat() {
  console.log('test collapse');
  document.getElementById("minimize").style.display = 'none';
  document.getElementById("maximize").style.display = 'block';
  document.getElementById("chat-text").style.display = 'none';
};


$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 5,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
    ],
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 4
      }
    }
  });
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

  $('#chat-input').on('keypress', function(e) {
    // e.preventDefault();

    if (e.which == 13) {
      // get user input message
      var message = $('#chat-input').val();

      // get current Time
      var now = new Date(Date.now());
      var formattedTime = now.getHours() + ":" + now.getMinutes();

      // Them user input text message vao .chat-history
      $('.chat-history').append(
        '<div class="chat-message clearfix">' +

        '<img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Chad-Anderson-Photo2.jpg/220px-Chad-Anderson-Photo2.jpg" alt="" width="32" height="32">' +

        '<div class="chat-message-content clearfix">' +

        '<span class="chat-time">' + formattedTime + '</span>' +

        '<h5>Adam Smith</h5>' +

        '<p>' + message + '</p>' +

        '</div>'
      );

      // Hien thi last user input text message
      var $chat = $(".chat-history");
      $chat.scrollTop($chat.height());

      // Tra lai blank space cho input sau khi send message
      $('#chat-input').val('');

      //prevent the keystroke from continuing
      return false;
    };


  });
});
