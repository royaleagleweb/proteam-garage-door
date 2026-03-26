/* ========================================
   ProTeam Garage Door - Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {

    // ---------- Scroll Animations ----------
    var animateElements = document.querySelectorAll('.service-card, .step-card, .gallery-item, .hurricane-card, .testimonial-card, .feature-item, .platform, .brand-item, .stat-item');

    if (animateElements.length > 0 && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry, index) {
                if (entry.isIntersecting) {
                    // Stagger the animation based on sibling index
                    var siblings = entry.target.parentElement.children;
                    var idx = Array.prototype.indexOf.call(siblings, entry.target);
                    entry.target.style.transitionDelay = (idx * 0.08) + 's';
                    entry.target.classList.add('animate-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        animateElements.forEach(function (el) {
            el.classList.add('animate-hidden');
            observer.observe(el);
        });
    }

    // ---------- Mobile Navigation ----------
    const mobileToggle = document.getElementById('mobile-toggle');
    const nav = document.getElementById('nav');

    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', function () {
            mobileToggle.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });

        // Close nav on link click
        nav.querySelectorAll('.nav-link').forEach(function (link) {
            link.addEventListener('click', function () {
                mobileToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ---------- Mobile Dropdown Navigation ----------
    document.querySelectorAll('.nav-dropdown-toggle').forEach(function (toggle) {
        toggle.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                var parent = this.closest('.nav-dropdown');
                parent.classList.toggle('open');
            }
        });
    });

    // ---------- Header Scroll Effect ----------
    const header = document.getElementById('header');

    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // ---------- Active Nav Link on Scroll ----------
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        var scrollY = window.scrollY + 120;

        sections.forEach(function (section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.offsetHeight;
            var sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // ---------- Back to Top ----------
    var backToTop = document.getElementById('back-to-top');

    function toggleBackToTop() {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', toggleBackToTop);

    if (backToTop) {
        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ---------- Counter Animation ----------
    var counters = document.querySelectorAll('.stat-number');
    var counterAnimated = false;

    function animateCounters() {
        if (counterAnimated) return;

        var statsBar = document.querySelector('.stats-bar');
        if (!statsBar) return;

        var rect = statsBar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            counterAnimated = true;

            counters.forEach(function (counter) {
                var target = parseInt(counter.getAttribute('data-target'));
                var duration = 2000;
                var start = 0;
                var startTime = null;

                function updateCounter(timestamp) {
                    if (!startTime) startTime = timestamp;
                    var progress = Math.min((timestamp - startTime) / duration, 1);
                    // Ease out quad
                    var eased = 1 - (1 - progress) * (1 - progress);
                    counter.textContent = Math.floor(eased * target);

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                }

                requestAnimationFrame(updateCounter);
            });
        }
    }

    window.addEventListener('scroll', animateCounters);
    animateCounters(); // Check on load

    // ---------- Scroll Reveal Animation ----------
    function revealOnScroll() {
        var elements = document.querySelectorAll(
            '.service-card, .hurricane-card, .testimonial-card, .gallery-item, .feature-item'
        );

        elements.forEach(function (el) {
            var rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }

    // Set initial styles for reveal animation
    document.querySelectorAll(
        '.service-card, .hurricane-card, .testimonial-card, .gallery-item, .feature-item'
    ).forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    setTimeout(revealOnScroll, 100);

    // ---------- Contact Form ----------
    var contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var submitBtn = contactForm.querySelector('button[type="submit"]');
            var originalText = submitBtn.innerHTML;

            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Submit form data to FormSubmit
            var formData = new FormData(contactForm);
            fetch('https://formsubmit.co/ajax/info@proteamgarage.com', {
                method: 'POST',
                body: formData
            })
            .then(function (response) { return response.json(); })
            .then(function (data) {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.background = '#2ECC71';
                submitBtn.style.borderColor = '#2ECC71';

                // Reset form
                setTimeout(function () {
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.borderColor = '';
                    submitBtn.disabled = false;
                }, 3000);
            })
            .catch(function () {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.background = '#2ECC71';
                submitBtn.style.borderColor = '#2ECC71';

                setTimeout(function () {
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.borderColor = '';
                    submitBtn.disabled = false;
                }, 3000);
            });
        });
    }

    // ---------- Phone Number Formatting ----------
    var phoneInput = document.getElementById('phone');

    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            var value = e.target.value.replace(/\D/g, '');
            if (value.length > 10) value = value.substring(0, 10);

            if (value.length >= 6) {
                e.target.value = '(' + value.substring(0, 3) + ') ' + value.substring(3, 6) + '-' + value.substring(6);
            } else if (value.length >= 3) {
                e.target.value = '(' + value.substring(0, 3) + ') ' + value.substring(3);
            } else if (value.length > 0) {
                e.target.value = '(' + value;
            }
        });
    }

    // ---------- Smooth scroll for anchor links ----------
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') return;

            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});
