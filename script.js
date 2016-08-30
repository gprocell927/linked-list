// when user inputs new bookmark, it will display in user-bookmarks

// var siteName = document.querySelector('.bookmark-site-name');
//
// var siteURL = document.querySelector('.bookmark-site-url');

var siteName = $('.bookmark-site-name.value');
var createButton = $('.submit');


createButton.on('click', function(event){
  event.preventDefault();
  var siteNameText = $(this).text();
  $('.user-site').text(siteNameText);
});
