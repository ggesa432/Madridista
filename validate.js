var form={
	email:		document.getElementById("email"),
};
form.submit.addEventListener("submit", CheckForm);
form.email.addEventListener("change",function(e){
	if(e.target.value=="")alert("You forgot the email");
})

var reEmail=/^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
function CheckForm(e){
	var msg="";
	if (!reEmail.test(form.email.value)){
		msg+="\nyour email address";
	}
	if(msg!=""){
		msg="Please check:"+msg;
	}
	else{
		msg="Form is valid!\nSubmitting...";
	}
	alert(msg);
	e.preventDefault();
}