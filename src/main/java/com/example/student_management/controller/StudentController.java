package com.example.student_management.controller;

import com.example.student_management.model.Student;
import com.example.student_management.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping("/students")
    public List<Student> getStudents() {
        return service.getAllStudents();
    }

    @PostMapping("/students")
    public String addStudent(@RequestBody Student student) {
        return service.addStudent(student);
    }

    @PutMapping("/students/{id}")
    public String updateStudent(@PathVariable int id, @RequestBody Student student) {
        return service.updateStudent(id, student);
    }

    @DeleteMapping("/students/{id}")
    public String deleteStudent(@PathVariable int id) {
        return service.deleteStudent(id);
    }
}