package com.example.student_management.service;

import com.example.student_management.model.Student;
import com.example.student_management.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    public String addStudent(Student student) {
        repo.save(student);
        return "Student Saved in DB 🔥";
    }

    public String updateStudent(int id, Student student) {
        student.setId(id);
        repo.save(student);
        return "Student Updated in DB 🔥";
    }

    public String deleteStudent(int id) {
        repo.deleteById(id);
        return "Student Deleted from DB 🔥";
    }
}