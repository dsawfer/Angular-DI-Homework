import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Card} from "../../../shared/models/Card";

@Component({
  selector: 'app-flip-cards-add',
  templateUrl: './flip-cards-add.component.html',
  styleUrls: ['./flip-cards-add.component.less']
})
export class FlipCardsAddComponent implements OnInit {

  @Output()
  addCard = new EventEmitter<Card>();

  form = new FormGroup({
    title: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
    content: new FormControl(null, [Validators.required, Validators.maxLength(1000)]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    this.addCard.emit({
      title: this.form.get('title')?.value,
      content: this.form.get('content')?.value
    })
  }
}
