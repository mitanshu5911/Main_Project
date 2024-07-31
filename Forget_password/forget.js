// script.js

document.getElementById('limited-input').addEventListener('input', function (e) {
    const maxDigits = 11;
    let value = e.target.value;
    
    // Ensure the input value does not exceed the maximum number of digits
    if (value.length > maxDigits) {
        e.target.value = value.slice(0, maxDigits);
    }
});
