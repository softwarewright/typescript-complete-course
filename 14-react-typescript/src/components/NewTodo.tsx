import React, {useRef} from 'react';

interface NewTodoProps {
    onAddTodo(text:string): void
}

const NewTodo: React.FC<NewTodoProps> = ({onAddTodo}) => {
    const textInput = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInput.current!.value
        onAddTodo(enteredText);
        textInput.current!.value = '';
    };

    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={textInput} />
            </div>
            <button type="submit">Add</button>
        </form>
    )
}

export default NewTodo;