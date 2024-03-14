package com.LlibreriaUrbana.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Table(name = "usuarios")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUsuario;
   
    @NonNull
    private String nickname;

    private String password;

    private String email;
    

    public UserEntity orElse(Object o) {
        return null;
    }
}
