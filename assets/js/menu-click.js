var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

// Đóng mở mobile menu
mobileMenu.onclick = function() {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style = null;
    }
}

// Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#navigation li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function() {
        header.style = null;
    }
}