import { Component } from '@angular/core';
import { Software } from './software';

@Component({
  selector: 'company-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.css']
})
export class SoftwareListComponent {

  softwareList : Software[] = [
    {
      name: "VSC",
      description: "Code Editor optimized for web and cloud applications"
    },
    {
      name: "Android Studio",
      description: "IDE optimized for Android Apps"
    },
    {
      name: "Visual Studio",
      description: "IDE optimized for .NET and C++"
    },
    {
      name: "Postman",
      description: "API platform"
    },
    {
      name: "PopSQL",
      description: "SQL collaboration workspace"
    },
    {
      name: "InelliJ IDEA",
      description: "IDE optimized for java"
    },
    {
      name: "Unity",
      description: "Cross-platform game engine"
    },
  ]

  toggle(get: typeof globalThis) {
    console.log(this)
  }

}
