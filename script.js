// when user inputs new bookmark, it will display in user-bookmarks

// var siteName = document.querySelector('.bookmark-site-name');
//
// var siteURL = document.querySelector('.bookmark-site-url');


$('.create-button').on('click', function(event){
  event.preventDefault();

 var siteName = $('.bookmark-site-name').val();
 var siteURL = $('.bookmark-site-url').val();

 validateUserInput(siteName,siteURL);

 // $("#bookmarks tr:last").after(myRow);
 $('tbody').append(`<tr class="newRow">
   <td class="site-name-cell">${siteName}</td>
   <td class="site-url-cell"><a href="${siteURL}">${siteURL}</a></td>
   <td><button class="markRead">Mark As Read</button></td>
    <td><button class="removeLink">Remove Bookmark</button></td>
 </tr>`);

 $('.markRead').on('click', function() {
   $(this).toggleClass('.read');
   if ($(this).text() === "Mark As Read"){
    $(this).text('Mark As Unread');
  } else {
    $(this).text("Mark As Read");
  }

 });

  $('.removeLink').on('click', function(){
    $(this).parents('tr').first().remove();
  });
});

 function validateUserInput (site,url) {
   if (($.isEmptyObject(site)) ||($.isEmptyObject(url))) {
   alert("ERROR: Please enter a valid site name and URL.");}
 }
