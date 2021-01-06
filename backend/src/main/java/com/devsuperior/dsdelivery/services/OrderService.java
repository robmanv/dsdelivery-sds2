package com.devsuperior.dsdelivery.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdelivery.DTO.OrderDTO;
import com.devsuperior.dsdelivery.entities.Order;
import com.devsuperior.dsdelivery.repositories.OrderRepository;

@Service // poderia colocar @Component tambem, assim ele poderá ser injetado na camada de controle
public class OrderService {
	
	@Autowired                              // O framework fará a injeção de dependência sem a necessidade de eu criar um setOrderRepository
	private OrderRepository repository;
	
	@Transactional(readOnly = true)   //Para garantir a transação e que feche a conexão com o banco, e o readonly pra evitar lock do banco de dados
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findOrdersWithProducts(); // Usando o findAll personalizado do próprio spring data jpa (vide documentation em query)
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList()); //Convertendo a lista para Stream e vice versa
	}
}
