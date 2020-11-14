import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { PruebaService } from '../../../@core/data/prueba.service';

@Component({
  selector: 'ngx-prueba',
  template: `<router-outlet></router-outlet>`
})
export class PruebaUsuarioComponent implements OnInit {

  constructor(private pruebaService: PruebaService){ }

  ngOnInit() {
  }

}
