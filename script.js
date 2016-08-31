var $siteName = $('.bookmark-site-name');
var $siteURL = $('.bookmark-site-url');
var $createButton = $('.create-button');


function toggleCreate() {
    if ($siteName.val() === '' && $siteURL.val() === '') {
      $createButton.prop('disabled', true);
    } else {
      $createButton.prop('disabled', false);
    }
}

// toggleCreate(siteName,siteURL);

// this changes class of prop of read button


function toggleRead(parentRow){
  parentRow.toggleClass('.read');
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
  $('tbody').append(`<tr class="newRow">
     <td class="site-name-cell">${$siteName.val()}</td>
     <td class="site-url-cell"><a href="${$siteURL.val()}">${$siteURL.val()}</a></td>
     <td><button class="markRead">Mark As Read</button></td>
     <td><button class="removeLink">Remove Bookmark</button></td>
   </tr>`);
 }

 $('tbody').find('.bookmark')

 function validateUserInput (title, url) {

   if ($.isEmptyObject(title) || $.isEmptyObject(url)) {
   alert('ERROR: Please enter a valid site name and URL.');}
 }

 $('.site-input').on('keyup', function(){
   toggleCreate();
 });

 $createButton.on('click', function(event){
  event.preventDefault();
  validateUserInput($siteName.val(), $siteURL.val());
  addNewBookmark();
  // toggleRead();
  });

  $('tbody').on('click', '.removeLink', function(){
    $(this).parents('tr').first().remove();
  });

  $('tbody').on('click','.markRead', function() {
    toggleRead($(this));
  });
