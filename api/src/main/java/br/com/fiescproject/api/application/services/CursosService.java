package br.com.fiescproject.api.application.services;


import br.com.fiescproject.api.application.dtos.CursoDTO;
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

    public Cursos createCurso(CursoDTO cursoDTO){
        Cursos newCurso = new Cursos();
        newCurso.setNome(cursoDTO.nome());
        newCurso.setNumeroDeVagas(cursoDTO.numeroDeVagas());
        Cursos cursoSave = cursoRepository.save(newCurso);

        return cursoSave;

    }
}
