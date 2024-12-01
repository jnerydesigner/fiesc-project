package br.com.fiescproject.api.presenters;

import br.com.fiescproject.api.application.dtos.PessoaDTO;
import br.com.fiescproject.api.application.services.producer.RabbitMQProducer;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/queue")
public class PessoaCreateInQueueController {

    @Autowired
    private RabbitMQProducer rabbitMQProducer;


    @PostMapping("/send")
    public String sendMessage(@RequestBody PessoaDTO pessoaDTO) {
        Gson gson = new Gson();
        String bodyReplace = gson.toJson(pessoaDTO);
        rabbitMQProducer.sendMessage(bodyReplace);
        return "Message sent to RabbitMQ: " + bodyReplace;
    }
}
