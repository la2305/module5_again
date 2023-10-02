package com.example.backend.respository;

import com.example.backend.model.CustomerType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICustomerTypeRepository extends JpaRepository<CustomerType,Integer> {
    @Query(value = "select * from customer_type",nativeQuery = true)
    List<CustomerType> findAllCustomerType();
}
