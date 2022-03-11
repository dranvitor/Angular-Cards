import { Component, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

@Input()
titulo: string = 'Título'

@Input()
preco: string = '$0'

@Input()
conteudo: string = 'Conteúdo'

@Input()
segundoConteudo: string = 'Conteúdo'

@Input()
terceiroConteudo: string = 'Conteúdo'

@Input()
background: string = 'blue'

@Input()
cor: string = 'black'

@Input()
action: string = 'Conteúdo'

@Input()
message: string = 'Conteúdo'

constructor(private _snackBar: MatSnackBar) {}

openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action);
}

}
