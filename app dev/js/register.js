document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        window.location.href = 'login page.html'; 
    });
});