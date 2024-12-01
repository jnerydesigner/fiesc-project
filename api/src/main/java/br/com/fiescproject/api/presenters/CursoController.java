package br.com.fiescproject.api.presenters;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cursos")
public class CursoController {

    @GetMapping
    public String getCourses(){
        return "Mapeamento iniciado";
    }

}
