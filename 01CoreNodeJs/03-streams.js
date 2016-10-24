/*
  Streams
    'Chorros' de información que se transmiten en 'Pedazos' (Chunks)
    3 tipos: Lectura / Escritura / Duplex
    Instancias de EventEmitter
    Acceso asíncrono
    Es raro crear streams directamente
    Pero muchos recursos nos ofrecen este interfaz
    Detrás de muchos mecanismos de Node.JS
      stdin/stdout
      request de HTTP
      Sockets
      Manipulación de ficheros/imágenes
*/

'use strict';

const fs = require('fs');

let readStream = fs.createReadStream('./assets/names.txt'),
  writeStream = fs.createWriteStream('./assets/names_copia.txt');

readStream.pipe(writeStream);

readStream
  .on( 'data', chunk => {
    console.log(chunk);
    console.log( chunk.toString() );
    console.log('I read:', chunk.length, 'characters');
  } )
  .on( 'end', () => console.log('I finished reading the file') )
  .on( 'error', error => console.log('An error occurred: ', error.message) );