package com.shivaji.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.shivaji.entity.Employee;
import com.shivaji.service.EmployeeService;

@RestController
@RequestMapping("/employees")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {
	
	private final EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Employee create(@RequestBody Employee employee) {
        return service.createEmployee(employee);
    }

    @GetMapping("/{id}")
    public Employee getById(@PathVariable("id") Long id) {
        return service.getEmployeeById(id);
    }

    @GetMapping
    public List<Employee> getAll() {
        return service.getAllEmployees();
    }

    @PutMapping("/{id}")
    public Employee update(@PathVariable("id") Long id,
                           @RequestBody Employee employee) {
        return service.updateEmployee(id, employee);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable("id") Long id) {
        service.deleteEmployee(id);
    }
}
