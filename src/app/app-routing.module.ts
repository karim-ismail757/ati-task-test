import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './projects/project/project.component';
import { TaskMainComponent } from './projects/tasks/task-main/task-main.component';
import { PieChartComponent } from './projects/tasks/pie-chart/pie-chart.component';

const routes: Routes = [
  { path: '', component: ProjectComponent },
  { path: 'add', component: TaskMainComponent },
  { path: 'chart', component: PieChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
