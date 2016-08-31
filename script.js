// when user inputs new bookmark, it will display in user-bookmarks

// var siteName = document.querySelector('.bookmark-site-name');
//
// var siteURL = document.querySelector('.bookmark-site-url');


$('.create-button').on('click', function(event){
  event.preventDefault();

$('.markRead').on('click', function() {
  $(this).toggleClass('.read');
});
 var siteName = $('.bookmark-site-name').val();
 var siteURL = $('.bookmark-site-url').val();

 validateUserInput(siteName,siteURL);

 // $("#bookmarks tr:last").after(myRow);
 $('tbody').append(`<tr class="newRow">
   <td class="site-name-cell">${siteName}</td>
   <td class="site-url-cell">${siteURL}</td>
 </tr>`)
 // $('.site-name-cell').append(siteName);
 // $('.site-url-cell').append(siteURL);

$('.removeLink').on('click', function(){
  $(this).parents('tr').first().remove();
});


 function validateUserInput (site,url) {
   if (($.isEmptyObject(site)) ||($.isEmptyObject(url))) {
   alert("ERROR: Please enter a valid site name and URL.");}
 }
