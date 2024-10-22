document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById('video-popup');
    var thumbnail = document.getElementById('video-thumbnail');
    var closeBtn = document.getElementById('close-btn');
    var iframe = document.getElementById('video-iframe');
    var videoSrc = iframe.src;

    thumbnail.onclick = function () {
        popup.style.display = 'flex';
        popup.classList.add('fade-in');
        popup.classList.remove('fade-out');
        document.body.style.overflow = 'auto';
    }

    closeBtn.onclick = function () {
        popup.classList.remove('fade-in');
        popup.classList.add('fade-out');
        setTimeout(function() {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
            iframe.src = '';
            setTimeout(function() {
                iframe.src = videoSrc;
            }, 100);
        }, 400); // Duración de la animación fade-out
    }

    window.onclick = function (event) {
        if (event.target == popup) {
            popup.classList.remove('fade-in');
            popup.classList.add('fade-out');
            setTimeout(function() {
                popup.style.display = 'none';
                document.body.style.overflow = 'auto';
                iframe.src = '';
                setTimeout(function() {
                    iframe.src = videoSrc;
                }, 100);
            }, 400); // Duración de la animación fade-out
        }
    }
});