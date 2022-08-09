import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading = false;
  data = [{
    image: '',
    name: '',
    species: '',
    status: '',
    gender: '',
    location: {
      name: '',
      url: ''
    },
    origin: {
      name: '',
      url: '',
    },
  }];

  modalData = {
    image: '',
    name: '',
    species: '',
    status: '',
    gender: '',
    location: {
      name: '',
      url: ''
    },
    origin: {
      name: '',
      url: '',
    },
  };


  constructor(private modalService: NgbModal) {
    this.data = [];
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(value: string = '') {
    this.loading= true;
    fetch('https://rickandmortyapi.com/api/character/?name='+value).then( (response) => {
        return response.json();
      }).then( (data) =>{
        this.data = data.results.slice(0, 12);
        this.loading=false;
      })
  }

  open(content: any, data: any) {
    this.modalData = data;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', backdrop: 'static'})
  }

}
