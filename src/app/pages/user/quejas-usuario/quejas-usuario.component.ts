import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-quejas-usuario',
  templateUrl: './quejas-usuario.component.html',
  styleUrls: ['./quejas-usuario.component.css']
})
export class QuejasUsuarioComponent implements OnInit {

  dataSourceEventos = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  eventoColumns: string[] = [
    'codigoQueja',
    'nombre',
    'detalleQueja',
    'estado',
    'accion'
  ];

  QuejasForm: FormGroup;
  constructor() {
    this.QuejasForm = new FormGroup({

    });
   }

  ngOnInit(): void {
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceEventos.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceEventos.paginator) {
      this.dataSourceEventos.paginator.firstPage();
    }
  }
}
