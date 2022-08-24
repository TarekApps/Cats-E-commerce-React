import {useState, useEffect} from 'react'
import Cat from './Cat'
import { faker } from "@faker-js/faker";
import { Container } from './styles/main.style'

const Main = ({basket, setBasket}) => {
    const [catList, setCatList] = useState([])

    useEffect(()=>{
        const getCat = async () =>{
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=20')
            const data = await response.json();
            const cats = data.map((cat)=>{
                return {pic: cat.url,
                name: faker.name.firstName(),
                breed: faker.animal.cat(),
                price: faker.finance.amount(),
                id: (new Date().getTime()*Math.random())
                }
            })
            setCatList([...cats])
        }
        getCat();
    },[])
    return (
        <Container>
            {catList.map((cat) => {
                return <Cat basket={basket} 
                setBasket={setBasket}
                pic={cat.pic} 
                name={cat.name} 
                breed={cat.breed} 
                price={cat.price}
                key={cat.id}
                id={cat.id}
                />})}
        </Container>
        
    )
    
}

export default Main