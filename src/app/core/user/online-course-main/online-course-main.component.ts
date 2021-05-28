import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-course-main',
  templateUrl: './online-course-main.component.html',
  styleUrls: ['./online-course-main.component.scss']
})
export class OnlineCourseMainComponent implements OnInit {

  // Toggle
  editEnabled: boolean = false

  // Form
  editForm: FormGroup
  editFormMessages = {
    'name': [
      { type: 'required', message: 'Name is required' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'A valid email is required' }
    ]
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ]))
    })
  }

  toggleEdit() {
    this.editEnabled = !this.editEnabled
  }

  confirm() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to save this edit?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-info",
      confirmButtonText: "Confirm",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.value) {
        this.edit()
      }
    })
  }

  navigatePage(path: String) {
    if (path == 'class') {
      return this.router.navigate(['/user/online-course/class'])
    }
  }

  edit() {
    swal.fire({
      title: "Success",
      text: "Update has been saved",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    }).then((result) => {
      if (result.value) {
        this.editForm.reset()
      }
    })
  }
}
