chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse) {
  //Checks to see if the allPage button was pressed
  if (request.allPage) {
    var elements = document.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = request.color[0];
      elements[i].style.color = request.color[1];
    }
  }
  else //otherwise, we know that the start button was used pressed instead
  {
    document.addEventListener("click", function(event) {
      let selEle; //the selected element
      selEle = event.target;
      selEle.style["background-color"] = request.color[0];
      selEle.style.color = request.color[1];
    });
  }
}
