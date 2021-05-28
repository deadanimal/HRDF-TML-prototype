import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent, TabsetConfig } from 'ngx-bootstrap/tabs';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

export function getTabsetConfig(): TabsetConfig {
  return Object.assign(new TabsetConfig(), { type: 'pills', isKeysAllowed: true });
}

@Component({
  selector: 'app-depo-course',
  templateUrl: './depo-course.component.html',
  styleUrls: ['./depo-course.component.scss']
})
export class DepoCourseComponent implements OnInit {

  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  selectTab(tabId: number) {
    if (this.staticTabs.tabs)
		  this.staticTabs.tabs[tabId].active = true;
  }

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
      trainDur: "5 days",
      trainStat: "1"
    },
    {
      trainid: "2",
      trainName: "Training A97",
      trainPart: "67",
      trainSdate: "28/3/2020",
      trainEdate: "28/3/2021",
      trainDur: "5 days",
      trainStat: "2"
    },
    {
      trainid: "3",
      trainName: "Training A99",
      trainPart: "29",
      trainSdate: "30/6/2020",
      trainEdate: "30/6/2021",
      trainDur: "5 days",
      trainStat: "1"
    },
    {
      trainid: "4",
      trainName: "Training A34",
      trainPart: "13",
      trainSdate: "2/5/2020",
      trainEdate: "1/5/2021",
      trainDur: "5 days",
      trainStat: "2"
    },
    {
      trainid: "5",
      trainName: "Training A22",
      trainPart: "35",
      trainSdate: "3/4/2020",
      trainEdate: "3/4/2021",
      trainDur: "5 days",
      trainStat: "2"
    },
    {
      trainid: "6",
      trainName: "Training A54",
      trainPart: "64",
      trainSdate: "24/2/2020",
      trainEdate: "22/1/2021",
      trainDur: "5 days",
      trainStat: "2"
    },
    {
      trainid: "7",
      trainName: "Training A88",
      trainPart: "23",
      trainSdate: "1/2/2021",
      trainEdate: "30/4/2021",
      trainDur: "5 days",
      trainStat: "2"
    },
    {
      trainid: "8",
      trainName: "Training A14",
      trainPart: "98",
      trainSdate: "3/4/2020",
      trainEdate: "5/7/2021",
      trainDur: "5 days",
      trainStat: "1"
    },
    {
      trainid: "9",
      trainName: "Training A01",
      trainPart: "10",
      trainSdate: "1/1/2021",
      trainEdate: "2/1/2021",
      trainDur: "5 days",
      trainStat: "2"
    },
    {
      trainid: "10",
      trainName: "Training A62",
      trainPart: "07",
      trainSdate: "3/4/2020",
      trainEdate: "3/8/2020",
      trainDur: "5 days",
      trainStat: "2"
    },
    {
      trainid: "11",
      trainName: "Training A51",
      trainPart: "55",
      trainSdate: "2/4/2020",
      trainEdate: "14/5/2021",
      trainDur: "5 days",
      trainStat: "2"
    },
    {
      trainid: "12",
      trainName: "Training A32",
      trainPart: "01",
      trainSdate: "21/5/2021",
      trainEdate: "22/5/2021",
      trainDur: "5 days",
      trainStat: "2"
    }
  ]
  SelectionType = SelectionType;

  constructor() {
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

}
