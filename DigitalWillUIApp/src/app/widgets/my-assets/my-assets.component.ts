import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AssetpopupComponent } from 'src/app/modals/assetpopup/assetpopup.component';
declare var google:any;
@Component({
  selector: 'app-my-assets',
  templateUrl: './my-assets.component.html',
  styleUrls: ['./my-assets.component.css']
})
export class MyAssetsComponent implements OnInit {
 chartData = ""
  constructor(private dialogRef : MatDialog) { }
   openDialog(){
    this.dialogRef.open(AssetpopupComponent, {
      width: '600px',
      height:'300px'
    });
   }

  
  ngOnInit(): void {

  google.charts.load('current', {packages: ['corechart']});
  google.charts.setOnLoadCallback(this.drawChart);
  }

   drawChart() {
  
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Home', 11],
        ['Vechicles',  2],
        ['Real Estate',  2],
        ['Artwork', 2],
        ['Deposits',7]
      ]);

    
      var options = {
      width:600,
      height:200,
      pieHole: 0.4};
      var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
      chart.draw(data, options);
  }

   }
  

