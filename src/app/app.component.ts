import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // Os espaços são caracteres invisíveis, eles foram utilizados pois o mat-divider não estava permitindo nem alterar a cor da linha, nem alterar o tamanho delas. Portanto eu retirei o mat-divider e o substituí por borders, fazendo o tamanho das linhas ser aumentado junto ao texto.
  
  primeiroStorage:string ='⠀⠀⠀⠀500 GB Storage⠀⠀⠀⠀' 
  primeiroUser:string = '⠀⠀⠀⠀2 Users Allowed⠀⠀⠀⠀' 
  primeiroSendUp:string = '⠀⠀⠀⠀Send up to 3 GB⠀⠀⠀⠀' 

  segundoStorage:string = '⠀⠀⠀⠀⠀⠀1 TB Storage⠀⠀⠀⠀⠀⠀' 
  segundoUser:string = '⠀⠀⠀⠀⠀5 Users Allowed⠀⠀⠀⠀⠀' 
  segundoSendUp:string = '⠀⠀⠀⠀⠀Send up to 10 GB⠀⠀⠀⠀'

  terceiroStorage:string = '⠀⠀⠀⠀⠀2 TB Storage⠀⠀⠀⠀⠀' 
  terceiroUser:string = '⠀⠀⠀10 Users Allowed⠀⠀⠀⠀' 
  terceiroSendUp:string = '⠀⠀⠀Send up to 20 GB⠀⠀⠀⠀' 
}
