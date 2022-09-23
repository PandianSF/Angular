import { Component, OnInit, Input } from '@angular/core';
import { NotesComponent } from '../notes/notes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
/** import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { faGroupArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons'; **/
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() item: any;
  famagnifyingglass = faMagnifyingGlass;
  /**  fanotes = faNoteSticky;
  fateams = faGroupArrowsRotate;
  fatext = faComment;
  fabell = faBell;
  fapro = faUser; **/
  faplus = faPlus;

  final: any;

  title: any;
  text: any;
  createdAt: any;
  notesId: any;

  constructor() {}

  /** TO GET DATA FROM LOCAL STORAGE
   submitForm() {
    (this.result = JSON.parse(localStorage.getItem('savedData') || '[]')),
      console.log(this.result);
  }**/
  ngOnInit(): void {
    console.log(this.item);
  }
}
