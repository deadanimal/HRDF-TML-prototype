import { Component, OnInit, NgZone, OnDestroy, TemplateRef, ViewChild  } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

  private chart0;
  private chart1;
  private chart2;
  private chart3;

  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any = [
    {
      examid: "EXAM403",
      examName: "Exam 403",
      examDate: "3/6/2020",
      examTime: "6:30 PM"
    },
    {
      examid: "EXAM234",
      examName: "Exam 234",
      examDate: "1/6/2020",
      examTime: "4:30 PM"
    },
    {
      examid: "EXAM714",
      examName: "Exam 714",
      examDate: "12/2/2020",
      examTime: "11:30 AM"
    },
    {
      examid: "EXAM666",
      examName: "Exam 666",
      examDate: "6/6/2020",
      examTime: "2:00 PM"
    },
    {
      examid: "EXAM216",
      examName: "Exam 216",
      examDate: "13/3/2020",
      examTime: "10:30 AM"
    },
    {
      examid: "EXAM111",
      examName: "Exam 111",
      examDate: "1/1/2021",
      examTime: "1:30 PM"
    },
    {
      examid: "EXAM222",
      examName: "Exam 222",
      examDate: "2/2/2022",
      examTime: "2:20 PM"
    },
    {
      examid: "EXAM777",
      examName: "Exam 777",
      examDate: "7/7/2020",
      examTime: "9:30 AM"
    },
    {
      examid: "EXAM123",
      examName: "Exam 123",
      examDate: "3/2/2021",
      examTime: "4:30 PM"
    },
    {
      examid: "EXAM299",
      examName: "Exam 299",
      examDate: "2/9/2020",
      examTime: "1:30 PM"
    },
    {
      examid: "EXAM824",
      examName: "Exam 824",
      examDate: "2/4/2020",
      examTime: "8:30 AM"
    },
    {
      examid: "EXAM370",
      examName: "Exam 270",
      examDate: "30/7/2020",
      examTime: "7:30 PM"
    },
    {
      examid: "EXAM155",
      examName: "Exam 403",
      examDate: "3/6/2020",
      examTime: "6:30 PM"
    }
  ]
  SelectionType = SelectionType;

  constructor(
    private modalService: BsModalService,
    private zone: NgZone
  ) {
    this.tableTemp = this.tableRows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };

    });
  }

  ngOnInit() {
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value;
    this.tableTemp = this.tableRows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
    //this.registerForm.reset()
  }

}
