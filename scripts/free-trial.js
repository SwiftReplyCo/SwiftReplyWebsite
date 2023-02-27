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
            return new Promise(function (resolve, reject) {
                response
                    .json()
                    .then(function (json) {
                        resolve({
                            response: response,
                            json: json,
                        });
                    })
                    .catch(function (error) {
                        reject(error);
                    });
            });
        })
        .then(function (result) {
            if (!result.response.ok) {
                renderErrorToast(result.json.message);
            } else {
                renderSuccessToast();
            }
        })
        .catch(function () {
            renderErrorToast('Something went wrong! Try again later.');
        });
});

function renderErrorToast(message) {
    toast.style.height = '75px';
    toast.style.backgroundColor = '#ff3333';
    toastText.textContent = message;
}

function renderSuccessToast() {
    toast.style.height = '75px';
    toast.style.backgroundColor = '#4BB543';
    toastText.textContent = 'Successfully started your 7 day free trial!';
}
