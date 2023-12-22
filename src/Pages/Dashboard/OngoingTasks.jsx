import { useDrop } from "react-dnd";


const OngoingTasks = () => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item)=> addItemToSection(item.id),
        collect: (monitor) => ({
            isOver : !!monitor.isOver()
        })
    }))
    const addItemToSection = (id)=>{
        setTask(prev=>{
            
        })
    }
    return (
        <div className="md:w-96 md:h-96" ref={drop}>
            
        </div>
    );
};

export default OngoingTasks;