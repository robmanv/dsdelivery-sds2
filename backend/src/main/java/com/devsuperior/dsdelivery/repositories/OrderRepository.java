package com.devsuperior.dsdelivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsdelivery.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{ // Já possui algumas implementações padrões para atualizar a entidade, meu ProductRepository passa a ter todas as operações de acesso ao BD

}
