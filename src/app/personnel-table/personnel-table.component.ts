import { Component } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'company-personnel-table',
  templateUrl: './personnel-table.component.html',
  styleUrls: ['./personnel-table.component.css']
})
export class PersonnelTableComponent {

  constructor(private http: HttpClient) {}

  personnel: Employee[] | undefined;
  readonly ROOT_URL = 'http://localhost:8080/api/personnel';
  readonly MESSAGE_URL = 'http://localhost:8080/api/personnel/message'
  posts: Observable<Employee[]> = this.http.get<Employee[]>(this.ROOT_URL);

  ngOnInit(): void {
    this.posts.subscribe(data => {
      this.personnel = data;
    });
  }

  getMessage() {
    console.log(this.http.get<String>(this.MESSAGE_URL));
  }

  searchText = '';

}
