import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';
import {FormsModule} from '@angular/forms'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-task',
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit{
task: any;//for *ng this is needed
  ngOnInit(): void {
    this.getAllTasks();
  }
  constructor(private taskservice:TaskService){} //dependency injection

  newTask:Task ={taskdescription:" ",completed:false}
  //empty array for getting
  tasks:Task[]=[];
  //for update
  updatedTask:Task = {taskdescription: " ", completed: false};
  editingTask:Task | null = null;
  createTask():void{
    this.taskservice.createTask(this.newTask).subscribe((createtask) =>{this.newTask = {taskdescription:" ",completed:false};});
//subscribe method is used to wit for user input
  }
  getAllTasks():void{
    this.taskservice.getAllTask().subscribe((tasks) =>{
      this.tasks = tasks;
    })
  }

  editTask(task:Task){
    this.editingTask=task;
    this.updatedTask={...task};//create  a copy for editing
  }
  updateTask():void{
    if(this.editingTask){
        this.taskservice.updateTask(this.editingTask.id!,this.updatedTask)
        .subscribe((result)=>{
          const index=this.tasks.findIndex((task)=>task.id == this.editingTask!.id)
          if(index !== -1){
            this.tasks[index]=result;
          }
        })
    }
  }
canceledit(){
  this.editingTask=null;
  this.updatedTask={taskdescription:"",completed:false};
}

deleteTask(taskid:any){
  this.taskservice.deleteTask(taskid).subscribe(() => {
    this.tasks.filter((task) =>task.id !== taskid)

    if(this.editingTask && this.editingTask.id == taskid){
      this.canceledit();


    }
  })


}


}
