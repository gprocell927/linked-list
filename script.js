// when user inputs new bookmark, it will display in user-bookmarks

// var siteName = document.querySelector('.bookmark-site-name');
//
// var siteURL = document.querySelector('.bookmark-site-url');


$('.create-button').on('click', function(event){
  event.preventDefault();
  var siteName = $('.bookmark-site-name').val();
  // console.log(siteName);});
  $('#test1').text(siteName);

  var siteURL = $('.bookmark-site-url').val();
  var siteLink = '<a href>'+siteURL+'</a>';
  // console.log(siteURL);});
  $('#test').append(siteLink);
});


$('.markRead').on('click', function() {
  $(this).toggleClass('.read');
});

$('.removeLink').on('click', function(){
  $(this).parents('tr').first().remove();
});


// '<a href='+siteURL+' class='new-bookmark' target='_blank'>"+siteURL+'</a>'
