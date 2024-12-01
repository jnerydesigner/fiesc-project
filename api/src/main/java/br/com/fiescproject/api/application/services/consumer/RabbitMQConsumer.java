package br.com.fiescproject.api.application.services.consumer;


import br.com.fiescproject.api.infra.config.RabbitMqConfig;
import org.springframework.stereotype.Service;
import org.springframework.amqp.rabbit.annotation.RabbitListener;


@Service
public class RabbitMQConsumer {
    @RabbitListener(queues = RabbitMqConfig.QUEUE_NAME)
    public void receiveMessage(String message) {
        System.out.println("Message received: " + message);
    }
}
