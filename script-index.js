// // script-index.js
// document.addEventListener("DOMContentLoaded", function() {

// 	function getCookie(name) {

// 		const value = `; ${document.cookie}`;

// 		const parts = value.split(`; ${name}=`);

// 		if (parts.length === 2) return parts.pop().split(';').shift();

// 	}



// 	// Check if the user is logged in

// 	const isLoggedIn = getCookie("isLoggedIn");

// 	if (!isLoggedIn) {

// 		// Redirect to the login page

// 		window.location.href = "login.html";

// 	}

// });
