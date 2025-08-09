// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and cards for animation
    const elementsToObserve = document.querySelectorAll('section, .skill-card, .contact-card, .passion-card');
    elementsToObserve.forEach(el => observer.observe(el));

    // Parallax effect for waves
    let ticking = false;
    
    function updateWaves() {
        const scrollY = window.pageYOffset;
        const waves = document.querySelectorAll('.wave');
        
        waves.forEach((wave, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrollY * speed);
            wave.style.transform = `translateX(-50%) translateY(${yPos}px)`;
        });
        
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateWaves);
            ticking = true;
        }
    }

    // Throttled scroll event for performance
    window.addEventListener('scroll', requestTick, { passive: true });

    // Dynamic particle animation
    function createFloatingElements() {
        const particles = document.querySelectorAll('.particle');
        
        particles.forEach((particle, index) => {
            // Random movement within bounds
            const moveX = Math.sin(Date.now() * 0.001 + index) * 20;
            const moveY = Math.cos(Date.now() * 0.001 + index) * 15;
            
            particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }

    // Animate particles every frame
    function animateParticles() {
        createFloatingElements();
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();

    // Card hover effects with mouse tracking
    const cards = document.querySelectorAll('.skill-card, .contact-card, .passion-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
            this.style.transition = 'transform 0.5s ease, box-shadow 0.3s ease';
        });
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    });

    // Typing effect for the name
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const originalText = nameElement.textContent;
        nameElement.textContent = '';
        
        let i = 0;
        const typingSpeed = 100;
        
        function typeWriter() {
            if (i < originalText.length) {
                nameElement.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Add dynamic background gradient shift
    let gradientAngle = 135;
    
    function shiftGradient() {
        gradientAngle += 0.5;
        if (gradientAngle >= 360) gradientAngle = 0;
        
        const oceanContainer = document.querySelector('.ocean-container');
        const body = document.body;
        
        if (oceanContainer && body) {
            const gradient = `linear-gradient(${gradientAngle}deg, #667eea 0%, #764ba2 100%)`;
            oceanContainer.style.background = gradient;
            body.style.background = gradient;
        }
    }
    
    // Subtle gradient animation every 100ms
    setInterval(shiftGradient, 100);

    // Contact form interactions (if needed in future)
    const contactCards = document.querySelectorAll('.contact-card');
    
    contactCards.forEach(card => {
        const link = card.querySelector('a');
        if (link) {
            card.addEventListener('click', function() {
                if (link.href.startsWith('mailto:') || link.href.startsWith('tel:')) {
                    window.location.href = link.href;
                }
            });
            
            // Add pointer cursor to clickable contact cards
            card.style.cursor = 'pointer';
        }
    });

    // Add scroll indicator for better UX
    function createScrollIndicator() {
        const indicator = document.createElement('div');
        indicator.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            font-size: 2rem;
            animation: bounce 2s infinite;
            z-index: 10;
            opacity: 0.7;
            transition: opacity 0.3s ease;
        `;
        indicator.innerHTML = '<i class="fas fa-chevron-down"></i>';
        indicator.id = 'scroll-indicator';
        
        // Add bounce animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                    transform: translateX(-50%) translateY(0);
                }
                40% {
                    transform: translateX(-50%) translateY(-10px);
                }
                60% {
                    transform: translateX(-50%) translateY(-5px);
                }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(indicator);
        
        // Hide indicator after scrolling
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            indicator.style.opacity = '0';
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (window.pageYOffset < 100) {
                    indicator.style.opacity = '0.7';
                }
            }, 1000);
        });
        
        // Hide after 5 seconds initially
        setTimeout(() => {
            if (window.pageYOffset < 100) {
                indicator.style.opacity = '0.3';
            }
        }, 5000);
    }
    
    createScrollIndicator();

    // Add a subtle loading animation
    function hideLoader() {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }
    }
    
    // Simulate loading completion
    window.addEventListener('load', hideLoader);
    
    // Fallback in case load event doesn't fire
    setTimeout(hideLoader, 2000);

    console.log('Portfolio website loaded successfully! 🌊');
});