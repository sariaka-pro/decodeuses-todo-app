export interface todo {
    id: number | null; /// le null ça veut dire que c'est soit la valeur indiquée soit un champ optionel. 
    title: string | null; 
    completed: boolean | true | false; 
    priority: string | null; 
    dueDate: string;
    textarea: string | null;
}
