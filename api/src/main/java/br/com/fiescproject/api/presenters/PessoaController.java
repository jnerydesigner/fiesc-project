package br.com.fiescproject.api.presenters;


import br.com.fiescproject.api.application.dtos.PessoaDTO;
import br.com.fiescproject.api.application.services.CursosService;
import br.com.fiescproject.api.application.services.PessoaService;
import br.com.fiescproject.api.domain.model.Pessoa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/pessoa")
public class PessoaController {
    public final PessoaService pessoaService;

    @Autowired
    public PessoaController(PessoaService pessoaService) {
        this.pessoaService = pessoaService;
    }


//
//    @PostMapping
//    public ResponseEntity<Pessoa> createPessoa(@RequestBody PessoaDTO pessoaDTO){
//        Pessoa pessoa = pessoaService.createPessoa(pessoaDTO);
//        return ResponseEntity.ok(pessoa);
//    }
}
