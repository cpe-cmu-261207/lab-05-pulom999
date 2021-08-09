type List = {
    id: number;
    list: string;
    deleteBtn: Function;
    doneBtn: Function;
}


const Task = ({ id, list, deleteBtn, doneBtn }: List) => {
    return (
        <div className="flex justify-between h-8 items-center py-6 border-b group bg-white p-4 transform hover:-translate-y-1 hover:scale-110 transition duration-200 ease-in-out rounded-xl hover:shadow-lg">
            <span className="text-2xl"> {list}</span>
            <div className="flex space-x-1 items-center">
                <button className="text-white bg-white w-24 text-2xl group-hover:bg-green-400 group-hover:text-black rounded-lg text-lg"
                    onClick={() => doneBtn(id)}>Done</button>
                <button className="text-white bg-white w-24 text-2xl group-hover:bg-red-400 group-hover:text-black rounded-lg text-lg"
                    onClick={() => deleteBtn(id)} >Delete</button>
            </div>
        </div>
    )
}


export default Task