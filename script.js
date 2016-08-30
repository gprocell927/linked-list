// when user inputs new bookmark, it will display in user-bookmarks

// var siteName = document.querySelector('.bookmark-site-name');
//
// var siteURL = document.querySelector('.bookmark-site-url');

var siteName = $('.bookmark-site-name');
var createButton = $('.submit');


createButton.on('click', function(event){
  event.preventDefault();
$('.user-site').append(siteName);});
