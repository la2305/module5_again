package com.example.backend.service;

import com.example.backend.model.CustomerType;
import com.example.backend.respository.ICustomerTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerTypeService implements  ICustomerTypeService{
    @Autowired
    private ICustomerTypeRepository iCustomerTypeRepository;
    @Override
    public List<CustomerType> findAllType() {
        return iCustomerTypeRepository.findAllCustomerType();
    }
}
