// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navbar = document.querySelector('.navbar');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navbar.classList.contains('active')) {
        navbar.classList.remove('active');
    }
});

// Featured Products Data
const featuredProducts = [
    {
        id: 1,
        name: "مانجو ياسمينا روز",
        category: "مانجو",
        image: "images/mango.jpg",
        description: "تعبئة 4 كيلو صادرات لدول عربية وأوروبية",
        weight: "4 كيلو",
        exportTo: ["أوروبا", "العالم العربي"],
        rating: 5
    },
    {
        id: 2,
        name: "أناناس",
        category: "أناناس",
        image: "images/ananas.jpg",
        description: "جودة عالية للتصدير الدولي",
        weight: "متوفر بأوزان مختلفة",
        exportTo: ["أوروبا", "آسيا"],
        rating: 5
    },
    {
        id: 3,
        name: "جوافة",
        category: "جوافة",
        image: "images/gone.jpg",
        description: "تعبئة 2.5 كيلو للتصدير",
        weight: "2.5 كيلو",
        exportTo: ["أوروبا", "العالم العربي"],
        rating: 5
    },
    {
        id: 4,
        name: "ليمون",
        category: "ليمون",
        image: "images/lemon.jpg",
        description: "ليمون يوريكا (أ) تعبئة 15 كيلو",
        weight: "15 كيلو",
        exportTo: ["أوروبا", "العالم العربي"],
        rating: 5
    }
];

// Render Featured Products
function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;
    
    container.innerHTML = '';
    
    featuredProducts.forEach(product => {
        const stars = '★'.repeat(product.rating);
        
        const productCard = `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-rating">
                        <div class="star-rating">
                            ${stars}
                        </div>
                        <span>(${product.rating}.0)</span>
                    </div>
                    <div class="product-meta">
                        <span class="product-weight">${product.weight}</span>
                        <span class="product-export">${product.exportTo.join('، ')}</span>
                    </div>
                </div>
            </div>
        `;
        
        container.innerHTML += productCard;
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedProducts();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navbar.classList.contains('active')) {
                    navbar.classList.remove('active');
                }
            }
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Here you would typically send the email to your server
            showToast('تم الاشتراك بنجاح!', 'success');
            this.reset();
        });
    }
});

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Lazy loading images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Update any responsive elements here
        if (window.innerWidth > 992 && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
        }
    }, 250);
});

// Add current year to copyright
const currentYear = new Date().getFullYear();
const yearElements = document.querySelectorAll('#currentYear');
yearElements.forEach(element => {
    if (element) element.textContent = currentYear;
});

