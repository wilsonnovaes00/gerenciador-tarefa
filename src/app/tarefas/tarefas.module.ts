import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [TarefaService]
})
export class TarefasModule { }
