document.getElementById('limited-input').addEventListener('input', function (e) {
    const maxDigits = 10;
    let value = e.target.value;
    
    // Ensure the input value does not exceed the maximum number of digits
    if (value.length > maxDigits) {
        e.target.value = value.slice(0, maxDigits);
    }

    // Enable the submit button if the input has exactly maxDigits digits
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.disabled = (value.length !== maxDigits);
});

document.addEventListener('DOMContentLoaded', function() {
    const mobileInput = document.getElementById('limited-input');
    const submitBtn = document.getElementById('submit-btn');

    mobileInput.addEventListener('input', function() {
        if (mobileInput.value.length === 10) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    });
});
