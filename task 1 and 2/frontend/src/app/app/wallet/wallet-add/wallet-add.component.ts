import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Purchase} from '../../../../shared/models/Purchase';

@Component({
  selector: 'app-wallet-add',
  templateUrl: './wallet-add.component.html',
  styleUrls: ['./wallet-add.component.less']
})
export class WalletAddComponent implements OnInit{

  @Input()
  title: string | null = null;

  @Input()
  price: string | null = null;

  @Input()
  comment?: string | null = null;

  @Output()
  action = new EventEmitter<Purchase>();

  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      input1: new FormControl(this.title, [Validators.required, Validators.maxLength(20)]),
      input2: new FormControl(this.price, [Validators.required, Validators.max(1000)]),
      comment: new FormControl(this.comment, Validators.maxLength(100))
    });
  }

  submit(): void {
    if (this.form.get('comment')?.value !== null)
      this.action.emit({
        title: this.form.get('input1')?.value,
        price: Number(this.form.get('input2')?.value),
        comment: this.form.get('comment')?.value
      })
    else
      this.action.emit({
        title: this.form.get('input1')?.value,
        price: Number(this.form.get('input2')?.value),
      })

    this.form.reset();
  }

}
