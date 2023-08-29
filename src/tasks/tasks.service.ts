import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { UpdateDTO } from './dto/tasks.dto';

@Injectable()
export class TasksService {

    //Simula la base de datos
    private tasks: Task[] = [{
        id: '1',
        title: 'first',
        description: 'some task',
        status: TaskStatus.PENDING
    }]

    getAllTaks() {
        return this.tasks
    }

    createTaks(title: string, description: string) {
        const task = {
            id: new Date().toISOString(),
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(task)
        return task;
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id)
    }

    updateTaks(id: string, updatedFields: UpdateDTO): Task {
        const task = this.getTaskById(id)
        const newTask = Object.assign(task, updatedFields)
        this.tasks.map(task => task.id === id ? newTask : task)
        return newTask
    }
    deleteTaks(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id)
        return 'Deleted task: ' + id
    }
}
