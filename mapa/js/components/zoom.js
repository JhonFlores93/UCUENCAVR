var indicezoom = 1;

AFRAME.registerComponent('mas-button', {      
    init: function() {
        var button1 = this.el;
        button1.addEventListener('click', function() {
            var mySky = document.querySelector("#my-zoom");
            indicezoom++
            mySky.setAttribute("zoom", indicezoom);
            console.log(indicezoom)
        });
    }
    });

AFRAME.registerComponent('menos-button', {      
    init: function() {
      var button2 = this.el;
      button2.addEventListener('click', function() {
        var mySky = document.querySelector("#my-zoom");
        indicezoom--
        console.log("Menos: ",indicezoom)
        if (indicezoom > 0) {
            mySky.setAttribute("zoom", indicezoom);
            console.log(indicezoom)
        } else {
            indicezoom = 1;
        }
        
      });
    }
  });