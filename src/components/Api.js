import { getAllByDisplayValue } from '@testing-library/react'
import React, {useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card'

const Api = () => {

    const [users,setUsers] = useState([]);

    const getNew = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        setUsers( response.json());

        //console.log(data);
    }

    useEffect(() =>{
        getNew();
    },[]);

    return (
        <div>
            <h1>hi i am api</h1>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    {
                        users.map((curElement) => {
                            return(
                                <div>
                                     <div className="col-10 col-md-4 mt-5">
                    <Card style={{backgroundColor: "lightblue"}}>
             <Card.Body  style={{ width: '18rem' }}>
             <Card.Title style={{textAlign:"end"}}>{curElement.name}</Card.Title>
            
                 <Card.Text style={{textAlign:"end"}}>
               AAA
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted" style={{textAlign:"end"}}>Card Subtitl</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted" style={{textAlign:"end"}}>Card Subtitle</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted" style={{textAlign:"end"}}>Card Subtitle</Card.Subtitle>

            {/* <Card.Link style={{textAlign:"end"}}>Card Link</Card.Link>
             <Card.Link style={{textAlign:"end"}}>Another Link</Card.Link> */}
            </Card.Body>
</Card>
                    </div>
                                </div>
                            )
                        })

                    }
                   
                </div>
            </div>
        </div>
    )
}

export default Api
