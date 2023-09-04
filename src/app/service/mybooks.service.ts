import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MybooksService {

  url="http://localhost:3000/Books"

  constructor(private http:HttpClient) { }

  addBooks(data:any):Observable<any>{
    return this.http.post<any>(this.url,data)
  }
  showBooksList():Observable<any>{
    return this.http.get<any>(this.url)
  }
  deleteBook(id:any):Observable<any>{
    return this.http.delete<any>(this.url+'/'+id)
  }
  getBookId(id:any):Observable<any>{
    return this.http.get<any>(this.url+'/'+id)
  }
  editBookInfo(data:any):Observable<any>{
    return this.http.put<any>(this.url+'/'+data.id,data)
  }
}
