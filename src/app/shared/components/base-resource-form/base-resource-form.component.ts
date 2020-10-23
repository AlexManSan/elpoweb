import { OnInit, AfterContentChecked, Injector } from '@angular/core';
// FormBuilder = construtor de formularios
// FormControl = campos do formulário
// FormGroup = responsável pelo formulário em si
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.service';

// manipula a rota
import { switchMap } from 'rxjs/operators';

// traga tudo que tiver no from e deixe no objeto pra poder trabalhar
import toastr from 'toastr';

export abstract class BaseResourceFormComponent<T extends BaseResourceModel> implements OnInit, AfterContentChecked {

    // variaveis
    currentAction: string; // new ou edit
    resourceForm: FormGroup;
    pageTitle: string;
    serverErrorMessages: string[] = null;
    submittingForm = false;

    // variaveis que serão fornecidas pelo injetor e capturadas por ele
    protected route: ActivatedRoute;
    protected router: Router;
    protected formBuilder: FormBuilder; // construtor de formulários

    /**
     * Método construtor que recebe esses parametros necessários para uso do mesmo
     * Autor: Alex Santos
     * @param injetor 
     * @param resource 
     * @param resourceService 
     * @param jsonDataToResourceFn 
     */
    constructor(
        protected injetor: Injector,
        public resource: T,  // new Category();
        protected resourceService: BaseResourceService<T>,
        protected jsonDataToResourceFn: (jsonData) => T
    ){
        this.route = this.injetor.get(ActivatedRoute);
        this.router = this.injetor.get(Router);
        this.formBuilder = this.injetor.get(FormBuilder);
    }

    /**
     * Metodo de inicialização do Angular
     */
    ngOnInit() {
        this.setCurrentAction();  // pegando a ação
        this.buildResourceForm(); // construindo o formulário
        this.loadResource();      // carregando a categoria nos campos
    }

  // get pacientefrm(): any {
  //   return this.resourceForm.get('paciente');
  // }

  // setValoresPaciente(elpo: Elpo) {
  //   this.resourceForm.setValue({
  //     nome: elpo.paciente.nome,
  //     idade: elpo.paciente.idade,
  //     prontuario: elpo.paciente.prontuario,
  //   });
  // }

    /**
     * Este Método carrega depois das verificações padrões
     */
    ngAfterContentChecked() {
        this.setPageTitle();
    }

    /** 
     * Dispara o formulário quando o usuario clicar em salvar ou enter
     * Autor: Alex Santos
     */
    submitForm() {
        this.submittingForm = true;

        if (this.currentAction === 'new') {
            this.createResource();
        } else {
            this.updateResource();
        }
    }

    // PROTECT METHODS

    /**
     * Manipula a url para novo ou edição.
     * Autor: Alex Santos
     */
    protected setCurrentAction() {
        // /categorias/new  ou  /categorias/34/edit
        if (this.route.snapshot.url[0].path === 'new') {
            this.currentAction = 'new';
        } else {
            this.currentAction = 'edit';
        }
    }

    /**
     * Carrega o objeto para o formulário
     * Autor: Alex Santos
     */
    protected loadResource() {
        if (this.currentAction === 'edit') {
            this.route.paramMap.pipe(
                switchMap(params => this.resourceService.getById(+params.get('id')))
            )
                .subscribe(
                    (resource) => {
                        this.resource = resource;
                        this.resourceForm.patchValue(resource); // preenchendo o resourceForm com os dados do resource

                        // console.warn("Todo o formulário: " + this.resourceForm.value);
                        // console.log("Exibindo id com controls: " + this.resourceForm.controls['id'].value);
                        // console.log("Exibindo id com get: " + this.resourceForm.get('id').value);
                    },
                    (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
                );
        }
    }

    /**
     * Define o título da página
     * Autor: Alex Santos
     */
    protected setPageTitle() {
        if (this.currentAction === 'new') {
            this.pageTitle = this.createPageTitle();
        } else {
            this.pageTitle = this.editionPageTitle();
        }
    }

    /**
     * Metodo será sobrescrito na classe de uso
     */
    protected createPageTitle(): string {
        return 'Novo';
    }

    /**
     * Metodo será sobrescrito na classe de uso
     */
    protected editionPageTitle(): string {
        return 'Edição';
    }


    /**
     * Método que executa uma criação chamando o serviço correspondente ao objeto.
     * Autor: Alex Santos
     */
    protected createResource() {
        const resource: T = this.jsonDataToResourceFn(this.resourceForm.value);

        this.resourceService.create(resource)
            .subscribe(
                resource => this.actionForSuccess(resource),
                error => this.actionForError(error)
            );
    }

    /**
     * Método que executa uma atualização chamando o serviço correspondente ao objeto.
     * Autor: Alex Santos
     */
    protected updateResource() {
        const resource: T = this.jsonDataToResourceFn(this.resourceForm.value);

        this.resourceService.update(resource)
            .subscribe(
                resource => this.actionForSuccess(resource),
                error => this.actionForError(error)
            );
    }


    /**
     * Método executa uma ação de redirecionamento após o sucesso, esse redirecionamento carrega o objeto salvo ou alterado
     * com seu id para o formulário.
     * Autor: Alex Santos
     * @param resource 
     */
    protected actionForSuccess(resource: T) {
        toastr.success('Solicitação processada com sucesso!');
        // console.log(this.route.snapshot.parent);  // mostra a rota pai
        // vou recarregar o componente
        // indo para /categorias
        // e voltando para /categorias/:id/edit
        // não armazena no histórico do navegador
        // retorna uma promise por isso o them

        const baseComponentPath: string = this.route.snapshot.parent.url[0].path;

        this.router.navigateByUrl(baseComponentPath, { skipLocationChange: true })
            .then(
                () => this.router.navigate([baseComponentPath, resource.id, 'edit'])
            );
    }

    /**
     * Método de disparo de erro através do toastr e console.
     * Autor: Alex Santos
     * @param error 
     */
    protected actionForError(error) {
        toastr.error('Ocorreu um erro ao passar sua solicitação! ');
        this.submittingForm = false;

        if (error.status === 422) {
            // retornará um array de erros
            this.serverErrorMessages = JSON.parse(error._body).errors;
        } else {
            this.serverErrorMessages = ['Falha na comunicação com o servidor, tente mais tarde.'];
        }
    }

    /**
     * Metodo Abstrato em classe abastrata ao extender a essa classe abstrata será obrigatorio a implementação deste método.
     * Autor: Alex Santos
     */
    protected abstract buildResourceForm(): void;

    /**
     * Usado para comparar objetos de uma combobox de obj
     * Autor: Alex Santos
     * @param obj1 
     * @param obj2 
     */
    protected compararObjs(obj1, obj2){
        return obj1 && obj2 ? obj1.id === obj2.id :obj1 === obj2;
    }
}
