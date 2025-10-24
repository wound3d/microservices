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

        channel.assertQueue(queue, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
});