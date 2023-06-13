import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from 'src/app/services/login.service';
import { ReglasNegocioService } from 'src/app/services/reglas-negocio.service';
import { ServiceService } from 'src/app/services/service.service';
import { UploadFileService } from 'src/app/services/uploadFileService.service';
import Swal from 'sweetalert2';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
  },
};

interface option {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-consulta-usuario',
  templateUrl: './consulta-usuario.component.html',
  styleUrls: ['./consulta-usuario.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})


export class ConsultaUsuarioComponent implements OnInit {


  showFilter: boolean = true;
  showInfo: boolean;
  anio2: any;
  qms: any[] = [];
  dataSourceEventos = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  eventoColumns: string[] = [
    'correlativo',
    'anioQueja',
    'codigoQueja'
  ];
  searchForm: FormGroup;
  constructor(
    private service: ServiceService,
    private spinner: NgxSpinnerService,
    private loginService: LoginService,
    private uploadFileService: UploadFileService,
    public reglasNegocio: ReglasNegocioService
  ) {
    this.searchForm = new FormGroup({
      noQueja: new FormControl('', Validators.required),
      anioQueja: new FormControl(moment()),
      tipoQueja: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
  }


  obtenerQMS() {
    this.service.getData<any[]>(this.service.BASE_URL_QUEJAS, 'tipoQueja/listar').toPromise().then(data => {
      this.qms = data;
      console.log(data);
    });
  }


  public aniFin(normalizedYear: moment.Moment, datepicker: MatDatepicker<moment.Moment>) {
    const ctrlValue = this.searchForm.get('anioQueja').value;
    ctrlValue.year(normalizedYear.year());
    this.searchForm.get('anioQueja').setValue(ctrlValue);
    this.anio2 = ctrlValue.format('YYYY').toString()
    datepicker.close();
  }

  consultar() {
    this.spinner.show();
    const consulta = {
      codigoQueja: this.searchForm.get('noQueja').value,
      anioQueja: this.anio2,
      correlativo: '%' + this.searchForm.get('tipoQueja').value + '%'
    };
    console.log(consulta);
    this.service.postData(this.service.BASE_URL_QUEJAS, 'queja/obtenerFiltros', consulta).toPromise().then(data => {
      console.log(data);
      this.spinner.hide();
      this.showInfo = false;
        if (data.length === 0) {
          this.showFilter = true;
          Swal.fire({
            titleText: `No se encontró información en base a los filtros ingresados.`,
            icon: 'warning',
            showCloseButton: true,
            showConfirmButton: false
          });
          this.dataSourceEventos.data = [];
        } else {
          this.dataSourceEventos.data = data;
          setTimeout(() => this.dataSourceEventos.paginator = this.paginator);
          this.showInfo = true;
          this.showFilter = false;
        }
    });
  }

}
