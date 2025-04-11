// Tạo các phần tử rơi ngẫu nhiên
const fallingItems = document.querySelector('.falling-items');
const fireworks = document.querySelector('.fireworks');
const music = document.getElementById('birthdayMusic');
const toggleMusicBtn = document.getElementById('toggleMusic');

// Tự động phát nhạc khi trang tải
window.addEventListener('load', () => {
    music.play().catch(error => {
        console.log("Trình duyệt chặn tự động phát nhạc. Người dùng cần tương tác để phát nhạc.");
    });
});

// Tạo các phần tử rơi ngẫu nhiên
function createFallingItem() {
    const item = document.createElement('div');
    const random = Math.random();
    if (random < 0.2) item.innerHTML = '💖'; // Tim
    else if (random < 0.4) item.innerHTML = '🌸'; // Hoa
    else if (random < 0.6) item.innerHTML = '✨'; // Ngôi sao
    else if (random < 0.8) item.innerHTML = '🐔'; // Gà
    else item.innerHTML = '🐶'; // Chó

    item.style.left = Math.random() * 100 + 'vw';
    item.style.animationDuration = Math.random() * 5 + 5 + 's';
    fallingItems.appendChild(item);

    setTimeout(() => item.remove(), 10000);
}

// Tạo hiệu ứng pháo hoa
function createFirework() {
    const firework = document.createElement('div');
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.top = Math.random() * 100 + 'vh';
    firework.style.background = `radial-gradient(circle, hsl(${Math.random() * 360}, 100%, 50%), transparent)`;
    fireworks.appendChild(firework);

    setTimeout(() => firework.remove(), 1500);
}

// Tạo nhiều phần tử rơi và pháo hoa liên tục
setInterval(createFallingItem, 200);
setInterval(createFirework, 500);

// Hàm bật/tắt nhạc
function toggleMusic() {
    if (music.paused) {
        music.play();
        toggleMusicBtn.innerHTML = '🔊 Tắt Nhạc';
    } else {
        music.pause();
        toggleMusicBtn.innerHTML = '🔈 Bật Nhạc';
    }
}