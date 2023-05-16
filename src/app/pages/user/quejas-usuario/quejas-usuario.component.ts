import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from 'src/app/services/login.service';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { UploadFileService } from 'src/app/services/uploadFileService.service';
import { stringify } from 'querystring';

interface Ingreso {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-quejas-usuario',
  templateUrl: './quejas-usuario.component.html',
  styleUrls: ['./quejas-usuario.component.css']
})
export class QuejasUsuarioComponent implements OnInit {

  cadena: string;
  url: string;
  public file: File = null;
  documento: any;
  formData: any;
  strImage: any;
  anioActual = new Date().getFullYear();
  user: any = null;
  isLoggedIn = false;
  ipUsuario: string;
  quejas: any[] = [];
  ingresos: Ingreso[] = [
    { value: '1', viewValue: 'Telefono' },
    { value: '2', viewValue: 'Correo' },
    { value: '3', viewValue: 'Chat' },
    { value: '4', viewValue: 'Correo' }
  ];
  dataSourceEventos = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  eventoColumns: string[] = [
    'codigoQueja',
    'nombre',
    'detalleQueja',
    'medioIngreso',
    'estado',
    'accion'
  ];

  QuejasForm: FormGroup;
  constructor(
    private service: ServiceService,
    private spinner: NgxSpinnerService,
    private loginService: LoginService,
    private uploadFileService: UploadFileService
  ) {
    this.QuejasForm = new FormGroup({
      medioIngreso: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      correoElectronico: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      telefono: new FormControl('', Validators.required),
      oficina: new FormControl('', Validators.required),
      nombreEmpleado: new FormControl('', Validators.required),
      detalleQueja: new FormControl('', Validators.required),
      documento: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.spinner.show();
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.user = this.loginService.getUser();
    this.loginService.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.loginService.isLoggedIn();
        this.user = this.loginService.getUser();
      }
    )
    this.service.getIp().toPromise().then((res: any) => {
      this.ipUsuario = res.ip;
      console.log('my ip' + this.ipUsuario);
    });
    this.obtenerQuejas();
    this.spinner.hide();
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceEventos.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceEventos.paginator) {
      this.dataSourceEventos.paginator.firstPage();
    }
  }

  obtenerQuejas() {
    this.service.getData<any[]>(this.service.BASE_URL_QUEJAS, 'queja/listar').toPromise().then(data => {
      this.quejas = data;
      this.dataSourceEventos.paginator = this.paginator;
      this.dataSourceEventos.sort = this.sort;
      this.dataSourceEventos = new MatTableDataSource(this.quejas);
      console.log('usuarios', this.quejas);
    });
  }

  

  async guardarQueja(data: any) {
    this.spinner.show();
    // SUBIR ARCHIVO
    this.uploadFileService.subirArchivo(this.file, 'CARPETA/SUBCARPETA')
    .then((res: any) => {
      this.url = res.secure_url;
      this.cadena = this.url;
      // se me olvidaba XD
      const queja = {
        codigoEtapa: 1,
        codigoRegion: 1,
        codigoTipoCreador: 1,
        codigoMedioIngreso: 2,
        codigoEstadoExterno: 1,
        codigoEstadoInterno: 1,
        codigoTipoQueja: 7,
        codigoPuntoAtencion: 8,
        dpiUsuario: 1,
        nombre: data.nombre,
        correoElectronico: data.correoElectronico,
        nombreEmpleado: data.nombreEmpleado,
        detalleQueja: data.detalleQueja,
        correlativo: 1,
        documentoSoporte: this.url,
        justificacion: 1,
        anioQueja: this.anioActual,
        usuarioAgrega: this.user.username,
        ipUsuarioAgrega: this.ipUsuario,
        fechaAgrega: Number(moment()),
        
      };
        console.log(queja);
        this.service.postData(this.service.BASE_URL_QUEJAS, 'queja/crear', queja).toPromise().then(async data => {
          this.spinner.hide();
          Swal.fire({
            titleText: `Su solicitud se ha creado con éxito`,
            icon: 'success',
            showCloseButton: true,
            showConfirmButton: false,
            position: 'top'
          });
          this.QuejasForm.reset();
        }).catch(error => {
          console.error(error);
          this.spinner.hide();
          Swal.fire({
            titleText: 'Se ha producido un error y no es posible almacenar información, por favor intente más tarde',
            icon: 'error',
            showCloseButton: true,
            showConfirmButton: false,
            position: 'top'
          });
        });
      }).catch(err => {
        Swal.fire({
          titleText: 'Error al cargar archivo',
          text: 'El archivo no se ha cargado con exito',
          icon: 'error',
        });
      });


    
  }

  uploadFile() {
    this.uploadFileService.subirArchivo(this.file, 'CARPETA/SUBCARPETA')
      .then((res: any) => {
        this.url = res.secure_url;
        this.cadena = this.url;
        Swal.fire({
          titleText: 'Archivo cargado',
          text: 'El archivo se ha cargado con exito',
          icon: 'success',
        });
      }).catch(err => {
        console.error(err);
        Swal.fire({
          titleText: 'Error al cargar archivo',
          text: 'El archivo no se ha cargado con exito',
          icon: 'error',
        });
      });
  }
  async seleccionArchivo(archivo: any) {
    let documento = archivo.target.files[0];
    //console.log(documento);
    if (!documento) {
      this.file = null;
      //console.log(this.file)
      return;
    }

    if (documento.type.indexOf('pdf') < 0) {
      Swal.fire({
        titleText: 'Error al seleccionar archivo',
        text: 'El archivo debe ser del tipo pdf',
        icon: 'info',
        showCloseButton: true,
        showConfirmButton: false,
        position: 'top'
      });
      this.file = null;
      return;
    }
    this.file = documento;
    
    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(documento);
    reader.onloadend = () => this.strImage = reader.result;
  }


  evento(event: any) {
    this.documento = event.target.files[0];
    console.log(this.documento);
  }

}