import TodoRowItem from './TodoRowItem';

function TodoTable(props) {
    return (
        <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope='col' className='px-6 py-3'>#</th>
                    <th scope='col' className='px-6 py-3'>Description</th>
                    <th scope='col' className='px-6 py-3'>Assigned</th>
                </tr>
            </thead>
            <tbody>
            {props.todos.map(todo => (
            <TodoRowItem
             key={todo.rowNumber}
             rowNumber={todo.rowNumber}
             rowDescription={todo.rowDescription}
             rowAssigned={todo.rowAssigned}
             deleteTodo={props.deleteTodo} />
            ))}
            </tbody>
        </table>
    )
}

export default TodoTable