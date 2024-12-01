package br.com.fiescproject.api.application.services;


import br.com.fiescproject.api.application.services.consumer.RabbitMQConsumer;
import br.com.fiescproject.api.domain.model.Pessoa;
import br.com.fiescproject.api.infra.repositories.PessoaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.google.gson.Gson;

import java.util.Optional;


@Service
public class PessoaService {

    public final PessoaRepository pessoaRepository;


    @Autowired
    public PessoaService(PessoaRepository pessoaRepository){
        this.pessoaRepository = pessoaRepository;
    }

    public void createPessoa(String userCreatedStr){
        Gson gson = new Gson();
        Pessoa pessoaObjeto = gson.fromJson(userCreatedStr, Pessoa.class);

        Optional<Pessoa> findByPessoa = pessoaRepository.findByEmail(pessoaObjeto.getEmail()).stream().findAny();
        if(findByPessoa.isEmpty()){
            pessoaRepository.save(pessoaObjeto);
        }

        System.out.println(pessoaObjeto);
    }
}
