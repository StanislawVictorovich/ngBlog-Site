import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css'],
  providers: [ BlogService ]
})
export class BlogsListComponent implements OnInit {

  constructor(private blogService: BlogService) { }
  
  public img1opacity = {'opacity': '0'};
  public img2opacity = {'opacity': '0'};
  public img1class = {'img_1': true, 'img_d_n': false, 'img_d_b': false};
  public img2class = {'img_2': true, 'img_d_n': false, 'img_d_b': false};
  public contTextImg = {'cont_text_img' : false, 'cont_text_img_act': false};
  public contImgFrond = {'cont_img_frond': false, 'cont_img_frond_active': false};
  public cont = 0;

  public inic() {
    if(this.cont % 2 != 0) {
      this.img1opacity.opacity = '0';
      setTimeout(()=>{
        this.img1class.img_d_n = true;
        this.img1class.img_d_b = false;
        this.img2class.img_d_n = false;
        this.img2class.img_d_b = true;
      },500);
      setTimeout(()=>{
        this.img2opacity.opacity = '0.2';
      },600);
      this.cont++;      
    } else {
      this.img2opacity.opacity = '0';
      setTimeout(()=>{
        this.img2class.img_d_n = true;
        this.img2class.img_d_b = false;
        this.img1class.img_d_n = false;
        this.img1class.img_d_b = true;
      },500);
      setTimeout(()=>{
        this.img1opacity.opacity = '0.2';
      },600);
      this.cont++;
    }
  }

  ngOnInit() {
    this.blogService.getNewsCards();
    this.inic();
    this.contTextImg.cont_text_img = true;
    this.contTextImg.cont_text_img_act = true;
    setTimeout(()=>{
      this.contImgFrond.cont_img_frond = true;
      this.contImgFrond.cont_img_frond_active = true;
    },1700);
    setInterval(()=>{
      this.inic();
      },10000)
  }

}
