const form = document.querySelector(".contact-form");
const userName = document.querySelector("#name");
const email = document.querySelector("#e-mail");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const button = document.querySelector(".message-submit");

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
	
    if(!validateLen(subject.value, 3)){
		setErrorFor(subject, "Must be more than 4 characters");
	} else {
		setSuccessFor(subject);
	}

    if(!validateLen(message.value, 14)){
		setErrorFor(message, "The message must be more than 15 characters long");
	} else {
		setSuccessFor(message);
	}
	
	if(!validateEmail(email.value, 0)){
		setErrorFor(email, "Must be a valid email address");
	} else {
		setSuccessFor(email);
	}

    // A message is alerted to the user, indicating that their message was sent
    button.onclick = function(){
        if(validateLen(userName.value, 0) && validateLen(subject.value, 3) && validateLen(message.value, 14) && validateEmail(email.value, 0)) {
            alert("Thank you for contacting us. We will get back to you as soon as we can.");
            location.href = "https://comscimus.netlify.app";
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
	