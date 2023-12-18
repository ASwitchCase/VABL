import { Component,Input} from '@angular/core';
import { Locker } from 'src/app/Models/Locker';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-export-to-excel',
  templateUrl: './export-to-excel.component.html',
  styleUrls: ['./export-to-excel.component.css']
})
export class ExportToExcelComponent {
  @Input() l_list! : Locker[] 
  @Input() name : string = ""
  
  exportToExcel() {
    const data = JSON.parse(JSON.stringify(this.getFormattedData()));
    const columns = this.getColumns(data);
    const worksheet = XLSX.utils.json_to_sheet(data, { header: columns });
    worksheet['!cols'] = [{width:15},{width:30},{width:30},{width:30}]
    let wsConfig = []
    for(let x = 0; x < 400; x++){
      wsConfig.push({hpt:15})
    }
    worksheet['!rows'] = wsConfig

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `${this.name}.xlsx`);
  }

  getColumns(data: any[]): string[] {
    const columns: string[] = [];
    data.forEach(row => {
      Object.keys(row).forEach(col => {
        if (!columns.includes(col)) {
          columns.push(col);
        }
      });
    });
    return columns;
  }

  getFormattedData(){
    let list_data: { 'locker#': string; name: string; phone: string; email: string; }[] = []

    this.l_list.forEach(locker =>{
      list_data.push({
        'locker#':locker.lockerId,
        'name':locker.occupant? locker.occupant.name : "",
        'phone':locker.occupant? locker.occupant.phone : "",
        'email':locker.occupant? locker.occupant.email : "",
      })
    })

    return list_data
  }
}
