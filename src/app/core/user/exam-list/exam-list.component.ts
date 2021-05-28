import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {

  constructor(private router: Router) { }

  navigatePage(path: String) {
    if (path == 'exam-question') {
      return this.router.navigate(['/user/exam/question'])
    }
  }

  ngOnInit() {
  }

}
