$(document).ready(function(){
  // add your code here
  const newCommentButton = $("#new_comment_button");
  let commentList = $('#comment_list');
  const newCommentForm = $("#new_comment_form");
  newCommentForm.hide();

  newCommentButton.on('click', () => {
    newCommentButton.hide();
    newCommentForm.show();
  });

  newCommentForm.submit(() => {
    event.preventDefault();

    commentList.append('<li>' + $('textarea[name="comment"]').val() + "<div class='author'>" + $('input[id="author"]').val() + "</div></li>");

    newCommentButton.show();
    newCommentForm.hide();
  });
})
