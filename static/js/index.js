window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {

  var video = document.getElementById("diffusion");
  video.playbackRate = 0.25;
  video.play();

})

function updateResultVideo() {
  var combination = document.getElementById("single-menu-replay").value;

  var table1 = document.getElementById("result-table");
  table1.setAttribute("w3-include-html", "results-"+combination+".html");

  includeHTML();

  var video = document.getElementById("result-video");
  video.playbackRate = 0.5;
  video.play();
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    // console.log(elmnt.getAttribute("w3-include-html"))
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      console.log('includeHTML.file', file)
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
