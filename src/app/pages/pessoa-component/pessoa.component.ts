import {Component, Injector} from '@angular/core';
import {PessoaService} from "../../shared/services/pessoaService";
import {Router} from "@angular/router";


@Component({
  selector: 'pessoa-component',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent {



  constructor(injector: Injector,
              private mainService:PessoaService,
              private router:Router) {
  }


  teste(){
    console.log("teste")
    return this.mainService.getAll().subscribe(value => console.log(value));
  }
}
