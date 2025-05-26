import { Component } from '@angular/core';

@Component({
  selector: 'app-all-code',
  imports: [],
  templateUrl: './all-code.component.html',
  styleUrl: './all-code.component.css',
})
export class AllCodeComponent {
  handleTextarea(ref: Event) {
    console.log("hlo")
    const reff = ref.target as HTMLTextAreaElement;
    console.log(reff.className);
  }
}
