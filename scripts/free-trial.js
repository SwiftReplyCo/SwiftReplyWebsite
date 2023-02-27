const endpoint = 'https://api.swiftreply.co/prod/api/payments/create-trial';
const emailInput = document.getElementById('email-input');
const signUpButton = document.getElementById('sign-up-button');
const toast = document.getElementById('toast');
const toastText = document.getElementById('toast-text');

signUpButton.addEventListener('click', function () {
    const email = emailInput.value;
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
        }),
    })
        .then(function (response) {
            return response.json();
        })
        .then(() => {
            toast.style.height = '75px';
            toast.style.backgroundColor = '#4BB543';
            toastText.textContent =
                'Successfully started your 7 day free trial!';
        })
        .catch(function (error) {
            toast.style.height = '75px';
            toast.style.backgroundColor = '##ff3333';
            toastText.textContent = 'Something went wrong! Try again later.';
        });
});
