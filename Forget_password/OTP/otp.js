function moveToNext(current, nextFieldID) {
    if (current.value.length === 1 && nextFieldID) {
        document.getElementById(nextFieldID).focus();
    }
}

function submitOTP() {
    const otp1 = document.getElementById('otp1').value;
    const otp2 = document.getElementById('otp2').value;
    const otp3 = document.getElementById('otp3').value;
    const otp4 = document.getElementById('otp4').value;
    const otp5 = document.getElementById('otp5').value;
    const otp6 = document.getElementById('otp6').value;

    const otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    document.getElementById('output').innerText = 'Entered OTP: ' + otp;
}

// Timer function
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" : "" + minutes;
        seconds = seconds < 10 ? "0" : "" + seconds;

        display.textContent = `Time left: ${minutes}:${seconds}`;

        if (--timer < 0) {
            clearInterval(interval);
            display.textContent = "RESEND OTP";
            // Disable all inputs and the submit button
            document.querySelectorAll('.otp-input').forEach(input => input.disabled = true);
            document.querySelector('button').disabled = true;
        }
    }, 1000);
}



function resendOTP() {
    // Logic to resend OTP goes here
    alert("OTP resent!");

    // Reset the form and timer
    document.getElementById('otpForm').reset();
    document.querySelectorAll('.otp-input').forEach(input => input.disabled = false);
    document.querySelector('button[type="button"]').disabled = false;
    document.getElementById('resendButton').style.display = 'none';
    startTimer(60, document.getElementById('timer'));
}

// Start the timer
window.onload = () => {
    const oneMinute = 60 * 1;
    const display = document.getElementById('timer');
    startTimer(oneMinute, display);
};