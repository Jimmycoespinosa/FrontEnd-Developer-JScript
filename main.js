// Duplicar linea: CTRL+Alt+Abajo
// Eliminar línea: Shift+Suprim
// Comentar código: CTRL+K seguido CTRL+C
// Código comillas simples: Alt+39
// Mueve línea a otra parte: Alt
// Colapse Bloques: CTRL+K seguido CTLS+0
// Despliega Bloques: CTRL+K seguido CTRL+J

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const openProductDetailContainer = document.querySelector('#productDetail');
const produtDetailCloseIcon = document.querySelector('.product-detail-close');
const darken = document.querySelector('.darken');
const shoppingCartTitle = document.querySelector('.title-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
produtDetailCloseIcon.addEventListener('click', closeProductDetailAside);
darken.addEventListener('click', closeMenus);
shoppingCartTitle.addEventListener('click', toggleCartAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');

    const isMenuOpen = !desktopMenu.classList.contains('inactive');
    if(isMenuOpen)
        darken.classList.remove('inactive');
    else
        darken.classList.add('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.toggle('inactive');
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');

    const isMenuOpen = !desktopMenu.classList.contains('inactive');
    if(isMenuOpen)
        darken.classList.remove('inactive');
    else
        darken.classList.add('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.toggle('inactive');
    }

    const isProductDetailClosed = openProductDetailContainer.classList.contains('inactive');
    if(!isProductDetailClosed){
        openProductDetailContainer.classList.toggle('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');

    const isMenuOpen = !desktopMenu.classList.contains('inactive');
    if(isMenuOpen){
        darken.classList.remove('inactive');
        desktopMenu.classList.add('inactive');
    }
    else{
        darken.classList.add('inactive');        
    }
}

function toggleCartAside(){
    mobileMenu.classList.add('inactive');
    openProductDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');

    const isMenuOpen = !shoppingCartContainer.classList.contains('inactive');
    if(isMenuOpen)
        darken.classList.remove('inactive');
    else
        darken.classList.add('inactive');
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    openProductDetailContainer.classList.remove('inactive');
    darken.classList.remove('inactive');
}

function closeProductDetailAside(){
    openProductDetailContainer.classList.add('inactive');
    darken.classList.add('inactive');
    console.log("Cierra correctamente!");
}

function closeMenus()
{
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isCartAsideOpen = !shoppingCartContainer.classList.contains('inactive');
    const isProductDetailOpen = !openProductDetailContainer.classList.contains('inactive');

    if (isDesktopMenuOpen)
    {        
        toggleDesktopMenu();
        darken.classList.add('inactive');
        return;
    }
    darken.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Laptop',
    price: 620,
    image: 'https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Smart Tv',
    price: 720,
    image: 'https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function renderProducts(arr){
// <section class="main-container">
// <div class="cards-container">
//     <div class="product-card">
//         <img src="https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
//         <div class="product-info">
//             <div>
//                 <p>120,00</p>
//                 <p>Bike</p>
//             </div>                    
//             <figure>
//                 <img src="./icons/bt_add_to_cart.svg" alt="">
//             </figure>
//         </div>                
//     </div>
// </section>
    console.log("entró!!");
    for(product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
