import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'company-personnel-table',
  templateUrl: './personnel-table.component.html',
  styleUrls: ['./personnel-table.component.css']
})
export class PersonnelTableComponent {

  personnel : Employee[] = [
    {
      enrollment: 0,
      firstName: "Jill",
      lastName: "Smith",
      position: "Software Engineer"
    },
    {
      enrollment: 1,
      firstName: "Eve",
      lastName: "Jackson",
      position: "Front-End Developer"
    },
    {
      enrollment: 2,
      firstName: "Adam",
      lastName: "Johnson",
      position: "Back-End Developer"
    },
    {
      enrollment: 3,
      firstName: "Quentin",
      lastName: "Williams",
      position: "Full-Stack Developer"
    },
    {
      enrollment: 4,
      firstName: "Jill",
      lastName: "Smith",
      position: "Software Engineer"
    },
    {
      enrollment: 5,
      firstName: "Jill",
      lastName: "Smith",
      position: "Software Engineer"
    },
    {
      enrollment: 6,
      firstName: "Jill",
      lastName: "Smith",
      position: "Software Engineer"
    },
    {
      enrollment: 7,
      firstName: "Jill",
      lastName: "Smith",
      position: "Software Engineer"
    },
    {
      enrollment: 8,
      firstName: "Jill",
      lastName: "Smith",
      position: "Software Engineer"
    },
    {
      enrollment: 9,
      firstName: "Jill",
      lastName: "Smith",
      position: "Software Engineer"
    },
    {
      enrollment: 10,
      firstName: "Jill",
      lastName: "Smith",
      position: "Software Engineer"
    },
  ];

}
