
Proyecto-Base

Este es un proyecto web del Hospital Clinico Dr Victor Ramirez que utiliza ReactJS para crear un sitio con un sistema de navegaci�n. 

Tabla de Contenidos

Tecnolog�as Usadas
Estructura del Proyecto
Instalaci�n
Uso
Scripts
Contribuciones
Licencia

Tecnolog�as Usadas

ReactJS: Para la estructuraciond e la pagina y cada uno de los componentes de la misma. Ademas de la renderizacion de los datos, flujo de informacion y creacion de los formularios para el manejo de la interaccion del usuario.
CSS: Para la escritura de estilos en CSS con caracter�sticas adicionales como variables y anidamiento.
TypeScript: Para algunas partes del proyecto


Estructura del Proyecto

index.html: Es el archivo HTML principal que funciona como punto de entrada de la aplicación.
index.css: Archvio con los estilos css de la pagina index
main.jsx: Es el segundo archivo que se llama desde el index.html definiendo la extructura mas general de la pagina en ReactJS.
App.jsx: Es el tercer archivo que se llamada desde el main.jsx y define lo que el avegador presenta en el DOM.
App.css: Archivo con los estilos css de la pagina App.

views: Contiene todos los archivos con las distitnas vistas generales de la pagina del hospital.
components: Contiene todos los archvios con los distitnos componentes React de la pagina.
Interfaces: Contiene todas las interfaces de los distintos componetes React de la pagina.
class: Contiene todas las clases de la pagina.


Instalaci�n

Clona este repositorio:

git clone https://github.com/VictorRamirezGarcia/Modulo-5---Sesi-n-interactiva-de-preguntas-y-respuestas-2.git
cd tu-repo


Instruciones para visualizacion:

Primero debes tener instalado Node.js, para ello en tu consola debes ejecutar el siguiente comando

nvm install node

Luego en tu carpeta donde tengas tu proyecto debes ejecutar los siguientes comandos

cd tu-repo
npm run dev

Luego ingresar en el link indicado por la consola para ingresar a la pagina de inicio de tu aplicacion web con ReactJs.

Ejemplo de como se visualizaria en tu consola:

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help


Sesión Interactiva de Preguntas y Respuestas: Introducción a TypeScript en ReactJS

Contexto:
En esta evaluación, los estudiantes participarán en una sesión de preguntas y respuestas
donde discutirán los conceptos fundamentales de TypeScript, sus diferencias con JavaScript,
y su aplicación en ReactJS. Además, los estudiantes resolverán ejercicios prácticos que
involucren la definición de tipos, inferencia de tipos, y el uso de interfaces y clases en un
proyecto basado en ReactJS.


Requisitos:

1. Preguntas Teóricas sobre TypeScript (2 puntos)
- Los estudiantes deberán responder a preguntas sobre los conceptos clave de
TypeScript, incluyendo:
- ¿Qué es TypeScript y para qué se utiliza?
- ¿Cuáles son las principales diferencias entre TypeScript y JavaScript?
- ¿Por qué es útil TypeScript en el desarrollo de aplicaciones ReactJS?
- ¿Qué es el sistema de tipos en TypeScript y cómo ayuda a evitar errores en
tiempo de desarrollo?

Respuesta:

-->¿Qué es TypeScript y para qué se utiliza?

TypeScript es un lenguaje de programación desarrollado por Microsoft, que es una extensión de JavaScript. TypeScript añade tipado estático, lo que significa que puedes definir el tipo de datos (como cadenas de texto, números, arrays, objetos, etc.) que una variable puede contener en tiempo de compilación. Esto permite una detección temprana de errores y una mejor autocompletación en los editores de código. TypeScript se compila a JavaScript, lo que lo hace compatible con todos los navegadores y entornos que soportan JavaScript. Es muy utilizado en proyectos de gran escala donde la mantenibilidad y la prevención de errores son importantes.


-->¿Cuáles son las principales diferencias entre TypeScript y JavaScript?

Tipado Estático vs. Dinámico:

TypeScript tiene un sistema de tipos estáticos opcionales, lo que significa que puedes definir el tipo de las variables (número, cadena, booleano, etc.) en tiempo de desarrollo.
JavaScript, en cambio, es un lenguaje de tipado dinámico, donde los tipos de las variables se determinan en tiempo de ejecución.
Compilación:

