var i = 0;
var images = [
  "images/header-0.jpg",
  "images/header-1.jpg",
  "images/header-2.png",
];

function startSlideShow() {
  document.getElementById("item-2").src = images[i];

  if (i < images.length - 1) i++;
  else i = 0;

  setTimeout(startSlideShow, 3000);
}

var imagesFooter = [
  "images/footer-0.jpg",
  "images/footer-1.jpg",
  "images/footer-2.jpg",
];

function startSlideShowTwo() {
  document.getElementById("item-6").src = imagesFooter[i];

  if (i < images.length - 1) i++;
  else i = 0;

  setTimeout(startSlideShowTwo, 3000);
}

////////////////////////////////////

var email = location.search.slice(1).split("&")[0].split("=")[1];
var modifiedEmail = email.replace(/%40/g, "@");

document.getElementById("email").innerHTML = "Welcome " + modifiedEmail;
document.getElementById("logout").innerHTML = "Log out";
document.getElementById("login").innerHTML = "";
document.getElementById("register").innerHTML = "";
