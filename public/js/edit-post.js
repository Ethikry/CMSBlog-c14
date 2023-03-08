async function editFormHandler(event) {
  event.preventDefault();

  const id = window.location.pathname.split("/").pop();
  const title = document.querySelector('input[name="post-title"]').value.trim();
  const content = document.querySelector('input[name="content"]').value.trim();

  try {
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    document.location.replace("/dashboard");
  } catch (err) {
    console.error(err);
    alert("Failed to edit post");
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
