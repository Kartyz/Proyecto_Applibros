package com.LlibreriaUrbana.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.LlibreriaUrbana.entities.LoginRequest;
import com.LlibreriaUrbana.entities.UserEntity;
import com.LlibreriaUrbana.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.List;
import java.util.Optional;
import java.util.Map;

@RestController
@RequestMapping("/")
public class UserController {

    private final UserRepository userRepository;
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<UserEntity> getUserById(@PathVariable Long id) {
        return userRepository.findById(id);
    }

    @PostMapping
    public UserEntity createUser(@RequestBody UserEntity user) {
        return userRepository.save(user);
    }

    @PutMapping("/{id}")
    public UserEntity updateUser(@PathVariable Long id, @RequestBody UserEntity updatedUser) {
        if (userRepository.existsById(id)) {
            return userRepository.save(updatedUser);
        } else {
            throw new RuntimeException("User not found");
        }
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        UserEntity matchingUser = userRepository.findByEmail(loginRequest.getEmail());

        if (matchingUser == null) {
            return ResponseEntity.ok(Map.of("success", false, "message", "Ups! Parece que todavía no te has registrado."));
        }
        if (matchingUser.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok(Map.of("success", true, "user", matchingUser));
        } else {
            return ResponseEntity.ok(Map.of("success", false, "message", "Email o contraseña incorrectos."));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserEntity newUser) {
        UserEntity existingUser = userRepository.findByEmail(newUser.getEmail());
        if (existingUser != null) {
            return ResponseEntity.ok(Map.of("success", false, "message", "Parece que ya existe una cuenta con este email."));
        }


        UserEntity registeredUser = userRepository.save(newUser);

        if (registeredUser != null) {
            return ResponseEntity.ok(Map.of("success", true, "message", "Te has registrado correctamente!."));
        } else {
            return ResponseEntity.ok(Map.of("success", false, "message", "Parece que algo ha fallado durante el registro."));
        }
    }

}
