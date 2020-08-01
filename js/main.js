var $ = document.querySelector.bind(document);

function menu_dropdown() {
    var elemento = $("nav");
  if (elemento.className === "") {
    elemento.className = "responsive";
  } else {
    elemento.className = "";
  }
}

function aviso(){
  window.alert('Página em construção!');
}


$(".li_right").addEventListener('click', function(event) {
    menu_dropdown();
});
