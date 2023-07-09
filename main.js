/*
#####################
- Btn Scroll To Top
#####################
*/
let btnScroll = document.querySelector( '.btn-scroll-top' );
function showBtnScroll() { // Function To Show Btn Scroll Top
    btnScroll.classList.add( 'active' );
}

function hideBtnScroll() { // Function To Hide Btn Scroll Top
    btnScroll.classList.remove( 'active' );
}

window.addEventListener( 'scroll', () => {
    if ( window.scrollY >= 655 ) {
        showBtnScroll();
    } else {
        hideBtnScroll();
    }
} )

function scrollToTop() {
    window.scrollTo( {
        top: 0,
        behavior: 'smooth',
    } )
}

btnScroll.addEventListener( 'click', scrollToTop )
// #####################

/*
#####################
- Part Header
#####################
*/

// #####################
// Select All Elements
let
    navigation = document.querySelector( '.navigation' ),
    iconList = document.querySelector( '.icon-list' ),
    theFormSearch = document.querySelector( '.form-search' ),
    theInputSearch = document.querySelector( '.form-search input' ),
    iconSearch = document.querySelector( '.icon-search' );
// #####################

// #####################
// This Function For Open and Close The Navigation Bar
function showNavigation() {
    navigation.classList.toggle( 'active' );
}

// This Function For Close Only The Navigation Bar!
function CloseNavigation( e ) {
    if ( e.target !== iconList && e.target !== navigation ) {
        if ( navigation.classList.contains( 'active' ) ) {
            navigation.classList.remove( 'active' );
        }
    }
}

// This Function To Stop The Propagation On Elements!
function stopPropagation( e ) {
    e.stopPropagation()
}

navigation.addEventListener( 'click', stopPropagation )

iconList.addEventListener( 'click', showNavigation )
document.addEventListener( 'click', CloseNavigation )
// #####################

// #####################
// This Function For Open and Close The Input Search
function showInput() {
    theFormSearch.classList.toggle( 'active' );
    theInputSearch.classList.toggle( 'active' );
    iconSearch.classList.toggle( 'active' );
}

/*
    This Function For Close Only The Input Search
    When Click Any Where
*/
function closeInput( e ) {
    if ( e.target !== theFormSearch && e.target !== theInputSearch && e.target !== iconSearch ) {
        if ( theFormSearch.classList.contains( 'active' ) && theInputSearch.classList.contains( 'active' ) && iconSearch.classList.contains( 'active' ) ) {
            theFormSearch.classList.remove( 'active' );
            theInputSearch.classList.remove( 'active' );
            iconSearch.classList.remove( 'active' );
        }
    }
}

iconSearch.addEventListener( 'click', showInput )
document.addEventListener( 'click', closeInput )
// #####################

/*
#####################
- Part Landing
#####################
*/
// #####################
// Select All Elements
let
    allImages = document.querySelectorAll( '.landing .container .slider-images img' ),
    bottomBox = document.querySelector( '.bottom-box' );
// #####################

// #####################
// Change Class Active In Images All Three Seconds
let indexStartOne = 1;
let secondsAnimate = 3000;
setInterval( () => {
    if ( indexStartOne === allImages.length ) {
        indexStartOne = 0;
    }
    allImages.forEach( img => {
        img.classList.remove( "active" );
        allImages[indexStartOne].classList.add( 'active' );
    } );
    indexStartOne++
}, secondsAnimate );
// #####################

// #####################
// Create The Pagination!
let
    theListElement = document.createElement( 'ul' ),
    lengthImages = allImages.length;

// Add The Class Pagination To The List
theListElement.className = 'pagination'

// Add The List To The Bottom Box
bottomBox.prepend( theListElement );

// Create All Items
let i = 0;
for ( i; i < lengthImages; i++ ) {
    theListElement.appendChild(
        document.createElement( 'li' )
    )
}

// Add Active Class To First Item
let allItems = document.querySelectorAll( '.pagination li' );
allItems[0].className = 'active'

// Change Class Active In  Items All Three Seconds
let indexStartTow = 1;
setInterval( () => {
    if ( indexStartTow === allImages.length ) {
        indexStartTow = 0;
    }
    allItems.forEach( img => {
        img.classList.remove( "active" );
        allItems[indexStartTow].classList.add( 'active' );
    } );
    indexStartTow++
}, secondsAnimate );
// #####################

// #####################
/*
#####################
- The Part Reveal
#####################
*/
let allReveals = document.querySelectorAll( '.reveal-box' );

function reveal() { // Function To Reveal Elements
    allReveals.forEach( ( reveal ) => {
        if ( reveal.getBoundingClientRect().top < window.innerHeight - 100 ) {
            console.log( reveal )
            reveal.classList.add( 'reveal' )
        } else {
            reveal.classList.remove( 'reveal' )
        }
    } )
}

window.addEventListener( 'scroll', reveal )
// #####################