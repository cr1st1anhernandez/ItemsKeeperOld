package com.cr1st1an.itemskeeper.backend.utils;

import com.cr1st1an.itemskeeper.backend.persistence.entities.Role;
import com.cr1st1an.itemskeeper.backend.persistence.entities.User;
import com.cr1st1an.itemskeeper.backend.persistence.respositories.RoleRepository;
import com.cr1st1an.itemskeeper.backend.persistence.respositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import jakarta.annotation.PostConstruct;

import java.util.Collections;
import java.util.Optional;

@Configuration
public class DataInitializer {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @PostConstruct
    @Transactional
    public void init() {
        Optional<Role> adminRole = roleRepository.findByName("ADMIN");
        if (adminRole.isEmpty()) {
            Role newAdminRole = new Role();
            newAdminRole.setName("ADMIN");
            roleRepository.save(newAdminRole);
            adminRole = Optional.of(newAdminRole);
        }

        Optional<User> adminUser = userRepository.findByEmail("admin@admin.com");
        if (adminUser.isEmpty()) {
            User admin = new User();
            admin.setName("Admin");
            admin.setEmail("admin@admin.com");
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
            admin.setPassword(encoder.encode("Password9!"));
            admin.setRoles(Collections.singleton(adminRole.get()));
            userRepository.save(admin);
        }
    }
}

