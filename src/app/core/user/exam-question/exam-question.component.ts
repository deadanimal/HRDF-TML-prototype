import { Component, NgZone, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import swal from 'sweetalert2';

@Component({
  selector: "app-exam-question",
  templateUrl: "./exam-question.component.html",
  styleUrls: ["./exam-question.component.scss"],
})
export class ExamQuestionComponent implements OnInit {
  timeLeft: number = 60;
  interval;

  constructor(private zone: NgZone, private router: Router) {}

  ngOnInit() {
    this.startTimer();
  }

  navigatePage(path: String) {
    if (path == "exam-list") {
      return this.router.navigate(["/user/exam/list"]);
    }
  }

  confirm() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to proceed this action?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Confirm",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.value) {
        this.register()
      }
    })
  }

  register() {
    swal.fire({
      title: "Success",
      text: "Now you heading back to List of examination.",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    }).then((result) => {
      if (result.value) {
        return this.router.navigate(["/user/exam/list"]);
      }
    })
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
