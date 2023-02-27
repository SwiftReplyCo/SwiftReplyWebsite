const endpoint = 'https://api.swiftreply.co/prod/api/payments/create-trial';
const emailInput = document.getElementById('email-input');
const signUpButton = document.getElementById('sign-up-button');

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
        .then((json) => {
            console.log(json);
        })
        .catch(function (error) {
            console.log(error);
        });
});
