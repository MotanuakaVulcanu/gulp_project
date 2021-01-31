
function testWebP(callback) {
    var webP = new Image(); webP.onload = webP.onerror = function () { callback(webP.height == 2); }; webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    
    }
    
    testWebP(function (support) {
    if (support == true) { document.querySelector('body').classList.add('webp'); }else{ document.querySelector('body').classList.add('no-webp'); }
    
    });
    
function dropdown(){
    let button = document.querySelector('.bubu').offsetWidth;
    let dropdownb = document.querySelector('.dropdownb');
    let left_drag_menu = document.querySelector('.left_drag_menu');
    dropdownb.style.height = button/2 + "px";
    dropdownb.addEventListener('click', function(event){
        dropdownb.classList.toggle('selected');
        left_drag_menu.classList.toggle('show');
    });
}
dropdown();