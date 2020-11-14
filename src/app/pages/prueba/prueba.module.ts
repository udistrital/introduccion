import { PruebaRoutingModule, routedComponents } from './prueba-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { PruebaService } from '../../@core/data/prueba.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { PruebaUsuarioComponent } from './prueba_usuario/prueba_usuario.component';
import { UserService } from '../../@core/data/users.service';
import { PersonaService } from '../../@core/data/persona.service';
import { NuxeoService } from '../../@core/utils/nuxeo.service';
import { NbDialogService } from '@nebular/theme';
import {NgDatepickerModule} from 'ng2-datepicker';
import { EnfasisModule } from '../enfasis/enfasis.module';
import { ListEnfasisService } from '../../@core/data/list_enfasis.service';
import {DpDatePickerModule} from 'ng2-date-picker';

@NgModule({
  imports: [
    ThemeModule,
    PruebaRoutingModule,
    Ng2SmartTableModule,
    ToasterModule,
    SharedModule,
    NgDatepickerModule,
    EnfasisModule,
    DpDatePickerModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  entryComponents: [
  ],
  providers: [
    PruebaService,
    UserService,
    PersonaService,
    NuxeoService,
    NbDialogService,
    ListEnfasisService,
  ],
  exports: [
    PruebaUsuarioComponent,
  ],
})
export class PruebaModule { }
