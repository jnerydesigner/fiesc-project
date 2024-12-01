package br.com.fiescproject.api.domain.embbed;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Objects;


@Embeddable
@Getter
@Setter
public class InscricaoId implements Serializable {
    private Integer idPessoa;
    private Integer idCurso;


    // Equals and HashCode
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        InscricaoId that = (InscricaoId) o;
        return Objects.equals(idPessoa, that.idPessoa) &&
                Objects.equals(idPessoa, that.idCurso);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idPessoa, idCurso);
    }
}
