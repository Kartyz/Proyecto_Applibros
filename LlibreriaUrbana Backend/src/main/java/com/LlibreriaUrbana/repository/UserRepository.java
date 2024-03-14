package com.LlibreriaUrbana.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.LlibreriaUrbana.entities.UserEntity;


public interface UserRepository extends JpaRepository<UserEntity, Long> {
    UserEntity findByEmail(String email);
    
}
