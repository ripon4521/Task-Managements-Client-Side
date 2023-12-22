
import useAllTask from "../Hooks/useAllTask";
import AddTask from "./AddTask/AddTask";
import TodoCard from "./AddTask/TodoCard/TodoCard";

const MainContent = () => {
    const [Alltask, refetch]=useAllTask();
    // console.log(Alltask);
    return (
        <div>
           <AddTask></AddTask>

       <div className="flex flex-col lg:flex-row justify-center items-center gap-5">

       <div className="">
        <h1 className="text-2xl text-center font-bold font-dmsnas text-red-500 my-10">To-Do List</h1>
       <div>
       {
            Alltask.slice(0,10).map(item => <TodoCard refetch={refetch} key={item._id} item={item}></TodoCard>)
        }
           </div>
       </div>

       <div>
        <h1 className="text-2xl font-dmsnas text-center font-bold text-green-500 my-10">Ongoing List</h1>
        {
            Alltask.slice(0,10).map(item => <TodoCard key={item._id} item={item}></TodoCard>)
        }
           </div>

       <div>
       <h1 className="text-2xl font-dmsnas text-center font-bold text-yellow-400 my-10">Complete List</h1>
        {
            Alltask.slice(0,10).map(item => <TodoCard key={item._id} item={item}></TodoCard>)
        }
           </div>

       </div>

        </div>

        
    );
};

export default MainContent;