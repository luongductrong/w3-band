const button = document.getElementById('mobile-hover-id');
const button2 = document.getElementById('mobile-menu');
const iconButton = document.querySelector('.menu-icon');

        // Sự kiện khi chạm vào nút
        button.addEventListener('touchstart', function () {
            // Tự tắt lớp hovered sau 1 giây
            setTimeout(function () {
                button.style.backgroundColor = '#000000';
                button.style.color = '#ffffff';
            }, 500);

            // Trả về thuộc tính gốc
            document.addEventListener('click', function (event) {
                button.style = null;
            });
        });

        button2.addEventListener('touchstart', function () {            
            // Tự tắt lớp hovered sau 1 giây
            setTimeout(function () {
                button2.style.backgroundColor = '#000000';
                iconButton.style.color = '#ffffff';
            }, 500);

            // Trả về thuộc tính gốc
            document.addEventListener('click', function (event) {
                button2.style = null;
                iconButton.style = null;
            });
        });