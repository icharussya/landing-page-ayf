// No. 5 
function handleGetFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;

    const formData = {
        name,
        email,
        city,
        zipCode,
        status
    };

    return formData;
}

var menuItems = document.querySelectorAll(".menu");

menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
        menuItems.forEach(function (item) {
            item.classList.remove("active");
        });
        this.classList.add("active");
    });
});

// no. 7-8
function isNumber(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}

function checkboxIsChecked() {
    const isChecked = document.getElementById('status').checked;
    return isChecked;
}

function validateFormData(formData) {

    if (!formData) {
        return false;
    }

    const isZipCodeValid = isNumber(formData.zipCode);
    const isCheckboxChecked = checkboxIsChecked();

    return isZipCodeValid && isCheckboxChecked;
}

// no. 9-10
function submit() {
    const formData = handleGetFormData();

    const validation = validateFormData(formData);

    if (!validation) {
        document.getElementById("warning").textContent = "Periksa form anda sekali lagi";
    } else {
        document.getElementById("warning").textContent = ""; 
        console.log(formData);
        alert("Berhasil terisi");
    }
}

document.getElementById("form-id").addEventListener("submit", submit);
submit(event.preventDefault());
