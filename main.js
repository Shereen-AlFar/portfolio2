
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        });
        li.classList.add('active');
    });
});

const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');
var mainn = document.querySelector("main");
var imgPrudct = document.querySelectorAll(".ch1-p1-ch1 img");
const p_ch1_p1 = document.querySelectorAll(".p-ch1-p1"); 
var fff2 = document.querySelector(".fff");
var ccc = document.querySelector(".ccc")
menuBar.addEventListener('click', function () {
   
   
        sidebar.classList.toggle('hide');
   
    if ( sidebar.classList.contains('hide')) {
        mainn.classList.add('full');
        imgPrudct.forEach((item) => {
            item.classList.add('img-full');
        });

        p_ch1_p1.forEach((item) => {
            item.classList.add('child-full');
        });
        fff2.classList.add("full")
        ccc.classList.add("full")
    } else {
        mainn.classList.remove('full');
        imgPrudct.forEach((item) => {
            item.classList.remove('img-full');
        })
        p_ch1_p1.forEach((item) => {
            item.classList.remove('child-full');
        })
        fff2.classList.remove("ff-full");
    }
});


const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
    if(window.innerWidth < 576) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if(searchForm.classList.contains('show')){
            searchButtonIcon.classList.replace('bx-search' , 'bx-x');
        }else{
            searchButtonIcon.classList.replace('bx-x' , 'bx-search');
        }
    }
});

if(window.innerWidth <= 800) {
    sidebar.classList.add('hide');
    mainn.classList.add('full');
}else if(window.innerWidth > 576){
    searchButtonIcon.classList.replace('bx-x' , 'bx-search');
    searchForm.classList.remove('show');
    mainn.classList.remove('full');
}
window.addEventListener('resize' , function(){
    if(this.innerWidth > 576){
        searchButtonIcon.classList.replace('bx-x' , 'bx-search');
        searchForm.classList.remove('show');
    }
})

var btn_shop = document.querySelectorAll(".btn-shop");
btn_shop.forEach(function(item){
    item.addEventListener("click", function(){
        item.parentElement.parentElement.parentElement.classList.add("activePro")
    })
})
const num = document.querySelector(".num");
let counter = 0;
const bx_heart = document.querySelectorAll(".bx-heart");

bx_heart.forEach(function(heart) {
    heart.addEventListener("click", function() {
        if (heart.classList.contains("bx-heart")) {
            heart.classList.replace("bx-heart", "bxs-heart");
            counter++;
        } else {
            heart.classList.replace("bxs-heart", "bx-heart");
            counter--;
        }
        num.textContent = counter;
    });
});
// var homePage = document.querySelector(".homePage");
// homePage.addEventListener("click", function(){
//     mainn.classList.remove("d-none")
// })
var btnShop = document.querySelectorAll(".btn-shop");
var productt = document.querySelector(".productt");
var btnPrices = document.getElementById("btnPrices");
var totalPrice = 0
var gg = document.getElementById("totalPrice");
var ntPro = document.getElementById("ntPro");
var btnShopNow = document.getElementById("btnShopNow")
btnShop.forEach(function (item) {
    item.onclick = function () {
        totalPrice += +(item.getAttribute("price"))
        var h6 =item.getAttribute("h6");
        var price = item.getAttribute("price");
        var img11 = item.getAttribute("img")
        productt.innerHTML += `<div class=" justify-content-between p-2 text-dark rounded-3 mt-2 align-items-center"><img src="${img11}" class="w-25 rounded" alt=""><h6 class="fs-6">${h6}</h6><h6>Prise : ${price}$</h6></div>`
        
        if (productt != "") {
            btnPrices.classList.remove("d-none");
            ntPro.classList.add("d-none")
        }
    }
    
})
btnPrices.onclick = function () {
    gg.innerHTML=totalPrice + " $"
    btnShopNow.classList.remove("d-none")
    btnPrices.classList.add("d-none")
}
btnShopNow.addEventListener("click" , function(){
    var suree =  confirm("Are you sure about the purchase?");
    var btnSure = document.getElementById("btnSure")
    btnShopNow.classList.add("disabled");
    if(suree == true){
        btnSure.classList.remove("d-none");
        btnShopNow.classList.add("d-none")
    }
})
var Selected = document.querySelector(".Selected");
var SelectedPage = document.querySelector(".bodySlide");

Selected.addEventListener("click", function(){
    SelectedPage.classList.remove("d-none");
    mainn.classList.add("d-none");
    fff2.classList.add("d-none");
})
var productPage = document.querySelector(".productPage");
productPage.addEventListener('click' , function(e){
    e.preventDefault()
    SelectedPage.classList.add("d-none");
    fff2.classList.remove("d-none");
})
var ntLoad = document.querySelectorAll(".side-menu li");
ntLoad.forEach(function(item){
    item.addEventListener('click' , function(e){
        e.preventDefault();
    })
})


