const form = document.querySelector(".night-form");
const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const button = document.querySelector(".submit-donation");

form.addEventListener("submit", e => {
	e.preventDefault();
	
	controlInputs();
});

// Form input validations
function controlInputs() {    	
    if(!validateLen(userName.value, 0)){
		setErrorFor(userName, "A name is required");
	} else {
	    setSuccessFor(userName);}

	if(!validateEmail(email.value, 0)){
		setErrorFor(email, "Must be a valid email address");
	} else {
		setSuccessFor(email);
	}

    button.onclick = function(){
        if(validateLen(userName.value, 0) && validateEmail(email.value, 0)) {
            location.href = "https://comscimus.netlify.app/confirmation.html";
        } else {
            console.log("Not Yet");
        }
    }
}

function validateLen(value, len){
    if(value.trim().length > len){
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setErrorFor(input, text) {
	const formItem = input.parentElement;
	const small = formItem.querySelector("small");
	formItem.className = "form-item error";
	small.innerText = text;
}

function setSuccessFor(input) {
	const formItem = input.parentElement;
	formItem.className = "form-item success";
}
	