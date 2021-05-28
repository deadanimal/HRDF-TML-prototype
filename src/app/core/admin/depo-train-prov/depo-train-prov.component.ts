import { Component, OnInit, NgZone } from '@angular/core';
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
  selector: 'app-depo-train-prov',
  templateUrl: './depo-train-prov.component.html',
  styleUrls: ['./depo-train-prov.component.scss']
})
export class DepoTrainProvComponent implements OnInit {

  private chart0;

  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-lg modal-dialog-centered"
  };

  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any = [
    {
      name: "Account Sdn. Bhd.",
      dept: "Accounting",
      date: "1/1/2020",
      stat: "1"
    },
    {
      name: "Account Sdn. Bhd.",
      dept: "Accounting",
      date: "2/2/2020",
      stat: "2"
    },
    {
      name: "Account Sdn. Bhd.",
      dept: "Accounting",
      date: "3/3/2020",
      stat: "3"
    },
    {
      name: "Market Sdn. Bhd.",
      dept: "Marketing",
      date: "1/1/2020",
      stat: "1"
    },
    {
      name: "Market Sdn. Bhd.",
      dept: "AccoMarketingunting",
      date: "2/2/2020",
      stat: "2"
    },
    {
      name: "Market Sdn. Bhd.",
      dept: "Marketing",
      date: "3/3/2020",
      stat: "3"
    },
    {
      name: "Develop Sdn. Bhd.",
      dept: "Developer",
      date: "1/1/2020",
      stat: "1"
    },
    {
      name: "Develop Sdn. Bhd.",
      dept: "Developer",
      date: "2/2/2020",
      stat: "2"
    },
    {
      name: "Develop Sdn. Bhd.",
      dept: "Developer",
      date: "3/3/2020",
      stat: "3"
    },
    {
      name: "HR Sdn. Bhd.",
      dept: "Human Resource",
      date: "1/1/2020",
      stat: "1"
    },
    {
      name: "HR Sdn. Bhd.",
      dept: "Human Resource",
      date: "2/2/2020",
      stat: "2"
    },
    {
      name: "HR Sdn. Bhd.",
      dept: "Human Resource",
      date: "3/3/2020",
      stat: "3"
    }
  ]
  SelectionType = SelectionType;

  tEntries: number = 5;
  tSelected: any[] = [];
  tTemp = [];
  tActiveRow: any;
  tRows: any = [
    {
      name: "Ali",
      mail: "Ali@gmail.com",
      num: "xxx-xxx xxxx",
      cert: "1",
      stat: "1",
      summ: "Ali etc."
    },
    {
      name: "Alif",
      mail: "Alif@gmail.com",
      num: "xxx-xxx xxxx",
      cert: "1",
      stat: "2",
      summ: "Alif etc."
    },
    {
      name: "Azli",
      mail: "Azli@gmail.com",
      num: "xxx-xxx xxxx",
      cert: "1",
      stat: "3",
      summ: "Azli etc."
    },
    {
      name: "Alina",
      mail: "Alina@gmail.com",
      num: "xxx-xxx xxxx",
      cert: "1",
      stat: "1",
      summ: "Alina etc."
    },
    {
      name: "Alwani",
      mail: "Alwani@gmail.com",
      num: "xxx-xxx xxxx",
      cert: "1",
      stat: "1",
      summ: "Alwani etc."
    },
    {
      name: "Adli",
      mail: "Adli@gmail.com",
      num: "xxx-xxx xxxx",
      cert: "1",
      stat: "1",
      summ: "Adli etc."
    },
    {
      name: "Alifah",
      mail: "Alifah@gmail.com",
      num: "xxx-xxx xxxx",
      cert: "1",
      stat: "1",
      summ: "Alifah etc."
    },
    {
      name: "Aiman",
      mail: "Aiman@gmail.com",
      num: "xxx-xxx xxxx",
      cert: "1",
      stat: "1",
      summ: "Aiman etc."
    },
    {
      name: "Aina",
      mail: "Aina@gmail.com",
      num: "xxx-xxx xxxx",
      cert: "1",
      stat: "1",
      summ: "Aina etc."
    },
    {
      name: "Aminah",
      mail: "Aminah@gmail.com",
      num: "xxx-xxx xxxx",
      cert: "1",
      stat: "1",
      summ: "Aminah etc."
    }
  ]
  tSelectionType = SelectionType;


  constructor(
    private zone: NgZone
  ) {
    this.tableTemp = this.tableRows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };

    });
    this.tTemp = this.tRows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };

    });
  }

  ngOnInit() {
    this.getCharts()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart0) {
        this.chart0.dispose()
      }
    })
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartTrainProv()
    })
  }

  getChartTrainProv() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart
    let chart = am4core.create("chartTrainProv", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        country: "Lithuania",
        value: 260
      },
      {
        country: "Czechia",
        value: 230
      },
      {
        country: "Ireland",
        value: 200
      },
      {
        country: "Germany",
        value: 165
      },
      {
        country: "Australia",
        value: 139
      },
      {
        country: "Austria",
        value: 128
      }
    ];

    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.radiusValue = "value";
    series.dataFields.category = "country";
    series.slices.template.cornerRadius = 6;
    series.colors.step = 3;

    series.hiddenState.properties.endAngle = -90;

    //chart.legend = new am4charts.Legend();

    this.chart0 = chart;
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  ontActivate(event) {
    this.tActiveRow = event.row;
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  entriesChange1($event) {
    this.tEntries = $event.target.value;
  }

  filterTable($event) {
    
    let val = $event.target.value;
    this.tableTemp = this.tableRows.filter(function (d) {
      for (var key in d) {
        if (/*isNaN(d[key]) && */d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  filterTable1($event) {
    let val = $event.target.value;
    this.tTemp = this.tRows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

}
