export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-blue'
  },
  {
    path: '/admin/trainOverview',
    title: 'Training Overview',
    type: 'link',
    icontype: 'fab fa-leanpub text-blue'
  },
  {
    path: '/admin/exam',
    title: 'Exam',
    type: 'link',
    icontype: 'fas fa-diagnoses text-blue'
  },
  {
    path: '/admin/trainNeeds',
    title: 'Training Needs',
    type: 'link',
    icontype: 'fas fa-th-list text-blue'
  },
  {
    path: '/admin/calender',
    title: 'Calendar',
    type: 'link',
    icontype: 'far fa-calendar-alt text-blue'
  },
  {
    path: '/admin/docControl',
    title: 'Document Control',
    type: 'link',
    icontype: 'far fa-file-alt text-blue'
  },
  {
    path: '/admin/depository',
    title: 'Depository',
    type: 'sub',
    icontype: 'fas fa-archive text-blue',
    collapse: 'depository',
    isCollapsed: true,
    children: [
      { path: 'depo-course', title: 'Course Specific', type: 'link' },
      { path: 'depo-class', title: 'Class Specific', type: 'link' },
      { path: 'depo-train-prov', title: 'Training Provider', type: 'link' }
    ]
  },
  {
    path: '/admin/user',
    title: 'User',
    type: 'link',
    icontype: 'fas fa-users text-blue'
  },
  {
    path: '/admin/roles',
    title: 'Roles',
    type: 'link',
    icontype: 'fas fa-user-tag text-blue'
  },
  {
    path: '/admin/payment',
    title: 'Payment',
    type: 'link',
    icontype: 'fas fa-cash-register text-blue'
  },
  {
    path: '/admin/report',
    title: 'Reporting',
    type: 'link',
    icontype: 'fas fa-chart-bar text-blue'
  },
  {
    path: '/admin/audit-trails',
    title: 'Audit Trails',
    type: 'link',
    icontype: 'fas fa-shoe-prints text-blue'
  },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/user/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/user/class-registration',
    title: 'Class Registration',
    type: 'link',
    icontype: '	fas fa-graduation-cap text-warning'
  },
  {
    path: '/user/training',
    title: 'Training',
    type: 'sub',
    icontype: 'fas fa-book-open text-warning',
    collapse: 'training',
    isCollapsed: true,
    children: [
      { path: 'registration', title: 'Overview', type: 'link' },
      { path: 'list', title: 'List', type: 'link' }
      // { path: 'exercise', title: 'Exercise', type: 'link' }
    ]
  },
  {
    path: '/user/exam',
    title: 'Exam',
    type: 'sub',
    icontype: 'fas fa-scroll text-warning',
    collapse: 'exam',
    isCollapsed: true,
    children: [
      { path: 'registration', title: 'Overview', type: 'link' },
      { path: 'list', title: 'List', type: 'link' }
      // { path: 'question', title: 'Question', type: 'link' }
    ]
  },
  {
    path: '/user/online-course',
    title: 'Online Course',
    type: 'sub',
    icontype: 'fas fa-globe-asia text-warning',
    collapse: 'online-course',
    isCollapsed: true,
    children: [
      { path: 'main', title: 'Course', type: 'link' },
      { path: 'class', title: 'Class', type: 'link' }
    ]
  },
  {
    path: '/user/survey',
    title: 'Survey',
    type: 'link',
    icontype: 'fas fa-poll text-warning'
  },
  {
    path: '/user/discussion',
    title: 'Discussion',
    type: 'link',
    icontype: 'fas fa-comments text-warning'
  },
  {
    path: '/user/calendar',
    title: 'Calendar',
    type: 'link',
    icontype: 'fas fa-calendar-alt text-warning'
  },
  {
    path: '/user/assessment',
    title: 'Assessment',
    type: 'link',
    icontype: 'fas fa-exclamation-circle text-warning'
  }
  /*{
    path: '/management',
    title: 'Management',
    type: 'link',
    icontype: 'fas fa-tasks text-red'
  },
  {
    path: '/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-green'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }/*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];