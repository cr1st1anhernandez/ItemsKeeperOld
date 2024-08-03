package com.cr1st1an.itemskeeper.backend.controllers;

import com.cr1st1an.itemskeeper.backend.persistence.entities.Role;
import com.cr1st1an.itemskeeper.backend.persistence.entities.User;
import com.cr1st1an.itemskeeper.backend.persistence.respositories.UserRepository;
import com.cr1st1an.itemskeeper.backend.persistence.respositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/admin")
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/assign-role")
    public ResponseEntity<?> assignRole(@RequestParam String username, @RequestParam String roleName) {
        Optional<User> userOptional = userRepository.findByName(username);
        if (userOptional.isEmpty()) {
            return ResponseEntity.badRequest().body("User not found");
        }

        Optional<Role> roleOptional = roleRepository.findByName(roleName);
        if (roleOptional.isEmpty()) {
            return ResponseEntity.badRequest().body("Role not found");
        }

        User user = userOptional.get();
        Role role = roleOptional.get();
        user.getRoles().add(role);
        userRepository.save(user);

        return ResponseEntity.ok("Role assigned successfully");
    }
}

