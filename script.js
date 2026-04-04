document.addEventListener('DOMContentLoaded', () => {
    // Sadece Scroll (Aşağı Kaydırma) Animasyonları Kaldı
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animasyon sınıflarını izlemeye al
    document.querySelectorAll('.scroll-animate, .fade-in-up').forEach(el => {
        observer.observe(el);
    });
});
// --- 3. KAYDIRMAYA DUYARLI CİHAZ DÖNÜŞÜMÜ (SCROLL-DRIVEN MORPH) ---
const morphSection = document.querySelector('.morph-section');
const deviceMockup = document.getElementById('morph-device');
const step1 = document.querySelector('.step-1');
const step2 = document.querySelector('.step-2');

if (morphSection && deviceMockup) {
    window.addEventListener('scroll', () => {
        // Bölgenin ekrandaki yerini hesapla
        const rect = morphSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        let progress = 0;
        
        // Kullanıcı bu alana girdiği an hesaplama başlar
        if (rect.top <= 0) {
            const scrollDistance = -rect.top; 
            const totalScrollable = rect.height - windowHeight;
            // 0 ile 1 arasında ilerleme yüzdesi çıkar
            progress = Math.min(Math.max(scrollDistance / totalScrollable, 0), 1);
        }

        // İlerleme %50'yi geçtiyse (Ekranın ortasına gelindiyse) Telefona dönüş!
        if (progress > 0.5) {
            deviceMockup.classList.add('is-mobile');
            step1.classList.remove('active');
            step2.classList.add('active');
        } else {
            // Geri yukarı çıkılırsa tekrar Bilgisayar formuna dön
            deviceMockup.classList.remove('is-mobile');
            step2.classList.remove('active');
            step1.classList.add('active');
        }
    });
}
