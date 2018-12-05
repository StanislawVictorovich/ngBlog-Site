import { Component, Input, Output, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { User, Album } from '../../data';

@Component({
  selector: 'app-blogs-readmore',
  templateUrl: './blogs-readmore.component.html',
  styleUrls: ['./blogs-readmore.component.css']
})
export class BlogsReadmoreComponent {
  
  @Input() user: User;
  @Input() album: Album;
  @Input() indexOfBlogPost: number;

  private modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  private openModal(template: TemplateRef<BsModalRef>) {
    this.modalRef = this.modalService.show(template);
  }

}
