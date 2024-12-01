package br.com.fiescproject.api.application.dtos;

import java.util.Date;

public record PessoaDTO(String nome, Date nascimento, String cpf, String email) {
}
