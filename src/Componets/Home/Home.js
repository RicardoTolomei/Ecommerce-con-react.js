import Navbar from "./Navbar/Navbar";
import Banner from "../Banner/Banner";
import Product from "../Products/Product";
import ToDo from "../ToDo";
import TodoList from "../TodoList";
import { useTodo } from "../../hooks/useTodo";
import './home.css';



const Home = () => {
    

    return(
        <>
         <Navbar/>
         <Banner/>
         <Product/>
         <ToDo></ToDo>
         <TodoList
           ></TodoList>


         
    
    
        
        
        </>
   
    )
};

export default Home