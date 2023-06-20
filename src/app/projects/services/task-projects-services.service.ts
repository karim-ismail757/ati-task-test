import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class TaskProjectsServicesService {
  apiUrl = 'http://atisystems.ddns.net:53265/api/';
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getAllProject(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}Projects/GetProjects`);
  }

  getSingleProject(id: number) {
    return this.http.get(`${this.apiUrl}/Projects/GetProject?id={id}`);
  }

  getSingleTask(id: number) {
    return this.http.get(`${this.apiUrl}/Projects/GetTask?id={id}`);
  }

  getTools() {
    return this.http.get(`${this.apiUrl}Projects/GetTools`);
  }

  getTeams() {
    return this.http.get(`${this.apiUrl}Projects/GetTeams`);
  }
  SaveTask(task: any) {
    return this.http.post(`${this.apiUrl}Projects/SaveTask`, task);
  }
  updateTask(id: number) {
    return this.http.get(`${this.apiUrl}/Projects/UpdateTask?id={id}`);
  }
  deleteTask(id: number) {
    return this.http.delete(`${this.apiUrl}Projects/DeleteTask?id=${id}`);
  }

  handleSuccess(message: any) {
    this.toastr.success(message);
  }
  hanfleError(message: any) {
        this.toastr.warning(message);

  }
}
