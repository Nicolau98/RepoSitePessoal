
var imgAtual = 1;
function MudaImg() {
    var img = imgAtual + 1;
    if (img === 4) img = 1;
    SeleccionaImagem(img);
}

window.setInterval("MudaImg()", 2000);

function SeleccionaImagem(num) {
    document.getElementById("imggrd").src = "images/" + num + ".jpg";
    imgAtual = num;
}


/*Som*/