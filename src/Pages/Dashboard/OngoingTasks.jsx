import { useDrop } from "react-dnd";
import axios from "axios";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";
import { RxUpdate } from "react-icons/rx";
import { TiDelete } from "react-icons/ti";

const OngoingTasks = ({setTask, task, refetch}) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item)=> addItemToSection(item.id),
        collect: (monitor) => ({
            isOver : !!monitor.isOver()
        })
    }))
    const addItemToSection = (id)=>{
        setTask((prev)=>{
            const mTasks = prev?.map(t =>{
                if(t._id == id){
                    return { ...t, status: 'ongoing' };
                }
                return t
            })
            return mTasks;
        })
    }
    const handleToDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://task-management-server-three-xi.vercel.app/tasks/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
            <div className="card w-52 md:w-72 lg:w-96 bg-purple-500 text-primary-content cursor-grab" ref={drop}>
            <div className="card-body">
                <h2 className="card-title">{task.title}</h2>
                <p>{task.description}</p>
                <p>{task.deadline}</p>
                <p>{task.priority}</p>
                <div className="card-actions justify-start">
                    <button className="btn"><TiDelete className="text-3xl" onClick={() => handleToDelete(task._id)}></TiDelete></button>
                    <Link to={`/dashboard/taskUpdate/${task._id}`}><button className="btn"><RxUpdate className="text-3xl"></RxUpdate></button></Link>
                </div>
            </div>
        </div>
    );
};

export default OngoingTasks;