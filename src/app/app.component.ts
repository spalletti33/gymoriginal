import { Component, OnInit } from '@angular/core';
declare var $:any;
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gimnacio';

  ngOnInit(): void {

    AOS.init();

   //esconde el video al iniciar
    $('#videoup').css('display','none')


    //muestra el video y esconde el boton play
    $('#muestra1').click(function () {

      $('#muestra1').css('display','none')
      $('#videoup').css('display','block')

    });

    //esconde el video y muestra el boton play
    $('#cerrar').click(function () {

      $('#muestra1').css('display','block')
      $('#videoup').css('display','none')

    });



  }
 
}
