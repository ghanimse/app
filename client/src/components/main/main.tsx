import { useEffect, useState } from "react"

export default function Main() {
    const [data, setData] = useState<any>()
    useEffect(() => {
        let token = localStorage.getItem('Authorization') ?? 'sdfdf'
        if (token) {
            token = `Bearer ${token}`
            const requestOptions = {
                method: 'get',
                headers: {
                    'Authorization' : token
                }
            }
            fetch('/api', requestOptions)
            .then(res => res.json())
            .then(res => {
                if(res.codeStatus === 200) {
                    setData(res.data)
                }
                console.log(res) 
            })
        }
        
    }, [])
    
    return (
        <>
            <h1>Main</h1>
            {data && <h2>{data?.message}</h2>}
        </>
    )
}