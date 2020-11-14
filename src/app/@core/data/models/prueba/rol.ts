import { Usuario } from './usuario';

export class Rol {
  Id: number;
  Aplicacion: string;
  FkUsuario: Usuario;
}
