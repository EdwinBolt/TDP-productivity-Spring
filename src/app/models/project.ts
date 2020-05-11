import { User } from './user';
import { SpecialUser } from './specialUser';

export class Project {
    
    id:number=0;
    projectName: string;
    deadline: Date;
    users: SpecialUser[]= [];
    duration: number;
    /* tasks: Task[];
    */
}
