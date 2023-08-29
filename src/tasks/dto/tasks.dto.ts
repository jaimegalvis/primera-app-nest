import { TaskStatus } from "../tasks.entity"
export class CreateTaskDTO {
    title:string
    description: string
}

export class UpdateDTO {
    title?: string
    description?: string
    status?: TaskStatus
}