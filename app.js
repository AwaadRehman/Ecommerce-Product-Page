let dropdownEl = document.querySelector('.dropdown')
let dropdownMenuEl = document.querySelector('.dropdown-menu')
let dropdownMenuBody = document.querySelector('.menu-body')
// ****************Dropdown El********************************
let plusbtn = document.querySelector('.plus')
let minusbtn = document.querySelector('.minus')
let cartEl = document.querySelector('.count')
let addToCartEl = document.querySelector('.addtocart')
// *****************Cart counter els*************************
let popupEl = document.querySelector('.popup')
let popupExit = document.querySelector('.popup-x')
let mainimage = document.querySelector('.mainimage')
let thumbnails = document.querySelectorAll('.thumbnails img')
let popupThumbnails = document.querySelectorAll('.popupthumbnails img')
// *******************popup Els ******************************
let menuIcon = document.querySelector('.fa-bars')
let menu = document.querySelector('ul')
let menuXicon = document.querySelector('.menu-x')
// *********************nav icons************************
let arrowLeft = document.querySelector('.arrow-left')
let arrowRight = document.querySelector('.arrow-right')
// slider btns*********************
let slide = 1

arrowRight.addEventListener('click', () => {
    if (slide < 4) {
        slide++
        arrowRight.href = `#mainslide${slide}`
    }
})

arrowLeft.addEventListener('click', () => {
    if (slide > 1) {
        slide--
        arrowLeft.href = `#mainslide${slide}`
    }
})

// ===============================SLIDER=================================================
menuIcon.addEventListener('click', () => {
    menu.classList.add('mobilemenu')
})
menuXicon.addEventListener('click', () => {
    menu.classList.remove('mobilemenu')
    console.log('helo')
})

// for dropdown El **********
dropdownEl.addEventListener('click', () => {
    dropdownMenuEl.classList.toggle('active')
    console.log('heo')
})

window.addEventListener('click', (e) => {
    if (e.target.className != 'cart' && e.target.className != 'addtocart') {
        dropdownMenuEl.classList.remove('active')
    }
})
// ************************** cart counter*****************************************
let cart = 0
let cartPrice = 0
let price = 125
plusbtn.addEventListener('click', () => {
    cart++
    cartPrice += price
    cartEl.innerText = cart
})

minusbtn.addEventListener('click', () => {
    if (cart > 0) {
        cart--
        cartPrice -= price
        cartEl.innerText = cart
    }
})

addToCartEl.addEventListener('click', (e) => {
    console.log(cartPrice)
    if (cart > 0) {
        dropdownMenuBody.innerHTML = `
        <div>
            <img src="ecommerce product assets/image-product-1-thumbnail.jpg" alt="">
                <p class="cartdetail">Fall Limited Edition Sneakers $125.00 x ${cart} <span>$${cartPrice}.00</span></p>
        </div>
                <button class="checkout">Checkout</button>
        `
        dropdownMenuEl.classList.add('active')

    }
    if (cart == 0) {
        dropdownMenuBody.innerHTML
            = `
        <div> <p> Iam Empty </p> </div>
        `
    }
})

// ***********************************Popup*********************************
popupExit.addEventListener('click', () => {
    popupEl.style.display = 'none'
    console.log('hjelo')
})
mainimage.addEventListener('click', () => {
    popupEl.style.display = 'flex'
})

thumbnails.forEach(img => {
    img.addEventListener('click', (e) => {
        popupEl.style.display = 'flex'
        // mainPopupImage.src = e.target.src
    })
})
popupThumbnails.forEach(img => {
    img.addEventListener('click', (e) => {
        popupThumbnails.forEach(popup => {
            if (popup != e.target) {
                popup.classList.remove('popupActive')
            } else {
                popup.classList.add('popupActive')
            }
        })
    })
})