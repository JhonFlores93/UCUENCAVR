AFRAME.registerComponent('search-button', {      
  init: function() {
    
    let keyboard = document.querySelector("a-keyboard");
    var str = "";

    keyboard.addEventListener('input', (e)=>{
      str += e.detail;
      console.log(str);
    });
    keyboard.addEventListener('dismiss', (e)=>{
      console.log("Dismiss: ", e);
      keyboard.dismiss();
    });
    keyboard.addEventListener('backspace', (e)=>{
      str = str.slice(0, -1);
      console.log(str);
    });


    var button = this.el;
    button.addEventListener('click', function() {
      // Realizar búsqueda con el valor del input
      console.log("BUSCANDO: ",str);
      if (str == "") {
        alert("Nota: Ingrese una cadena de búsqueda")
      } else {
          alert("BUSCANDO...\n"+str+"")
      }
      
    });
  }
});