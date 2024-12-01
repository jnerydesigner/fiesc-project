package br.com.fiescproject.api.infra.repositories;

import br.com.fiescproject.api.domain.model.Cursos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CursoRepository extends JpaRepository<Cursos, Integer> {
}
