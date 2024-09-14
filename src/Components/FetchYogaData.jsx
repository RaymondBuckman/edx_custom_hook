import React from 'react'
import UseFetch from './UseFetch'

const FetchYogaData = () => {

    const data = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);

    return (
        <>
            <ul className='list_data_main'>
                <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
                {data && data.map((e) => (
                    <>
                        <li className="list_data">
                            <h3>{e.name}</h3>
                            <p><strong>Importance: </strong>{e.importance}</p>
                            <p><strong>Benefits: </strong>{e.benefits}</p>
                            <p><strong>Time: </strong>{e.best_time_to_intake}</p>
                        </li>
                    </>
                ))}
            </ul>
        </>
    )
}

export default FetchYogaData