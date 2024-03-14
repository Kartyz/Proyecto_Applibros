/*package com.LlibreriaUrbana.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Table(name = "libros")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_libros;
    
    private Integer id_propietario;
   
    @NonNull
    private String titulo;
    
    private String genero;

    private String descripcion;
    
    @ManyToOne
    @JoinColumn(name="ID_propietario", nullable = false)
    private UserEntity propietario;
    
    public BookEntity orElse(Object o) {
        return null;
    }
}*/