Instalar mongoDB en macOS:

https://github.com/mongodb/homebrew-brew

$ brew tap mongodb/brew

$ brew install mongodb-community

Arrancar mongoDB manualmente en macos:

$ mongod --config /usr/local/etc/mongod.conf

Abrir consola:

$ mongo

Cerrar mongoDB abierto manualmente:

"Ctrl + C" en la terminal que lo arrancamos o

$ mongo admin --eval "db.shutdownServer()"

Para instalar mongoDB Compass:

https://docs.mongodb.com/compass/master/install/

https://www.mongodb.com/try/download/compass?tck=docs_compass

Si no permite abrirlo por seguridad: accedemos a Preferencias del Sistema, Seguridad y Privacidad,  General y lo permitimos