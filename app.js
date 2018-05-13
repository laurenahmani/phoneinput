console.log("js works");

document.querySelector("#phoneNum").onkeypress = function(e) {
    return "1234567890".indexOf(String.fromCharCode(e.which)) >= 0;
};

function validate(){

	var userInput = document.getElementById('phoneNum').value;
	console.log(userInput);

	if(userInput.length >= 1 && !userInput.includes("(")){
		var editPhoneNum = '(' + userInput;
		userInput = editPhoneNum;
		document.getElementById('phoneNum').value = editPhoneNum;
	}
	if(userInput.length == 1 && userInput.includes("(")){
		document.getElementById('phoneNum').value = "";
	}

	if(userInput.length > 4 && !userInput.includes(")")){
		var editPhoneNum = userInput.substring(0, 4) + ')-' + userInput.substring(4, userInput.length + 1);
		document.getElementById('phoneNum').value = editPhoneNum;
		userInput = editPhoneNum;
	}

	if((userInput.length == 6 || userInput.length == 5) && userInput.charAt(4) == ')'){
		document.getElementById('phoneNum').value = userInput.substring(0, 4);
	}

	if(userInput.length > 9 && userInput.charAt(9) != '-'){
		var editPhoneNum = userInput.substring(0, 9) + '-' + userInput.substring(9, userInput.length + 1);
		document.getElementById('phoneNum').value = editPhoneNum;
		userInput = editPhoneNum;
	}
	
	if(userInput.length == 10 && userInput.charAt(9) == '-'){
		document.getElementById('phoneNum').value = userInput.substring(0, 9);
	}
}