# TrabajoPractico

Para ejecutar el programa se debe acceder desde la consola a la direccion ...\VirtualDreams\Ejercicio5 y ejecutar el comando node index.js para iniciar el servidor, luego de esto se puede acceder a la carpeta Ejercicio6 para abrir el archivo html con un navegador.

Ejercicio 2:
1. Un servidor http es un software, cuya función principal es realizar una comunicación con el usuario devolviendo información en función de las peticiones que el mismo realice.

2. Los verbos HTTP son un conjunto de métodos de petición los cuales son utilizados para indicar la acción que se quiere realizar sobre recurso determinado.
Los mas comunes son los verbos: GET,POST,PUT,DELETE,PATCH, entre otros.

3. En una comunicación HTTP los request es una solicitud para realizar una acción determinada, mientras que los response son las respuestas a esas solicitudes realizadas previamente. 
Por Otra parte, los headers permiten tanto al cliente como al servidor el envió de información adicional junto con sus requests y responses.

4. Una querry string es una cadena de consulta que puede definir los datos que se envían a través de la URL en el momento de hacer un request a una página web,

5. Los response codes son códigos de estado los cuales indican de que manera se completo una solicitud HTTP especifica. Los valores toman los rangos del 100 al 199 para brindar respuestas informativas, del 200 al 299 para respuestas satisfactorias, del 300 al 399 para redirecciones, del 400 al 499 para errores de los clientes y del 500 al 599 para informar errores de los servidores.

6.El método Get se utiliza para solicitar la representación de un recurso especifico, este método solo debe recuperar datos, usualmente lo realiza mediante querry strings.
Por otra parte, POST, envía datos al servidor. Es bastante común que estos datos sean enviados mediante un formulario de HTML el cual posee la capacidad de poder seleccionar en que formato de envió.

7. El primer verbo HTTP utilizado al acceder a una pagina web es el verbo GET utilizado para cargar el código HTML, si la respuesta del servidor es positiva, comienza con la carga de los encabezados.

8. JSON es un utilizado para representar datos estructurados en la sintaxis de objetos de JavaScript y resultan muy útiles a la hora de transmitir datos a través de una red. 
Por otra parte, XML es un lenguaje de marcado que se puede aplicar en el análisis de datos o la lectura de textos creados por computadoras o personas, implementando una jerarquía estructural para expresar la información de la manera más abstracta y reutilizable posible. 
Una estructura posible de XML podría ser:
<animal>
        <nombre>Bun</nombre>
        <tipo>León</tipo>
        <color>Marrón</color>
        <edad>15</edad>
    </animal>
Mientras que una estructura de JSON podría ser:
      {
        "latitude": 40.417438,
        "longitude": -3.693363,
        "city": "Madrid",
        "description": "Paseo del Prado"
      }
 
 9. Soap es un protocolo el cual se encarga de determinar el formato de la solicitud enviada desde el cliente al servidor, estableciendo interfaces entre un dispositivo y un servicio web, permitiendo el intercambio de datos XML, además de contar con la particularidad de que, dentro del formato de la solicitud, puede incluirse datos específicos de la aplicación, lo cual les permite a los servicios web desplegar determinadas aplicaciones.

10. REST full es otro protocolo más moderno que SOAP, la cual transporta datos por medio del protocolo HTTP, utilizando sus verbos como pueden ser los anteriormente mencionados GET, POST, DELETE, etc. Para realizar solicitudes, permitiendo un uso más flexible del formato de los datos como pueden ser XML, JSON, binary o text.

11. Los header en un request contienen información diversa sobre la petición HTTP y sobre el navegador, los mismos pueden contener diversas propiedades las cuales son optativas, un ejemplo de ellas es el Content-Type, la cual le dice al cliente que tipo de contenido será retornado por esa request.


