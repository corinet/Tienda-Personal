document.addEventListener('DOMContentLoaded', () => {
    // Carousel Logic
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(container => {
        const track = container.querySelector('.carousel-track');
        const prevBtn = container.querySelector('.carousel-prev');
        const nextBtn = container.querySelector('.carousel-next');
        
        if (!track || !prevBtn || !nextBtn) return;
        
        const scrollAmount = 280; // Width of card + gap approx
        
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        
        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    });

    // View Switching Logic
    const landingView = document.getElementById('landing-view');
    const productView = document.getElementById('product-view');
    const backToStoreBtn = document.getElementById('back-to-store');
    const breadcrumbProductName = document.getElementById('breadcrumb-product-name');
    const productCards = document.querySelectorAll('.product-card');

    const detailMainImg = document.getElementById('detail-main-img');
    const detailThumbnails = document.querySelector('.product-thumbnails');
    const detailTitle = document.getElementById('detail-title');
    const detailOldPrice = document.getElementById('detail-old-price');
    const detailPrice = document.getElementById('detail-price');
    const detailInstallments = document.getElementById('detail-installments');
    const colorOptions = document.querySelector('.color-options');
    const selectedColorName = document.getElementById('selected-color-name');

    // Mock colors for products
    const mockColors = [
        { name: 'Negro', hex: '#000000' },
        { name: 'Blanco', hex: '#FFFFFF' },
        { name: 'Azul', hex: '#1976D2' },
        { name: 'Gris', hex: '#9E9E9E' }
    ];

    productCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            // Extract data from card
            const imgSrc = card.querySelector('.product-image').src;
            const title = card.querySelector('.product-title').textContent;
            const oldPrice = card.querySelector('.product-old-price')?.textContent || '';
            const price = card.querySelector('.product-price').textContent;
            const installments = card.querySelector('.product-installments').textContent;

            // Populate product view
            breadcrumbProductName.textContent = title;
            detailMainImg.src = imgSrc;
            detailTitle.textContent = title;
            detailOldPrice.textContent = oldPrice;
            detailPrice.textContent = price;
            detailInstallments.textContent = installments;

            // Setup thumbnails (mocking multiple images)
            detailThumbnails.innerHTML = '';
            for (let i = 0; i < 3; i++) {
                const thumb = document.createElement('img');
                thumb.src = imgSrc;
                if (i === 0) thumb.classList.add('active');
                
                thumb.addEventListener('click', () => {
                    document.querySelectorAll('.product-thumbnails img').forEach(img => img.classList.remove('active'));
                    thumb.classList.add('active');
                    detailMainImg.src = thumb.src;
                });
                detailThumbnails.appendChild(thumb);
            }

            // Setup colors
            colorOptions.innerHTML = '';
            // Pick 2 random colors for this product
            const productColors = mockColors.slice(0, 2 + Math.floor(Math.random() * 2));
            selectedColorName.textContent = productColors[0].name;

            productColors.forEach((color, index) => {
                const colorBtn = document.createElement('div');
                colorBtn.classList.add('color-btn');
                if (index === 0) colorBtn.classList.add('active');
                colorBtn.style.backgroundColor = color.hex;
                
                colorBtn.addEventListener('click', () => {
                    document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('active'));
                    colorBtn.classList.add('active');
                    selectedColorName.textContent = color.name;
                });
                
                colorOptions.appendChild(colorBtn);
            });

            // Switch views
            landingView.style.display = 'none';
            productView.style.display = 'block';
            window.scrollTo(0, 0);
        });
    });

    // Back to store logic
    backToStoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        productView.style.display = 'none';
        landingView.style.display = 'block';
        window.scrollTo(0, 0);
    });
});
