async function commentFormHandler(event) {
  event.preventDefault();

  const commentTextEl = document.querySelector('input[name="comment-body"]');
  const commentText = commentTextEl.value.trim();
  console.log(commentText);

  if (!commentText) {
    return;
  }

  const postId = window.location.pathname.split("/").pop();

  try {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ post_id: postId, comment_text: commentText }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Failed to create comment: ${response.statusText}`);
    }
    console.log(commentText);
    document.location.reload();
  } catch (err) {
    alert(err.message);
    commentTextEl.focus();
  }
}
document
  .querySelector("#comment-form")
  .addEventListener("submit", commentFormHandler);
