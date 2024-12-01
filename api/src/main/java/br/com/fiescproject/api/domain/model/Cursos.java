package br.com.fiescproject.api.domain.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "cursos")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Cursos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_curso")
    private Integer idCurso;

    @Column(name = "name", nullable = false)
    private String nome;

    @Column(name = "numero_vagas", nullable = false)
    private Integer numeroDeVagas;
}
