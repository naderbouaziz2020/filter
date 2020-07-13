  $(function () {
  'use strict';

/*  var winH = $(window).height(),
      upperH = $('.upper-bar').innerHeight(),
      navH = $('.search-bar').innerHeight(),
      proH = $('.product-bar').innerHeight();

  $('.slider, .carousel-item').height(winH - ( upperH + navH + proH ));
*/

// Confirm message
$('.confirm').click(function (){

    return confirm('Are you sure?');
  });
});

// show password

function myFunction(){
  var x = document.getElementById("myInput");

  if (x.type === "password") {
    x.type = "text";
  }else {
    x.type = "password";
  }
}

// filter product

$(document).ready(function(){

  $(".product_check").click(function(){
    $("#loader").show();

    var action = 'data';
    var brand = get_filter_text('brand');
    var etat = get_filter_text('etat');

    $.ajax({
      url:'action.php',
      method:'POST',
      data:{action:action,brand:brand,etat:etat},
      success:function(response){
        $("#result").html(response);
        $("#loader").hide();
      }
    });

  });

  function get_filter_text(text_id){
    var filterData = [];
    $('#'+text_id+':checked').each(function(){
      filterData.push($(this).val());
    });
    return filterData;
  }
});





// not exactly vanilla as there is one lodash function
