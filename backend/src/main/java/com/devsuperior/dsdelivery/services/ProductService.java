package com.devsuperior.dsdelivery.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdelivery.DTO.ProductDTO;
import com.devsuperior.dsdelivery.entities.Product;
import com.devsuperior.dsdelivery.repositories.ProductRepository;

@Service // poderia colocar @Component tambem, assim ele poderá ser injetado na camada de controle
public class ProductService {
	
	@Autowired                              // O framework fará a injeção de dependência sem a necessidade de eu criar um setProductRepository
	private ProductRepository repository;
	
	@Transactional(readOnly = true)   //Para garantir a transação e que feche a conexão com o banco, e o readonly pra evitar lock do banco de dados
	public List<ProductDTO> findAll() {
		List<Product> list = repository.findAllByOrderByNameAsc(); // Usando o findAll personalizado do próprio spring data jpa (vide documentation em query)
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList()); //Convertendo a lista para Stream e vice versa
	}
}
