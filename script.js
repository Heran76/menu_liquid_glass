// Seleccionar elementos
const list = document.querySelectorAll('.list');

// Función para activar enlace
function activeLink() {
    // Remover clase active de todos los elementos
    list.forEach((item) => item.classList.remove('active'));
    
    // Agregar clase active al elemento clickeado
    this.classList.add('active');
    
    // Efecto de splash líquido
    createSplashEffect(this);
}

// Función para crear efecto de splash
function createSplashEffect(element) {
    const splash = document.createElement('div');
    splash.className = 'splash-effect';
    
    // Posicionar el splash en el centro del elemento
    const rect = element.getBoundingClientRect();
    splash.style.left = rect.left + rect.width / 2 + 'px';
    splash.style.top = rect.top + rect.height / 2 + 'px';
    
    document.body.appendChild(splash);
    
    // Remover el splash después de la animación
    setTimeout(() => {
        splash.remove();
    }, 600);
}

// Agregar event listeners
list.forEach((item) => {
    item.addEventListener('click', activeLink);
    
    // Efecto de hover mejorado
    item.addEventListener('mouseenter', function() {
        if (!this.classList.contains('active')) {
            this.style.transform = 'translateY(-2px)';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            this.style.transform = 'translateY(0)';
        }
    });
});

// Efecto de paralaje con el mouse
document.addEventListener('mousemove', (e) => {
    const navigation = document.querySelector('.navigation');
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    navigation.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
});

// Agregar estilos CSS para el efecto splash
const splashStyles = `
.splash-effect {
    position: fixed;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
    transform: translate(-50%, -50%) scale(0);
    animation: splashAnimation 0.6s ease-out;
    pointer-events: none;
    z-index: 9999;
}

@keyframes splashAnimation {
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -50%) scale(3);
        opacity: 0;
    }
}
`;

// Inyectar estilos en el documento
const styleSheet = document.createElement('style');
styleSheet.textContent = splashStyles;
document.head.appendChild(styleSheet);

