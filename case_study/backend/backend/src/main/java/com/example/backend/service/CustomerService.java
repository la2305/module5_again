package com.example.backend.service;

import com.example.backend.model.Customer;
import com.example.backend.respository.ICustomerRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService{
    @Autowired
    private ICustomerRespository iCustomerRespository;

    @Override
    public Page<Customer> getAllCustomerByNameAndByCustomerType(Pageable pageable, String searchName, String idType) {
        return iCustomerRespository.findCustomerByNameContainingAndCustomerTypeID(pageable,"%"+searchName+"%",idType);
    }


    @Override
    public void save(Customer customer) {
        iCustomerRespository.createCustomer(customer);
    }

    @Override
    public Customer findCustomerById(int id) {
        return iCustomerRespository.getCustomerById(id);
    }

    @Override
    public void deleteCustomerById(int id) {
        iCustomerRespository.deleteCustomerById(id);
    }

    @Override
    public void editCustomer(Customer customer) {
        iCustomerRespository.editCustomer(customer.getId(),customer.getDob().toString(),customer.getEmail(),customer.isGender(),customer.getIdentity(),customer.getLocation(),customer.getName(),customer.getPhone(),customer.getCustomerType().getId());
    }
}
