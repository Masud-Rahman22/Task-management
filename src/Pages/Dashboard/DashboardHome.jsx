import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { MdWavingHand } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const DashboardHome = () => {
    const { user } = useContext(AuthContext)
    const {data: allTasks=[],refetch} = useQuery({
        queryKey: ['allRequests'],
        queryFn: async()=>{
            const res = await axios.get('http://localhost:5000/tasks')
            return res.data
        }
    })
    console.log(allTasks);
    return (
        <div>
            <h1 className="text-black font-sans text-5xl flex flex-row-reverse justify-end gap-5 items-center"><MdWavingHand className="text-5xl" />Welcome !! {user?.displayName}</h1>
            <div>
                <h1 className="py-3 bg-gradient-to-r from-blue-400 to-blue-700 font-bold rounded-md shadow-md hover:from-blue-600 hover:to-blue-900 transition-all duration-300 text-black uppercase md:w-96 mt-10 text-center mx-auto text-2xl">TODO LISTS</h1>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>title</th>
                                    <th>description</th>
                                    <th>deadline</th>
                                    <th>Priority</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    allTasks?.map((task,i) => <tr className="bg-base-200" key={task._id}>
                                    <th>{i+1}</th>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>{task.deadline}</td>
                                    <td>{task.priority}</td>
                                </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;