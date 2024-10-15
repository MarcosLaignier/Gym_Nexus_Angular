
import {Component, Injector, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ModeEnum} from 'src/app/shared/enum/mode.enum';
import notify from 'devextreme/ui/notify';
import {DxFormComponent} from 'devextreme-angular';
import {Observable} from "rxjs";
import {Pessoa} from "../../shared/model/pessoa";
import {PessoaService} from "../../shared/services/pessoa.service";
import {CrudPadrao} from "../../shared/utils/crud/crud.padrao";
import {CrudBaseComponent} from "../../shared/components/crud-component/crud.base.component";
import {AtivoInativoEnum} from "../../shared/enum/ativo.inativo.enum";


@Component({
  selector: 'pessoa-component',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent extends CrudPadrao<Pessoa, any>{

  @ViewChild('formularioPessoa', {static: false})
  formularioPessoa: DxFormComponent;

  @ViewChild('crud', {static: false}) crud: CrudBaseComponent;

  mode: ModeEnum = ModeEnum.List;
  loadingVisible: boolean = false;
  pessoa: Pessoa;
  protected readonly ModeEnum = ModeEnum;
  ativoInativoEnum = Object.values(AtivoInativoEnum);

  constructor(injector: Injector,
              private mainService:PessoaService,
              private router:Router) {
    super(injector, "/pessoa");
  }

  protected override doOnInit() {
    let isEditing: boolean = this.router.url.split('/').includes('edit');
    if (isEditing) {
      this.mode = ModeEnum.Edit;
      this.model = new Pessoa();
    }
  }


  override getMainService(): any {
    return this.mainService;
  }

  override validateSave() {
    if(this.model.nome == null){
      notify('Por favor, preencha o Nome da Pessoa', 'error', 3000);
      return false;
    }

    if(this.model.nascimento == null){
      notify('Por favor, preencha o Nascimento da pessoa', 'error', 3000);
      return false;
    }

    if(this.model.documento == null){
      notify('Por favor, preencha o Documento da pessoa', 'error', 3000);
      return false;
    }

    return true;
    super.validateSave();
  }

  override beforeDoSave(): Observable<any> | null {
    // FixMe: Foi necessario remover a mascara do documento antes de salvar, verificar posteriomente
    this.model.documento = this.model.documento.replace(/\./g, '').replace(/-/g, '');
    return super.beforeDoSave();
  }

  createPessoa() {
    this.router.navigate(['pages', 'pessoa', 'edit']);
  }


}
