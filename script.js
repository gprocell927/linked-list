// when user inputs new bookmark, it will display in user-bookmarks

// var siteName = document.querySelector('.bookmark-site-name');
//
// var siteURL = document.querySelector('.bookmark-site-url');


$('.create-button').on('click', function(event){
  event.preventDefault();
 var siteName = $('.bookmark-site-name').val();
 var siteURL = $('.bookmark-site-url').val();

 $('#bookmarks').append($('<tr>').append(siteName))
              .append($('<td>').append(siteURL));



    if (($.isEmptyObject(siteName)) ||($.isEmptyObject(siteURL))) {
    alert("ERROR: Please enter a valid site name and URL.");
  }
//   would like to refactor this, but I couldn't get this to work if I split it into it's own function and made local vars global.

$('#test1').text(siteName);
$('#test').text(siteURL);
});
