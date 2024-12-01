package br.com.fiescproject.api.presenters;


import br.com.fiescproject.api.application.services.CursosService;
import br.com.fiescproject.api.domain.model.Cursos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cursos")
public class CursosController {

    private final CursosService cursosService;

    @Autowired
    public CursosController(CursosService cursosService) {
        this.cursosService = cursosService;
    }

    @GetMapping
    public ResponseEntity<List<Cursos>> getCourses() {
        List<Cursos> cursos = cursosService.getAllCursos();

        return ResponseEntity.ok(cursos);
    }

}
