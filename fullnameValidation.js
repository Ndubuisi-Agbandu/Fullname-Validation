// Fullname validation
function validateFullname() {
	let fullName = document.getElementById('fullName').value; // Get the person's input.
	let testPattern = /^([\w]{3,})+\s+([\w\s]{3,})+$/i; // The regExp for validating fullname.

	// ([\w]{3,}) the first name should contain only letters and of length 3 or more
	// +\s the first name should be followed by a space
	// +([\w\s]{3,})+ the second name should contain only letters of length 3 or more and can be followed by other names or not
	// /i ignores the case of the letters. Can be uppercase or lowercase letters

	
	if (!testPattern.test(fullName)) {
		// i already had a paragraph element with display of none so that the paragraph won't show.
		// The HTML input element has a javascript event of onkeyup.  
		message = document.getElementById('fullNameErrorMessage').innerHTML = 'Please Enter Your Fullname ("First and last Name")';
		message = document.getElementById('fullNameErrorMessage').style.display = 'block';
		document.getElementById('fullName').focus();
		return false;
	} else {
		message = document.getElementById('fullNameErrorMessage').style.display = 'none';
	}
}