package br.com.fiescproject.api.application.services;


import br.com.fiescproject.api.domain.model.Cursos;
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


    public List<Cursos> getAllCursos(){
        return cursoRepository.findAll();
    }
}
