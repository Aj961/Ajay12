package com.todo.todoapplication;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="tododetails")
public class task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String taskdescription;
    private String completed;
    public task() {
    }
    public task(long id, String taskdescription, String completed) {
        this.id = id;
        this.taskdescription = taskdescription;
        this.completed = completed;
    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getTaskdescription() {
        return taskdescription;
    }
    public void setTaskdescription(String taskdescription) {
        this.taskdescription = taskdescription;
    }
    public String getCompleted() {
        return completed;
    }
    public void setCompleted(String completed) {
        this.completed = completed;
    }

    
}
