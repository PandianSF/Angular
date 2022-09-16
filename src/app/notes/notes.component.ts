import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  //  @Input() myResult: any;
  //@Output() result: EventEmitter<any> = new EventEmitter();

  edit: any;

  store: any = [];

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
    //   this.result.emit(this.store);
    this.edit.reset()
    localStorage.setItem('savedData', JSON.stringify(this.store));
  }
}
