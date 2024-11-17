function TodoRowItem(props) {

    return (
        <tr onClick={() => props.deleteTodo(props.rowNumber)} className='bg-white border-b'>
        <th scope='row' className='bg-white border-b'>{props.rowNumber}</th>
        <td className='px-6 py-4'>{props.rowDescription}</td>
        <td className='"px-6 py-4'>{props.rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem