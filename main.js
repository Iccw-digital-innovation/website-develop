// image zoom js
var modal = document.getElementById("myModal");
var img1 = document.getElementById("imghome1");
var img2 = document.getElementById("imghome2");
var modalImg = document.getElementById('img01');


img1.onclick = function(){
    modal.style.display='block';
    modalImg.src = this.src;
}

img2.onclick = function(){
    modal.style.display='block';
    modalImg.src = this.src;
}


var span = document.getElementsByClassName('close')[0];

span.onclick = function(){
    modal.style.display = 'none';
}