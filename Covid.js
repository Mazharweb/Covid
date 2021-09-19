import React, { useEffect, useState } from 'react'
import './covid.css'

const Covid = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
           
            const actualData = await res.json();
            //console.log(actualData.statewise[0]);
            setData(actualData.statewise);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
      getData();
    }, [])
    return (
        <>
       <div className="container-fluid">
       <div className="heading">
           <h1 >INDIA COVID-19 CASES</h1>
       </div>
       <div className="table-responsive">
           <table className="table table-hover">
               <thead className="thead-dark">
               <tr>
                   <th>State</th>
                   <th>Confirmed</th>
                   <th>recovered</th>
                   <th>deaths</th>
                   <th>active</th>
                   <th>Upadated</th>
               </tr>

               </thead>
               <tbody>
               {
                   data.map((e,ind) =>{
                       return(
                        <tr key={ind}>
                   <th>{e.state}</th>
                   <td>{e.confirmed}</td>
                   <td>{e.recovered}</td>
                   <td>{e.deaths}</td>
                   <td>{e.active}</td>
                   <td>{e.lastupadatedtime}</td>
                   </tr>
                   
                       )
                   })
               }
                  
                   
                   
               </tbody>
           </table>
       </div>

       </div>

                
            
        </>
    )
}

export default Covid
