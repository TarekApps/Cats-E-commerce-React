import { useEffect, useState } from "react";
import {} from "./styles/basket.style";
import "../App.css";

const Basket = (props) => {
    const escapeKeyClose = (x) => {
        if((x.charCode || x.keyCode) === 27) {
            props.onClose()
        }
    }
    useEffect(() => {
        document.body.addEventListener("keydown", escapeKeyClose) 
            return function cleanup() {
                document.body.removeEventListener("keydown", escapeKeyClose)
            }
    }, [])
    // useEffect(()=>{
    //     props.basket.forEach((cat)=>{
    //         let newPriceList=[...prices]
    //         newPriceList.push(parseInt(cat.price))
    //         setPrices(newPriceList)
    //     })
    // }, [props.basket])
    // useEffect(()=>{
    //     let newPriceTotal = [...prices]
    //     console.log(newPriceTotal)
    //     newPriceTotal.reduce((x, y)=>x + y, 0)
    //     setPriceTotal(newPriceTotal)
    //     console.log(priceTotal)
    // },[prices])
return(
    <div className={`basket ${props.show ? "show" : ""}`} onClick={props.onClose}>
        <div className="basket-content" onClick={x => x.stopPropagation()}>
            <div className="basket-header">
                <h3 className="basket-title">{props.title}</h3>
            </div>
            <div className="basket-body">
                {props.basket.map((cat, index)=> {
                    return (
                        <div>
                            <BasketItem 
                                basket={props.basket}
                                setBasket={props.setBasket}
                                name={cat.name} 
                                breed={cat.breed} 
                                price={cat.price} 
                                index={index}
                            />
                        </div>
                    )
                }
            )}
            </div>
            <div className="basket-footer">
                {/* <p>Total: £{priceTotal}</p> */}
                <button className="close-button" onClick={props.onClose}>Close</button>
            </div>
        </div>
    </div>
    );
};
const BasketItem = ({basket, setBasket, name, breed, price, index}) => {
    const handleClick = (index) => {
        let newBasket = [...basket]
        newBasket.splice(index, 1)
        setBasket(newBasket)
    }
    return (
        <div>
            <div>
                <p>{name}</p>
                <p>{breed}</p>
                <p>{price}</p>
            </div>
            <button onClick={()=>handleClick(index)}>Remove</button>
        </div>
        
        
    )
}

export default Basket;