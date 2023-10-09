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
    @GetMapping("/{id}")
    public ResponseEntity<Customer> showCustomerDetail(@PathVariable int id) {
        Customer customer = iCustomerService.findCustomerById(id);
        if (customer == null) {
            return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(customer,HttpStatus.OK);
        }
    }
    @PutMapping("/edit/{id}")
    public ResponseEntity<Customer> editCustomer (@PathVariable int id, @RequestBody Customer customer){
        if(iCustomerService.findCustomerById(id) ==null){
            return ResponseEntity.notFound().build();
        } else {
            iCustomerService.editCustomer(customer);
            return ResponseEntity.ok(customer);
        }
    }
}
