// functions
function makeMenuItem(data) {
    let result =
        `<div class="w3-row my-flex-center">
        <div class="w3-col" style="width:325px">
          <div class="w3-center">
            <img class="w3-center" src="${data.image}" height="200px" alt="">
          </div>
        </div>
        <div class="w3-rest" style="width: 100%;">
          <div>
            <div><b>${data.pizza}</b> <span class="w3-right w3-tag w3-dark-grey w3-round">${data.price}</span></div>
            <div><span class="w3-text-grey w3-xlarge my-bold">${data.ingredients}</span></div>
          </div>
        </div>
      </div>
      <hr>`

    return result
}

function addMenuItem(id, text) {
    let container = document.getElementById(id)
    container.innerHTML += text
}

// Tabbed Menu
function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" my-orange", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " my-orange";
}