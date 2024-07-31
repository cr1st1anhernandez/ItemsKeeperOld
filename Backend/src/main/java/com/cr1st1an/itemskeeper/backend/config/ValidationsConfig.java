package com.cr1st1an.itemskeeper.backend.config;

import com.cr1st1an.itemskeeper.backend.services.models.validations.UserValidations;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ValidationsConfig {

    @Bean
    public UserValidations userValidation() {
        return new UserValidations();
    }
}
