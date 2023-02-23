var monthlyToggle = document.getElementById('ui-component-toggle__monthly');
var yearlyToggle = document.getElementById('ui-component-toggle__yearly');

var freeTrialLink = document.getElementById('free-trial');
var standardPlanLink = document.getElementById('standard-plan');
var specialPlanLink = document.getElementById('special-plan');

var monthlyLinks = [
    '#',
    'https://buy.stripe.com/7sI3g04oI3d51Ak001',
    'https://buy.stripe.com/3csaIscVe6phbaU4gi',
];
var yearlyLinks = [
    '#',
    'https://buy.stripe.com/dR65o81cwcNFa6QbIM',
    'https://buy.stripe.com/14k9Eo9J28xp1Ak9AD',
];

monthlyToggle.addEventListener('click', function () {
    freeTrialLink.href = monthlyLinks[0];
    standardPlanLink.href = monthlyLinks[1];
    specialPlanLink.href = monthlyLinks[2];
});

yearlyToggle.addEventListener('click', function () {
    freeTrialLink.href = yearlyLinks[0];
    standardPlanLink.href = yearlyLinks[1];
    specialPlanLink.href = yearlyLinks[2];
});
