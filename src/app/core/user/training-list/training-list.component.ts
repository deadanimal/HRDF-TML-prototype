import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.scss']
})
export class TrainingListComponent implements OnInit {

  constructor(private router: Router) { }

  navigatePage(path: String) {
    if (path == 'training-exercise') {
      return this.router.navigate(['/user/training/exercise'])
    }
  }

  ngOnInit() {
  }

}
