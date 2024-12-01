package br.com.fiescproject.api.infra.exceptions;

public class CursoNotFoundException extends RuntimeException{
    public CursoNotFoundException(String message){
        super(message);
    }
}
