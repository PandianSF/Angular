import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Output, EventEmitter, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  edit: any;
  final: any;
  createdAt: any;
  notesId: any;
  faplus = faPlus;
  formField: boolean = false;
  store: any = [];
  constructor() {
    /** TO USE DATEPIPE FOR GETTING CURRENT DATE
    let createdAt = this.datepipe.transform((new Date),'MM/dd/yyyy h:mm:ss');
    console.log(createdAt); **/
  }

  ngOnInit(): void {
    this.editForm();
  }
  editForm() {
    this.edit = new FormGroup({
      tit: new FormControl(''),
      tex: new FormControl(''),
    });
  }

  saveFile() {
    let createdAt = { createdAt: Date() };
    let notesId = Math.floor(Math.random() * 100);
    this.final = { ...this.edit.value, ...createdAt, notesId };
    console.log(this.final);
    this.store.push(this.final);
    console.log(this.store);
    this.edit.reset();
  }
  /** TO SET DATA TO LOCAL STORAGE
  localStorage.setItem('savedData', JSON.stringify(this.store));**/

  show() {
    this.formField = true;
  }
  view() {
    this.formField = false;
  }
}
