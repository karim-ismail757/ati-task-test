import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './projects/project/project.component';
import { TaskMainComponent } from './projects/tasks/task-main/task-main.component';
import { SingleTaskComponent } from './projects/tasks/single-task/single-task.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { PieChartComponent } from './projects/tasks/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    TaskMainComponent,
    SingleTaskComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
