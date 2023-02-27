async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      document.location.replace("/dashboard");
    } catch (err) {
      alert(`Login failed: ${err.message}`);
    }
  }
}

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
