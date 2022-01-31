import { Component } from '@angular/core';

interface Menu {
  name: string,
  icon?: string,
  router?: string[],
}

interface Opciones {
  defaultOptions: Menu[],
  accessLink: Menu[],
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  defaultOptions: Menu[] = [
    {
      name: 'Home',
      icon: 'uil uil-estate',
      router: ['/', 'auth']
    },
    {
      name: 'Buscar',
      icon: 'uil uil-search',
      router: ['/', 'history']
    },
    {
      name: 'Tu biblioteca',
      icon: 'uil uil-chart',
      router: ['/', 'favorites']
    }
  ];

  accessLink: Menu[] = [
    {
      name: 'Crear lista',
      icon: 'uil-plus-square'
    },
    {
      name: 'Canciones que te gustan',
      icon: 'uil-heart-medical'
    }
  ];

  customOptions: Menu[] = [
    {
      name: 'Mi lista º1',
      router: ['/']
    },
    {
      name: 'Mi lista º2',
      router: ['/']
    },
    {
      name: 'Mi lista º3',
      router: ['/']
    },
    {
      name: 'Mi lista º4',
      router: ['/']
    }
  ];

  mainMenu: Opciones = {
    defaultOptions: this.defaultOptions,
    accessLink: this.accessLink
  }

}
