// Enable tabs for Skeleton, With a little help from w3schools:
//
//  https://www.w3schools.com/w3css/w3css_tabulators.asp
//
function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tab-color", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " tab-color";
}
