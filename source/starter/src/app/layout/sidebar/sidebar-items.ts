import { RouteInfo } from './sidebar.metadata';

export const ROUTES = [
  {
    path: '',
    title: 'MENUITEMS.MAIN.TEXT',
    moduleName: 'device',
    icon: '',
    class: '',
    groupTitle: true,
    submenu: []
  },
  {
    path: 'devices',
    title: 'Devices',
    moduleName: 'device',
    icon: 'fa fa-home',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: 'profile',
    title: 'Profile',
    moduleName: 'profile',
    icon: 'fa fa-user',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: 'websites',
    title: 'Websites',
    moduleName: 'websites',
    icon: 'fa fa-globe',
    class: '',
    groupTitle: false,
    submenu: []
  },

  {
    path: 'android-for-work',
    title: 'Android for a Work',
    moduleName: 'work',
    icon: 'fa fa-briefcase',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: 'enterprise-app-store',
    title: 'Enterprise App Store',
    moduleName: 'app-store',
    icon: 'fas fa-store',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: 'managed-configuration',
    title: 'Managed Configuration',
    moduleName: 'configuration',
    icon: 'fa fa-th',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: 'advanced-restrictions',
    title: 'Advanced Restrication',
    moduleName: 'restrication',
    icon: 'fas fa-shield-alt',
    class: '',
    groupTitle: false,
    submenu: []
  },
];
