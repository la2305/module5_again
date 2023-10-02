package com.example.backend.service;

import com.example.backend.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICustomerService {
    Page<Customer> getAllCustomerByNameAndByCustomerType(Pageable pageable, String searchName, String idType);
    void save(Customer customer);
    Customer findCustomerById(int id);
    void deleteCustomerById(int id);
    void editCustomer(Customer customer);
}
