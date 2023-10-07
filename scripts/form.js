document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordInput = document.getElementById('password');
    const ratingValue = document.getElementById('ratingValue');
    const pageRatingInput = document.getElementById('pageRating');

    // Display the current range input value
    pageRatingInput.addEventListener('input', function () {
        ratingValue.textContent = pageRatingInput.value;
    });

    // Validate email on form submit
    form.addEventListener('submit', function (e) {
        if (!emailInput.checkValidity()) {
            e.preventDefault();
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }

        // Check if passwords match
        if (passwordInput.value !== confirmPasswordInput.value) {
            e.preventDefault();
            alert('Passwords do not match. Please try again.');
            passwordInput.value = '';
            confirmPasswordInput.value = '';
        }
    });
});
