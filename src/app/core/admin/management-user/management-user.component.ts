import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';
import { MocksService } from 'src/app/shared/services/mocks/mocks.service';

import * as moment from 'moment';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
am4core.useTheme(am4themes_animated);

import swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-management-user',
  templateUrl: './management-user.component.html',
  styleUrls: ['./management-user.component.scss']
})
export class ManagementUserComponent implements OnInit, OnDestroy {

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any = [
    {
      name: "Ali",
      mail: "KL1@gmail.com",
      userName: "Eagle1",
      userType: "3"
    },
    {
      name: "Abu",
      mail: "KL2@gmail.com",
      userName: "Eagle3",
      userType: "1"
    },
    {
      name: "Anis",
      mail: "Selangor1@gmail.com",
      userName: "Turtle7",
      userType: "3"
    },
    {
      name: "Aiman",
      mail: "KL3@gmail.com",
      userName: "Eagle9",
      userType: "2"
    },
    {
      name: "Aizat",
      mail: "Perlis@gmail.com",
      userName: "Phoenix8",
      userType: "3"
    },
    {
      name: "Affif",
      mail: "Selangor2@gmail.com",
      userName: "Turtle2",
      userType: "3"
    },
    {
      name: "Azli",
      mail: "Melaka@gmail.com",
      userName: "Lion4",
      userType: "1"
    },
    {
      name: "Azizah",
      mail: "Johor1@gmail.com",
      userName: "Tiger7",
      userType: "3"
    },
    {
      name: "Afiq",
      mail: "Johor2@gmail.com",
      userName: "Tiger3",
      userType: "2"
    },
    {
      name: "Adli",
      mail: "KL4@gmail.com",
      userName: "Eagle3",
      userType: "1"
    }
  ]
  SelectionType = SelectionType;

  // Chart
  chart: any

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  // Form
  registerForm: FormGroup
  registerFormMessages = {
    'name': [
      { type: 'required', message: 'Name is required' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'A valid email is required' }
    ]
  }

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
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
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ]))
    })
    this.getCharts()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose()
      }
    })
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartRegUser()
    })
  }

  getChartRegUser() {
    let chart = am4core.create("chartRegUser", am4charts.XYChart);

    // Add data
    chart.data = [{
      "country": "Jan",
      "visits": 2025
    }, {
      "country": "Feb",
      "visits": 1882
    }, {
      "country": "March",
      "visits": 1809
    }, {
      "country": "April",
      "visits": 1322
    }, {
      "country": "May",
      "visits": 1122
    }, {
      "country": "June",
      "visits": 1114
    }, {
      "country": "July",
      "visits": 984
    }, {
      "country": "August",
      "visits": 711
    }, {
      "country": "Sept",
      "visits": 665
    }, {
      "country": "Oct",
      "visits": 580
    }, {
      "country": "Nov",
      "visits": 443
    }, {
      "country": "Dec",
      "visits": 441
    }];

    // Create axes

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
      if (target.dataItem && target.dataItem.index & +true) {
        return dy + 25;
      }
      return dy;
    });

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

    this.chart = chart;
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
    this.registerForm.reset()
  }

  confirm() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to create this new user?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-info",
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
      text: "A new user has been created!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    }).then((result) => {
      if (result.value) {
        this.modal.hide()
        this.registerForm.reset()
      }
    })
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

}
