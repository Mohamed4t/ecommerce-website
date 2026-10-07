function togglePassword(id, button) {
            const input = document.getElementById(id);
            if (input.type === "password") {
                input.type = "text";
                button.textContent = "Hide";
            } else {
                input.type = "password";
                button.textContent = "Show";
            }
        }
        document
            .getElementById("signupForm")
            .addEventListener("submit", function(event) {
                const password =
                    document.getElementById("password").value;
                const confirmPassword =
                    document.getElementById("confirmPassword").value;
                if (password !== confirmPassword) {
                    event.preventDefault();
                    alert("Passwords do not match.");
                }
            });