var $ = document.querySelector.bind(document);

function menu_dropdown() {
    var elemento = $("nav");
  if (elemento.className === "") {
    elemento.className = "responsive";
  } else {
    elemento.className = "";
  }
}
$(".li_right").addEventListener('click', function(event) {
    menu_dropdown();
    window.alert("Página em construção!");
})