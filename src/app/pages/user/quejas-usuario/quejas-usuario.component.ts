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
import { ReglasNegocioService } from 'src/app/services/reglas-negocio.service';

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

  numero: number;
  medio: any;
  sigl:any
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
  quejas: any;
  ingresos: Ingreso[] = [
    { value: '1', viewValue: 'Telefono' },
    { value: '2', viewValue: 'Correo' },
    { value: '3', viewValue: 'Chat' },
    { value: '4', viewValue: 'Correo' },
    { value: '5', viewValue: 'Presencial' },
  ];
  cantidad: any;
  qms: any[] = [];
  dataSourceEventos = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  eventoColumns: string[] = [
    'codigoQueja',
    'nombre',
    'detalleQueja',
    'medioIngreso',
    'estado'
  ];
  numerito: number;
  corr: any;
  QuejasForm: FormGroup;
  constructor(
    private service: ServiceService,
    private spinner: NgxSpinnerService,
    private loginService: LoginService,
    private uploadFileService: UploadFileService,
    public reglasNegocio: ReglasNegocioService
  ) {
    this.QuejasForm = new FormGroup({
      medioIngreso: new FormControl('5'),
      nombre: new FormControl('', Validators.required),
      correoElectronico: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      telefono: new FormControl('', Validators.required),
      oficina: new FormControl('', Validators.required),
      nombreEmpleado: new FormControl('', Validators.required),
      detalleQueja: new FormControl('', Validators.required),
      documento: new FormControl(''),
      tipoQueja: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.spinner.show();
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.user = this.loginService.getUser();
    console.log('user', this.user.id);
    this.loginService.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.loginService.isLoggedIn();
        this.user = this.loginService.getUser();
        console.log('user', this.user);
      }
    )
    this.service.getIp().toPromise().then((res: any) => {
      this.ipUsuario = res.ip;
      console.log('my ip' + this.ipUsuario);
    });
    this.obtenerQMS();
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

  obtenerQMS() {
    this.service.getData<any[]>(this.service.BASE_URL_QUEJAS, 'tipoQueja/listar').toPromise().then(data => {
      this.qms = data;
      console.log(data);
    });
  }

  async obtenerQuejas() {
    this.service.getData<any[]>(this.service.BASE_URL_QUEJAS, `queja/listar/${this.user.id}`).toPromise().then(data => {
      this.quejas = data;
      this.medio = this.quejas.codigoMedioIngreso;
      data.forEach(element => {
        element.medioIngreso = this.ingresos[element.codigoMedioIngreso - 1].viewValue;
        element.estado = element.codigoEstadoInterno == 1 ? 'Presentada' : '';
      });
      console.log('queja??', this.quejas);
      this.dataSourceEventos.sort = this.sort;
      this.dataSourceEventos = new MatTableDataSource(this.quejas);
      this.dataSourceEventos.paginator = this.paginator;
    });
  }


  obtenerNumero(event: any) {
    this.numero = event
    console.log(this.numero);
  }


  /* async obtenerCantidadQuejas() {
    await this.service.getData<any[]>(this.service.BASE_URL_QUEJAS, `queja/queja/${this.numero}`).toPromise().then(data => {
      this.cantidad = data;
      console.log(data);
    });
  } */
  numeroQueja() {
    console.log(this.QuejasForm.get('tipoQueja').value);
    this.numero = this.QuejasForm.get('tipoQueja').value;
    this.obtenerQMS();
    this.qms.forEach(element => {
      if (element.codigoTipoQueja == this.numero) {
        this.sigl= element.siglas;
      }
      
    });
  }


  async guardarQueja(data: any) {
    this.spinner.show();
    
    this.uploadFileService.subirArchivo(this.file, 'CARPETA/SUBCARPETA')
      .then(async (res: any) => {
        this.url = res.secure_url;
        await this.service.getData<any[]>(this.service.BASE_URL_QUEJAS, `queja/queja/${this.numero}`).toPromise().then(data => {
          this.cantidad = (data);
          this.numerito = +this.cantidad.queja;
          this.corr = this.numerito + 1;
        });
        const queja = {
          codigoEtapa: 1,
          codigoRegion: 1,
          codigoTipoCreador: this.user.id,
          codigoMedioIngreso: 5,
          codigoEstadoExterno: 1,
          codigoEstadoInterno: 1,
          codigoTipoQueja: data.tipoQueja,
          codigoPuntoAtencion: 8,
          dpiUsuario: 1,
          nombre: data.nombre,
          correoElectronico: data.correoElectronico,
          nombreEmpleado: data.nombreEmpleado,
          detalleQueja: data.detalleQueja,
          correlativo: `${this.sigl}-${this.numerito+1}-${this.anioActual}`,
          documentoSoporte: this.url ? this.url : '',
          justificacion: 1,
          anioQueja: this.anioActual,
          usuarioAgrega: this.user.username,
          ipUsuarioAgrega: this.ipUsuario,
          fechaAgrega: Number(moment())

        };
        console.log(queja.correlativo);
        this.service.postData(this.service.BASE_URL_QUEJAS, 'queja/crear', queja).toPromise().then(async data => {
          this.obtenerQuejas();
          this.enviarNotificacion();
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
        this.url = '';
        Swal.fire({
          titleText: 'Datos incorrectos',
          text: 'Verifique que los datos ingresados sean correctos',
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


  enviarNotificacion() {
    this.spinner.show();
    const notificacion = {
      destinatario: this.QuejasForm.value.correoElectronico,
      destino: "bancoprestamito@gmail.com",
      asunto: "Notificación de queja",
      cuerpo: `Señor cuentahabiente, agredecemos su comunicación, le informamos que su queja ha sido recibida exitosamente. Para el seguimiento o cualquier consulta relacionada, no olvide que el numero de su queja es: ${this.sigl}-${this.numerito+1}-${this.anioActual}`
    };
    this.service.postData(this.service.BASE_URL_QUEJAS, 'correo/send', notificacion).toPromise().then(async data => { }).catch(error => {
      console.error(error);
      this.spinner.hide();
    });
  }
}