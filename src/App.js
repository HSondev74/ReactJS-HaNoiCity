import { Outlet } from "react-router-dom";
import "./App.css";
import { createContext } from "react";

function App() {
     const context = createContext();

     return (
          <div className="App">
               <context.Provider value={"a"}>
                    <Outlet />
               </context.Provider>
          </div>
     );
}

export default App;
