import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})

export class NotesComponent implements OnInit {
  edit: any;

  store: any = [];

  savedData: any = [];

  constructor() {}

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
    this.store.push(this.edit.value);
    console.log(this.store);
     localStorage.setItem('savedData', JSON.stringify(this.store));
  }
}
