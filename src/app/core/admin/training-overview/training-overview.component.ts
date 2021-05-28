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
  selector: 'app-training-overview',
  templateUrl: './training-overview.component.html',
  styleUrls: ['./training-overview.component.scss']
})
export class TrainingOverviewComponent implements OnInit {

  private chart0;
  private chart1;
  private chart2;
  private chart3;

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
      trainid: "1",
      trainName: "Training A73",
      trainPart: "07",
      trainSdate: "23/6/2020",
      trainEdate: "3/6/2021",
      trainStat: "1"
    },
    {
      trainid: "2",
      trainName: "Training A97",
      trainPart: "67",
      trainSdate: "28/3/2020",
      trainEdate: "28/3/2021",
      trainStat: "2"
    },
    {
      trainid: "3",
      trainName: "Training A99",
      trainPart: "29",
      trainSdate: "30/6/2020",
      trainEdate: "30/6/2021",
      trainStat: "1"
    },
    {
      trainid: "4",
      trainName: "Training A34",
      trainPart: "13",
      trainSdate: "2/5/2020",
      trainEdate: "1/5/2021",
      trainStat: "2"
    },
    {
      trainid: "5",
      trainName: "Training A22",
      trainPart: "35",
      trainSdate: "3/4/2020",
      trainEdate: "3/4/2021",
      trainStat: "2"
    },
    {
      trainid: "6",
      trainName: "Training A54",
      trainPart: "64",
      trainSdate: "24/2/2020",
      trainEdate: "22/1/2021",
      trainStat: "2"
    },
    {
      trainid: "7",
      trainName: "Training A88",
      trainPart: "23",
      trainSdate: "1/2/2021",
      trainEdate: "30/4/2021",
      trainStat: "2"
    },
    {
      trainid: "8",
      trainName: "Training A14",
      trainPart: "98",
      trainSdate: "3/4/2020",
      trainEdate: "5/7/2021",
      trainStat: "1"
    },
    {
      trainid: "9",
      trainName: "Training A01",
      trainPart: "10",
      trainSdate: "1/1/2021",
      trainEdate: "2/1/2021",
      trainStat: "2"
    },
    {
      trainid: "10",
      trainName: "Training A62",
      trainPart: "07",
      trainSdate: "3/4/2020",
      trainEdate: "3/8/2020",
      trainStat: "2"
    },
    {
      trainid: "11",
      trainName: "Training A51",
      trainPart: "55",
      trainSdate: "2/4/2020",
      trainEdate: "14/5/2021",
      trainStat: "2"
    },
    {
      trainid: "12",
      trainName: "Training A32",
      trainPart: "01",
      trainSdate: "21/5/2021",
      trainEdate: "22/5/2021",
      trainStat: "2"
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
    this.getCharts()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart0) {
        this.chart0.dispose()
      }
      if (this.chart1) {
        this.chart1.dispose()
      }
      if (this.chart2) {
        this.chart2.dispose()
      }
      if (this.chart3) {
        this.chart3.dispose()
      }
    })
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartObjAchieve()
      this.getChartRelDaily()
      this.getChartFacFood()
      this.getChartInsEva()
    })
  }

  getChartObjAchieve() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartObjAchieve", am4charts.PieChart);

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(30);

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template
      // change the cursor on hover to make it apparent the object can be interacted with
      .cursorOverStyle = [
        {
          "property": "cursor",
          "value": "pointer"
        }
      ];

    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0,0,0,0);

    pieSeries.ticks.template.disabled = true;

    // Create a base filter effect (as if it's not there) for the hover to return to
    let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
    shadow.opacity = 0;

    // Create hover state
    let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

    // Slightly shift the shadow and make it more prominent on hover
    let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

    // Add a legend // chart.legend = new am4charts.Legend();

    chart.data = [
      {
        "country": "Excellent",
        "litres": 501.9
      },
      {
        "country": "Good",
        "litres": 128.3
      },
      {
        "country": "Satisfy",
        "litres": 99
      },
      {
        "country": "Moderate",
        "litres": 60
      },
      {
        "country": "Low",
        "litres": 60
      }
    ];

    this.chart0 = chart;
  }

  getChartRelDaily() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartRelDaily", am4charts.XYChart);

    // Add data
    chart.data = [ {
      "year": "task",
      "Helpful": 70,
      "Relevant":0,
      "Not-helpful": 30
    }, {
      "year": "positive",
      "Helpful": 45,
      "Relevant":0,
      "Not-helpful": 55
    }, {
      "year": "negative",
      "Helpful": 80,
      "Relevant":0,
      "Not-helpful": 20
    } ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.title.text = "Question";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;

    let  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.title.text = "Percentage (%)";

    // Create series
    function createSeries(field, name, stacked) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.name = name;
      series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
      series.stacked = stacked;
      series.columns.template.width = am4core.percent(95);
    }

    createSeries("Helpful", "Helpful", true);
    createSeries("Not-helpful", "Not-helpful", true);
    createSeries("Relevant", "Relevant", false);

    // Add legend
    chart.legend = new am4charts.Legend();

    this.chart1 = chart;
  }

  getChartFacFood() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartFacFood", am4charts.XYChart);

    // Add data
    chart.data = [ {
      "year": "task",
      "Helpful": 70,
      "Relevant":0,
      "Not-helpful": 30
    }, {
      "year": "positive",
      "Helpful": 45,
      "Relevant":0,
      "Not-helpful": 55
    }, {
      "year": "negative",
      "Helpful": 80,
      "Relevant":0,
      "Not-helpful": 20
    } ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.title.text = "Question";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;

    let  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.title.text = "Percentage (%)";

    // Create series
    function createSeries(field, name, stacked) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.name = name;
      series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
      series.stacked = stacked;
      series.columns.template.width = am4core.percent(95);
    }

    createSeries("Helpful", "Helpful", true);
    createSeries("Not-helpful", "Not-helpful", true);
    createSeries("Relevant", "Relevant", false);

    // Add legend
    chart.legend = new am4charts.Legend();

    this.chart2 = chart;
  }

  getChartInsEva() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartInsEva", am4charts.XYChart);

    // Add data
    chart.data = [ {
      "year": "Accomodation",
      "Excellent": 70,
      "Good":0,
      "Satisfy": 30,
      "Modeqate":0,
      "Low":0
    }, {
      "year": "Hall",
      "Excellent": 70,
      "Good":0,
      "Satisfy": 30,
      "Modeqate":0,
      "Low":0
    }, {
      "year": "Food & Beverage",
      "Excellent": 70,
      "Good":0,
      "Satisfy": 30,
      "Modeqate":0,
      "Low":0
    } ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.title.text = "Question";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;

    let  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.title.text = "Percentage (%)";

    // Create series
    function createSeries(field, name, stacked) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.name = name;
      series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
      series.stacked = stacked;
      series.columns.template.width = am4core.percent(95);
    }

    createSeries("Excellent", "Excellent", true);
    createSeries("Satisfy", "Satisfy", true);
    createSeries("Good", "Good", false);
    createSeries("Moderate", "Moderate", false);
    createSeries("Low", "Low", false);

    // Add legend
    chart.legend = new am4charts.Legend();

    this.chart3 = chart;
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
