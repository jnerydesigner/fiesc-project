package br.com.fiescproject.api.domain.model;


import br.com.fiescproject.api.domain.embbed.InscricaoId;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "inscricoes")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Inscricao {

    @EmbeddedId
    private InscricaoId id = new InscricaoId();

    @ManyToOne
    @MapsId("idPessoa")
    @JoinColumn(name = "id_pessoa", nullable = false)
    private Pessoa pessoa;

    @ManyToOne
    @MapsId("idCurso")
    @JoinColumn(name = "id_curso", nullable = false)
    private Cursos idCurso;

    @Column(name = "data_inscricao", nullable = false)
    private String dataInscricao;
}
