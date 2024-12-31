// app.js

window.onload = () => {
    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.getElementById('products-container');
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>Preço: R$ ${product.price.toFixed(2)}</p>
                `;
                productsContainer.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Erro ao carregar produtos:', error));
};

