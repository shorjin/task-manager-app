import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTask } from "../redux/features/tasks/taskSlice";
import { nanoid } from 'nanoid'

const TaskForm = () => {
    const [text, setText] = useState('');

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        if(text.trim() === '') return;

        dispatch(addTask({
            id: nanoid(),
            text: text.trim(),
            completed: false,
        }))

        setText('')

    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
            <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add new task"
            className="flex-1 p-2 border rounded-md"
            />

            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Add Task</button>
        </form>
    )
}

export default TaskForm