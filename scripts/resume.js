document.body.addEventListener('mousemove', eyeball);

function eyeball(event) {
    const eyes = document.querySelectorAll('.left-eye-pupil, .right-eye-pupil');

    eyes.forEach(eye => {
        const eyeRect = eye.parentElement.getBoundingClientRect();

        const centerX = eyeRect.left + eyeRect.width / 2;
        const centerY = eyeRect.top + eyeRect.height / 2;

        const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);

        eye.style.transform = `translate(${Math.cos(angle) * 6}px, ${Math.sin(angle) * 6}px)`;
    });
}