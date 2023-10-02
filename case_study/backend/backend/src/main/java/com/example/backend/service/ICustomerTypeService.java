package com.example.backend.service;

import com.example.backend.model.CustomerType;

import java.util.List;

public interface ICustomerTypeService {
    List<CustomerType> findAllType();
}
