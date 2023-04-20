import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Istudent } from '../../model/student';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {


  @Output()
  stdInfo: EventEmitter<Istudent> = new EventEmitter<Istudent>()

  @ViewChild('fname')
  fname!: ElementRef;

  @ViewChild('lname')
  lname!: ElementRef;

  @ViewChild('email')
  email!: ElementRef;

  @ViewChild('contact')
  contact!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit() {

    let obj: Istudent = {
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value
    }

    // console.log(obj);

    this.stdInfo.emit(obj)


    this.fname.nativeElement.value = ''
    this.lname.nativeElement.value = ''
    this.email.nativeElement.value = ''
    this.contact.nativeElement.value = ''

  }

}
