// Contact form submission via Web3Forms (no page reload).
// Recipient email is set on the access key itself at web3forms.com —
// to change who receives enquiries, rotate the key there, not here.
(function () {
  const form = document.getElementById("contact-form");
  const button = document.getElementById("submit-btn");
  const statusMessage = document.getElementById("form-status");
  if (!form || !button || !statusMessage) return;

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Stop standard page reload

    // Change button text to show it is working
    const originalButtonText = button.innerHTML;
    button.innerHTML = "Sending...";
    button.disabled = true;

    // Package the form data
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      const result = await response.json();

      if (response.ok && result.success) {
        // Success! Show the message, clear the form, and reset the button
        statusMessage.classList.remove("hidden");
        form.reset();
        button.innerHTML = originalButtonText;
        button.disabled = false;
      } else {
        alert("Oops! There was a problem submitting your form");
        button.innerHTML = originalButtonText;
        button.disabled = false;
      }
    } catch (error) {
      alert("Network error. Please try again later.");
      button.innerHTML = originalButtonText;
      button.disabled = false;
    }
  });
})();
