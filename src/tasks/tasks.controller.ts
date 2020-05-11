import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateTaskDto } from "./dto/create-task.dto";

@Controller('tasks')
export class TasksController {

    @Get('/test')
    getTasks(): string {
        return "tasks";
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): string {
        console.log(task.title);
        return "Creado la tarea";
    }

    @Put()
    updateTask() {
        return "Actualizando una tarea";
    }

    @Delete()
    deleteTask() {
        return "Eliminando una tarea";
    }
}
