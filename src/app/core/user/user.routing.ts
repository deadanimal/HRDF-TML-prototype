import { Routes } from '@angular/router';
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

export const UserRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'class-registration',
                component: ClassRegistrationComponent
            },
            {
                path: 'training',
                children: [
                    {
                        path: 'registration',
                        component: TrainingRegistrationComponent
                    },
                    {
                        path: 'list',
                        component: TrainingListComponent
                    },
                    {
                        path: 'exercise',
                        component: TrainingExerciseComponent
                    },
                    {
                        path: 'question',
                        component: TrainingQuestionComponent
                    }
                ]
            },
            {
                path: 'exam',
                children: [
                    {
                        path: 'registration',
                        component: ExamRegistrationComponent
                    },
                    {
                        path: 'list',
                        component: ExamListComponent
                    },
                    {
                        path: 'question',
                        component: ExamQuestionComponent
                    }
                ]
            },
            {
                path: 'online-course',
                children: [
                    {
                        path: 'main',
                        component: OnlineCourseMainComponent
                    },
                    {
                        path: 'class',
                        component: OnlineCourseClassComponent
                    }
                ]
            },
            {
                path: 'survey',
                component: SurveyComponent
            },
            {
                path: 'discussion',
                component: DiscussionComponent
            },
            {
                path: 'calendar',
                component: CalendarComponent
            },
            {
                path: 'assessment',
                component: AssessmentComponent
            }
        ]
    }
]