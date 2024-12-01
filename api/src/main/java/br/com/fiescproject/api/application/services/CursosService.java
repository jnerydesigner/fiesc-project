package br.com.fiescproject.api.application.services;


import br.com.fiescproject.api.application.dtos.CursoDTO;
import br.com.fiescproject.api.domain.model.Cursos;
import br.com.fiescproject.api.infra.exceptions.CursoNotFoundException;
import br.com.fiescproject.api.infra.repositories.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CursosService {

    private final CursoRepository cursoRepository;

    @Autowired
    public CursosService(CursoRepository cursoRepository) {
        this.cursoRepository = cursoRepository;
    }

    public List<Cursos> getAllCursos() {
        return cursoRepository.findAll();
    }

    public Cursos createCurso(CursoDTO cursoDTO) {
        // Verifica se o curso já existe
        boolean cursoExists = existsCurso(cursoDTO.nome());

        if(cursoExists){
            return cursoRepository.findByNome(cursoDTO.nome()).orElseThrow(() -> new CursoNotFoundException("Curso no existe"));
        }


        // Cria um novo curso
        Cursos newCurso = new Cursos();
        newCurso.setNome(cursoDTO.nome());
        newCurso.setNumeroDeVagas(cursoDTO.numeroDeVagas());
        return cursoRepository.save(newCurso);
    }

    public boolean existsCurso(String nome) {
        return cursoRepository.existsByNome(nome);
    }
}