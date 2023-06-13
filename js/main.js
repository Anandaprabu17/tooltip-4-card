var section = document.getElementById("about");

var div1 = document.createElement("div");
section.appendChild(div1);
div1.classList.add("container");

var div2 = document.createElement("div");
div1.appendChild(div2);
div2.classList.add("row");



var gallery = [{
    imgsrc: "images/ip.png",
    head1: "Iphone 14 pro max",
    head2: "Brand : Apple",
    head3: "Price :1,50,000"
},

{
    imgsrc: "images/oneplus.jpeg",
    head1: "Oneplus 9 pro",
    head2: "Brand : Oneplus",
    head3: "price:34,000"
},
{
    imgsrc: "images/xia.jpeg",
    head1: "Redmi Note 11 pro",
    head2: "Brand :Xiaomi ",
    head3: "price : 17,000"
},
{
    imgsrc: "images/vivo.jpeg",
    head1: "Vivo v25 pro",
    head2: "Brand : vivo",
    head3: "price : 22,000"

}]
var imgCard;
gallery.forEach(function (element) {

    var div3 = document.createElement("div");
    div2.appendChild(div3);
    div3.classList.add("col");

    var div4 = document.createElement("div");
    div3.appendChild(div4);
    div4.classList.add("card");

    imgCard = document.createElement("div");
    div4.appendChild(imgCard);
    imgCard.classList.add("phoneCard");

    var image = document.createElement("img");
    imgCard.appendChild(image);
    image.src = element.imgsrc;


    var details = document.createElement("a");
    imgCard.appendChild(details);
    details.classList.add("link");
    details.setAttribute("href", "#");
    details.innerHTML = "Details";




    var div5 = document.createElement("div");
    div4.appendChild(div5);
    div5.classList.add("box");


    var color = document.createElement("div");
    div5.appendChild(color);
    color.classList.add("color");

    var icon = document.createElement("div");
    div5.appendChild(icon);
    icon.classList.add("icon");

    var heading = document.createElement("h3");
    div5.appendChild(heading);
    heading.innerHTML = element.head1;

    var para1 = document.createElement("p");
    div5.appendChild(para1);
    para1.innerHTML = element.head2;

    var para2 = document.createElement("p");
    div5.appendChild(para2);
    para2.innerHTML = element.head3;
})

var buttons = document.querySelectorAll(".link");
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        this.parentNode.nextElementSibling.classList.add("view");
    })
})

var icons = document.querySelectorAll(".icon");
icons.forEach(function (icon) {
    icon.addEventListener("click", function () {
        this.parentNode.classList.remove("view");
    })
})