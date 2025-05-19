import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  editing: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: Task[] = [];
  newTaskTitle = '';
  editTaskTitle = '';
  nextId = 1;

  addTask(): void {
    if (this.newTaskTitle.trim()) {
      this.tasks.push({
        id: this.nextId++,
        title: this.newTaskTitle,
        completed: false,
        editing: false
      });
      this.newTaskTitle = '';
    }
  }

  editTask(task: Task): void {
    this.editTaskTitle = task.title;
    task.editing = true;
  }

  updateTask(task: Task): void {
    task.title = this.editTaskTitle.trim();
    task.editing = false;
  }

  cancelEdit(task: Task): void {
    task.editing = false;
  }

  toggleComplete(task: Task): void {
    task.completed = !task.completed;
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
