import Task from './Task';
import { useState } from 'react'
import DoneTask from './doneTask'

type Todolist = {
    id: number;
    Dolist: string;
}
type Donelist = {
    listdone: string;
}

const Todo = () => {
    const [curTask, setCurTask] = useState<string>('')
    const [list, setlist] = useState<Todolist[]>([])
    const [donelist, setdonelist] = useState<Donelist[]>([])
    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === 'Enter') {
            ev.preventDefault()
            addlist(curTask)
        }
    }
    const onChangeCallBack = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setCurTask(ev.target.value)
    }
    const addlist = (List: string) => {
        if (List !== "") {
            const newId = (new Date()).getTime()
            const newList = [{ id: newId, Dolist: List }, ...list]
            setlist(newList)
         }
        else {
            alert("Task cannot be empty")
        }
    }
    const deleteTask = (id: number) => {
        const newList = list.filter(x => x.id !== id)
        setlist(newList)
    }
    const doneTask = (id: number) => {
        const newList = list.filter(x => x.id !== id)
        const Donelist = list.filter(x => x.id === id).map(x => x.Dolist)
        setlist(newList)
        const newdoneList = [{ listdone: Donelist[0] }, ...donelist]
        setdonelist(newdoneList)
    }
    return (
        <div>
            <div className='flex space-x-1'>
                <input className='border border-gray-400 w-full text-2xl pl-2'
                    onKeyDown={onKeyDownCallback} onChange={onChangeCallBack} ></input>
                <button className='border border-gray-400 w-8 font-bold bg-green-300 transform hover:-translate-y-1 hover:scale-110 transition duration-200 ease-in-out hover:shadow-lg rounded-md'
                    onClick={() => addlist(curTask)}>+</button>
            </div>
            <div className='mt-4'>
                {list.map(x => <Task id={x.id} list={x.Dolist} deleteBtn={deleteTask} doneBtn={doneTask}></Task>)}
            </div>
            <div className='bg-green-200 rounded-xl shadow-md pb-6 mt-4'>
                {donelist.map(x => <DoneTask list={x.listdone}></DoneTask>)}
            </div>
        </div>
    )
}

export default Todo