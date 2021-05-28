import { Component, OnInit, TemplateRef, NgZone, OnDestroy } from '@angular/core';

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
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  imgLogo = 'assets/img/brand/mastercard.png'

  private chart0;
  private chart1;

  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any = [
    {
      num: "1",
      lang: "English",
      val: "Ringgit Malaysia (RM)",
      accNum:"xxxxx-xxxxx",
      totDue: "RM200",
      date: "22/4/2020"
    },
    {
      num: "2",
      lang: "English",
      val: "Ringgit Malaysia (RM)",
      accNum:"xxxxx-xxxxx",
      totDue: "RM200",
      date: "22/1/2020"
    },
    {
      num: "3",
      lang: "Bahasa Melayu",
      val: "Ringgit Malaysia (RM)",
      accNum:"xxxxx-xxxxx",
      totDue: "RM200",
      date: "22/3/2020"
    },
    {
      num: "4",
      lang: "English",
      val: "Ringgit Malaysia (RM)",
      accNum:"xxxxx-xxxxx",
      totDue: "RM200",
      date: "22/2/2020"
    },
    {
      num: "5",
      lang: "Bahasa Melayu",
      val: "Ringgit Malaysia (RM)",
      accNum:"xxxxx-xxxxx",
      totDue: "RM200",
      date: "22/7/2020"
    },
    {
      num: "6",
      lang: "English",
      val: "Ringgit Malaysia (RM)",
      accNum:"xxxxx-xxxxx",
      totDue: "RM200",
      date: "22/4/2020"
    },
    {
      num: "7",
      lang: "English",
      val: "Ringgit Malaysia (RM)",
      accNum:"xxxxx-xxxxx",
      totDue: "RM200",
      date: "22/3/2020"
    },
    {
      num: "8",
      lang: "Bahasa Melayu",
      val: "Ringgit Malaysia (RM)",
      accNum:"xxxxx-xxxxx",
      totDue: "RM200",
      date: "22/8/2020"
    },
    {
      num: "9",
      lang: "English",
      val: "Ringgit Malaysia (RM)",
      accNum:"xxxxx-xxxxx",
      totDue: "RM200",
      date: "22/9/2020"
    },
    {
      num: "10",
      lang: "English",
      val: "Ringgit Malaysia (RM)",
      accNum:"xxxxx-xxxxx",
      totDue: "RM200",
      date: "22/11/2020"
    },
    {
      num: "11",
      lang: "Bahasa Melayu",
      val: "Ringgit Malaysia (RM)",
      accNum:"xxxxx-xxxxx",
      totDue: "RM200",
      date: "22/12/2020"
    },
    {
      num: "12",
      lang: "Bahasa Melayu",
      val: "Ringgit Malaysia (RM)",
      accNum:"xxxxx-xxxxx",
      totDue: "RM200",
      date: "22/1/2021"
    }
  ]
  SelectionType = SelectionType;

  constructor(
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
    this.zone.runOutsideAngular(
      () => {
        if (this.chart0) {
          console.log('Chart disposed')
          this.chart0.dispose()
        }
        if (this.chart1) {
          console.log('Chart disposed')
          this.chart1.dispose()
        }
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartBill0()
      this.getChartBill1()
    })
  }

  getChartBill0() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartBill0", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [{
      "country": "Jan",
      "visits": 3025
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
      "country": "Aug",
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
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Cursor
    chart.cursor = new am4charts.XYCursor();
    
    this.chart0 = chart;
  }

  getChartBill1() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartBill1", am4charts.XYChart);

    // Add data
    chart.data = [{
      "year": "Jan",
      "active": 1,
      "inactive": 5
    }, {
      "year": "Feb",
      "active": 1,
      "inactive": 2
    }, {
      "year": "March",
      "active": 2,
      "inactive": 3
    }, {
      "year": "April",
      "active": 3,
      "inactive": 4
    }, {
      "year": "May",
      "active": 5,
      "inactive": 1
    }, {
      "year": "June",
      "active": 3,
      "inactive": 2
    }, {
      "year": "July",
      "active": 1,
      "inactive": 2
    }, {
      "year": "Aug",
      "active": 2,
      "inactive": 1
    }, {
      "year": "Sept",
      "active": 3,
      "inactive": 5
    }, {
      "year": "Oct",
      "active": 4,
      "inactive": 3
    }, {
      "year": "Nov",
      "active": 1,
      "inactive": 2
    }, {
      "year": "Dec",
      "active": 3,
      "inactive": 2
    }];

    // Create category axis
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.opposite = true;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inversed = true;
    valueAxis.title.text = "File";
    valueAxis.renderer.minLabelPosition = 0.01;

    // Create series
    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "active";
    series1.dataFields.categoryX = "year";
    series1.name = "Active";
    series1.bullets.push(new am4charts.CircleBullet());
    series1.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
    series1.legendSettings.valueText = "{valueY}";
    series1.visible  = false;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "inactive";
    series2.dataFields.categoryX = "year";
    series2.name = 'Inactive';
    series2.bullets.push(new am4charts.CircleBullet());
    series2.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
    series2.legendSettings.valueText = "{valueY}";

    // Add chart cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";


    let hs1 = series1.segments.template.states.create("hover")
    hs1.properties.strokeWidth = 5;
    series1.segments.template.strokeWidth = 1;

    let hs2 = series2.segments.template.states.create("hover")
    hs2.properties.strokeWidth = 5;
    series2.segments.template.strokeWidth = 1;

    // Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.itemContainers.template.events.on("over", function(event){
      let segments = event.target.dataItem.dataContext.valueOf.arguments;
      segments.each(function(segment){
        segment.isHover = true;
      })
    })

    chart.legend.itemContainers.template.events.on("out", function(event){
      let segments = event.target.dataItem.dataContext.valueOf.arguments;
      segments.each(function(segment){
        segment.isHover = false;
      })
    })

    this.chart1 = chart;
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
        if (d[key].toLowerCase().indexOf(val) != -1) {
          return d;
        }
      }
      return false;
    });
  }
}
