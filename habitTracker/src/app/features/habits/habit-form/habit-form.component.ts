import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { HabitForm } from '../../../habit-form';
import { HabitListComponent } from '../habit-list/habit-list.component';

@Component({
  selector: 'app-habit-form',
  imports: [ReactiveFormsModule,HabitListComponent],
  templateUrl: './habit-form.component.html',
  styleUrl: './habit-form.component.scss'
})



export class HabitFormComponent {
  habitForm = new FormGroup({
    habitName: new FormControl(''),
    habitDescription: new FormControl(''),
  });
  habitData: HabitForm[] = [];
  editingIndex: number | null = null;

  onSubmit() {
    const newHabit = this.habitForm.value as HabitForm;

    if (this.editingIndex !== null) {
      // Update existing habit
      this.habitData[this.editingIndex] = newHabit;
      this.editingIndex = null;
    } else {
      // Add new habit
      this.habitData.push(newHabit);
    }

    this.habitForm.reset();
    console.log(this.habitData);
  }

  onEditHabit(event: { index: number; habit: HabitForm }) {
    this.editingIndex = event.index;
    this.habitForm.setValue({
      habitName: event.habit.habitName,
      habitDescription: event.habit.habitDescription,
    });
  }
}
