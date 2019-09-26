import { OnInit } from '@angular/core';
import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.service';


export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  resources: T[] = [];

  constructor(private resourceservice: BaseResourceService<T>) { }

  ngOnInit() {
    this.resourceservice.getAll().subscribe(
        // resources => this.resources = resources.sort((a,b) => b.id - a.id),
        resources => this.resources = resources,
      error => alert('Erro ao carregar Lista')
    );
  }

  deleteResource(resource: T) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.resourceservice.delete(resource.id).subscribe(
        () => this.resources = this.resources.filter(elemento => elemento !== resource),
        () => alert('Erro ao tentar Excluir.')
      );
    }
  }

}
