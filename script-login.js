// script-index.js

document.addEventListener("DOMContentLoaded", () => {

	const loginForm = document.getElementById('loginForm');
	const submitBtn = document.getElementById('submit');
	submitBtn.addEventListener('click', async (event) => {
		event.preventDefault();
		
		const username = document.getElementById('em').value;
		const password = document.getElementById('pass').value;

		console.log("Element values caught");

		if(username === 'user' && password === 'password'){
			window.location.href='index.html'
		}
		/*
		const formData = new formData()
		formData.append('username', username);
		formData.append('password', password);
		
		try{
			const response = await fetch('login.php', {
				method: 'POST',
				body: formData
			});
			
			const status = await response.json();
			
			if(status.success){
				window.location.href='./index.html'
			}
		}
		*/
	});

}