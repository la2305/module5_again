package com.example.backend.controller;
import com.example.backend.model.CustomerType;
import com.example.backend.service.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Locale;

@Controller
@CrossOrigin("*")
@RequestMapping("/api/customerType")
public class CustomerTypeController {
    @Autowired
    private ICustomerTypeService iCustomerTypeService;
    @GetMapping("")
    public ResponseEntity<List<CustomerType>> showCustomerTypeList(){
        List<CustomerType> customerTypeList = iCustomerTypeService.findAllType();
        if (customerTypeList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(customerTypeList,HttpStatus.OK);
    }
}
