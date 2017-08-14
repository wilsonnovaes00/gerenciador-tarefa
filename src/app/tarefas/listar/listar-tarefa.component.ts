import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared/';

@Component({
  selector: 'my-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];
  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.tarefaService.getAll();
  }
  getAll(): Tarefa[] {
    return this.tarefaService.getAll();
  }

}