TypeScript requiere un paso de compilación, ya que el código TypeScript se transpila a JavaScript antes de ejecutarse.
JavaScript es un lenguaje interpretado que no requiere un paso previo de compilación.
Características Avanzadas:

TypeScript incluye características avanzadas como interfaces, clases con tipos estrictos, generics, y decoradores.
JavaScript ha implementado algunas de estas características con el tiempo (por ejemplo, clases), pero no tiene un sistema de tipos tan estricto.
Detección de errores:

TypeScript permite la detección de errores en tiempo de desarrollo, lo que ayuda a evitar errores comunes antes de ejecutar el código.
JavaScript solo permite detectar errores en tiempo de ejecución.

-->¿Por qué es útil TypeScript en el desarrollo de aplicaciones ReactJS?

TypeScript es extremadamente útil en el desarrollo de aplicaciones con ReactJS por varias razones:

Tipado de Componentes:
TypeScript permite definir tipos explícitos para las props, el estado y los eventos de los componentes de React. Esto ayuda a evitar errores comunes, como pasar datos de un tipo incorrecto, lo que es especialmente útil en aplicaciones grandes con muchos componentes.

Mejor Autocompletado y Refactorización:
El editor de código (como Visual Studio Code) puede proporcionar autocompletado y sugerencias de código más precisas gracias al sistema de tipos de TypeScript. Esto mejora la productividad y la calidad del código al reducir errores tipográficos y mejorar la navegación por el código.

Mayor Mantenibilidad:
Con TypeScript, el código es más fácil de mantener, ya que los tipos bien definidos sirven como documentación y permiten que otros desarrolladores entiendan cómo debe interactuar el código sin tener que adivinar los tipos de datos.

Integración con herramientas modernas:
TypeScript se integra perfectamente con herramientas de construcción como Webpack, Babel y ESLint, lo que facilita la creación y validación de aplicaciones ReactJS.

-->¿Qué es el sistema de tipos en TypeScript y cómo ayuda a evitar errores en tiempo de desarrollo?

El sistema de tipos de TypeScript es una característica fundamental que permite a los desarrolladores definir qué tipo de datos puede almacenar una variable, recibir una función como parámetro o devolver un valor. Existen varios tipos primitivos en TypeScript, como string, number, boolean, y otros más complejos como arrays, tuples, enums, interfaces, y clases.

Este sistema de tipos ayuda a evitar errores en tiempo de desarrollo de las siguientes maneras:

Detección Temprana de Errores:
Al especificar el tipo de las variables y funciones, TypeScript puede detectar inconsistencias antes de que el código se ejecute, lo que previene muchos errores comunes, como pasar un número donde se espera una cadena.

Autocompletado y Documentación Integrada:
Al usar tipos explícitos, las herramientas de desarrollo pueden ofrecer autocompletado y sugerencias más inteligentes, lo que facilita el trabajo del desarrollador y reduce la posibilidad de cometer errores por falta de conocimiento sobre el tipo de datos esperado.

Seguridad en la Refactorización:
Si un desarrollador decide cambiar una parte del código, como el tipo de una variable o la firma de una función, TypeScript alertará de inmediato sobre los lugares donde este cambio pueda causar errores, lo que facilita la refactorización de manera segura.

Inferencia de Tipos:
En TypeScript, incluso si no se especifica explícitamente el tipo, el compilador intenta inferir el tipo de una variable, lo que ayuda a reducir el esfuerzo de declaración y sigue proporcionando seguridad en el código.



2. Ejercicio Práctico: Definiendo Tipos e Inferencia (1 punto)
- En este ejercicio práctico, los estudiantes deberán definir y utilizar tipos en una función
de ReactJS. Se les proporcionará una función que toma como parámetro datos sobre
doctores del hospital, y deberán definir los tipos correctos para los parámetros y el valor
de retorno.
- Además, se evaluará cómo TypeScript infiere los tipos automáticamente en
ciertos casos.

Respuesta:
Desarrollada en el proyecto de Visual Code



