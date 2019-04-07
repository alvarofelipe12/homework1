const cNameInput = document.querySelector('#cName');
const cRatingInput = document.querySelector('#cRating');
const addBtn = document.querySelector('#addBtn');
const alertCtrl = document.querySelector('ion-alert-controller');
const result = document.querySelector('#result');

const clear = () => {
    cNameInput.vale = '';
    cRatingInput.vale = '';
};

addBtn.addEventListener('click', () => {
    const name = cNameInput.value;
    const rating = cRatingInput.value;
    if (
        name.trim().length <= 0 ||
        rating.trim().length <= 0 ||
        rating < 1 ||
        rating > 5
    ) {
        alertCtrl.create({
            header: 'Invalid Inputs',
            message: 'Please enter a valid name and rating',
            buttons: ['Okay']
        }).then(alertResp => {
            alertResp.present();
        });
        return;
    }
    const newRating = document.createElement('ion-item');
    // const nameBold = document.createElement('b');
    // nameBold.textContent = name;
    // newRating.appendChild(nameBold);
    newRating.textContent = name + ' - ' + rating + '/5';
    result.appendChild(newRating);
    clear();
});