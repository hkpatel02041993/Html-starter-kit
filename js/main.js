
// Sticky Header spacing
function updateHeaderHeight() {
    const header = document.querySelector('.main-header'); 
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`);
}

let resizeTimeout;
updateHeaderHeight();
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateHeaderHeight, 100);
});


// Responsive Navigation Menu 
document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('body').classList.toggle('active');
  });