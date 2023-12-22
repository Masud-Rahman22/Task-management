
import { useDrop } from 'react-dnd';

const CompletedTasks = () => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item)=> addItemToSection(item.id),
        collect: (monitor) => ({
            isOver : !!monitor.isOver()
        })
    }))
    const addItemToSection = (id)=>{
        console.log('dropped', id);
    }
    return (
        <div className="md:w-96 md:h-96" ref={drop}>
            
        </div>
    );
};

export default CompletedTasks;