var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});
// los que son ON escuchan procesos
socket.on('disconnect', function() {

    console.log('perdimos conexion ');
});
// los emits son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log('respuesta server ', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(msg) {
    console.log('servidor: ', msg);
});