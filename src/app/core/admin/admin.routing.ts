import { Routes } from '@angular/router';
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

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'trainOverview',
                component: TrainingOverviewComponent
            },
            {
                path: 'exam',
                component: ExamComponent
            },
            {
                path: 'trainNeeds',
                component: TrainingNeedsComponent
            },
            {
                path: 'calender',
                component: CalenderComponent
            },
            {
                path: 'docControl',
                component: DocDontrolComponent
            },
            {
                path: 'depository',
                children: [
                    
                    {
                        path: 'depo-course',
                        component: DepoCourseComponent
                    },
                    {
                        path: 'depo-class',
                        component: DepoClassComponent
                    },
                    {
                        path: 'depo-train-prov',
                        component: DepoTrainProvComponent
                    }
                ]
            },
            {
                path: 'user',
                component: ManagementUserComponent
            },
            {
                path: 'roles',
                component: RolesComponent
            },
            {
                path: 'payment',
                component: PaymentComponent
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'audit-trails',
                component: ManagementAuditComponent
            }
        ]
    }
]