import { Component, OnInit, Inject } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatTableDataSource
} from "@angular/material";
@Component({
  selector: "app-compare",
  templateUrl: "./compare.component.html",
  styleUrls: ["./compare.component.css"]
})
export class CompareComponent implements OnInit {
  selectedData = [];
  dataSource;
  displayedColumns: string[] = [
    "brand",
    "details",
    "price",
    "cpu",
    "ram",
    "os"
  ];
  constructor(
    public dialogRef: MatDialogRef<CompareComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.selectedData = this.data.compareData;
    console.log(this.selectedData);
    this.dataSource = new MatTableDataSource(this.selectedData);
    console.log(this.dataSource);
  }
}
