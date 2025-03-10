// Navbar
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const searchContainer = document.querySelector(".search-container");
    const searchBtn = document.querySelector(".search-btn");
    const searchInput = document.querySelector(".search-input");
  
    // Hamburger menu toggle with animation
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  
    // Search bar animation
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault()
      searchContainer.classList.toggle("active")
      if (searchContainer.classList.contains("active")) {
        searchInput.focus()
      }
    })
  
    // Close search bar when clicking outside
    document.addEventListener("click", (e) => {
      if (!searchContainer.contains(e.target) && searchContainer.classList.contains("active")) {
        searchContainer.classList.remove("active")
      }
    })
  
    // Prevent search bar from closing when clicking inside
    searchContainer.addEventListener("click", (e) => {
      e.stopPropagation()
    })
  
    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      const dropdowns = document.querySelectorAll(".dropdown")
      dropdowns.forEach((dropdown) => {
        if (!dropdown.contains(e.target)) {
          dropdown.querySelector(".dropdown-content").style.display = "none"
        }
      })
    })
  
    // Toggle dropdown on click (for touch devices)
    const dropdownLinks = document.querySelectorAll(".dropdown > a")
    dropdownLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const dropdownContent = link.nextElementSibling
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block"
      })
    })
  })