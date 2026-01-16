// Products Data
const productsData = [
    {
        id: 1,
        name: "مانجو ياسمينا روز",
        category: "mango",
        image: "images/mango.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، من أفضل أنواع المانجو للتصدير.",
        weight: "4 كيلو",
        packaging: "كرتونة معزولة",
        exportTo: ["أوروبا", "دول عربية"],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 2,
        name: "أناناس طازج",
        category: "pineapple",
        image: "images/ananas.jpg",
        description: "أناناس طازج بجودة تصدير، حلو المذاق، مناسب للأسواق العالمية.",
        weight: "متوفر بأوزان مختلفة",
        packaging: "صناديق خشبية",
        exportTo: ["أوروبا", "آسيا"],
        price: "سعر الجملة",
        rating: 5,
        features: ["طازج", "حجم موحد", "جودة تصدير"]
    },
    {
        id: 3,
        name: "مانجو عويس",
        category: "mango",
        image: "images/mango2.jpg",
        description: "تعبئة 3 كيلو دول أوروبية، جودة ممتازة، شهادة صحية.",
        weight: "3 كيلو",
        packaging: "كرتونة مخصصة",
        exportTo: ["أوروبا"],
        price: "سعر الجملة",
        rating: 5,
        features: ["خالي من المواد الحافظة", "معتمد للتصدير", "جودة عالية"]
    },
    {
        id: 4,
        name: "جوافة",
        category: "guava",
        image: "images/gone.jpg",
        description: "جوافة تعبئة 2.5 كيلو للتصدير، طازجة، غنية بالفيتامينات.",
        weight: "2.5 كيلو",
        packaging: "صندوق بلاستيك",
        exportTo: ["أوروبا", "دول عربية"],
        price: "سعر الجملة",
        rating: 5,
        features: ["طازجة", "غنية بفيتامين C", "صلاحية طويلة"]
    },
    {
        id: 5,
        name: "ليمون يوريكا",
        category: "lemon",
        image: "images/lemon.jpg",
        description: "ليمون يوريكا (أ) تعبئة 15 كيلو، جودة تصدير، حمضية متوازنة.",
        weight: "15 كيلو",
        packaging: "صناديق كبيرة",
        exportTo: ["أوروبا", "دول عربية"],
        price: "سعر الجملة",
        rating: 5,
        features: ["حجم كبير", "جودة عالية", "مناسب للتخزين"]
    },
    {
        id: 6,
        name: "خوخ فلوريدا",
        category: "peach",
        image: "images/peach-1.jpg",
        description: "خوخ فلوريدا تعبئة 2.5 كيلو صواني، طازج، حلو المذاق.",
        weight: "2.5 كيلو",
        packaging: "صواني",
        exportTo: ["أوروبا", "دول عربية"],
        price: "سعر الجملة",
        rating: 5,
        features: ["طازج", "حجم موحد", "حلو المذاق"]
    },
    {
        id: 7,
        name: "مانجو تومي",
        category: "mango",
        image: "images/mango-tomy.jpg",
        description: "مانجو تومي تعبئة 4.5 كيلو، لون مميز، طعم رائع.",
        weight: "4.5 كيلو",
        packaging: "كرتونة معزولة",
        exportTo: ["أوروبا", "دول عربية"],
        price: "سعر الجملة",
        rating: 5,
        features: ["لون مميز", "طعم رائع", "جودة تصدير"]
    },
    {
        id: 8,
        name: "مانجو كيت",
        category: "mango",
        image: "images/mango-kit.jpg",
        description: "مانجو كيت تعبئة 4.5 كيلو، قشرة رقيقة، لب سميك.",
        weight: "4.5 كيلو",
        packaging: "كرتونة معزولة",
        exportTo: ["أوروبا", "دول عربية"],
        price: "سعر الجملة",
        rating: 5,
        features: ["قشرة رقيقة", "لب سميك", "جودة عالية"]
    },
    {
        id: 9,
        name: "رمان وندر فل",
        category: "other",
        image: "images/rm.jpg",
        description: "رمان وندر فل صادرات لدول أوروبية، حبات كبيرة، حلو المذاق.",
        weight: "5 كيلو",
        packaging: "صناديق خشبية",
        exportTo: ["أوروبا"],
        price: "سعر الجملة",
        rating: 5,
        features: ["حبات كبيرة", "حلو المذاق", "جودة تصدير"]
    },
    {
        id: 10,
        name: "فراولة",
        category: "other",
        image: "images/strawberry.jpg",
        description: "فراولة تعبئة 4 كيلو دول أوروبية، طازجة، غنية بمضادات الأكسدة.",
        weight: "4 كيلو",
        packaging: "صناديق تبريد",
        exportTo: ["أوروبا"],
        price: "سعر الجملة",
        rating: 5,
        features: ["طازجة", "غنية بمضادات الأكسدة", "مبردة"]
    },
    {
        id: 11,
        name: "بلح برحي",
        category: "other",
        image: "images/pl.jpg",
        description: "بلح برحي تعبئة 5 كيلو، طازج، حلو بشكل طبيعي.",
        weight: "5 كيلو",
        packaging: "صناديق خاصة",
        exportTo: ["دول عربية"],
        price: "سعر الجملة",
        rating: 5,
        features: ["طازج", "حلو طبيعي", "جودة عالية"]
    },
    {
        id: 12,
        name: "تين برشومي",
        category: "other",
        image: "images/ten.jpg",
        description: "تين برشومي تعبئة 2 كيلو، طازج، غني بالألياف.",
        weight: "2 كيلو",
        packaging: "صناديق صغيرة",
        exportTo: ["أوروبا", "دول عربية"],
        price: "سعر الجملة",
        rating: 5,
        features: ["طازج", "غني بالألياف", "صحي"]
    },
        {
        id: 13,
        name: "جوافة تعبئة",
        category: "guava",
        image: "images/gone.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، تعبئة 2.5 كيلو.",
        weight: "2.5 كيلو",
        packaging: "كرتونة معزولة",
        exportTo: ["أوروبا,كندا وألمانيا والسويدي و فرنسا ", "دول عربية"],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 14,
        name: "جوافة تعبئة",
        category: "guava",
        image: "images/gone.jpg",
        description: "جودة عالية للتصدير، طعم مميز، صندوق، تعبئة 2.5 كيلو.",
        weight: "2.5 كيلو",
        packaging: "صندوق بلاستيك",
        exportTo: [" دول عربية ، السعوديه ، الاردن ، الكويت ، عمان "],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 15,
        name: "جوافة تعبئة",
        category: "guava",
        image: "images/gthree.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، تعبئة 2.5 كيلو.",
        weight: "1.75 كيلو",
        packaging: "...",
        exportTo: [ " دول عربية ، السعوديه، الكويت ، البحرين ، عمان ، دبي "],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 16,
        name: "قشطة عبد الرازق",
        category: "other",
        image: "images/kshone.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، تعبئة 2.5 كيلو.",
        weight: " كيلو 4.5  ، 5 كيلو",
        packaging: "كرتونة معزولة",
        exportTo: [" تصدير"],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 17,
        name: "ليمون بنهيز",
        category: "lemon",
        image: "images/lame.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، تعبئة 5.5 كيلو.",
        weight: "5.5 كيلو",
        packaging: "...",
        exportTo: [" دول عربية"],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 18,
        name: "مانجو عويس ",
        category: "mango",
        image: "images/mango2.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، تعبئة 3 كيلو.",
        weight: "3 كيلو",
        packaging: "...",
        exportTo: [" دول أوروبية"],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 19,
        name: "مانجو صدر اليمامة",
        category: "mango",
        image: "images/yamama.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، تعبئة 3.5 كيلو.",
        weight: "3.5 كيلو",
        packaging: "...",
        exportTo: ["دول أوروبية ودول عربية"],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 20,
        name: "بطاطا حلوة ",
        category: "other",
        image: "images/patata.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، تعبئة 4 كيلو.",
        weight: "4 كيلو",
        packaging: "...",
        exportTo: ["دول أوروبية ودول عربية"],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 21,
        name: "خوخ فلوريدا",
        category: "peach",
        image: "images/peach-ph.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، تعبئة 4 كيلو.",
        weight: "4 كيلو",
        packaging: "...",
        exportTo: [" دول عربية و أوروبية"],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 22,
        name: "شالنطية اساور",
        category: "other",
        image: "images/shalante.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، تعبئة  .",
        weight: "...",
        packaging: "...",
        exportTo: [" دول عربية و أوروبية"],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 23,
        name: "مانجو فص",
        category: "mango",
        image: "images/mango3.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، تعبئة 2.5 كيلو.",
        weight: "2.5 كيلو",
        packaging: "...",
        exportTo: [" تصدير "],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 24,
        name: "مانجو زبدية",
        category: "mango",
        image: "images/mango4.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، تعبئة 4.5 كيلو.",
        weight: "4.5 كيلو",
        packaging: "...",
        exportTo: [" تصدير "],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 25,
        name: "مانجو نعومي",
        category: "mango",
        image: "images/mango6.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، تعبئة 4.5 كيلو.",
        weight: "4.5 كيلو",
        packaging: "...",
        exportTo: [" تصدير "],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 26,
        name: "بسلة ماستر",
        category: "other",
        image: "images/ps.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، تعبئة 5 كيلو.",
        weight: "5 كيلو",
        packaging: "...",
        exportTo: [" تصدير دول عربية وأوروبية"],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 27,
        name: "ثوم",
        category: "other",
        image: "images/thom.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، تعبئة 3.5 كيلو.",
        weight: "3.5 كيلو",
        packaging: "...",
        exportTo: [" تصدير "],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 28,
        name: "كاكا",
        category: "other",
        image: "images/kaka1.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، تعبئة 1.75 كيلو.",
        weight: "1.75 كيلو",
        packaging: "...",
        exportTo: [" تصدير "],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 29,
        name: "كاكا",
        category: "other",
        image: "images/kaka.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، تعبئة 2 كيلو.",
        weight: "2 كيلو",
        packaging: "...",
        exportTo: [" تصدير "],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 30,
        name: "خوخ",
        category: "peach",
        image: "images/khokh.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، تعبئة 4 كيلو.",
        weight: "وزن البانت 1 كيلو ",
        packaging: "...",
        exportTo: [" تصدير "],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 31,
        name: "دراجون فروت",
        category: "other",
        image: "images/dragon.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، تعبئة 3 كيلو.",
        weight: "3 كيلو",
        packaging: "...",
        exportTo: [" تصدير دول عربية و أوروبية"],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 32,
        name: "كنتلوب جولتستون",
        category: "other",
        image: "images/ananas.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، تعبئة 5 كيلو.",
        weight: "5 كيلو",
        packaging: "...",
        exportTo: [" تصدير "],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },
    {
        id: 33,
        name: "خيار",
        category: "other",
        image: "images/khy.jpg",
        description: "جودة عالية للتصدير، طعم مميز، لون جذاب، تعبئة 4 كيلو.",
        weight: "4 كيلو",
        packaging: "...",
        exportTo: [" تصدير دول عربية و أوروبية"],
        price: "سعر الجملة",
        rating: 5,
        features: ["جودة عالية", "صلاحية طويلة", "مغلفة بعناية"]
    },



];

