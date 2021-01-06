package com.devsuperior.dsdelivery.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdelivery.DTO.OrderDTO;
import com.devsuperior.dsdelivery.DTO.ProductDTO;
import com.devsuperior.dsdelivery.entities.Order;
import com.devsuperior.dsdelivery.entities.OrderStatus;
import com.devsuperior.dsdelivery.entities.Product;
import com.devsuperior.dsdelivery.repositories.OrderRepository;
import com.devsuperior.dsdelivery.repositories.ProductRepository;

@Service // poderia colocar @Component tambem, assim ele poderá ser injetado na camada de controle
public class OrderService {
	
	@Autowired                              // O framework fará a injeção de dependência sem a necessidade de eu criar um setOrderRepository
	private OrderRepository repository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Transactional(readOnly = true)   //Para garantir a transação e que feche a conexão com o banco, e o readonly pra evitar lock do banco de dados
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findOrdersWithProducts(); // Usando o findAll personalizado do próprio spring data jpa (vide documentation em query)
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList()); //Convertendo a lista para Stream e vice versa
	}
	
	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), Instant.now(), OrderStatus.PENDING);
		
		for (ProductDTO p : dto.getProducts()) {                    // Vou varrer cada ProductDTO presente no OrderDTO que recebi do endpoint, 
			Product product = productRepository.getOne(p.getId());  // consultar a referência do banco de dados de productRepository (entidade Product) pelo id do ProductDTO
			order.getProducts().add(product);                       // adicionando o objeto Product no meu Order instanciado
		}															// Aqui ocorre o INSERT na tabela INTERMEDIÁRIA via Spring Data JPA
		
		order = repository.save(order); //order guarda referencia ao objeto salvo
		
		return new OrderDTO(order);
	}

	@Transactional
	public OrderDTO setDelivered(Long id) {
		
		Order order = repository.getOne(id); //pegar a referência do JPA do banco de dados, e só no final ao efetuar save, acessa o banco de dados
		order.setStatus(OrderStatus.DELIVERED);
		order = repository.save(order); //order guarda referencia ao objeto salvo, aqui acessa o Banco de Dados
		
		return new OrderDTO(order);
	}

}
