let intentos: number = 0;
const aleatorio = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

function mover(): void {
  let intentosMax = 10;
  /* btn: hace referencia al botón que dice NO */
  let btn = document.querySelectorAll("button")[1];
  //* clientHeight obtiene la altura de un elemento html
  /* Altura del div contenedor de botones */
  let altoDiv = document.querySelectorAll("div")[0].clientHeight;
  intentos++;
  //* AGREGANDO ESTILOS
  /* Si no le damos una posición 'absolute' al botón, las coordenaas no funcionarán */
  btn.style.position = "absolute";
  /* La posición en el eje 'Y' del botón será aleatorio. A la altura del div le restamos la altura del cliente, de esta forma no lo posicionará más abajo del div */
  btn.style.top = aleatorio(altoDiv - btn.clientHeight, 0).toString() + "px";
  /* La posición en el eje 'X' será entre el ancho del navegador (viewport width) y le restamos el ancho del botón para que no sobre pase el ancho*/
  btn.style.left =
    aleatorio(window.innerWidth - btn.clientWidth, 0).toString() + "px";

  if (intentos % intentosMax === 0) {
    alert(
      "Deja de intentarlo, 'mai lob', JAMÁS podrás decir que NO :v je, je, je." +
        (intentos / intentosMax === 1 ? "" : " x" + intentos / intentosMax)
    );
  }
}

function muestraTarjeta(): void {
  let tarjeta = document.getElementById("msg-container");
  tarjeta.style.display = "grid";
}
