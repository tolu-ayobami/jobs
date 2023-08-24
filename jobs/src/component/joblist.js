import Review from "./data";

const Men = ({nam})=>{


    const{id, text, name, date, job} = Review[nam];

    return(
        <div className="bet" key={id}>
           <h1>{job}</h1>
           <h2>{name}</h2>  
           <p>{date}</p>
           
               {text.map((tour, index)=> {
                   return(
                    <div className="cover" key={index}>
                       <p>{tour}</p>
                       </div>

                   );
                                     
                   })};

                   <button type="button" className="red">more info</button>

        </div>




    );


}

export default Men;