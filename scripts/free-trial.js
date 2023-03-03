const emailInput = document.getElementById('email-input');
const signUpButton = document.getElementById('sign-up-button');
const toast = document.getElementById('toast');
const toastText = document.getElementById('toast-text');
const loader = document.getElementById('toast-loader');

loader.style.display = 'none';

function getFreeTrialEndpoint() {
    if (window.location.hostname === 'localhost') {
        return 'https://api.swiftreply.co/dev/api/payments/create-trial';
    } else {
        return 'https://api.swiftreply.co/prod/api/payments/create-trial';
    }
}

signUpButton.addEventListener('click', function () {
    const email = emailInput.value;
    if (!email) {
        return;
    }
    renderInfoToast();
    fetch(getFreeTrialEndpoint(), {
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

function renderInfoToast() {
    loader.style.display = 'block';
    toast.style.height = '75px';
    toast.style.backgroundColor = '#54B4D3';
    toastText.textContent = 'Signing you up!';
}

function renderErrorToast(message) {
    loader.style.display = 'none';
    toast.style.height = '75px';
    toast.style.backgroundColor = '#ff3333';
    toastText.textContent = message;
}

function renderSuccessToast() {
    loader.style.display = 'none';
    toast.style.height = '75px';
    toast.style.backgroundColor = '#4BB543';
    toastText.textContent = 'Successfully started your 7 day free trial!';
}
