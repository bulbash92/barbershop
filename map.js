let mapLinks = document.querySelectorAll(".contacts-button-map");
let mapPopup = document.querySelector(".modal-map");
let mapClose = mapPopup.querySelector(".modal-close");

mapLinks.forEach(function (link) {
    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.classList.add("modal-show");
    
    });
});

for (let i=0; i<mapLinks.length; i++) {
    let link = mapLinks[i];
    link.addEventListener("click", function(evt){
        evt.preventDefault();
        mapPopup.classList.add("modal-show");
    });
};

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
   
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
           
        }
    }
});