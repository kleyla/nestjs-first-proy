import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from "./dto/create-task.dto";
import { Task } from "./interfaces/Task";
import { TasksService } from "./tasks.service";

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) { }

    @Get('/test')
    getTasks(): Task[] {
        return this.taskService.getTasks();
    }

    @Get(':id')
    getTask(@Param('id') id: string) {
        return this.taskService.getTask(parseInt(id));
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): string {
        console.log(task.title);
        return "Creado la tarea";
    }

    @Put(':id')
    updateTask(@Body() task: CreateTaskDto, @Param('id') id) {
        console.log(task);
        console.log(id);
        return "Actualizando una tarea";
    }

    @Delete(':id')
    deleteTask(@Param('id') id) {
        console.log(id);
        return `Eliminando tarea ${id} `;
    }
}
