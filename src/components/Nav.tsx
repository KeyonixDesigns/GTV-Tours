import "./Nav.css";
import HomeNavLogo from "../assets/Images/GV_Final_BLACK_CIrcle_withoutBG.png"

function HomeNav() {
  return (
    <>
    <header className="navbar">
        <div className="navbar-container">
            <div className="logo">
                <a href="/index.html"><img src={HomeNavLogo} alt="" /></a>
            </div>
            <nav className="nav-links">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="/public/views/packages.html">Packages</a></li>
                    {/* <!-- <li className="dropdown">
                        <a href="#products">Products</a>
                        <ul className="dropdown-content">
                            <li><a href="/public/views/packages.html"></a>All Packages</li>
                            <div className="dom">
                                <li><a href="#product1">Product 1</a></li>
                                <li><a href="#product2">Product 2</a></li>
                                <li><a href="#product3">Product 3</a></li>
                                <li><a href="#product4">Product 4</a></li>
                            </div>
                            
                            <div className="int">
                                <li><a href="#product5">Product 5</a></li>
                                <li><a href="#product6">Product 6</a></li>
                                <li><a href="#product7">Product 7</a></li>
                                <li><a href="#product8">Product 8</a></li>
                            </div>
                        </ul>
                    </li> --> */}
                    <li><a href="#packages">Popular</a></li>
                    <li><a href="/public/views/blog.html">Blogs</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search..." />
                <button className="search-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="24" y1="26" x2="16.65" y2="16.65"></line>
                    </svg>
                </button>
            </div>
            <button className="hamburger">
                <svg width="30" height="30" viewBox="0 0 100 100">
                    <rect width="80" height="10" x="10" y="25" rx="5" fill="#e9ebed"></rect>
                    <rect width="80" height="10" x="10" y="45" rx="5" fill="#e9ebed"></rect>
                    <rect width="80" height="10" x="10" y="65" rx="5" fill="#e9ebed"></rect>
                </svg>
            </button>

            <button className="cross-button">
                <svg width="30" height="30" viewBox="0 0 100 100">
                  <line x1="20" y1="20" x2="80" y2="80" stroke="#e9ebed" strokeWidth="10" strokeLinecap="round" />
                  <line x1="80" y1="20" x2="20" y2="80" stroke="#e9ebed" strokeWidth="10" strokeLinecap="round" />
                </svg>
            </button>
        </div>
    </header>

    <script src="../script.jsx"></script>
    </>
  );
}

export default HomeNav;