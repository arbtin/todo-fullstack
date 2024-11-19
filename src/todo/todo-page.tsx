import TodoItem from './todo-item';

function TodoTable(props) {
    return (
        <table className='w-full text-sm text-left rtl:text-right text-gray-500' aria-label="todo table">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope='col' className='px-6 py-3'>#</th>
                    <th scope='col' className='px-6 py-3'>Description</th>
                    <th scope='col' className='px-6 py-3'>Assigned</th>
                    <th scope='col' className='px-6 py-3'></th>
                    <th scope='col' className='px-6 py-3'></th>
                </tr>
            </thead>
            <tbody>
            {props.todos.map(todo => (
            <TodoItem
             key={todo.rowNumber}
             rowNumber={todo.rowNumber}
             rowDescription={todo.rowDescription}
             rowAssigned={todo.rowAssigned}
             deleteTodo={props.deleteTodo}
             editTodo={props.editTodo} />
            ))}
            </tbody>
        </table>
    )
}

export default TodoTable