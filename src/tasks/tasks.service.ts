import { Injectable } from '@nestjs/common';
import { Task } from "./interfaces/Task";

@Injectable()
export class TasksService {

    tasks: Task[] = [
        {
            id: 1,
            title: "TEsting",
            description: "sfdjfk",
            done: false
        },
        {
            id: 2,
            title: "sdfsds",
            description: "sfdjfk",
            done: false
        },
        {
            id: 3,
            title: "weewew",
            description: "sfdjfk",
            done: false
        }
    ]

    getTasks(): Task[] {
        return this.tasks;
    }
    getTask(id: number): Task {
        return this.tasks.find(task => task.id === id);
    }
}
