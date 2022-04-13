/*** Trax file ****/

function inclusion() {
  var loppastructuringconstructtoevolvoluation, inclusiveconclusiondelebreate, elementconstructselect, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  loppastructuringconstructtoevolvoluation = document.getElementsByTagName("*");
  for (inclusiveconclusiondelebreate = 0; inclusiveconclusiondelebreate < loppastructuringconstructtoevolvoluation.length; inclusiveconclusiondelebreate++) {
    elementconstructselect = loppastructuringconstructtoevolvoluation[inclusiveconclusiondelebreate];
    /*search for elements with a certain atrribute:*/
    file = elementconstructselect.getAttribute("trax-include");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elementconstructselect.innerHTML = this.responseText;}
          if (this.status == 404) {elementconstructselect.innerHTML = "Page not found."; console.log("You tried adding a page that is not found.")}
          /* Remove the attribute, and call this function once more: */
          elementconstructselect.removeAttribute("trax-include");
          inclusion();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
