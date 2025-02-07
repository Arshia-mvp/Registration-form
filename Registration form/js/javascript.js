document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const formContainer = document.getElementById('form-container');
    const profileContainer = document.getElementById('profile-container');
    const profilePicture = document.getElementById('profile-picture');
    const profileDetails = document.getElementById('profile-details');
    const resetButton = document.getElementById('reset-button');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        clearErrors();
        if (!validateForm()) {
            return;
        }
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const nationalCode = document.getElementById('nationalCode').value;
        const profileImage = document.getElementById('profileImage').files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePicture.src = e.target.result;
        }
        reader.readAsDataURL(profileImage);
        profileDetails.innerHTML = `
            <p>نام : ${firstName}</p>
            <p>نام خانوادگی : ${lastName}</p>
            <p>آدرس : ${address}</p>
            <p>تلفن : ${phone}</p>
            <p>کد ملی : ${nationalCode}</p>
        `;
        formContainer.style.display = 'none';
        profileContainer.style.display = 'block';
    });
    resetButton.addEventListener('click', function () {
        document.getElementById('registration-form').reset();
        formContainer.style.display = 'block';
        profileContainer.style.display = 'none';
        profilePicture.src = '#';
        profileDetails.innerHTML = '';
        clearErrors();
    });
    function validateForm() {
        let isValid = true;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const nationalCode = document.getElementById('nationalCode').value;
        const profileImage = document.getElementById('profileImage').files[0];
        if (!firstName) {
            document.getElementById('firstName-error').textContent = 'لطفاً نام را وارد کنید';
            isValid = false;
        }
        if (!lastName) {
            document.getElementById('lastName-error').textContent = 'لطفاً نام خانوادگی را وارد کنید';
            isValid = false;
        }
        if (!address) {
            document.getElementById('address-error').textContent = 'لطفاً آدرس را وارد کنید';
            isValid = false;
        }
        if (!phone) {
            document.getElementById('phone-error').textContent = 'لطفاً تلفن را وارد کنید';
            isValid = false;
        }
        if (!nationalCode) {
            document.getElementById('nationalCode-error').textContent = 'لطفاً کد ملی را وارد کنید';
            isValid = false;
        }
        if (!profileImage) {
            document.getElementById('profileImage-error').textContent = 'لطفاً تصویر را انتخاب کنید';
            isValid = false;
        }
        return isValid;
    }
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => {
            error.textContent = '';
        });
    }
});