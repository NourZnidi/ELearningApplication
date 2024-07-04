import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-choix-master',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './choix-master.component.html',
  styleUrl: './choix-master.component.css'
})
export class ChoixMasterComponent {
  // items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  // selectedItemIndex: number | null = null;

  // chooseItem(index: number): void {
  //   this.selectedItemIndex = index;
  // }
}
