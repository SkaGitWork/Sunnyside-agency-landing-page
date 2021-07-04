// Change src path
var images = document.getElementsByTagName("img");
function change_path(from, to) {
  for (let i = 0; i < images.length; i++) {
    const element = images[i];

    if (element.src.includes(from)) {
      element.src = element.src.replace(from, to);
    }
  }
}
var user_width;
// Switch between mobile and desktop images
function reportWindowSize() {
  user_width = document.documentElement.clientWidth;
  if (user_width <= 376) {
    change_path("desktop", "mobile");
  } else {
    change_path("mobile", "desktop");
  }
}
window.onresize = reportWindowSize;

// First check
user_width = document.documentElement.clientWidth;
reportWindowSize();
