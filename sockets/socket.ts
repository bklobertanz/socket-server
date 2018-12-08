import { Socket } from 'socket.io';
import socketIO from 'socket.io';

export const desconectar = ( cliente: Socket )=>{

    cliente.on('disconnect', ()=>{
        console.log('Cliente desconectado.');
    });
}
// handler de evento mensaje, que es emitido desde el cliente. 

export const mensaje = ( cliente: Socket, io: socketIO.Server )=>{

    cliente.on('mensaje', ( payload: {de: string , cuerpo: string } )=>{
        console.log( 'Mensaje recibido', payload );
        
        io.emit('nuevo-mensaje', payload );
    });
}