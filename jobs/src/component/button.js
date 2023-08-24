
import Review from "./data";


const Hang = ({breg}) =>{

    return(
        <div className="ok">
{Review.map((item, index)=>{  
    return(
        <button type="button" onClick={()=> breg(index)}>{item.name}</button>
    );


})}


        </div>
    );
}
export default Hang;