window.onload = inicio;
      let rotacion = 0;
      let sumar = true;

      let resultado = 5 * 20;
      console.log(resultado);

      function inicio() {
        document.querySelector(".boton1").onclick = girar;
        actualizar();
      }

      function girar() {
        if (sumar) {
            rotacion += 20;
        } else {
            rotacion -= 20;
        }
        
        // if (rotacion <= 0) {
        //     sumar = true;
        //   }
        // if (rotacion >= 360) {
        //   sumar = false;
        // }

        if (rotacion <= 0 || rotacion >= 360) {
            sumar = !sumar;
          }
        
        document.querySelector(
          ".planeta"
        ).style.transform = `rotate(${rotacion}deg)`;
        actualizar();
      }

      function actualizar() {
        document.querySelector(".porcentaje").innerHTML = `${rotacion}°`;
      }