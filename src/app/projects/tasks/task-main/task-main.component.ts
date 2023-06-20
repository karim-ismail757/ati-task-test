import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskProjectsServicesService } from './../../services/task-projects-services.service';
@Component({
  selector: 'app-task-main',
  templateUrl: './task-main.component.html',
  styleUrls: ['./task-main.component.scss'],
})
export class TaskMainComponent implements OnInit {
  Form!: FormGroup;
  stepsAll!: FormGroup;
  stoc: any;
  steps: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private pro: TaskProjectsServicesService
  ) {}

  ngOnInit() {
    this.Form = this.fb.group({
      name: new FormControl(''),
      startDate: new FormControl(''),
      EndDate: new FormControl(''),
      time: new FormControl(''),
      assignTo: new FormControl(''),

      childOf: new FormControl(''),
      ParentOf: new FormControl(''),
      tools: this.fb.array(['tool1']),
      steps: this.fb.array(['step1']),
    });
  }

  onSubmit(form: any) {
    console.log(form.value);
    var data = {
      name: form.value.name,
      startDate: form.value.startDate,
      endDate: form.value.endDate,
      time: form.value.time,
      assignTo: form.value.assignTo,
      childof: form.value.childOf,
      parentof: form.value.ParentOf,
      tools: form.value.tools,
      steps: form.value.steps,
    };
    this.pro.SaveTask(data).subscribe((res) => {
      console.log(res);
    });
  }

  addTools(e: any) {
    console.log(e);
    this.Form.controls['steps'].setValue([e]);
    this.Form.controls['steps'].reset();
  }
  addSteps(e: any) {
    console.log(e);
    this.Form.controls['steps'].setValue([e]);
    this.Form.controls['steps'].reset();
  }

  returnHome() {
    this.router.navigate([''])
  }
}
