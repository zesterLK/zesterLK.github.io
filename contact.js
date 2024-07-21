document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Basic form validation
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    // If validation passes, submit the form
    form.submit();

    // Clear the form after submission
    form.reset();

    // Show a success message (you can replace this with a more elegant solution)
    alert("Thank you for your message. I will get back to you soon!");
  });
});
