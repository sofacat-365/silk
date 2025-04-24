document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay = document.getElementById('modalOverlay');
    const showModalBtn = document.getElementById('showModalBtn');
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    
    showModalBtn.addEventListener('click', function() {
        modalOverlay.style.display = 'flex';
        errorMessage.classList.remove('show');
        loginForm.reset();
    });
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        password_two
        
        if (username === 'admin' && password === '12345') {
            alert('Вход успешный!');
            modalOverlay.style.display = 'none';
        } else {
            errorMessage.classList.add('show');
        }
    });
    
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const modalOverlayReg = document.getElementById('modalOverlayReg');
    const registerForm = document.getElementById('registerForm');
    const errorMessageReg = document.getElementById('errorMessage');
    const showModalReg = document.getElementById('showModalReg');

    showModalReg.addEventListener('click', function() {
        modalOverlayReg.style.display = 'flex';
        errorMessageReg.classList.remove('show');
        registerForm.reset();
    });
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const usernam = document.getElementById('usernam').value;
        const password = document.getElementById('passwor').value;
        const password_two = document.getElementById('password_two').value;

        if (password === password_two) {
            alert('Вход успешный!');
            modalOverlayReg.style.display = 'none';
        } else {
            errorMessageReg.classList.add('show');
        }
    });
    
    modalOverlayReg.addEventListener('click', function(e) {
        if (e.target === modalOverlayReg) {
            modalOverlayReg.style.display = 'none';
        }
    });
});