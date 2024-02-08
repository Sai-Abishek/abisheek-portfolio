const roles = ['Developer', 'Designer'];
let currentIndex = 0;
const roleSpan = document.getElementById('role');
const cursorSpan = document.querySelector('.blinking-cursor');

function typeRole() {
    const currentRole = roles[currentIndex];
    roleSpan.textContent = '';
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i === currentRole.length) {
            clearInterval(typingInterval);
            setTimeout(eraseRole, 1000);
        } else {
            roleSpan.textContent += currentRole[i];
            i++;
        }
    }, 100);
}

function eraseRole() {
    let i = roles[currentIndex].length - 1;
    const erasingInterval = setInterval(() => {
        if (i === -1) {
            clearInterval(erasingInterval);
            currentIndex = (currentIndex + 1) % roles.length;
            setTimeout(typeRole, 500);
        } else {
            roleSpan.textContent = roleSpan.textContent.slice(0, -1);
            i--;
        }
    }, 50);
}

typeRole(); // Start the typing effect