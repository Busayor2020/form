const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form-container"),
formCloseBtn = document.querySelector(".form-close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHidden = document.querySelectorAll(".pw-hidden");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHidden.forEach((icon) => {
	 icon.addEventListener("click", () => {
		let getPwInput = icon.parentElement.querySelector("input");
	 if(getPwInput.type === "password"){
		  getPwInput.type = "text"
			icon.classList.replace("ri-eye-line", "ri-eye-off-line");
			}else{
				getPwInput.type = "password"
				icon.classList.replace("ri-eye-off-line", "ri-eye-line");
				
	 }
	 });
});

signupBtn.addEventListener("click", (e)=> {
	e.preventDefault();
	formContainer.classList.add ("active");
});
loginBtn.addEventListener("click", (e)=> {
	e.preventDefault();
	formContainer.classList.remove ("active");
});



