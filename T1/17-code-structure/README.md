### #️⃣1️⃣6️⃣ EXPRESSJS: Middlewares y logger.

---


#### EJERCICIOS CLASE

    1. Crear un middleware para el control de errores que devuelva un error 500 con el mensajes
    'Server Error' -> ej1.js
    2. Crear un logger con winston para imprimir a múltiples niveles formateando la salida con colores
       – Formato: [Fecha] nivel: Mensaje  -> ej2.js
    3. Crear un servidor que muestre por consola todos los accesos a la API con morgan -> ej3.js
    

---


#### EJERCICIOS CASA

    4. Realizar un logger que imprima a distinto nivel y formato las peticiones con respuesta
    – 2XX –> info
    – 4XX –> warn
    – 5XX –> error
        -> ej4.js

    5. Realizar un middleware que valide el acceso a una zona restringida para usuarios admin. Para
    ello, en la petición se enviará en la cabecera el parámetro password con el valor patata. En
    caso contrario, o si no define se define el parámetro, no permitirá el acceso.  -> ej5.js
        – Acceso correcto: Se enviará como respuesta el mensaje Bienvenid@, disfrute del
        contenido, con el código 200 OK.

        – Acceso incorrecto: Se enviará un objeto de error con el código 401 unauthorized y el men-
        saje Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password'en la cabera de la petición

