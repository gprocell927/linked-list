// when user inputs new bookmark, it will display in user-bookmarks

// var siteName = document.querySelector('.bookmark-site-name');
//
// var siteURL = document.querySelector('.bookmark-site-url');


var createButton = $('.submit');


createButton.on('click', function(event){
  event.preventDefault();
  var siteName = $('.bookmark-site-name').val();
  // console.log(siteName);});
$('.user-site').text(siteName);});
