import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-training-question',
  templateUrl: './training-question.component.html',
  styleUrls: ['./training-question.component.scss']
})
export class TrainingQuestionComponent implements OnInit {

  constructor(private router: Router) { }

  navigatePage(path: String) {
    if (path == 'discussion') {
      return this.router.navigate(['/user/discussion'])
    }
  }

  ngOnInit() {
  }

}
