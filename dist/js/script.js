
function testWebP(callback) {
    var webP = new Image(); webP.onload = webP.onerror = function () { callback(webP.height == 2); }; webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    
    }
    
    testWebP(function (support) {
    if (support == true) { document.querySelector('body').classList.add('webp'); }else{ document.querySelector('body').classList.add('no-webp'); }
    
    });
    
function dropdown(){
    let button = document.querySelector('.bubu').offsetWidth,
        dropdownb = document.querySelector('.dropdownb'),
        left_drag_menu = document.querySelector('.left_drag_menu'),
        home = document.querySelector('.home'),
        bitcoin = document.querySelector('.blockchain'),
        home_content = document.querySelector('.home_content'),
        blockchain_content = document.querySelector('.blockchain_content'),
        sites_content = document.querySelector('.sites_content'),
        sites = document.querySelector('.Sites');

    home.addEventListener('click', function(event){
        home_content.classList.toggle('hidding')
        home.classList.toggle('choosen');
        if(bitcoin.classList.contains('choosen')){
            bitcoin.classList.toggle('choosen');
            blockchain_content.classList.toggle('hidding')
            
        }    
        if(sites.classList.contains('choosen')){
            sites.classList.toggle('choosen');
            sites_content.classList.toggle('hidding');
        }
    })
    bitcoin.addEventListener('click', function(event){
        blockchain_content.classList.toggle('hidding')   
        bitcoin.classList.toggle('choosen');
        if(home.classList.contains('choosen')){
            home.classList.toggle('choosen');
            home_content.classList.toggle('hidding')

        }
        if(sites.classList.contains('choosen')){
            sites.classList.toggle('choosen');
            sites_content.classList.toggle('hidding');
        }
    })
    sites.addEventListener('click', function(event){
        sites_content.classList.toggle('hidding');
        sites.classList.toggle('choosen');
        if(home.classList.contains('choosen')){
            home.classList.toggle('choosen');
            home_content.classList.toggle('hidding')

        }
        if(bitcoin.classList.contains('choosen')){
            bitcoin.classList.toggle('choosen');
            blockchain_content.classList.toggle('hidding')
            
        }  
    })



    dropdownb.style.height = button/2 + "px";
    dropdownb.addEventListener('click', function(event){
        dropdownb.classList.toggle('selected');
        left_drag_menu.classList.toggle('show');
    });
}
dropdown();