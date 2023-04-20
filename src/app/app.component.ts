import { Component } from '@angular/core';
import { Istudent } from './shared/model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'io-form-viewchild';

  stdArray: Array<Istudent> = [];

  getStdData(data: Istudent) {
    console.log(data);

    this.stdArray.push(data)
  }
}
