import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { CampusMidService } from '../../../@core/data/campus_mid.service';
import { UserService } from '../../../@core/data/users.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
// import { UserService } from '../../../@core/data/users.service';
import { ProduccionAcademicaPost } from '../../../@core/data/models/produccion_academica/produccion_academica';
import { HttpErrorResponse } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';
import { MatTableDataSource } from '@angular/material';
import { Inject } from '@angular/core';
import { ProyectoAcademicoService } from '../../../@core/data/proyecto_academico.service';
import { SgaMidService } from '../../../@core/data/sga_mid.service';
import { delay } from 'rxjs/operators';
import { InformacionBasica } from '../../../@core/data/models/proyecto_academico/informacion_basica';
import { ModificarProyectoAcademicoComponent } from '../modificar-proyecto_academico/modificar-proyecto_academico.component';
import { PersonaService } from '../../../@core/data/persona.service';
import { Persona } from '../../../@core/data/models/persona';
import { ConsultaProyectoAcademicoComponent } from '../consulta-proyecto_academico/consulta-proyecto_academico.component';
import { RegistroProyectoAcademicoComponent } from '../registro-proyecto_academico/registro-proyecto_academico.component';
import { NuxeoService } from '../../../@core/utils/nuxeo.service';
import { DocumentoService } from '../../../@core/data/documento.service';

@Component({
  selector: 'ngx-list-registro-proyecto-academico',
  templateUrl: './list-registro_proyecto_academico.component.html',
  styleUrls: ['./list-registro_proyecto_academico.component.scss'],
  })
export class ListRegistroProyectoAcademicoComponent implements OnInit {
  config: ToasterConfig;
  settings: any;
  dataSource: any;
  index: any;
  idproyecto: any;
  displayedColumns = ['Id', 'Registro', 'Vigencia', 'Tipo de registro', 'Documento', 'Tiempo de vigencia', 'Activo',
  'Fecha Inicio Registro', 'Fecha Vencimiento Registro'];

  source: LocalDataSource = new LocalDataSource();
  proyectoJson: any;

  constructor(private translate: TranslateService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private proyectoacademicoService: ProyectoAcademicoService,
    public dialogRef: MatDialogRef<ConsultaProyectoAcademicoComponent>,
    private sgamidService: SgaMidService,
    private nuxeoService: NuxeoService,
    private documentoService: DocumentoService,
    public dialog: MatDialog,
    private toasterService: ToasterService) {
      this.loadregistro();
  }

  downloadFile(id_documento: any) {
    const filesToGet = [
      {
        Id: id_documento,
        key: id_documento,
      },
    ];
    this.nuxeoService.getDocumentoById$(filesToGet, this.documentoService)
      .subscribe(response => {
        const filesResponse = <any>response;
        if (Object.keys(filesResponse).length === filesToGet.length) {
          // console.log("files", filesResponse);
          filesToGet.forEach((file: any) => {
            const url = filesResponse[file.Id];
            window.open(url);
          });
        }
      },
      (error: HttpErrorResponse) => {
        Swal({
          type: 'error',
          title: error.status + '',
          text: this.translate.instant('ERROR.' + error.status),
          confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
        });
      });
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
  }

  onclick(): void {
    this.dialogRef.close();
  }

  highlight(row ): void {
    this.idproyecto = row.ProyectoAcademicoInstitucionId.Id;

 }
 loadregistro() {
  const opt1: any = {
    title: this.translate.instant('GLOBAL.atencion'),
    text: this.translate.instant('oferta.evento'),
    icon: 'warning',
    buttons: true,
    dangerMode: true,
    showCancelButton: true,
  }
  this.sgamidService.get('consulta_proyecto_academico/get_registro/' + this.data.Id )
  .subscribe(res => {
  if (res !== null && res[0] !== 'error') {
    this.dataSource = new MatTableDataSource();
    this.dataSource = res
  }else {
    Swal(opt1)
    .then((willDelete) => {
      if (willDelete.value) {
      }
    });
  }
},
(error: HttpErrorResponse) => {
  Swal({
    type: 'error',
    title: error.status + '',
    text: this.translate.instant('ERROR.' + error.status),
    confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
  });
});
}

OpenRegistroCalificado(): void {
  const dialogRef = this.dialog.open(RegistroProyectoAcademicoComponent, {
    width: '550px',
    height: '750px',
    data: { IdProyecto: this.data.Id, endpoint: 'registro_calificado', tipo_registro: 1},
  });

  dialogRef.afterClosed().subscribe(result => {
    this.loadregistro();
  });
}


OpenRegistroAlta(): void {
  const dialogRef = this.dialog.open(RegistroProyectoAcademicoComponent, {
    width: '550px',
    height: '750px',
    data: { IdProyecto: this.data.Id, endpoint: 'registro_alta_calidad', tipo_registro: 2},
  });

  dialogRef.afterClosed().subscribe(result => {
    this.loadregistro();
  });
}


  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      // 'toast-top-full-width', 'toast-bottom-full-width', 'toast-top-left', 'toast-top-center'
      positionClass: 'toast-top-center',
      timeout: 5000,  // ms
      newestOnTop: true,
      tapToDismiss: false, // hide on click
      preventDuplicates: true,
      animation: 'slideDown', // 'fade', 'flyLeft', 'flyRight', 'slideDown', 'slideUp'
      limit: 5,
    });
    const toast: Toast = {
      type: type, // 'default', 'info', 'success', 'warning', 'error'
      title: title,
      body: body,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }



}
