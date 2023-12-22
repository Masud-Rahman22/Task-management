import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";


const AddTask = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        const title = data.title
        const description = data.description
        const deadline = data.deadline
        const priority = data.priority
        const email = user?.email
        const status = 'todo'
        const taskInfo = {
            title,
            description,
            deadline,
            priority,
            email,
            status
        }
        axios.post('https://task-management-server-three-xi.vercel.app/tasks',taskInfo)
        .then(res =>{
            console.log(res.data);
            if(res.data.insertedId){
                reset()
                toast.success('you just added a task')
            }
        })
    }
    return (
        <div className="h-fit mb-72 md:mb-1">
            <form onSubmit={handleSubmit(onSubmit)} className="w-3/5 md:w-4/5 mx-auto mt-16 h-[70vh] mb-20">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" {...register('title')} id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" {...register('description')} id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="date" {...register('deadline')} id="deadline" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Deadline</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                <select className="block py-2.5 px-0 w-full text-sm border-0 border-b-2 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-transparent" placeholder=" " required {...register('priority')} id="priority">
                        <option value="default">Default</option>
                        <option value="Low">Low</option>
                        <option value='Moderate'>Moderate</option>
                        <option value='High'>High</option>
                    </select>
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Priority</label>
                </div>
                <button type="submit" className="glass p-2 w-full bg-purple-500 text-black hover:bg-black hover:text-white">Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;