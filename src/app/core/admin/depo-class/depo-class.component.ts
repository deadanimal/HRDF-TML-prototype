import { Component, OnInit, ViewChild} from '@angular/core';
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
  selector: 'app-depo-class',
  templateUrl: './depo-class.component.html',
  styleUrls: ['./depo-class.component.scss']
})
export class DepoClassComponent implements OnInit {

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
      trainName: "Class A73",
      trainSdate: "23/6/2020 2:00 PM",
      trainVenue: "KL",
      trainDur: "5 days",
      trainStat: "1"
    },
    {
      trainid: "2",
      trainName: "Class A97",
      trainSdate: "28/3/2020 2:00 PM",
      trainVenue: "Selangor",
      trainDur: "5 days",
      trainStat: "2"
    },
    {
      trainid: "3",
      trainName: "Class A99",
      trainSdate: "30/6/2020 2:00 PM",
      trainVenue: "Johor",
      trainDur: "5 days",
      trainStat: "1"
    },
    {
      trainid: "4",
      trainName: "Class A34",
      trainSdate: "2/5/2020 2:00 PM",
      trainVenue: "KL",
      trainDur: "5 days",
      trainStat: "2"
    },
    {
      trainid: "5",
      trainName: "Class A22",
      trainSdate: "3/4/2020 2:00 PM",
      trainVenue: "Selangor",
      trainDur: "5 days",
      trainStat: "2"
    },
    {
      trainid: "6",
      trainName: "Class A54",
      trainSdate: "24/2/2020 2:00 PM",
      trainVenue: "Johor",
      trainDur: "5 days",
      trainStat: "2"
    },
    {
      trainid: "7",
      trainName: "Class A88",
      trainSdate: "1/2/2021 2:00 PM",
      trainVenue: "KL",
      trainDur: "5 days",
      trainStat: "2"
    },
    {
      trainid: "8",
      trainName: "Class A14",
      trainSdate: "3/4/2020 2:00 PM",
      trainVenue: "Selangor",
      trainDur: "5 days",
      trainStat: "1"
    },
    {
      trainid: "9",
      trainName: "Class A01",
      trainSdate: "1/1/2021 2:00 PM",
      trainVenue: "Johor",
      trainDur: "5 days",
      trainStat: "2"
    },
    {
      trainid: "10",
      trainName: "Class A62",
      trainSdate: "3/4/2020 2:00 PM",
      trainVenue: "KL",
      trainDur: "5 days",
      trainStat: "2"
    },
    {
      trainid: "11",
      trainName: "Class A51",
      trainSdate: "2/4/2020 2:00 PM",
      trainVenue: "Selangor",
      trainDur: "5 days",
      trainStat: "2"
    },
    {
      trainid: "12",
      trainName: "Class A32",
      trainSdate: "21/5/2021 2:00 PM",
      trainVenue: "Johor",
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
