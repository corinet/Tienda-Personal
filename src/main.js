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

    // Modal Logic
    const modal = document.getElementById('product-modal');
    const modalClose = document.querySelector('.modal-close');
    const productCards = document.querySelectorAll('.product-card');

    const modalMainImg = document.getElementById('modal-main-img');
    const modalThumbnails = document.querySelector('.modal-thumbnails');
    const modalTitle = document.getElementById('modal-title');
    const modalOldPrice = document.getElementById('modal-old-price');
    const modalPrice = document.getElementById('modal-price');
    const modalInstallments = document.getElementById('modal-installments');
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

            // Populate modal
            modalMainImg.src = imgSrc;
            modalTitle.textContent = title;
            modalOldPrice.textContent = oldPrice;
            modalPrice.textContent = price;
            modalInstallments.textContent = installments;

            // Setup thumbnails (mocking multiple images)
            modalThumbnails.innerHTML = '';
            for (let i = 0; i < 3; i++) {
                const thumb = document.createElement('img');
                thumb.src = imgSrc;
                if (i === 0) thumb.classList.add('active');
                
                thumb.addEventListener('click', () => {
                    document.querySelectorAll('.modal-thumbnails img').forEach(img => img.classList.remove('active'));
                    thumb.classList.add('active');
                    modalMainImg.src = thumb.src;
                });
                modalThumbnails.appendChild(thumb);
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

            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close modal
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});