// Render Products
function renderProducts(products) {
    const container = document.getElementById('productsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    products.forEach(product => {
        const stars = '★'.repeat(product.rating);
        const exportText = Array.isArray(product.exportTo) ? product.exportTo.join('، ') : product.exportTo;
        
        const productCard = `
            <div class="market-product-card" data-category="${product.category}">
                <div class="market-product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="product-overlay">
                        <div class="overlay-buttons">
                            <button class="btn btn-primary" onclick="showProductDetails(${product.id})">
                                <i class="fas fa-eye"></i> تفاصيل
                            </button>
                            <button class="btn btn-secondary" onclick="contactAboutProduct('${product.name}')">
                                <i class="fas fa-phone-alt"></i> استفسر
                            </button>
                        </div>
                    </div>
                </div>
                <div class="market-product-info">
                    <h3 class="market-product-title">${product.name}</h3>
                    <p class="market-product-description">${product.description}</p>
                    
                    <div class="product-specs">
                        <div class="spec">
                            <span class="spec-label">الوزن:</span>
                            <span class="spec-value">${product.weight}</span>
                        </div>
                        <div class="spec">
                            <span class="spec-label">التعبئة:</span>
                            <span class="spec-value">${product.packaging}</span>
                        </div>
                        <div class="spec">
                            <span class="spec-label">التقييم:</span>
                            <span class="spec-value">
                                <span class="star-rating">${stars}</span> (${product.rating}.0)
                            </span>
                        </div>
                    </div>
                    
                    <div class="product-actions">
                        <span class="product-price">${product.price}</span>
                        <span class="product-export">${exportText}</span>
                    </div>
                </div>
            </div>
        `;
        
        container.innerHTML += productCard;
    });
}

