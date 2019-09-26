import { Component, OnInit, Input } from '@angular/core';

interface BreadCrumbItem {
  text: string; // é obrigatório
  link?: string; // não é obrigatório por conta do ?
}

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {

  @Input() items: Array<BreadCrumbItem> = [];

  constructor() { }

  ngOnInit() {
  }

  isTheLastItem(item: BreadCrumbItem): boolean {
    const index = this.items.indexOf(item); // pego a posição
    return index + 1 == this.items.length; // verifica se o index +1 == o tamanho total
  }
}
