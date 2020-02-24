import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatDialog } from "@angular/material";
import { CompareComponent } from "../compare/compare.component";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  dataSource;
  dialogRef;
  display: boolean;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  checkedData = [];
  displayedColumns: string[] = [
    "select",
    "brand",
    "details",
    "price",
    "cpu",
    "ram",
    "os"
  ];
  data = [
    {
      brand: "ASUS",
      details: "good",
      price: "$12",
      cpu: "intel i7",
      ram: "8gb",
      os: "windows"
    },
    {
      brand: "Dell",
      details: "very good",
      price: "$22",
      cpu: "intel i7",
      ram: "6gb",
      os: "windows"
    },
    {
      brand: "hp",
      details: "very very good",
      price: "$32",
      cpu: "intel i7",
      ram: "10gb",
      os: "windows"
    }
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  checkData(element) {
    this.checkedData.push(element);
    console.log(this.checkedData.length);
    this.checkDisplay();
  }

  checkDisplay() {
    if (this.checkedData.length >= 2) {
      this.display = true;
      console.log(this.display);
    }
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(CompareComponent, {
      data: { compareData: this.checkedData }
    });
  }
}
