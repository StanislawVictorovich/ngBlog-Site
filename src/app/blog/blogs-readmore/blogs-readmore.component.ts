import { Component, OnInit, Input, Output, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BlogService } from '../blog.service';
import { data } from '../../mock-data';

@Component({
  selector: 'app-blogs-readmore',
  templateUrl: './blogs-readmore.component.html',
  styleUrls: ['./blogs-readmore.component.css'],
  providers: [ BlogService ]
})
export class BlogsReadmoreComponent implements OnInit {
  @Input() i:number;
  public modalRef: BsModalRef;
  public items: any[];

  constructor(private blogService: BlogService, private modalService: BsModalService) { 
    this.items = Array(15).fill(0);
  }

  ngOnInit() {
    
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
