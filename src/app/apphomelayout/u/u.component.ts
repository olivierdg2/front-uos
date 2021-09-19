import { Component, OnInit } from '@angular/core';
import { NouiFormatter } from "ng2-nouislider";
import SwiperCore, { Pagination } from "swiper/core";
import { faGem } from '@fortawesome/free-regular-svg-icons';
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-shophome',
  templateUrl: './u.component.html',
  styleUrls: ['./u.component.scss']
})
export class UComponent implements OnInit {
  public disabled: boolean = false;
  public someValue: any = [30, 60];
  public someMin: number = 10;
  public someMax: number = 100;
  public someconect: any = true;
  public minvalueselect:any = this.someValue[0];
  public maxvalueselect:any = this.someValue[1];
  faCoffee = faGem;


  /*
  First we check for the logged in user.
  Each component relies on the this.me (the currently logged in user) data
    If not logged in:
        User can view categories and products
        Be able to preview products (apps) and login
        *read only mode* 
        The Chat page should lead to login (unlock uos)/register

    If user is logged in:
        User can view categories and products
        Be able to preview products (apps)
        The products split into My Apps and All Apps
          In the apps I can join an app, then create profile then, when all is set I can enter or leave (delete/disable profile).
        User can logout (lock uos)

  */

  constructor() { 
    const html = document.getElementsByTagName('html')[0];
    // hardcoded dark mode
    html.classList.add('dark-mode');
  }
  
  ngOnInit(): void {
    var html5Slider = document.getElementById('rangeslider');
    var inputNumber = document.getElementById('input-number');
    var select = document.getElementById('input-select');

    const myVideo = document.getElementById('video') as any;
    let isVideoPIP = false;
    myVideo.addEventListener('loadeddata', ()=>{
    console.log('Player ready!');
    })
  
    window.addEventListener('scroll', ()=>{
      if (window.pageYOffset> 100) {
        if (!myVideo.paused && myVideo.currentTime > 0 
            && !myVideo.ended && !isVideoPIP) {
          console.log('runPip')
          myVideo.requestPictureInPicture()
          .then(()=>{isVideoPIP = true;})
          ;
        }
      }
    })  
;

  }

  filterclick(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('filter-open');
  }
  filterclose(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('filter-open');
  }

  toastshowtiny() {
    var newtoast = new bootstrap.Toast(document.querySelector('#toastprouctaddedtiny'));
    newtoast.show()
  }
  toastshowsimple() {
    var newtoast = new bootstrap.Toast(document.querySelector('#toastprouctadded'));
    newtoast.show()
  }
  toastshowrich() {
    var newtoast = new bootstrap.Toast(document.querySelector('#toastprouctaddedrich'));
    newtoast.show()
  }


  saveRange(range:any) {
    this.minvalueselect = range[0];
    this.maxvalueselect = range[1];
 }
}
