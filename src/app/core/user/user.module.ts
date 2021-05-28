import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassRegistrationComponent } from './class-registration/class-registration.component';
import { TrainingRegistrationComponent } from './training-registration/training-registration.component';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingExerciseComponent } from './training-exercise/training-exercise.component';
import { ExamRegistrationComponent } from './exam-registration/exam-registration.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamQuestionComponent } from './exam-question/exam-question.component';
import { OnlineCourseMainComponent } from './online-course-main/online-course-main.component';
import { OnlineCourseClassComponent } from './online-course-class/online-course-class.component';
import { SurveyComponent } from './survey/survey.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { TrainingQuestionComponent } from './training-question/training-question.component';

@NgModule({
  declarations: [DashboardComponent, ClassRegistrationComponent, TrainingRegistrationComponent, TrainingListComponent, TrainingExerciseComponent, ExamRegistrationComponent, ExamListComponent, ExamQuestionComponent, OnlineCourseMainComponent, OnlineCourseClassComponent, SurveyComponent, DiscussionComponent, CalendarComponent, AssessmentComponent, TrainingQuestionComponent],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(UserRoutes)
  ]
})
export class UserModule { }
