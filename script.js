// Toogle class active
const navbarNav = document.querySelector(".navbar-nav");
// Hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar Sidebar menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Klik disini untuk menghubungkan ke WA Beli Sekarang

document.querySelector(".btnDetail").onclick = () => {
  const nohp = "6281314993742";
  let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Saya ingin pesan Chicken Steak ini`;

  document.querySelector(".btnDetail").href = pesan;
};

// Klik untuk menghubungkan ke Email
