import { take } from 'rxjs';

import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { SimpleDataService } from './core/simple-data.service';

@Component({
  selector: 'smpl-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'a simple-app';
  simpleFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });
  isLoading = false;
  @HostBinding('class') class = 'smpl-root d-flex h-100';

  constructor(private simpleDataService: SimpleDataService) { }

  getRandomName() {
    this.simpleFormGroup.reset();
    this.isLoading = true;
    this.simpleDataService.getName()
      .pipe(take(1))
      .subscribe({
        next: name => this.simpleFormGroup.patchValue({ name }),
        complete: () => this.isLoading = false
      });
  }

  onClickFillName() {
    this.getRandomName();
  }

}
