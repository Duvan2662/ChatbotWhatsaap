const fs = require('fs')
const ExcelJS = require('exceljs');

const { send } = require('process');
const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Conexion exitosa');
});


//recibe los mensajes con el numero del que envia(from) y el numero del que recibe(to) seguido del mensaje(body)
//{}
client.on('message', message => {
    const { from, to, body } = message;
    console.log(from,to,body)
    enviar(from, 'Te quiero mucho espero tengas un lindo dia')
});

//Funcion que me envia un mensaje 
const enviar = (to,message) => {//recibe el parametro de mensaje, y a quien lo debe enviar
    client.sendMessage(to, message)
}

//funcion que me guarda un historial
const guardaHistorial = () => {
    const pathChat = './chats/${number}.xlsx';
    const workbook = new exceljs.workbook();

}

/* 
Esta funcion me permite vizualizar de quien proviene el mensaje y el mensaje como tal 

*/


client.initialize();
