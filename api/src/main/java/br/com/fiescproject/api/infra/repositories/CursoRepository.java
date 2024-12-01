package br.com.fiescproject.api.infra.repositories;

import br.com.fiescproject.api.domain.model.Cursos;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CursoRepository extends JpaRepository<Cursos, Integer> {

    boolean existsByNome(String nome);

    Optional<Cursos> findByNome(String nome);
}
