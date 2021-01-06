package com.devsuperior.dsdelivery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsdelivery.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{ // Já possui algumas implementações padrões para atualizar a entidade, meu ProductRepository passa a ter todas as operações de acesso ao BD

	// vide spring data jpa documentation, aba Query Creation, varias possibilidades de ordenação o Name abaixo tem que bater exatamente com o nome do atributo na classe
	List<Product> findAllByOrderByNameAsc();
	
}
