import { Component } from '@angular/core';
import { Software } from './software';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'company-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.css']
})
export class SoftwareListComponent {

  constructor(private http: HttpClient) {}

  software : Software[] | undefined;
  readonly ROOT_URL = "http://localhost:8080/api/software";
  posts: Observable<Software[]> = this.http.get<Software[]>(this.ROOT_URL);

  ngOnInit(): void {
    this.posts.subscribe(data => {
      this.software = data;
    })
  }

}
