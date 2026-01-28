package com.shivaji.service;

import java.util.List;

import com.shivaji.entity.Employee;

public interface EmployeeService {

	    Employee createEmployee(Employee employee);

	    Employee updateEmployee(Long employeeNumber, Employee employee);

	    Employee getEmployeeById(Long employeeNumber);

	    List<Employee> getAllEmployees();

	    void deleteEmployee(Long employeeNumber);

}
