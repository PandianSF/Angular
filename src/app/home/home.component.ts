import { Component, OnInit } from '@angular/core';
import { NotesComponent } from '../notes/notes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { faGroupArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  fahouse = faHouse;
  famagnifyingglass = faMagnifyingGlass;
  fanotes = faNoteSticky;
  fateams = faGroupArrowsRotate;
  fatext = faComment;
  fabell = faBell;
  fapro = faUser;
  faplus = faPlus;

  result: any[];

  title: any;
  text: any;

  constructor() {
    this.result = [];
  }

  submitForm() {
    (this.result = JSON.parse(localStorage.getItem('savedData') || '{}')),
      console.log(this.result);
  }
  ngOnInit(): void {
    this.result = JSON.parse(localStorage.getItem('savedData') || '{}');
    console.log(this.result, 'RES');
  }
 
}
