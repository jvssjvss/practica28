function darkMode(){

    colorChange("grey", "white", "linear-gradient(#382E2A, grey)", "#382E2A");

}

function lightMode(){

    colorChange("white", "black", "linear-gradient(rgb(236, 239, 244), white)","rgb(236, 239, 244)");


}

function colorChange(bgcolor, fontColor, gradientHeader, articleColor){
    document.body.style.backgroundColor=bgcolor;
    document.body.style.color=fontColor;
    document.getElementById(`header`).style.backgroundImage=gradientHeader;
    x=document.querySelectorAll('article');
    for (i=0; i<x.length; i++){
    x[i].style.backgroundColor= articleColor;}

}