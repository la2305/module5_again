package com.example.backend.respository;

import com.example.backend.model.CustomerType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ICustomerTypeRepository extends JpaRepository<CustomerType,Integer> {
    @Query(value = "select * from customer_type",nativeQuery = true)
    List<CustomerType> findAllCustomerType();
}
