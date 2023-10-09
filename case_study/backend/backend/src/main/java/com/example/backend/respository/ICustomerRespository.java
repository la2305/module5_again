package com.example.backend.respository;

import com.example.backend.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Repository
public interface ICustomerRespository extends JpaRepository<Customer, Integer> {
    @Query(value = "select  * from  customer where name like :searchName and customer_type_id like :idType", nativeQuery = true)
    Page<Customer> findCustomerByNameContainingAndCustomerTypeID(Pageable pageable, @Param(value = "searchName") String searchName, @Param(value = "idType") String idType);

    @Transactional
    @Modifying
    @Query(value = "delete from customer where id= :id", nativeQuery = true)
    void deleteCustomerById(@Param(value = "id") int id);


    @Transactional
    @Modifying
    @Query(value = "INSERT INTO customer (dob,email,gender,identity,location,name,phone,customer_type_id) VALUES ( :#{#customer.dob}, :#{#customer.email}, :#{#customer.gender}, :#{#customer.identity}, :#{#customer.location}, :#{#customer.name}, :#{#customer.phone}, :#{#customer.customerType})",nativeQuery = true)
    void createCustomer(@Param("customer") Customer customer);

    @Query(value = "select * from  customer where id= :id",nativeQuery = true)
    Customer getCustomerById(@Param(value = "id") int id);

    @Transactional
    @Modifying
    @Query(value = "update customer set dob = :dob, email = :email, gender = :gender, identity = :identity, location = :location, name = :name, phone = :phone , customer_type_id = :typeId where id= :id", nativeQuery = true)
    void editCustomer(@Param(value = "id") int id, @Param(value = "dob") Date dob,@Param(value = "email") String email,@Param(value = "gender") boolean gender, @Param(value = "identity") String identity,@Param(value = "location") String location, @Param(value = "name") String name,@Param(value = "phone") String phone,@Param(value = "typeId") int typeId);
}
