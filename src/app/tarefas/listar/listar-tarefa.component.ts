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

  remove($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa"' + tarefa.nome + '"?')) {
      this.tarefaService.deleteTarefa(tarefa.id);
      this.tarefas = this.getAll();
    }
  }

  ChangeStatus(tarefa: Tarefa): void {
    if (confirm('Deseja atualiza a tarefa"' + tarefa.nome + '"?')) {
      this.tarefaService.ChangeStatus(tarefa.id);
      this.tarefas = this.getAll();
    }
  }
}
