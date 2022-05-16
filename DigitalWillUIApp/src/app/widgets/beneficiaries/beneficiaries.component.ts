import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BeneficiariesPopupComponent } from 'src/app/modals/beneficiaries-popup/beneficiaries-popup.component';


@Component({
  selector: 'app-beneficiaries',
  templateUrl: './beneficiaries.component.html',
  styleUrls: ['./beneficiaries.component.css']
})
export class BeneficiariesComponent implements OnInit {
 
  constructor(private dialogRef : MatDialog) { }
  openDialogBenficiary(){
    
    //this.dialogRef.open(BeneficiariesPopupComponent)

    this.dialogRef.open(BeneficiariesPopupComponent, {
      width: '600px',
      height:'300px'
    });
  }
  


  ngOnInit(): void {
  }


}
