document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('transition-overlay');
    const video = document.getElementById('transition-video');
    const links = document.querySelectorAll('.transicion-activa:not([target="_blank"])');
    if (!overlay) return;

    /*
    * PARTE 1: Transición de SALIDA (al hacer clic en un enlace)
    */
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            const destination = link.href;

            overlay.classList.add('active');
            
            if (video) {
                video.currentTime = 0;
                video.play();
                
                video.onended = () => {
                    window.location.href = destination;
                };
            } else {
                 setTimeout(() => {
                    window.location.href = destination;
                 }, 1000); 
            }
        });
    });

    /*
    * PARTE 2: Transición de ENTRADA (al cargar la página nueva)
    */
    if (overlay.classList.contains('active')) {
        overlay.style.opacity = '1'; 
        
        setTimeout(() => {
            overlay.classList.remove('active');
            
            if (video) {
                video.pause();
            }
        }, 300);
    }
});