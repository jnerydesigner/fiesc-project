package br.com.fiescproject.api.infra.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Aplica CORS a todos os endpoints
                        .allowedOrigins("*") // Permite qualquer origem
                        .allowedMethods("*") // Permite qualquer método (GET, POST, PUT, DELETE, etc.)
                        .allowedHeaders("*") // Permite qualquer cabeçalho
                        .allowCredentials(false); // Para testes, desabilitar credenciais (opcional)
            }
        };
    }
}
