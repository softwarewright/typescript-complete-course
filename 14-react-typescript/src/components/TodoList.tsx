import React from 'react';

interface TodoListProps {
    items: Array<{ id: string, text: string}>
}

const TodoList: React.FC<TodoListProps> = (props) => {
    return (
        <ul>
            {props.items.map(t => <li key={t.id}>{t.text}</li>)}
        </ul>
    );
}

export default TodoList;
