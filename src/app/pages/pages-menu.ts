// import { NbMenuItem } from '@nebular/theme';
import { MenuItem } from './menu-item';
import { icon } from 'leaflet';

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
    key: 'dashboard',
  },
  {
    title: 'Producción Academica',
    icon: 'nb-edit',
    link: '',
    key: 'produccion_academica',
    children: [
      {
        title: 'Listar Producciones',
        icon: 'nb-list',
        link: '/pages/produccion_academica/list-produccion_academica',
        key: 'list_produccion_academica',
      },
    ],
  },
  {
    title: 'Prueba Usuario',
    icon: 'nb-list',
    link: '/pages/prueba/prueba_usuario',
    key: 'prueba_usuario',
  },
  {
    title: 'Eventos',
    icon: 'nb-compose',
    link: '',
    key: 'evento',
    children: [
      {
        title: 'Listar Eventos',
        icon: 'nb-list',
        link: '/pages/evento/list-evento',
        key: 'list_evento',
      },
    ],
  },
  {
    title: 'Calendario académico',
    icon: 'nb-compose',
    link: '',
    key: 'calendarioacademico',
    children: [
      {
        title: 'Listar calendarios académicos',
        icon: 'nb-list',
        link: '/pages/calendario-academico/list-calendario-academico',
        key: 'list_calendarioacademico'
      }
    ]
  },
  {
    title: 'Tipo Periodo',
    icon: 'nb-compose',
    link: '/pages/tipo_periodo',
    key: 'tipo_periodo',
    children: [
      {
        title: 'Lista Tipo Periodo',
        link: '/pages/tipo_periodo/list-tipo_periodo',
        key: 'lista_tipo_periodo',
      },
      {
        title: 'CRUD Tipo Periodo',
        link: '/pages/tipo_periodo/crud-tipo_periodo',
        key: 'crud_tipo_periodo',
      },
    ],
  },
  {
    title: 'Periodo',
    icon: 'nb-gear',
    link: '/pages/periodo',
    key: 'periodo',
    children: [
      {
        title: 'Lista Periodo',
        link: '/pages/periodo/list-periodo',
        key: 'lista_periodo',
      },
      {
        title: 'CRUD Periodo',
        link: '/pages/periodo/crud-periodo',
        key: 'crud_periodo',
      },
    ],
  },
  {
    title: 'Calendarioevento',
    icon: 'nb-compose',
    link: '/pages/calendarioevento',
    key: 'calendarioevento',
    children: [
      {
        title: 'Lista Calendarioevento',
        link: '/pages/calendarioevento/list-calendarioevento',
        key: 'lista_calendarioevento',
      },
      // {
      //   title: 'CRUD Calendarioevento',
      //   link: '/pages/calendarioevento/crud-calendarioevento',
      //   key: 'crud_calendarioevento',
      // },
    ],
  },
  {
    title: 'Proyecto Academico',
    icon: 'nb-edit',
    link: '',
    key: 'proyecto_academico',
    children: [
      {
        title: 'Registro de un Proyecto',
        icon: 'nb-edit',
        link: '/pages/proyecto_academico/crud-proyecto_academico',
        key: 'crud_proyecto_academico',
      },
      {
        title: 'Listar Proyectos',
        icon: 'nb-list',
        link: '/pages/proyecto_academico/list-proyecto_academico',
        key: 'list_proyecto_academico',
      },
    ],
  },
  {
    title:  'Inscripcion',
    icon:  'nb-compose',
    link:  '',
    key:  'inscripcion',
    children:  [
      {
        title:  'Pre Inscripcion',
        icon: 'nb-edit',
        link:  '/pages/inscripcion/preinscripcion',
        key:  'preinscripcion',
      },
      {
        title:  'Inscripcion',
        icon: 'nb-edit',
        link:  '/pages/inscripcion/inscripcion_general',
        key:  'inscripcion_general',
      },
    ],
  },
  {
    title:  'Admision',
    icon:  'nb-compose',
    link:  '',
    key:  'admision',
    children:  [
      {
        title:  'Criterios admisión',
        icon: 'nb-edit',
        link:  '/pages/admision/criterio_admision',
        key:  'criterios',
      },
      {
        title:  'Asignacion Cupos',
        icon: 'nb-edit',
        link:  '/pages/admision/asignacion_cupos',
        key:  'asignacion_cupos',
      },
      {
        title:  'Actualizacion Estado',
        icon: 'nb-compose',
        link:  '/pages/admision/actualizacion_estado',
        key:  'actualizacion_estado',
      },
      {
        title:  'Listado Aspirante',
        icon: 'nb-compose',
        link:  '/pages/admision/listado_aspirante',
        key:  'listado_aspirante',
      },
    ],
  },
  {
    title: 'Archivo Icfes',
    icon: 'nb-compose',
    link: '',
    key: 'archivo_icfes',
    children: [
      {
        title: 'Registrar archivo',
        icon: 'nb-list',
        link: '/pages/archivo_icfes/crud-archivo_icfes',
        key: 'crud_archivo',
      },
    ],
  },
  {
    title: 'Reportes',
    icon: 'nb-compose',
    link: '',
    key: 'reportes',
    children: [
      {
        title: 'Inscripciones',
        icon: '	nb-maximize',
        link: '',
        key: 'inscripciones',
        children: [
          {
            title: 'Inscritos por proyecto',
            icon: 'nb-list',
            link: '/pages/reportes/inscripciones/inscritos-proyecto',
            key: 'inscritos_por_proyecto',
          },
        ],
      },
      {
        title: 'Icfes',
        icon: '	nb-maximize',
        link: '',
        key: 'icfes',
        children: [
          {
            title: 'Registro Icfes por proyecto',
            icon: 'nb-list',
            link: '/pages/reportes/icfes_SNP/icfes-proyecto',
            key: 'icfes_por_proyecto',
          },
        ],
      },
      {
        title: 'Proyectos',
        icon: '	nb-maximize',
        link: '',
        key: 'proyectos_curriculares',
        children: [
          {
            title: 'Proyectos',
            icon: 'nb-list',
            link: '/pages/reportes/proyectos/list-proyectos',
            key: 'lista_proyectos_curriculares',
          },
          {
            title: 'HistoricoAcreditaciones',
            icon: 'nb-list',
            link: '/pages/reportes/proyectos/historico-acreditaciones',
            key: 'historico_acreditaciones',
          },
        ],
      },
    ],
  },
  {
    title: 'Administración',
    icon: 'nb-gear',
    link: '',
    key: 'administracion',
    children: [
      {
        title: 'enfasis',
        icon: 'nb-compose',
        link: '',
        key: 'enfasis',
        children: [
          {
            title: 'Registrar Enfásis',
            icon: 'nb-list',
            link: '/pages/enfasis/crud-enfasis',
            key: 'crud_enfasis',
          },
          {
            title: 'Listar Enfásis',
            icon: 'nb-list',
            link: '/pages/enfasis/list-enfasis',
            key: 'list_enfasis',
          },
        ],
      },
    ],
  },

  /*
  {
    title: 'Menú',
    icon: 'nb-compose',
    link: '',
    key: 'menu',
    children: [
      {
        title: 'Opciones',
        icon: 'nb-list',
        link: '/pages/menu_opcion/list-menu_opcion',
        key: 'opciones',
      },
      {
        title: 'Configurar rol',
        icon: 'nb-list',
        link: '/pages/perfil_x_menu_opcion/list-perfil_x_menu_opcion',
        key: 'configurar_rol',
      },
    ],
  },
  */
]
