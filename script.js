// --- 1. KAYDIRMA (SCROLL REVEAL) ANİMASYONU ---
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal(); // Sayfa açıldığında ilk kontrol

// --- 2. TERMİNAL YAZI YAZMA (TYPEWRITER) EFEKTİ ---
document.addEventListener('DOMContentLoaded', () => {
    const lines = document.querySelectorAll('.terminal-body .log:not(.command)');
    let delay = 0;

    lines.forEach((line, index) => {
        line.style.opacity = '0'; // Önce hepsini gizle
        setTimeout(() => {
            line.style.opacity = '1';
            // Eğer son satırsa (Success), yeşil parlama efekti ver
            if(line.classList.contains('success')) {
                line.style.textShadow = '0 0 10px rgba(0, 230, 118, 0.5)';
            }
        }, delay);
        delay += 800; // Her satır arası 0.8 saniye bekle
    });

    // İmleci en son göster
    const commandLine = document.querySelector('.terminal-body .command');
    commandLine.style.opacity = '0';
    setTimeout(() => {
        commandLine.style.opacity = '1';
    }, delay + 200);
});