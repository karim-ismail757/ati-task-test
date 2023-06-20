import { Component, OnInit } from '@angular/core';
import { TaskProjectsServicesService } from '../services/task-projects-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projects: any = [];
  selectBoxValue = 1;
  tasksOne: any;
  tasksTwo: any;
  projectToolOne: any;
  projectToolTwo: any;
  taskData = true;
  chart = false;

  constructor(
    private proTask: TaskProjectsServicesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects() {
    this.proTask.getAllProject().subscribe((res) => {
      this.projects = res;
      console.log(this.projects);
      this.tasksOne = res[0].TaskList;
      this.tasksTwo = res[1].TaskList;
      this.projectToolTwo = res[1].TaskList[0].ProjectTools;
      this.projectToolOne = res[0].TaskList[0].ProjectTools;

      console.log(this.projectToolOne);
      console.log(this.tasksOne);
    });
  }

  getSelectBoxValue(e: any) {
    this.selectBoxValue = 1;
    console.log(e.target.value);
    var value = e.target.value;
    this.selectBoxValue = e.target.value;
  }

  deleteTaskOne(id: number) {
    this.proTask.deleteTask(id).subscribe((res) => {
      console.log(res);
      this.proTask.handleSuccess('the task Deleted Successfully');
      this.tasksOne.pop();
    });
  }

  deleteTaskTwo(id: number) {
    this.proTask.deleteTask(id).subscribe((res) => {
      console.log(res);
      this.proTask.handleSuccess('the task Deleted Successfully');
      this.tasksTwo.pop();
    });
  }

  navigateToTask() {
    this.router.navigate(['/add']);
  }

  appearDetails() {
    this.taskData = true
        this.chart = false;

  }

  appeaerChart() {
    this.chart = true
    this.taskData = false;
  }
}
