package com.shivaji.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.shivaji.entity.Employee;
import com.shivaji.repo.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService{

	private final EmployeeRepository repository;

    public EmployeeServiceImpl(EmployeeRepository repository) {
    	this.repository = repository;
    }
	
	@Override
	public Employee createEmployee(Employee employee) {
		return repository.save(employee);
	}

	@Override
	public Employee updateEmployee(Long employeeNumber, Employee employee) {
		Employee existing = repository.findById(employeeNumber)
                .orElseThrow(() ->
                        new RuntimeException("Employee not found"));

        existing.setName(employee.getName());
        existing.setSalary(employee.getSalary());
		return repository.save(existing);
	}

	@Override
	public Employee getEmployeeById(Long employeeNumber) {
		return repository.findById(employeeNumber)
                .orElseThrow(() ->
                        new RuntimeException("Employee not found"));
	}

	@Override
	public List<Employee> getAllEmployees() {
		return repository.findAll();
	}

	@Override
	public void deleteEmployee(Long employeeNumber) {
		repository.deleteById(employeeNumber);
		
	}

}
