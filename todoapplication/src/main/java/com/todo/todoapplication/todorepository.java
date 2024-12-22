package com.todo.todoapplication;

import org.springframework.data.jpa.repository.JpaRepository;

public interface todorepository extends JpaRepository<task,Long> {

    
}
