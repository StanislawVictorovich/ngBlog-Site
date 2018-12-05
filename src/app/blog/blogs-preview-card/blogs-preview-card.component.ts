import { Component, Input } from '@angular/core';
import { User, Album } from '../../data';

@Component({
  selector: 'app-blogs-preview-card',
  templateUrl: './blogs-preview-card.component.html',
  styleUrls: ['./blogs-preview-card.component.css']
})
export class BlogsPreviewCardComponent {

  @Input() user: User;
  @Input() album: Album;
  @Input() imagePostStyleUrl: string;

}
