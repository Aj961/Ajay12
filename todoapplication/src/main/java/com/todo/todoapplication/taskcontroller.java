package com.todo.todoapplication;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api/tasks")
public class taskcontroller {
    @Autowired
    private todorepository repo;//dependency injection
    @GetMapping("/hello")
    public String helloworld(){
        return "welcome";

    }
    @PostMapping()
    public task createtask(@RequestBody task t){
        repo.save(t);
        return t;

 
    }
    @GetMapping()
    public List<task> getAllTask(){
        return repo.findAll();
    }

    @PutMapping("/{id}")
    public task updatetask(@PathVariable Long id, @RequestBody task t){
        t.setId(id);
        return repo.save(t);
    }
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id){
        repo.deleteById(id);
    }
}

