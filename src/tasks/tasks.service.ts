import { Injectable } from '@nestjs/common';
import { Task } from "./interfaces/Task";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTaskDto } from "./dto/create-task.dto";

@Injectable()
export class TasksService {

    constructor(@InjectModel('Task') private taskModel: Model<Task>) { }

    async getTasks() {
        return await this.taskModel.find();
    }
    async getTask(id: string) {
        return await this.taskModel.findById(id);
    }
    async createTask(task: CreateTaskDto) {
        const newTask = new this.taskModel(task);
        return await newTask.save();
        // return "saved";
    }


    // tasks: Task[] = [
    //     {
    //         id: 1,
    //         title: "TEsting",
    //         description: "sfdjfk",
    //         done: false
    //     },
    //     {
    //         id: 2,
    //         title: "sdfsds",
    //         description: "sfdjfk",
    //         done: false
    //     },
    //     {
    //         id: 3,
    //         title: "weewew",
    //         description: "sfdjfk",
    //         done: false
    //     }
    // ]

    // getTasks(): Task[] {
    //     return this.tasks;
    // }
    // getTask(id: number): Task {
    //     return this.tasks.find(task => task.id === id);
    // }

}
