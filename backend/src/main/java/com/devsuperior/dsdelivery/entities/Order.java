package com.devsuperior.dsdelivery.entities;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "tb_order")
public class Order implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include    //Considerar somente esse campo no HashCode and Equals
	private Long id;
	private String address;
	private Double latitude;
	private Double longitude;
	private Instant moment;
	private OrderStatus status;
	
	public Order(Long id, String address, Double latitude, Double longitude, Instant moment, OrderStatus status) {
		super();
		this.id = id;
		this.address = address;
		this.latitude = latitude;
		this.longitude = longitude;
		this.moment = moment;
		this.status = status;
	}

	@Setter(value=AccessLevel.NONE)
	@ManyToMany                                    // criando a tabela intermediária do relacionamento muitos para muitos
	@JoinTable(name = "tb_order_product", 
	    joinColumns = @JoinColumn(name = "order_id"),
	    inverseJoinColumns = @JoinColumn(name = "product_id"))
	private Set<Product> products = new HashSet<>();   // Initialized fields are excluded in AllArgsConstructor

	public Double getTotal() {
		Double sum = 0.0;
		
		for (Product product : products) {
			sum += product.getPrice();
		}
		
		return sum;
		
	}
	

}
