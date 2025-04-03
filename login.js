document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('get-started').addEventListener('click', () => {
            window.location.href = "login.html";
        });
    });
    
    // Toggle Between Login and Sign Up Forms
    document.getElementById('show-signup').addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        console.log("Sign-up link clicked!");
        document.getElementById('login-form').classList.add('hidden'); // Hide login form
        document.getElementById('signup-form').classList.remove('hidden'); // Show signup form
    });

    document.getElementById('show-login').addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        console.log("Login link clicked!");
        document.getElementById('signup-form').classList.add('hidden'); // Hide signup form
        document.getElementById('login-form').classList.remove('hidden'); // Show login form
    });

    // Handle Login Form Submission (No Firebase Logic, just a mock for demonstration)
    document.getElementById('login').addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Just show an alert instead of Firebase login
        alert(`Logged in with Email: ${email} and Password: ${password}`);
        window.location.href = 'home.html'; // Redirect to Home Page (can be replaced with any page)
    });

    // Handle Sign Up Form Submission (No Firebase Logic, just a mock for demonstration)
    document.getElementById('signup').addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        // Just show an alert instead of Firebase signup
        alert(`Signed Up with Name: ${name}, Email: ${email} and Password: ${password}`);
        window.location.href = 'home.html'; // Redirect to Home Page (can be replaced with any page)
    });
});
