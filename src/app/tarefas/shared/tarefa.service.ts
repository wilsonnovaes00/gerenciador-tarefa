import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable()
export class TarefaService {

  constructor() { }

  getAll(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  addTarefas(tarefa: Tarefa): void {
    const tarefas = this.getAll();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  getById(id: number): Tarefa {
    const tarefas: Tarefa[] = this.getAll();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  update(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.getAll();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  deleteTarefa(id: number): void {
    let tarefas: Tarefa[] = this.getAll();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
  ChangeStatus(id: number): void {
    const tarefas: Tarefa[] = this.getAll();
    tarefas.forEach((obj , index , objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
