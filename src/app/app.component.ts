import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stringUtilSite';
  inputControl = new FormControl();
  outputControl = new FormControl();
  constructor() {
    this.inputControl.valueChanges.pipe(map(this.doubleQuoteToSingle))
      .subscribe(
        value => {
          this.outputControl.setValue(value);
        }
      );
  }

  doubleQuoteToSingle(input: string) {
    const tempS1: string = input.replace('\'', '\\\'');
    const tempS2: string = tempS1.replace('\"', '\'');
    return tempS2;
  }

  clearInput() {
    this.inputControl.setValue('');
  }
}
