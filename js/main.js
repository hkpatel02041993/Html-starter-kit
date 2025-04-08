
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
    document.querySelector('body').classList.toggle('navigation-open');
});

document.querySelectorAll('li').forEach(li => {
    if(li.querySelector('ul')) {
        let = span = document.createElement('span');
        span.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
        li.classList.add('has-submenu');
        li.insertBefore(span, li.firstChild);
    }
});

let submenuToggle = document.querySelectorAll(".has-submenu > span");
submenuToggle.forEach((menuItem)=>{
    menuItem.addEventListener("click", function(e){
        const submenu = this.closest(".has-submenu");
        if (submenu.classList.contains('openSubmenu')) {
            this.closest(".has-submenu").classList.remove('openSubmenu');
          } else {
            submenu.style.display = "block";
            this.closest(".has-submenu").classList.add('openSubmenu');
          }
    });
});