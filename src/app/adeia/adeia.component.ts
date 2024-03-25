import { Component } from '@angular/core';

@Component({
  selector: 'app-adeia',
  templateUrl: './adeia.component.html',
  styleUrls: ['./adeia.component.css']
})
export class AdeiaComponent {
  divActive: { [key: string]: boolean } = {};

  toggleDiv(divId: string): void {
    this.divActive[divId] = !this.divActive[divId];
  }
}
