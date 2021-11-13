import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/Service/home.service';
declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import * as XLSX from 'xlsx';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

@Component({
  selector: 'app-financial-report',
  templateUrl: './financial-report.component.html',
  styleUrls: ['./financial-report.component.css']
})
export class FinancialReportComponent implements OnInit {
  @Input() fullName:string='N/A';
  @Input() userImage:string ='N/A';  
  @Input() gender:number |  undefined;
  @Input() age:number |undefined;
  @Input() email:string ='N/A';
  @Input() phoneNumber:number |undefined;
  @Input() address:string ='N/A';
  @Input() salary:number |undefined;
  @Input() tracks:number |undefined;
  @Input() incentives:number |undefined;
  @Input() monthSalary:string |  undefined;
  @Input() totalSalary:number |undefined;
  @Input() atStartDate:string |  undefined;
  @Input() atEndDate:string |  undefined;
  @Input() atStatus:number |undefined;


  Name:string="undefined";
  
  currentYear:Date|any = undefined;
  constructor(private router:Router ,public home:HomeService)  {
    this.currentYear = new Date().getFullYear();
    this.Name="MyVehicle Team"
    
    
   }

  ngOnInit(): void {
    this.ObtainFinancialReports();
  }
  logout()
  {
    localStorage.clear();
    this.router.navigate(['security/login']);
  }
 

  GoToAbout()
  {
    this.router.navigate(['about'])
  }

  GoToContact()
  {
    this.router.navigate(['contactus'])
  }
  
  GoToHome()
  {
    
    this.router.navigate([''])
  }
    
  ObtainFinancialReports(){
    
    this.home.ObtainFinancialReports().subscribe((res:any)=>{
      this.home.data=res;
     console.log(this.home.data)
     
    },err=>{
      console.log("err")
    });
    
      }
      @ViewChild('pdfTable')
      pdfTable!: ElementRef;
      
      public downloadAsPDF() {
        const pdfTable = this.pdfTable.nativeElement;
        var html = htmlToPdfmake(pdfTable.innerHTML);
        const documentDefinition: TDocumentDefinitions = { 
          content: html,
          pageOrientation: 'landscape',
          pageSize: {
            width:1400, 
            height: 700
          }
         };
        pdfMake.createPdf(documentDefinition).download(); 
    
      }
      
        fileName= 'ExcelSheet.xlsx';  
    
    exportexcel(): void 
        {
           /* table id is passed over here */   
           let element = document.getElementById('excel-table'); 
           const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    
           /* generate workbook and add the worksheet */
           const wb: XLSX.WorkBook = XLSX.utils.book_new();
           XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
           /* save to file */
           XLSX.writeFile(wb, this.fileName);
          
        }
        
}
