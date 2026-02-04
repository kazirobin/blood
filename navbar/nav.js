
// Select elements
const hamburgerMenu = document.querySelector('.humberger__menu');
const sidebarMenu = document.querySelector('.sidebar__menu');
const sidebarClose = document.querySelector('.sidebar__close');
const sidebarOverlay = document.querySelector('.sidebar__overlay');

// Function to toggle sidebar
function toggleSidebar() {
    sidebarMenu.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
}

// Function to close sidebar
function closeSidebar() {
    sidebarMenu.classList.remove('active');
    sidebarOverlay.classList.remove('active');
}

// Event listeners
hamburgerMenu.addEventListener('click', toggleSidebar);
sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);
// menubar links
const menuLinks = document.querySelectorAll('.menu__bar ul li a');
menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        menuLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    })
        closeSidebar();
})
// Optional: Close sidebar when clicking on a menu item
const sidebarLinks = document.querySelectorAll('.sidebar__menu ul li a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Remove active class from all links
        sidebarLinks.forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');
        // Close sidebar
        closeSidebar();
    });
});
