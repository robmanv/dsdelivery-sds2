package com.devsuperior.dsdelivery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsdelivery.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{ // Já possui algumas implementações padrões para atualizar a entidade, meu ProductRepository passa a ter todas as operações de acesso ao BD
	
	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products "
		   + " WHERE obj.status = 0 ORDER BY obj.moment ASC") // Criando método personalizado via JPA (linguagem JPQL), Order nome da classe, products e moment atributo de Order
	List<Order> findOrdersWithProducts();
}
