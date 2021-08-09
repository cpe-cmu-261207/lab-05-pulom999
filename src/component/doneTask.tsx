type Donelist = {
    list: string;
}

const DoneTask = ({ list }: Donelist) => {
    return (
        <div className="h-8 my-auto py-6 p-4">
            <del className="text-2xl" > {list}</del>
        </div>
    )
}

export default DoneTask