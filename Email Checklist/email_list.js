var $ = function(id) {
    return document.getElementById(id);
};

var joinList = function() {
	var emailAddress1 = $("email_address1").value;
	var emailAddress2 = $("email_address2").value;
	var isValid = true;
	
	if (emailAddress1 === "") { 
		$("email_address1_error").firstChild.nodeValue = "You must put an email";
		isValid = false;
	} else { $("email_address1_error").firstChild.nodeValue = ""; } 

	if (emailAddress1 !== emailAddress2) { 
		$("email_address2_error").firstChild.nodeValue = "This entry must equal first entry.";
		isValid = false;
	} else { $("email_address2_error").firstChild.nodeValue = ""; }     
        
	if ($("first_name").value === "") {
		$("first_name_error").firstChild.nodeValue = 
                        "You must put an email";
		isValid = false;
	} else { $("first_name_error").firstChild.nodeValue = ""; }  
	
	if (isValid) {
		$("email_form").submit(); 
		alert('Email Part One Finished');
	}
};

window.onload = function() {
    $("join_list").onclick = joinList;
    $("email_address1").focus();
};
