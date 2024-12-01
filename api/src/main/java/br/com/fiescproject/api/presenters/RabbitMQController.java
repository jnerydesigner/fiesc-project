package br.com.fiescproject.api.presenters;

import br.com.fiescproject.api.application.services.producer.RabbitMQProducer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/queue")
public class RabbitMQController {

    @Autowired
    private RabbitMQProducer rabbitMQProducer;

    @PostMapping("/send")
    public String sendMessage(@RequestBody String message) {
        rabbitMQProducer.sendMessage(message);
        return "Message sent to RabbitMQ: " + message;
    }
}
