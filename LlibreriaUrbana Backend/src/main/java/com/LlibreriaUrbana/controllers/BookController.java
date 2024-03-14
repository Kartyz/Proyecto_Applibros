/*package com.LlibreriaUrbana.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.LlibreriaUrbana.entities.LoginRequest;
import com.LlibreriaUrbana.entities.BookEntity;
import com.LlibreriaUrbana.repository.BookRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.List;
import java.util.Optional;
import java.util.Map;

@RestController
@RequestMapping("/")
public class BookController {

    private final BookRepository bookRepository;
    private static final Logger logger = LoggerFactory.getLogger(BookController.class);

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public List<BookEntity> getAllBooks() {
        return bookRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<BookEntity> getBookById(@PathVariable Long id) {
        return bookRepository.findById(id);
    }

    @PostMapping
    public BookEntity createBook(@RequestBody BookEntity book) {
        return bookRepository.save(book);
    }

    @PutMapping("/{id}")
    public BookEntity updateBook(@PathVariable Long id, @RequestBody BookEntity updatedBook) {
        if (bookRepository.existsById(id)) {
            return bookRepository.save(updatedBook);
        } else {
            throw new RuntimeException("Book not found");
        }
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Long id) {
        bookRepository.deleteById(id);
    }

    /*@PostMapping("/login")
    public ResponseEntity<?> authenticateBook(@RequestBody LoginRequest loginRequest) {
    	BookEntity matchingBook = bookRepository.findByTitulo(loginRequest.getEmail());

        if (matchingBook  == null) {
            return ResponseEntity.ok(Map.of("success", false, "message", "Ups! Parece que todavía no te has registrado."));
        }
        if (matchingBook.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok(Map.of("success", true, "user", matchingBook ));
        } else {
            return ResponseEntity.ok(Map.of("success", false, "message", "Email o contraseña incorrectos."));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerBook(@RequestBody BookEntity newBook) {
    	BookEntity existingBook = bookRepository.findByTitulo(newBook.getTitulo());
        if (existingBook != null) {
            return ResponseEntity.ok(Map.of("success", false, "message", "Parece que ya existe un libro con ese titulo."));
        }


        BookEntity registeredBook = bookRepository.save(newBook);

        if (registeredBook != null) {
            return ResponseEntity.ok(Map.of("success", true, "message", "Libro registrado correctamente!."));
        } else {
            return ResponseEntity.ok(Map.of("success", false, "message", "Parece que algo ha fallado durante el registro."));
        }
    }

}*/
