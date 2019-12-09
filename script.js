// Fullname validation
function validateFullname() {
	let message;
	let fullName = document.getElementById('fullName').value; // Get the person's input using the javscript event onkeyup.
	let testPattern = /^([\w]{3,})+\s+([\w\s]{3,})+$/i; // The regExp for validating fullname.

	// ([\w]{3,}) the first name should contain only letters and of length 3 or more
	// +\s the first name should be followed by a space
	// +([\w\s]{3,})+ the second name should contain only letters of length 3 or more and can be followed by other names or not
	// /i ignores the case of the letters. Can be uppercase or lowercase letters

	
	if (!testPattern.test(fullName)) {
		/* I already have an HTML paragraph element with an id called message and a display of none 
		for the paragraph not to show automatically except when this function is triggered by the onkeyup event. */
		
		/* The message shows only when the 
		1. The first name is less than 3
		2. There is not space yet
		3. The last has not been written and 
		4. The last name is lesser than 3*/
		
		/*The HTML paragraph element with id="message" has no text in it save the one below.
		Also it has a style display of none which changes to block when the user's input is not matching the 
		test pattern.*/
		message = document.getElementById('message').innerHTML = 'Please Enter Your Fullname ("First and last Name")';
		message = document.getElementById('message').style.display = 'block';
		document.getElementById('fullName').focus();
		return false;
	} else {
		/* The HTML paragraph element with id="message" returns to style display of none when the user's input
		matches the test pattern.*/
		message = document.getElementById('fullNameErrorMessage').style.display = 'none';
	}
}
