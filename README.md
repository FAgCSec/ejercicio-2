# Contador de Clics

Este es un simple contador de clics implementado en HTML, CSS y JavaScript. El contador registra cuántas veces se hace clic en un botón y muestra el total en un párrafo.

## Uso

1. Descargue o clone el repositorio en su máquina local.
2. Abra el archivo `index.html` en su navegador web preferido.

## Explicación del Código

### HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador de Clics</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <button id="clickButton">Haz clic aquí</button>
    <p id="clickCount">0</p>
    <script src="script.js"></script>
</body>
</html>
```

- La estructura HTML básica que incluye un botón y un párrafo para mostrar el contador.
- Se enlaza a un archivo CSS externo (`styles.css`) para estilizar la página.
- Se enlaza a un archivo JavaScript externo (`script.js`) que contiene la lógica del contador.

### CSS (`styles.css`)

```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    margin-bottom: 20px;
}

p {
    font-size: 24px;
    color: #333;
}
```

- Estilos simples para dar formato a la página, centrando el contenido y definiendo estilos para el botón y el párrafo.

### JavaScript (`script.js`)

```javascript
// Obtener referencia al botón y al contador
var clickButton = document.getElementById('clickButton');
var clickCount = document.getElementById('clickCount');

// Inicializar contador
var contador = 0;

// Función de devolución de llamada para el evento de clic
function incrementarContador() {
    contador++;
    clickCount.innerText = contador;
}

// Asignar la función de devolución de llamada al evento de clic utilizando addEventListener
clickButton.addEventListener('click', incrementarContador);
```

- Obtiene referencias al botón y al párrafo del contador utilizando sus IDs.
- Inicializa una variable `contador` que almacenará el número de clics.
- Define una función `incrementarContador()` que incrementa el contador cada vez que se hace clic en el botón y actualiza el texto del párrafo con el nuevo valor del contador.
- Asigna la función de devolución de llamada `incrementarContador()` al evento de clic del botón utilizando `addEventListener`. Esto asegura que la función se llame cada vez que se hace clic en el botón.


Este contador de clics puede ser útil para cualquier persona que necesite implementar una funcionalidad simple de seguimiento de clics en su sitio web, por ejemplo, para realizar un seguimiento de la cantidad de veces que se hace clic en un botón específico o para recopilar datos de interacción del usuario. Además, este ejemplo proporciona una introducción clara al manejo de eventos en JavaScript.
