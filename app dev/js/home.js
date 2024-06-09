function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('visible');
}

// Add event listener to the menu button
document.querySelector('.menu-button').addEventListener('click', toggleSidebar);

function confirmLogout() {
    const userConfirmed = confirm("Do you want to log out?");
    if (userConfirmed) {
        window.location.href = 'Icons.html';
    }
}
