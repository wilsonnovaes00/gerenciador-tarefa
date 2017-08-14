import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TarefaService, Tarefa } from '../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'my-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;
  constructor(private tarefaService: TarefaService, private router: Router) { }
  ngOnInit() {
    this.tarefa = new Tarefa();
  }
  addTarefa(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.addTarefas(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }
}
