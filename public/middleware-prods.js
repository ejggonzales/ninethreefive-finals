fetch('/api/productslist')
    .then(response => response.json())
    .then(products => {
        console.log(products);
        const productdivs = document.getElementsByClassName('api-prod');


        products.forEach((product, index) => {
            const productdiv = productdivs[index % productdivs.length];
                const item = 
                `<h5 class="card-title item-name">${product.productname}</h5>
                <p class="price mb-1 item-price">Php ${product.price}</p>`;

                productdiv.insertAdjacentHTML('beforeend', item);

            })
        })
    .catch(error => console.log('Error fetching products.', error));
