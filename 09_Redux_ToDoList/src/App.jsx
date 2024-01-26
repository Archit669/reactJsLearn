import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"


function App() {
  
  return (
    <>
      <div className="w-full h-[100vh]"> 
            <div className="w-[90%] m-auto max-w-[1200px] text-center my-8 ">
                <div className="text-2xl text-[#B6BBC4] font-bold">Manage Your Todos</div>
                <div className="my-8 w-[75%] m-auto">
                    {/* todo form */}
                    <TodoForm/>
                </div>
                <div className="my-8 w-[70%] m-auto">
                    <TodoItem/>
                </div>
            </div>
      </div>
    </>
  )
}

export default App