// Filter Products
function filterProducts(category) {
    if (category === 'all') {
        renderProducts(productsData);
    } else {
        const filteredProducts = productsData.filter(product => product.category === category);
        renderProducts(filteredProducts);
    }
}

// Search Products
function searchProducts(query) {
    const searchTerm = query.toLowerCase();
    const filteredProducts = productsData.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
}

// Sort Products
function sortProducts(criteria) {
    let sortedProducts = [...productsData];
    
    switch(criteria) {
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name, 'ar'));
            break;
        case 'rating':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
        default:
            // Default sorting (by ID)
            sortedProducts.sort((a, b) => a.id - b.id);
    }
    
    renderProducts(sortedProducts);
}

// Show Product Details
function showProductDetails(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const modalContent = `
        <div class="product-details-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${product.name}</h3>
                    <button class="modal-close" onclick="closeModal()">×</button>
                </div>
                <div class="modal-body">
                    <div class="modal-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="modal-info">
                        <p><strong>الوصف:</strong> ${product.description}</p>
                        <p><strong>الوزن:</strong> ${product.weight}</p>
                        <p><strong>التعبئة:</strong> ${product.packaging}</p>
                        <p><strong>دول التصدير:</strong> ${Array.isArray(product.exportTo) ? product.exportTo.join('، ') : product.exportTo}</p>
                        <p><strong>المميزات:</strong> ${product.features.join('، ')}</p>
                        <div class="modal-rating">
                            <strong>التقييم:</strong>
                            <span class="star-rating">${'★'.repeat(product.rating)}</span>
                            <span>(${product.rating}.0)</span>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" onclick="contactAboutProduct('${product.name}')">
                        <i class="fas fa-phone-alt"></i> اتصل للاستفسار
                    </button>
                </div>
            </div>
        </div>
    `;
    
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalContent;
    document.body.appendChild(modalContainer.firstElementChild);
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    const modal = document.querySelector('.product-details-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Contact About Product
function contactAboutProduct(productName) {
    const phoneNumber = '01026141639';
    const message = `أريد الاستفسار عن منتج: ${productName}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// Initialize Products Page
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    renderProducts(productsData);
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter products
            const filter = this.dataset.filter;
            filterProducts(filter);
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchProducts(this.value);
        });
    }
    
    // Sort functionality
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortProducts(this.value);
        });
    }
    
    // Close modal when clicking outside
    document.addEventListener('click', (e) => {
        const modal = document.querySelector('.product-details-modal');
        if (modal && e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});


