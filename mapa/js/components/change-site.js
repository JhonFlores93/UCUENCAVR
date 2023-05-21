AFRAME.registerComponent('change-site', {
  schema: {
    img: { type: 'string' },
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    // var attr = document.querySelector("#my-sky")
    // var rotationIni = attr.getAttribute("rotation");
    // console.log("Ini Rotation: ",rotationIni);

    el.addEventListener("click", function () {
      var mySky = document.querySelector("#my-sky");
      mySky.setAttribute("src", data.img);//Cambia la imagen en el escenario

      var position = document.querySelector("#my-sky")
      var obj = position.getAttribute("rotation");
      console.log("rotation ini: ", obj);

      //Cambia a IMG Bloque A
      if (data.img === "#img_A") {

        var img_bloqueA = document.querySelector("#my-sky");
        if (img_bloqueA) {
          img_bloqueA.setAttribute("rotation", "0 200 0");
        }

        var plano_bloqueA = document.querySelector("#plane-A");
        if (plano_bloqueA) {
          plano_bloqueA.setAttribute("visible", false);
        }

        var plano_bloqueB = document.querySelector("#plane-B");
        if (plano_bloqueB) {
          plano_bloqueB.setAttribute("visible", true);
          plano_bloqueB.setAttribute("position", "4 1.8 -3");
          plano_bloqueB.setAttribute("rotation", "0 -60 0");
        }

        var plano_bloqueC = document.querySelector("#plane-C");
        if (plano_bloqueC) {
          plano_bloqueC.setAttribute("visible", true);
          plano_bloqueC.setAttribute("position", "6 1.9 -2");
          plano_bloqueC.setAttribute("rotation", "0 -90 0");
        }

        var plano_bloqueC = document.querySelector("#plane-init");
        if (plano_bloqueC) {
          plano_bloqueC.setAttribute("position", "7 1 1");
          plano_bloqueC.setAttribute("rotation", "0 -100 0");
        }
        document.getElementById("informacion").textContent="En el BLOQUE A (Administrativo I) encontramos: Auditorio, Facultad de Ingeniería, Facultad de Química, Dirección de Posgrados y Dirección de Educacación Continua.";
      }

      //Cambia a IMG Bloque B
      if (data.img === "#img_B") {

        var img_bloqueB = document.querySelector("#my-sky");
        if (img_bloqueB) {
          img_bloqueB.setAttribute("rotation", "0 45 0");
        }

        var plano_bloqueB = document.querySelector("#plane-B");
        if (plano_bloqueB) { plano_bloqueB.setAttribute("visible", false); }

        var plano_bloqueA = document.querySelector("#plane-A");
        if (plano_bloqueA) {
          plano_bloqueA.setAttribute("visible", true);
          plano_bloqueA.setAttribute("position", "4 1 0");
          plano_bloqueA.setAttribute("rotation", "0 270 0");
        }

        var plano_bloqueC = document.querySelector("#plane-C");
        if (plano_bloqueC) {
          plano_bloqueC.setAttribute("visible", true);
          plano_bloqueC.setAttribute("position", "-2 1 -4");
          plano_bloqueC.setAttribute("rotation", "0 30 0");
        }

        var plano_bloqueC = document.querySelector("#plane-init");
        if (plano_bloqueC) {
          plano_bloqueC.setAttribute("position", "7 1 1");
          plano_bloqueC.setAttribute("rotation", "0 -100 0");
        }
        document.getElementById("informacion").textContent="En el BLOQUE B (Aulario I) encontramos la cafetería.";
      }

      //Cambia a Bloque C
      if (data.img === "#img_C") {

        var img_bloqueB = document.querySelector("#my-sky");
        if (img_bloqueB) {
          img_bloqueB.setAttribute("rotation", "0 30 0");
        }

        var plano_bloqueC = document.querySelector("#plane-C");
        if (plano_bloqueC) { plano_bloqueC.setAttribute("visible", false); }

        var plano_bloqueA = document.querySelector("#plane-A");
        if (plano_bloqueA) {
          plano_bloqueA.setAttribute("visible", true);
          plano_bloqueA.setAttribute("position", "-2 1 5");
          plano_bloqueA.setAttribute("rotation", "0 150 0");
        }

        var plano_bloqueB = document.querySelector("#plane-B");
        if (plano_bloqueB) {
          plano_bloqueB.setAttribute("visible", true);
          plano_bloqueB.setAttribute("position", "-4 .8 3");
          plano_bloqueB.setAttribute("rotation", "0 140 0");
        }

        var plano_bloqueC = document.querySelector("#plane-init");
        if (plano_bloqueC) {
          plano_bloqueC.setAttribute("position", "-1 .7 4");
          plano_bloqueC.setAttribute("rotation", "0 -200 0");
        }
        document.getElementById("informacion").textContent="En el BLOQUE C (Aulario II) encontramos: Biblioteca Histórica, Aulas Magistrales, Dirección ed Infraestructura, Laboratorioas de Computo, Decanado + Subdecanado + Administrativo de Ingenieria, Decanado + Subdecanado + Administrativo de Química, ASOS + AFU + LIGA de la facultad de Química, ASOS + AFU + LIGA de la facultad de Ingeniería y Bodegas.";
      }

      //Regresa a Entrada!
      if (data.img === "#img_inicio") {

        var img_entrada = document.querySelector("#my-sky");
        if (img_entrada) {
          img_entrada.setAttribute("rotation", "0 115 0");
        }

        var plano_bloqueA = document.querySelector("#plane-A");
        if (plano_bloqueA) {
          plano_bloqueA.setAttribute("visible", true);
          plano_bloqueA.setAttribute("position", "-5 .9 .9");
          plano_bloqueA.setAttribute("rotation", "0 110 0");
        }

        var plano_bloqueB = document.querySelector("#plane-B");
        if (plano_bloqueB) {
          plano_bloqueB.setAttribute("visible", true);
          plano_bloqueB.setAttribute("position", "-5 1 -3");
          plano_bloqueB.setAttribute("rotation", "0 90 0");
        }

        var plano_bloqueC = document.querySelector("#plane-C");
        if (plano_bloqueC) {
          plano_bloqueC.setAttribute("visible", true);
          plano_bloqueC.setAttribute("position", "2.4 1.5 -3");
          plano_bloqueC.setAttribute("rotation", "0 -40 0");

        }

        var plano_bloqueC = document.querySelector("#plane-init");
        if (plano_bloqueC) {
          plano_bloqueC.setAttribute("position", "-1 1 -3");
          plano_bloqueC.setAttribute("rotation", "0 30 0");
        }
        document.getElementById("informacion").textContent="La entrada esta en la Av. Victor Albornoz y Calle de los Cerezos";
      }
    });
    
  }
});