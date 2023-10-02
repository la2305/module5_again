package com.example.backend.controller;

import com.example.backend.model.Customer;
import com.example.backend.service.ICustomerService;
import com.example.backend.service.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin("*")
@RequestMapping("/api/customer")
public class CustomerController {
    @Autowired
    private ICustomerService iCustomerService;
    @Autowired
    private ICustomerTypeService iCustomerTypeService;

    @GetMapping("")
    public ResponseEntity<Page<Customer>> showList(@RequestParam(name = "_page", defaultValue = "0") int page,
                                                   @RequestParam(name = "name_like", defaultValue = "%") String searchName,
                                                   @RequestParam(name = "customerType.id", defaultValue = "%") String idType) {
        Pageable pageable = PageRequest.of(page, 5);
        Page<Customer> customerPage = iCustomerService.getAllCustomerByNameAndByCustomerType(pageable, searchName, idType);
        return new ResponseEntity<>(customerPage, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Customer> deleteCustomerById(@PathVariable int id){
        iCustomerService.deleteCustomerById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<?> createCustomer(@RequestBody Customer customer){
        iCustomerService.save(customer);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
//    @GetMapping("/{id}")
//    public ResponseEntity<Product> showDetail(@PathVariable int id) {
//        Product product = productService.findById(id);
//        if (product == null) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(product, HttpStatus.OK);
//
//    }
//
//    @PatchMapping("/edit")
//    public ResponseEntity<Product> updateProduct( @RequestBody Product product) {
//        productService.save(product);
//        return new ResponseEntity<>(HttpStatus.OK);
//
//    }

}
