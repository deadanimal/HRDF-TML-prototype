import { Component, OnInit, NgZone, OnDestroy, TemplateRef, ViewChild  } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-training-needs',
  templateUrl: './training-needs.component.html',
  styleUrls: ['./training-needs.component.scss']
})
export class TrainingNeedsComponent implements OnInit {

  private chart0;
  private chart1;
  private chart2;

  constructor(
    private zone: NgZone
  ) { }

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
    })
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartWeekTraf()
      this.getChartMonthTraf()
      this.getChartNeedAnalyze()
    })
  }

  getChartWeekTraf() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartWeekTraf", am4charts.XYChart);
    chart.paddingRight = 20;

    // Add data
    chart.data = [{
      "year": "Monday",
      "value": 20
    }, {
      "year": "Tuesday",
      "value": 25
    }, {
      "year": "Wednesday",
      "value": 15
    }, {
      "year": "Thursday",
      "value": 45
    }, {
      "year": "Friday",
      "value": 30
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.minGridDistance = 50;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.startLocation = 0.5;
    categoryAxis.endLocation = 0.5;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.baseValue = 0;

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "year";
    series.strokeWidth = 2;
    series.tensionX = 0.77;

    // bullet is added because we add tooltip to a bullet for it to change color
    let bullet = series.bullets.push(new am4charts.Bullet());
    bullet.tooltipText = "{valueY}";

    bullet.adapter.add("fill", function(fill, target){
        if(target.dataItem.values.valueY.value < 25){
            return am4core.color("#FF0000");
        }
        return fill;
    })
    
    let range = valueAxis.createSeriesRange(series);
    range.value = 0;
    range.endValue = -1000;
    range.contents.stroke = am4core.color("#FF0000");
    range.contents.fill = range.contents.stroke;

    // Add scrollbar
    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    chart.cursor = new am4charts.XYCursor();

    this.chart0 = chart;
  }

  getChartMonthTraf() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartMonthTraf", am4charts.XYChart);

    let data = [];

    chart.data = [{
      "year": "Jan",
      "income": 23.5,
      "expenses": 21.1,
      "lineColor": chart.colors.next()
    }, {
      "year": "Feb",
      "income": 26.2,
      "expenses": 30.5
    }, {
      "year": "March",
      "income": 30.1,
      "expenses": 34.9
    }, {
      "year": "April",
      "income": 20.5,
      "expenses": 23.1
    }, {
      "year": "May",
      "income": 30.6,
      "expenses": 28.2,
      "lineColor": chart.colors.next()
    }, {
      "year": "June",
      "income": 34.1,
      "expenses": 31.9
    }, {
      "year": "July",
      "income": 34.1,
      "expenses": 31.9
    }, {
      "year": "Aug",
      "income": 34.1,
      "expenses": 31.9,
      "lineColor": chart.colors.next()
    }, {
      "year": "Sept",
      "income": 34.1,
      "expenses": 31.9
    }, {
      "year": "oct",
      "income": 34.1,
      "expenses": 31.9
    }, {
      "year": "Nov",
      "income": 34.1,
      "expenses": 31.9
    }, {
      "year": "Dec",
      "income": 34.1,
      "expenses": 31.9
    }];

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.ticks.template.disabled = true;
    categoryAxis.renderer.line.opacity = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.dataFields.category = "year";
    categoryAxis.startLocation = 0.4;
    categoryAxis.endLocation = 0.6;


    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.line.opacity = 0;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.min = 0;

    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.categoryX = "year";
    lineSeries.dataFields.valueY = "income";
    lineSeries.tooltipText = "income: {valueY.value}";
    lineSeries.fillOpacity = 0.5;
    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.stroke = "lineColor";
    lineSeries.propertyFields.fill = "lineColor";

    let bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 6;
    bullet.circle.fill = am4core.color("#fff");
    bullet.circle.strokeWidth = 3;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panX";
    chart.cursor.lineX.opacity = 0;
    chart.cursor.lineY.opacity = 0;

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.parent = chart.bottomAxesContainer;

    this.chart1 = chart;
  }

  getChartNeedAnalyze() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartNeedAnalyze", am4charts.XYChart);

    // Title
    let title = chart.titles.push(new am4core.Label());
    title.text = "";
    title.fontSize = 25;
    title.marginBottom = 15;

    // Add data
    chart.data = [{
      "category": "Soft Skills",
      "negative1": -0.1,
      "negative2": -0.9,
      "positive1": 5,
      "positive2": 94
    }, {
      "category": "Technology",
      "negative1": -2,
      "negative2": -4,
      "positive1": 19,
      "positive2": 75
    }, {
      "category": "Leadership",
      "negative1": -2,
      "negative2": -10,
      "positive1": 46,
      "positive2": 42
    }, {
      "category": "Teambuiding",
      "negative1": -2,
      "negative2": -13,
      "positive1": 33,
      "positive2": 52
    }, {
      "category": "Microsoft Office",
      "negative1": -6,
      "negative2": -19,
      "positive1": 34,
      "positive2": 41
    }, {
      "category": "Health",
      "negative1": -3,
      "negative2": -23,
      "positive1": 49,
      "positive2": 25
    }, {
      "category": "Environment",
      "negative1": -5,
      "negative2": -28,
      "positive1": 49,
      "positive2": 18
    }, {
      "category": "Social Media",
      "negative1": -14,
      "negative2": -34,
      "positive1": 37,
      "positive2": 16
    }];


    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.axisFills.template.disabled = false;
    categoryAxis.renderer.axisFills.template.fillOpacity = 0.05;


    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = -100;
    valueAxis.max = 100;
    valueAxis.renderer.minGridDistance = 50;
    valueAxis.renderer.ticks.template.length = 5;
    valueAxis.renderer.ticks.template.disabled = false;
    valueAxis.renderer.ticks.template.strokeOpacity = 0.4;
    valueAxis.renderer.labels.template.adapter.add("text", function(text) {
      return text + "%";
    })

    // Legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";

    // Use only absolute numbers
    chart.numberFormatter.numberFormat = "#.#s";

    // Create series
    function createSeries(field, name, color) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = field;
      series.dataFields.categoryY = "category";
      series.stacked = true;
      series.name = name;
      series.stroke = color;
      series.fill = color;
      
      let label = series.bullets.push(new am4charts.LabelBullet);
      label.label.text = "{valueX}%";
      label.label.fill = am4core.color("#fff");
      label.label.strokeWidth = 0;
      label.label.truncate = false;
      label.label.hideOversized = true;
      label.locationX = 0.5;
      return series;
    }

    let interfaceColors = new am4core.InterfaceColorSet();
    let positiveColor = interfaceColors.getFor("positive");
    let negativeColor = interfaceColors.getFor("negative");

    createSeries("negative2", "Mode...", negativeColor.lighten(0.5));
    createSeries("negative1", "Not needed", negativeColor);
    createSeries("positive1", "Needed", positiveColor.lighten(0.5));
    createSeries("positive2", "Highlight", positiveColor);

    chart.legend.events.on("layoutvalidated", function(event){
      chart.legend.itemContainers.each((container)=>{
        if(container.dataItem.dataContext.valueOf.name == "Not needed"){
          container.toBack();
        }
      })
    })

    this.chart2 = chart;
  }

}
