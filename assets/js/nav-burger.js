function nav_burger() {
  let x = document.getElementById("nav-bar");
  if (x.className === "nav") {
    x.className += " mobile-nav";
  } else {
    x.className = "nav-bar";
  }
}
