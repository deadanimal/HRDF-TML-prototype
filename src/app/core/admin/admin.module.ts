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
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { CalenderComponent } from './calender/calender.component';
import { DepoClassComponent } from './depo-class/depo-class.component';
import { DepoCourseComponent } from './depo-course/depo-course.component';
import { DepoTrainProvComponent } from './depo-train-prov/depo-train-prov.component';
import { DepositoryComponent } from './depository/depository.component';
import { DocDontrolComponent } from './doc-dontrol/doc-dontrol.component';
import { ExamComponent } from './exam/exam.component';
import { PaymentComponent } from './payment/payment.component';
import { RolesComponent } from './roles/roles.component';
import { TrainingNeedsComponent } from './training-needs/training-needs.component';
import { TrainingOverviewComponent } from './training-overview/training-overview.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    CalenderComponent,
    DepoClassComponent,
    DepoCourseComponent,
    DepoTrainProvComponent,
    DepositoryComponent,
    DocDontrolComponent,
    ExamComponent,
    PaymentComponent,
    RolesComponent,
    TrainingNeedsComponent,
    TrainingOverviewComponent
  ],
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
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
