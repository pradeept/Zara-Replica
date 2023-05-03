const nav = ()=>{
    return ` 
<nav>
            <i class="fa-solid fa-bars bars nav-white" style="color: #414141; margin: 0.5rem 2rem 3rem 1rem;" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"></i>
            <h1><a href="/" class="anchor">GAARA</a></h1>
            <div class="nav-right nav-white">
                <a href="" class="nav-white search-container"><button type="text" class="search-bar nav-white" ><u class="nav-white"> Search &nbsp; &nbsp; &nbsp; &nbsp;</u><i class="fa-solid fa-magnifying-glass"></i></button></a>
                <button class="nav-white login">Login</button>
                <button class="nav-white help">Help</button>
                <button class="nav-white credits">Credits</button>
                <button class="nav-white"><a href="cart.html" class="anchor"><i class="fa-sharp fa-solid fa-bag-shopping"></i></a></button>
            </div>
        </nav>
<div class="offcanvas offcanvas-start " data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
            <div class="cat-container">
                <button><a href='/Collections/womanB.html' class='anchor'>Woman</a></button>
                <button><a href='/Collections/man.html' class='anchor'>Man</a></button>
                <button>Kids</button>
                <button>Beauty</button>
            </div>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="cloth-cat">
              <li><a href="/womanB.html">BEST SELLERS</a></li>
              <li><a href="/womens-shirts.html">SHIRTS</a></li>
              <li>T-SHIRTS|SWEATSHIRTS </li>
              <li>BASICS</li>
              <li>TROUSERS</li>
              <li>JEANS</li>
              <li>SUITS</li>
              <li>BLAZERS</li>
          </ul>
        </div>
      </div>
`
}

export default nav;