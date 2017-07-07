import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-composicion',
  templateUrl: './composicion.component.html',
})
export class ComposicionComponent implements OnInit {
  @Input()
  private titulo: string;

  @Output()
  clickPorEvento = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  largarEvento() {
    this.clickPorEvento.emit();
  }
}
