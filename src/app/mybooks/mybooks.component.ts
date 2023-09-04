import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MybooksService } from '../service/mybooks.service';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.css']
})
export class MybooksComponent implements OnInit {

  addBtn=true;
  updateBtn=false

  booklist:any;

  bookData:any;

  constructor(private router:Router,private fb:FormBuilder,private service:MybooksService){}

  ngOnInit(): void {
    if(!localStorage.getItem('user')){
      this.router.navigate([''])
    }

    this.showBooklist()
  }

  books=this.fb.group({
    title:this.fb.control(''),
    author:this.fb.control(''),
    date:this.fb.control(''),
    price:this.fb.control(''),
    id:this.fb.control(null)
  })

  booksAdd(){
    console.log(this.books.value);
    this.service.addBooks(this.books.value).subscribe(res=>{
      console.log(res);
      this.showBooklist()
      this.books.reset()
    })
  }
  showBooklist(){
    this.service.showBooksList().subscribe(res=>{
      this.booklist=res
    })
  }
  editBookId(id:any){
    this.service.getBookId(id).subscribe(res=>{
      this.bookData=res;
      this.books.setValue({
        title:this.bookData.title,
        author:this.bookData.author,
        date:this.bookData.date,
        price:this.bookData.price,
        id:this.bookData.id
      })
    })

    this.addBtn=false;
    this.updateBtn=true
  }
  update(){
    this.service.editBookInfo(this.books.value).subscribe(res=>{
      console.log(res);
      this.showBooklist()
      this.books.reset()

    })

    this.addBtn=true;
    this.updateBtn=false
  }
  deleteBookId(id:any){
    this.service.deleteBook(id).subscribe(res=>{
      console.log(res);
      this.showBooklist()
    })
  }

  logOut(){
    localStorage.removeItem('user')
    if(!localStorage.getItem('user')){
      this.router.navigate([''])
    }

  }
}