3. Definición de Interfaces y Clases en TypeScript (1 punto)
- Los estudiantes deberán definir una interfaz para representar los datos de un doctor y
una clase que implemente esta interfaz. Esta clase deberá contener métodos para
obtener información detallada de los doctores del hospital y actualizar su especialidad.
- Se evaluará si la interfaz y la clase están correctamente definidas y si cumplen
con las reglas de TypeScript.

Respuesta:
Desarrollada en el proyecto de Visual Code



4. TypeScript y ReactJS: Implementación Básica en un Componente
(1.5 puntos)
- Los estudiantes deberán crear un componente funcional en ReactJS utilizando
TypeScript. El componente debe recibir props que representen los datos de un doctor y
mostrar esta información en la interfaz.
- Se evaluará el uso de props tipados en TypeScript y la correcta implementación
de tipos en el componente.

Respuesta:
Desarrollada en el proyecto de Visual Code



5. Ventajas de TypeScript en el Desarrollo con ReactJS (1 punto)
- Se evaluará la comprensión de los estudiantes sobre las ventajas de utilizar TypeScript
en proyectos basados en ReactJS. Esto puede incluir la detección temprana de errores,
la autocompletación en editores de código, y la mejora en la productividad y el
mantenimiento del código.
- Se pedirá a los estudiantes que den ejemplos de cómo TypeScript mejora el
desarrollo en React en comparación con JavaScript puro.

Respuesta:

Ventajas de TypeScript en el Desarrollo con ReactJS

1.- Detección Temprana de Errores:

-->En JavaScript, los errores típicos solo se detectan en tiempo de ejecución, lo que puede resultar en fallos imprevistos o bugs difíciles de rastrear durante el desarrollo. Los errores se revelan solo cuando el código se ejecuta, lo que puede ocasionar fallos en producción.

-->En TypeScript, la mayoría de los errores se detectan en tiempo de compilación antes de que el código se ejecute. Esto se debe a que TypeScript analiza los tipos de las variables y las funciones, asegurándose de que el código esté correctamente escrito. Los errores relacionados con tipos, asignaciones incorrectas, llamadas a funciones con parámetros incorrectos, entre otros, se detectan automáticamente, lo que facilita la depuración.

2.- Autocompletado y Asistencia en Editores de Código:

-->En JavaScript, los editores de código como VS Code tienen cierta capacidad de autocompletado y sugerencias, pero no son tan precisos ni completos. Si no se usa un sistema de tipos explícito, es fácil cometer errores al utilizar objetos o funciones sin saber exactamente qué propiedades o métodos existen.

-->En TypeScript, el autocompletado es más preciso debido a los tipos definidos. Los editores como VS Code pueden mostrar sugerencias de funciones, parámetros y propiedades de objetos con gran precisión, ayudando a escribir código más rápido y sin errores.

3.- Mejora en la Productividad:

-->Con JavaScript puro, los desarrolladores pueden pasar tiempo depurando errores que no se detectaron hasta que el código se ejecutó. Esto consume tiempo y esfuerzo, sobre todo en proyectos grandes, donde los errores pueden ser difíciles de rastrear.
-->Con TypeScript, la comprobación de tipos garantiza que muchos de estos errores sean evitados desde el principio. Esto aumenta la productividad del desarrollador porque reduce el tiempo que se gasta depurando y mejorando el código.
-->Además, el sistema de tipos de TypeScript proporciona una documentación implícita. Los desarrolladores pueden ver fácilmente qué propiedades y métodos están disponibles para cada tipo sin necesidad de consultar documentación adicional.

4.- Mejora en el Mantenimiento del Código:

-->En JavaScript puro, a medida que los proyectos crecen, el código se vuelve más difícil de mantener. Si no hay una definición clara de los tipos de datos que se manejan, puede ser complicado saber cómo interactúan las diferentes partes del código, lo que dificulta la depuración y la extensión del proyecto.
-->Con TypeScript, al definir tipos explícitos para funciones, objetos y componentes, el código se vuelve más predecible y fácil de mantener. Los tipos actúan como documentación en línea, lo que facilita la comprensión del código y su modificación.



Creditos:
Imagenes sacada de buscador Google.