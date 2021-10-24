# Se mi novia

La página muestra el título, **«¿Quieres ser mi novia?»**, así como dos botones. Cada vez que se pasa el cursor sobre el botón **NO**, éste se posicionará en otro lugar (pero nunca en la parte del título o más allá que obligue a crear scroll vertical u horizontal). Cada 10 intentos aparecerá un mensaje indicando que será inposible presionar NO (a partir del intento 20 aparecerá la leyenda 'x2', 'x3' y así sucesivamente cada 10 intentos). Al

La finalidad del proyecto fue crear algo sencillo para comenzar a familiarizarme con el manejo del _DOM_ y la utilización de los eventos.

### Resultado final del proyecto

https://se-mi-novia.netlify.app/

## Tecnologías utilizadas

- HTML
- SCSS
- TypeScript

## Cómo realizar modificaciones

1. Clonar el repositorio y accede a la carpeta generada:

```
git clone https://github.com/ESaulDJLaguna/se-mi-novia.git
```

```
cd se-mi-novia/
```

2. Instala las dependencias. El siguiente comando generará la carpeta _node_modules_:

```
npm install
```

3. Transpila el archivo _styles.scss_. Esto generará los estilos _CSS_ y se mantendrá en modo observador:

```
npm run sass
```

4. En una nueva consola, compila el archivo _script.ts_. Esto generará el código _JavaScript_ y mantendrá al compilador en modo observador:

```
npm run ts
```

5. Finalmente abre en un navegador el archivo _index.html_.

> Como recomendación, si se está usando _Visual Studio Code_, instala la extensión [Live Sever](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). Cada vez que se haga un cambio en el proyecto, no tendrá que actualizar manualmente la ventana del navegador.
