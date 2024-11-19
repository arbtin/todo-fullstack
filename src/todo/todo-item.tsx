import {Delete, Edit} from '@emotion-icons/fluentui-system-regular'

function TodoItem(props) {

    return (
        <tr className='bg-white border-b'>
            <th scope='row' className='bg-white border-b'>{props.rowNumber}</th>
            <td className='px-6 py-4'>{props.rowDescription}</td>
            <td className='"px-6 py-4'>{props.rowAssigned}</td>
            <td className='"px-6 py-4' onClick={() => props.editTodo(props.rowNumber)}><Edit size="32"/></td>
            <td className='"px-6 py-4' onClick={() => props.deleteTodo(props.rowNumber)}><Delete size="32"/></td>
        </tr>
    )
}

export default TodoItem