/*package com.LlibreriaUrbana.services;

import java.util.List;
import org.springframework.stereotype.Service;
import com.LlibreriaUrbana.entities.BookEntity;
import com.LlibreriaUrbana.repository.BookRepository;

@Service
public class  BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<BookEntity> findAllBooks() {
        return bookRepository.findAll();
    }

    public BookEntity findBookById(long id) {
        return bookRepository.findById(id).orElse(null);
    }

    public BookEntity createBook(BookEntity book) {
        return bookRepository.save(book);
    }

    public void deleteBook(Long id) {
        bookRepository.findById(id).ifPresentOrElse(
                book -> bookRepository.delete(book),
                () -> { throw new RuntimeException("Libro no encontrado"); }
        );
    }

    public BookEntity updateBook(Long id, BookEntity updatedBook) {
        return bookRepository.findById(id).map(
                existingBook -> {
                	existingBook.setTitulo(updatedBook.getTitulo());
                	existingBook.setGenero(updatedBook.getGenero());
                	existingBook.setDescripcion(updatedBook.getDescripcion());
                    return bookRepository.save(existingBook);
                }
        ).orElseThrow(() -> new RuntimeException("Libro no encontrado"));
    }

    public BookEntity findByTitulo(String titulo) {
        return bookRepository.findByTitulo(titulo);   }
}*/
