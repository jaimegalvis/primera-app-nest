import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { CreateTaskDTO, UpdateDTO } from './dto/tasks.dto';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {

    }

    @Get()
    getAllTasks() {
        return this.taskService.getAllTaks()
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDTO) {

        return this.taskService.createTaks(newTask.title, newTask.description)
    }

    @Delete(':id')
    deleteTaks(@Param('id') id: string) {
        this.taskService.deleteTaks(id)
    }

    @Patch(':id')
    updateTasks(@Param('id') id: string, @Body() updatedFields: UpdateDTO) {
        return this.taskService.updateTaks(id, updatedFields)

    }


}
