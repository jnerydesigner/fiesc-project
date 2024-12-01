package br.com.fiescproject.api.infra.repositories;

import br.com.fiescproject.api.domain.model.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PessoaRepository extends JpaRepository<Pessoa, Integer> {

    Optional<Pessoa> findByEmail(String email);
}
