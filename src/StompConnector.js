import React from 'react';
import SockJsClient from 'react-stomp';

export class StompConnector extends React.Component {


  static sendMessageJoin(roomid,userid) {

    // var socket = new SockJS('https://gentle-wave-71675.herokuapp.com/stompendpoint');
    // this.clientRef.sendMessage('/app/newplayer.'+roomid, userid);
    this.clientRef.sendMessage('http://localhost:8080/app/newplayer.'+roomid, userid);
    // this.clientRef.sendMessage('https://gentle-wave-71675.herokuapp.com/app/newplayer.'+roomid, userid);
  }
  static sendMessageStart() {
    this.clientRef.sendMessage('http://localhost:8080/app/startroom.'+roomid, userid);
    // this.clientRef.sendMessage('https://gentle-wave-71675.herokuapp.com/app/startroom.'+roomid, userid);
    // this.clientRef.sendMessage('https://gentle-wave-71675.herokuapp.com/app/newplayer.'+roomid, userid);
    // this.clientRef.sendMessage('/app/startroom.'+roomid, msg);
  }


}
