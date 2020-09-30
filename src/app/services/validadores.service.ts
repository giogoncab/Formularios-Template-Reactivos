import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noGonzalez(control: FormControl): {[s: string]: boolean}{

    if (control.value?.toLowerCase() === 'gonzalez') {
      return {
        noGonzalez: true
      }
    }
    return null;
  }
}
