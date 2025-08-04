import { FormControl } from "@angular/forms";

export interface TodoForm {
    id: FormControl <number | null>; 
    title: FormControl <string | null>; 
    completed: FormControl <boolean | null>; 
    priorities: FormControl <string | null>; 
    dueDate: FormControl <string>;
    textarea: FormControl <string | null>;
}