import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { mylistService } from '../mylist.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  constructor(
    private alertController:AlertController,
    private router:Router,
    private route:ActivatedRoute,
    private mylistService:mylistService
  ) { }
  movies = [];
  singlemovie;

  ngOnInit() {
    this.movies=this.mylistService.getAllmovies();
    this.route.paramMap.subscribe(paramMap=>{
      const val= paramMap.get('id');
      this.singlemovie = this.movies.find(obj=>{
        return obj.id.include(val);
      });
    });
  }
  async deletemovies(){
    console.log('deletemovies',this.singlemovie);
    const alert = await this.alertController.create({
      header: 'Alert',
      //subHeader
      message : 'Are you sure you want to remove ${this.singlemovie.name}?',
      //button :{Cancel}
      buttons:[
        {
          text:'Cancel'
        },
        //button :{OK}
        {
          text:'okay',
          handler:()=>{
            console.log('confirm okay');
            this.mylistService.deletemovies(this.singlemovie.id);
            this.router.navigateByUrl('/home');
          }
        }
      ]

    });
    alert.present()
  }

}

