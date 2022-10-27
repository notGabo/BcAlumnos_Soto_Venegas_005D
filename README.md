# BcAlumnos_Soto_Venegas_005D (Booking Class)

Esta es la segunda entrega del trabajo que estamos realizando con mi compare <a href="https://github.com/je4n83">Jean Venegas</a> para el ramo de 
Programacion de aplicaciones moviles instruido por la profesora Vivivana Poblete.

### Instalacion del proyecto

Antes de empezar, se debe tener en cuenta que este proyecto esta hecho bajo el framework de Ionic y NodeJs, por lo que se debe tener instalado este framework. 
Puedes descargar NodeJs desde este <a href='https://nodejs.org/en/download/'>link!</a>. Una vez tengas NodeJs instalado, deberas instalar el framework de ionic. Para 
instalarlo solo debes abrir tu terminal preferida y ejecutar el siguiente comando:

  ```npm i -g @ionic/cli```
  
A lo que se haya instalado ionic, deberas generar el proyecto con:

  ```ionic start {{nombre del proyecto}} blank```
  
Se te abrira un menu en el que deberas seleccionar la opcion de 'Angular', Y luego te preguntara si deseas enviar tus datos de manera anonima a Google.

Luego debes entrar a la carpeta que se haya generado con el nombre que pusiste para despues clonar este repositorio con:
con:

  ```git clone https://github.com/notGabo/BcAlumnos_Soto_Venegas_005D.git```
  
Una vez hecho esto, deberas eliminar la carpeta llamada 'src' y reemplazar el nombre de la carpeta 'BcAlumnos_Soto_Venegas_005D' por 'src'.

Luego de todo ese procedimiento, debes entrar a la carpeta 'src' que acabamos de reemplazar, y ejecutar el archivo ```modulosNode.bat```, que contiene los modulos necesarios para el funcionamiento de la aplicacion.
En caso de que este archivo fallase, pueden ser instalados manualmente con los siguientes comandos

```npm install --save @ionic/storage```

```npm install --save @ionic/storage-angular```

```npm install --save phonegap-plugin-barcodescanner```

```npm install --save @awesome-cordova-plugins/barcode-scanner```

Ya hecho esto, es posible emular la aplicacion mediante el browser preferido, para poder hacerlo solo debemos ejecutar en la terminal:

```ionic serve --lab```

Decirle que si para poder instalar el modulo necesario para emular el ambiente de IOS y Android y listo!

### Aviso

Este repositorio solo constituye una parte de la prueba, ya que en si esta aplicacion esta constituida por dos partes, la de los alumnos y la de los profesores.
Si deseas ver el repositorio de los profesores, solo debes acceder a este <a href='https://github.com/notGabo/BcDocentes_Soto_Venegas_005D'>link!<a>
