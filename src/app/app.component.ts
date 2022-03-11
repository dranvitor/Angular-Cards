import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  primeiroStorage = '500 GB Storage'
  primeiroUser = '2 Users Allowed'
  primeiroSendUp = 'Send up to 3 GB'

  segundoStorage = '1 TB Storage'
  segundoUser = '5 Users Allowed'
  segundoSendUp = 'Send up to 10 GB'

  terceiroStorage = '2 TB Storage'
  terceiroUser = '10 Users Allowed'
  terceiroSendUp = 'Send up to 20 GB'
  
}
