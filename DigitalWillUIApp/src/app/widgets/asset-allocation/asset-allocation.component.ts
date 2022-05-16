import { Component, OnInit } from '@angular/core';
declare var google:any;
@Component({
  selector: 'app-asset-allocation',
  templateUrl: './asset-allocation.component.html',
  styleUrls: ['./asset-allocation.component.css']
})
export class AssetAllocationComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
    }
    drawChart() {
  
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['Maurie Jones', 20000],
        ['David Jones', 40000],
        ['Vincent Jones', 40000]
      ]);

      var barchart_options = {title:'NetValue $1000000',
      width:400,
      height:300,
      legend: 'none'};
var barchart = new google.visualization.BarChart(document.getElementById('barchart_div'));
barchart.draw(data, barchart_options);


var piechart_options = {title:'Pie Chart:',
                       width:400,
                       height:300};
        var piechart = new google.visualization.PieChart(document.getElementById('piechart_div'));
        piechart.draw(data, piechart_options);
  }

}
