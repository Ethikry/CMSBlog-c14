async function logoutHandler() {
  try {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Failed to logout");
    }

    document.location.replace("/");
  } catch (err) {
    console.error(err);
    alert("Failed to logout. Please try again later.");
  }
}

document.querySelector("#logout").addEventListener("click", logoutHandler);
