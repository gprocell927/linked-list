var $siteName = $('.bookmark-site-name');
var $siteURL = $('.bookmark-site-url');
var $createButton = $('.create-button');
var $clearBookmarkButton = $('.clear-read-button');

function toggleCreate() {
    if ($siteName.val() === '' && $siteURL.val() === '') {
      $createButton.prop('disabled', true);
    } else {
      $createButton.prop('disabled', false);
    }
}

function toggleRead(parentRow){
  parentRow.toggleClass('read');
  changeReadText(parentRow);
}

function changeReadText(buttonText){
  if (buttonText.text() === 'Mark As Read') {
   buttonText.text('Mark As Unread');
  } else {
   buttonText.text('Mark As Read');
 }
}

function addNewBookmark(){
  $('tbody').append(`<tr class="new-row">
     <td class="site-name-cell">${$siteName.val()}</td>
     <td class="site-url-cell"><a href="${$siteURL.val()}">${$siteURL.val()}</a></td>
     <td><button class="mark-read">Mark As Read</button></td>
     <td><button class="remove-link">Remove Bookmark</button></td>
   </tr>`);
 }

 function validateUserInput (title, url) {
   if ($.isEmptyObject(title) || $.isEmptyObject(url)) {
     alert('ERROR: Please enter a valid site name and URL.');
   } else {
       addNewBookmark();
     }
 }

 function displayBookmarkCount (){
  $('#total-bookmarks-field').text($('.new-row').length);
 }

 function displayReadBookmarksCount (){
  $('#total-read-bookmarks-field').text($('.read').length);
 }

 function displayUnreadBookmarksCount (){
  var totalUnreadBookmarks = $('.new-row').length - $('.read').length;
  $('#total-unread-bookmarks-field').text(totalUnreadBookmarks);
 }

 $('.site-input').on('keyup', function(){
   toggleCreate();
 });

 $createButton.on('click', function(event){
  event.preventDefault();
  validateUserInput($siteName.val(), $siteURL.val());
  displayBookmarkCount ();
  displayUnreadBookmarksCount ();
  });

  $('tbody').on('click', '.remove-link', function(){
    $(this).parents('tr').first().remove();
    displayBookmarkCount ();
    displayReadBookmarksCount ();
    displayUnreadBookmarksCount ();
  });

  $('tbody').on('click','.mark-read', function() {
    toggleRead($(this));
    displayReadBookmarksCount ();
    displayUnreadBookmarksCount ();
  });

  $clearBookmarkButton.on('click',function(){
    $('.read').parents('tr').remove();
    displayReadBookmarksCount ();
    displayBookmarkCount ();
  });
