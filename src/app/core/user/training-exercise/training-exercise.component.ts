import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-training-exercise',
  templateUrl: './training-exercise.component.html',
  styleUrls: ['./training-exercise.component.scss']
})
export class TrainingExerciseComponent implements OnInit {

  constructor(private router: Router) { }

  navigatePage(path: String) {
    if (path == 'training-question') {
      return this.router.navigate(['/user/training/question'])
    }
  }

  ngOnInit() {
  }

}
