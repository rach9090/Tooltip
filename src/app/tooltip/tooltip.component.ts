import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.sass']
})
export class TooltipComponent implements OnInit {

  @Input() message;
  constructor() {
  }

  ngOnInit() {
  }

}
