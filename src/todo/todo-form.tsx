import React, {useState} from 'react';

function NewTodoForm(props) {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if(description !== '' && assigned !== '') {
            props.addTodo(description, assigned);
            setAssigned('');
            setDescription('');
        }
    }

    return (
    <div className='border-b border-gray-900/10 pb-12'>
      <form>
        <div className='sm:col-span-4'>
          <label className='block mb-2 text-sm font-medium text-gray-900'>Assigned</label>
          <input type='text' className='bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          required
          onChange={e => setAssigned(e.target.value)}
          value={assigned}
          ></input>
        </div>
        <div className='sm:col-span-4'>
          <label className='block mb-2 text-sm font-medium text-gray-900'>Description</label>
          <textarea 
            className='bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            rows={3}
            required
            onChange={e => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <button type='button'
         onClick={submitTodo}
         className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Add Todo</button>
      </form>
    </div>
    )
}

export default NewTodoForm