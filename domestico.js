document.addEventListener('DOMContentLoaded', () => {
    const productListings = document.getElementById('product-list');
    const cartCountSpan = document.getElementById('cart-count');
    let cartCount = 0;

    // Sample product data
    const products = [
        {
            id: 1,
            name: 'Refrigerador LG InstaView',
            price: 1299.99,
            image: 'https://i.ibb.co/fY64kFwr/146162-15.webp',
            description: 'Refrigerador inteligente con puerta InstaView Door-in-Door.'
        },
        {
            id: 2,
            name: 'Smart TV Samsung QLED 65"',
            price: 999.00,
            image: 'https://i.ibb.co/WpYRwSBc/D-NQ-NP-732637-MLU77879597162-082024-O.webp',
            description: 'Experiencia visual inmersiva con colores vibrantes.'
        },
        {
            id: 3,
            name: 'Lavadora Whirlpool Carga Frontal',
            price: 749.50,
            image: 'https://i.ibb.co/JWZzx3nW/MZ-01-4.webp" ',
            description: 'Tecnología 6th Sense para un lavado eficiente.'
        },
        {
            id: 4,
            name: 'Horno Eléctrico Bosch',
            price: 599.99,
            image: 'https://i.ibb.co/KpdkzYvQ/images.jpg',
            description: 'Cocina tus platos favoritos con precisión y estilo.'
        },
        {
            id: 5,
            name: 'Aspiradora Dyson V11',
            price: 499.00,
            image: 'https://i.ibb.co/pBJq0sLV/457286.webp',
            description: 'Potente y versátil para una limpieza profunda.'
        },
        {
            id: 6,
            name: 'Licuadora LG',
            price: 189.00,
            image: 'https://i.ibb.co/hFpykQ2n/image-Url-1.webp',
            description: 'Disfruta de buenos alimentos nutritivos de calidad profesional en casa.'
        }
    ];

    // Function to display products
    function displayProducts() {
        if (productListings) {
            productListings.innerHTML = ''; // Clear existing content
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="description">${product.description}</p>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <button class="btn add-to-cart" data-id="${product.id}">Agregar al Carrito</button>
                `;
                productListings.appendChild(productCard);
            });

            // Add event listeners to "Add to Cart" buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', addToCart);
            });
        }
    }

    // Function to add item to cart
    function addToCart(event) {
        cartCount++;
        if (cartCountSpan) {
            cartCountSpan.textContent = cartCount;
        }
        const productId = event.target.dataset.id;
        const productName = products.find(p => p.id == productId).name;
        alert(`${productName} ha sido añadido al carrito!`);
        // In a real application, you'd store this in localStorage or send to a backend
    }

    // Initial display of products
    displayProducts();

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});