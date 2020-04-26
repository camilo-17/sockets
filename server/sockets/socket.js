const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        msg: 'Bienvenido'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // console.log(mensaje);
        // if (mensaje.usuario) {
        //     callback({ resp: 'salio bien' });
        // } else {
        //     callback({ resp: 'salio mal' });
        // }
    });
});