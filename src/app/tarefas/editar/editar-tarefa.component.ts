import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms/';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService, Tarefa } from '../shared/';


@Component({
  selector: 'my-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(private tarefaService: TarefaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.getById(id);
  }

  update() : void {
    if (this.formTarefa.form.valid){
      this.tarefaService.update(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }
}
