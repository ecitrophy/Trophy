var stomp = (function () {
    //var idPlayer="purple";

    var stompClient = null;
    var room = null;
    var map = null;

    var connectAndSubscribe = function () {
        console.info('Connecting to WS...');
        var socket = new SockJS('/stompendpoint');
        stompClient = Stomp.over(socket);

        //subscribe to /topic/TOPICXX when connections succeed
        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/newposition.' + room, function (eventbody) {
                var eventoJ=JSON.parse(eventbody.body);
                game.updatePositionPlayer(parseInt(eventoJ.e),eventoJ.color);
            });
            stompClient.subscribe('/topic/newstate.' + room, function (eventbody) {
                var eventoJ=JSON.parse(eventbody.body);
                game.updateStatePlayer(parseInt(eventoJ.e),eventoJ.color);
            });
        });
    };


    return {

        publishPosition: function (ev,color) {
            if (stompClient != null) {
                stompClient.send("/app/newposition." + room, {}, JSON.stringify({e:ev,color:idPlayer}));
            } else {
                alert("Al parecer no estás en una sala!");
            }
        },

        publishState: function (ev,color) {
            if (stompClient != null) {
                stompClient.send("/app/newstate." + room, {}, JSON.stringify({e:ev,color:idPlayer}));
            } else {
                alert("Al parecer no estás en una sala!");
            }
        },

        connectSuscribe: function (idRoom) {
            if (!isNaN(parseInt(idRoom))) {
                room = idRoom;
                connectAndSubscribe();
            } else {
                alert("Debe ingresar un número de sala válido");
            }
        },

        disconnect: function () {
            if (stompClient !== null) {
                stompClient.disconnect();
                stompClient = null;
            }
            //setConnected(false);
            console.log("Disconnected");
        }
    };

})();
