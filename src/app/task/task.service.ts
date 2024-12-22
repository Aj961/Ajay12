import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

private apiurl="http://localhost:8080/api/tasks";
  constructor(private httpclient:HttpClient) {//it does not understand http//in post man thats why we using httpclient:HttpClent
    
    }
    createTask(newTask:Task):Observable<Task>{ //method
      return this.httpclient.post<Task>(this.apiurl, newTask);

  }

  getAllTask():Observable<Task[]>{
    return this.httpclient.get<Task[]>(this.apiurl)
  }
  updateTask(taskid:number,updatedTask:Task):Observable<Task>{
    return this.httpclient.put<Task>(this.apiurl+'/' + taskid,updatedTask)
  }

  deleteTask(taskid:number){
    return this.httpclient.delete(this.apiurl+'/' +taskid)
  }
}
