'use strict';

angular.module('f9-webrtc')
    .factory('signaling', ['socketFactory', function(socketFactory) {

        if (typeof io === 'undefined') {
            console.log('13:43 || io doesn`t exist!');
            return null;
        }

        // for network ip address use:
        // var ip = shell.task(['ipconfig getifaddr en1']);
        // NOTE - Hard-coded reference

        var ip = '192.168.0.2'; //192.168.0.4
        var socket = io.connect('http://' + ip + ':3000/');

        socketFactory = socketFactory({
            ioSocket: socket
        });

        return socketFactory;

    }]);