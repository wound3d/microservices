var amqp = require('amqplib/callback_api');

amqp.connect('amqp://rabbitmq:5672', function(error0, connection) {
    if (error0) {
        console.error("Failed to connect to RabbitMQ:", error0);
        process.exit(1);
    }

    connection.createChannel(function(error1, channel) {
        if (error1) {
            console.error("Failed to create channel:", error1);
            process.exit(1);
        }

        var queue = 'msg_queue';
        var msg = 'Hello, Service 2!';

        channel.assertQueue(queue, {
            durable: false
        });

        channel.sendToQueue(queue, Buffer.from(msg));
        console.log("[x] Sent %s", msg);

        setTimeout(function() {
            connection.close();
            process.exit(0);
        }, 500);
    });
});