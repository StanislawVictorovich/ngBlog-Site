import { Component, Input } from '@angular/core';
import { BlogService } from '../blog.service';
import { URL_AVATAR } from '../../constants';
import { User } from '../../data';

@Component({
  selector: 'app-blogs-user-card',
  templateUrl: './blogs-user-card.component.html',
  styleUrls: ['./blogs-user-card.component.css']
})
export class BlogsUserCardComponent {

  @Input() user: User;
  @Input() imageAvatarStyleUrl: string;

}
