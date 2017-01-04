import { Component } from '@angular/core';

@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

    newToDoTitle: string = '';

    todos: Array<ToDo> = [
        { title: 'zakupy', complete: true },
        { title: 'kino', complete: false }];
    addToDo() {

        if (!this.newToDoTitle) {
            return;
        }
        const newToDo: ToDo = {
            title:this.newToDoTitle,
            complete: false
        };
        this.todos.push(newToDo);
        this.newToDoTitle = '';
    }

    deleteToDo(index) {
        this.todos.splice(index, 1);

    }
}

interface ToDo {
    title: string;
    complete: boolean;
}