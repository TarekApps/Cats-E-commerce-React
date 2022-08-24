import {useState, useEffect} from 'react'
import { CatBox, CatPic, BotBox, InfoBox, Button, Name, BotText } from './styles/cat.style'


const Cat = ({basket, setBasket, pic, name, breed, price}) => {
    const [cat, setCat] = useState({})
    useEffect(()=>{
        setCat({
            pic: pic,
            name: name,
            breed: breed,
            price: price
    })
    }, [])
    
    const handleClick = () =>{
        let cart = [...basket]
        cart.push(cat)
        setBasket(cart)
    }
    return (
        <CatBox>
            <Name>{name}</Name>
            <CatPic src={pic} alt={`A ${breed} named ${name} available for adoption.`}></CatPic>
            <BotBox>
                <InfoBox>
                    <BotText>{breed}</BotText>
                    <BotText>{price}</BotText>
                </InfoBox>
                <Button onClick={()=> handleClick()}>Add to basket</Button>
            </BotBox>
        </CatBox>
    )
}


export default Cat