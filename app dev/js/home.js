function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('visible');
    document.querySelector('.wrapper').classList.toggle('shifted');
}

function confirmLogout() {
    const userConfirmed = confirm("Do you want to log out?");
    if (userConfirmed) {
        window.location.href = 'Icons.html';
    }
}
