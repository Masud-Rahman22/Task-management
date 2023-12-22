import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { MdWavingHand } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { RxUpdate } from "react-icons/rx";
import axios from "axios";
import { TiDelete } from "react-icons/ti";
import { LuListTodo } from "react-icons/lu";
import { MdDownloading } from "react-icons/md";
import { IoMdCloudDone } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDrag } from 'react-dnd'
const DashboardHome = () => {
    // for draggable

    

    const { user } = useContext(AuthContext)
    const { data: allTasks = [], refetch } = useQuery({
        queryKey: ['allRequests'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/tasks')
            return res.data
        }
    })
    const userTasks = allTasks.filter(task => task.email == user?.email)
    const todoTasks = userTasks.filter(task => task.status == 'todo')
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
                axios.delete(`http://localhost:5000/tasks/${id}`)
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
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    console.log(isDragging);
    return (
        <div>
            
            <h1 className="text-black font-sans text-5xl flex flex-row-reverse justify-end gap-5 items-center"><MdWavingHand className="text-5xl" />Welcome !! {user?.displayName}</h1>
            <div className="stats md:my-10">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <LuListTodo className="text-4xl" />
                    </div>
                    <div className="stat-title">TODO TASKS</div>
                    <div className="stat-value">{userTasks.length}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <MdDownloading className="text-4xl" />
                    </div>
                    <div className="stat-title">ONGOING TASKS</div>
                    <div className="stat-value">{userTasks.length - 2}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <IoMdCloudDone className="text-4xl" />
                    </div>
                    <div className="stat-title">COMPLETED TASKS</div>
                    <div className="stat-value">{userTasks.length - 3}</div>
                </div>

            </div>
                {/* show tasks */}
                <div className="grid grid-cols-1 gmd:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* to do tasks */}

                    <div className="grid grid-cols-1 gap-5">
                        <h1 className="py-3 bg-gradient-to-r from-blue-400 to-blue-700 font-bold rounded-md shadow-md hover:from-blue-600 hover:to-blue-900 transition-all duration-300 text-black uppercase md:w-96 mt-10 text-center mx-auto text-2xl">TODO TASKS</h1>
                        <div className="grid grid-cols-1 gap-5" ref={drag}>
                        {
                            todoTasks.map(task => <div className="card w-96 bg-purple-500 text-primary-content" key={task._id}>
                                <div className="card-body">
                                    <h2 className="card-title">{task.title}</h2>
                                    <p>{task.description}</p>
                                    <p>{task.deadline}</p>
                                    <div className="card-actions justify-start">
                                        <button className="btn"><TiDelete className="text-3xl" onClick={() => handleToDelete(task._id)}></TiDelete></button>
                                        <Link to={`/dashboard/taskUpdate/${task._id}`}><button className="btn"><RxUpdate className="text-3xl"></RxUpdate></button></Link>
                                    </div>
                                </div>
                            </div>)
                        }
                        </div>
                    </div>

                    {/* on going tasks */}
                    <div className="grid grid-cols-1 gap-5">
                        <h1 className="py-3 bg-gradient-to-r from-blue-400 to-blue-700 font-bold rounded-md shadow-md hover:from-blue-600 hover:to-blue-900 transition-all duration-300 text-black uppercase md:w-96 mt-10 text-center mx-auto text-2xl">ONGOING TASKS</h1>


                    </div>

                    {/* completed tasks */}
                    <div className="grid grid-cols-1 gap-5">
                        <h1 className="py-3 bg-gradient-to-r from-blue-400 to-blue-700 font-bold rounded-md shadow-md hover:from-blue-600 hover:to-blue-900 transition-all duration-300 text-black uppercase md:w-96 mt-10 text-center mx-auto text-2xl">ONGOING TASKS</h1>


                    </div>
                </div>
        </div>
    );
};

export default DashboardHome;
// {/* <DragDropContext onDragEnd={handleDragEnd}>
//                 <Droppable droppableId="tasks">
//                     {(provided) => (
//                         <div {...provided.droppableProps} ref={provided.innerRef}>
//                             <h1 className="py-3 bg-gradient-to-r from-blue-400 to-blue-700 font-bold rounded-md shadow-md hover:from-blue-600 hover:to-blue-900 transition-all duration-300 text-black uppercase md:w-96 mt-10 text-center mx-auto text-2xl">TODO LISTS</h1>
//                             <div>
//                                 <div className="overflow-x-auto">
//                                     <table className="table">
//                                         {/* head */}
//                                         <thead>
//                                             <tr>
//                                                 <th></th>
//                                                 <th>title</th>
//                                                 <th>description</th>
//                                                 <th>deadline</th>
//                                                 <th>Priority</th>
//                                                 <th></th>
//                                                 <th></th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {/* row 1 */}
//                                             {
//                                                 userTasks?.map((task, i) =>
//                                                     <Draggable key={task._id} draggableId={task._id} index={i}>
//                                                         {(provided) => (
//                                                             <tr className="bg-base-200" {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
//                                                                 <th>{i + 1}</th>
//                                                                 <td>{task.title}</td>
//                                                                 <td>{task.description}</td>
//                                                                 <td>{task.deadline}</td>
//                                                                 <td>{task.priority}</td>
//                                                                 <td>
//                                                                     <Link to={`/dashboard/taskUpdate/${task._id}`}><RxUpdate className="text-3xl" /></Link>
//                                                                 </td>
//                                                                 <td><button onClick={() => handleToDelete(task._id)}><TiDelete className="text-3xl" /></button></td>
//                                                             </tr>
//                                                         )}
//                                                     </Draggable>

//                                                 )
//                                             }
//                                             {provided.placeholder}
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                 </Droppable>
//             </DragDropContext> */}