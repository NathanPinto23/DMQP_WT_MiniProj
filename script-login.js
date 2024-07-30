// script-index.js
document.addEventListener("DOMContentLoaded", () => {

	const loginForm = document.getElementById('loginForm');
	
	loginForm.addEventListener('submit', async (event) => {
		event.preventDefault();
		
		const username = document.getElementById('em').value;
		const password = document.getElementById('pass').value;

		const formData = new FormData()
		formData.append('username', username);
		formData.append('password', password);

		try{
			const response = await fetch('http://192.168.43.133/apiLMS/login.php', {
				method: 'POST',
				body: formData
			});
			
			const status = await response.json();
			
			if(status.success){
				window.location.href='index.html'
			}
		}
	});
});
