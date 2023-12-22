import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { MdWavingHand } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { LuListTodo } from "react-icons/lu";
import { MdDownloading } from "react-icons/md";
import { IoMdCloudDone } from "react-icons/io";
import TodoTasks from "./TodoTasks";
import OngoingTasks from "./OngoingTasks";
import CompletedTasks from "./CompletedTasks";
const DashboardHome = () => {
    const { user } = useContext(AuthContext)
    const { data: allTasks = [], refetch } = useQuery({
        queryKey: ['allRequests'],
        queryFn: async () => {
            const res = await axios.get('https://task-management-server-three-xi.vercel.app/tasks')
            return res.data
        }
    })
    const userTasks = allTasks.filter(task => task.email == user?.email)
    const todoTasks = userTasks.filter(task => task.status == 'todo')
    
    return (
        <div>
            
            <h1 className="text-black font-sans text-2xl md:text-3xl lg:text-5xl flex flex-row-reverse justify-end gap-5 items-center"><MdWavingHand className="text-3xl lg:text-5xl" />Welcome !! {user?.displayName}</h1>
            <div className="lg:stats md:my-10">

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
                        <h1 className="py-3 bg-gradient-to-r from-blue-400 to-blue-700 font-bold rounded-md shadow-md hover:from-blue-600 hover:to-blue-900 transition-all duration-300 text-black uppercase w-52 md:w-96 mt-10 text-center mx-auto text-2xl">TODO TASKS</h1>
                        <div className="grid grid-cols-1 gap-5" >
                        {
                            todoTasks.map(task => <TodoTasks refetch={refetch} task={task} key={task._id}></TodoTasks>)
                        }
                        </div>
                    </div>

                    {/* on going tasks */}
                    <div className="grid grid-cols-1 gap-5">
                        <h1 className="py-3 bg-gradient-to-r from-blue-400 to-blue-700 font-bold rounded-md shadow-md hover:from-blue-600 hover:to-blue-900 transition-all duration-300 text-black uppercase w-56 md:w-96 mt-10 text-center mx-auto text-2xl">ONGOING TASKS</h1>
                        <div>
                            <OngoingTasks></OngoingTasks>
                        </div>

                    </div>

                    {/* completed tasks */}
                    <div className="grid grid-cols-1 gap-5">
                        <h1 className="py-3 bg-gradient-to-r from-blue-400 to-blue-700 font-bold rounded-md shadow-md hover:from-blue-600 hover:to-blue-900 transition-all duration-300 text-black uppercase w-64 md:w-96 mt-10 text-center mx-auto text-2xl">COMPLETED TASKS</h1>

                        <div>

                            <CompletedTasks></CompletedTasks>
                        </div>
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