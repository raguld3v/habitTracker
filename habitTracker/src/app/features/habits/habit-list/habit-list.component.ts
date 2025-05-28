import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HabitForm } from '../../../habit-form';

@Component({
  selector: 'app-habit-list',
  imports: [CommonModule],
  templateUrl: './habit-list.component.html',
  styleUrl: './habit-list.component.scss'
})
export class HabitListComponent {
  @Input() habits: { habitName: string; habitDescription: string }[] = [];
  @Output() editHabit = new EventEmitter<{ index: number; habit: any }>();

  onEdit(index: number) {
    this.editHabit.emit({ index, habit: this.habits[index] });
  }

  completedList: HabitForm[] = [];
  onComplete(index: number){
    this.completedList.push(this.habits[index]);
    this.habits.splice(index, 1);
  }

}
