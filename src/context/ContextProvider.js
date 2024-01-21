import React from 'react'
import ContextBasket from "./ContextBasket";

function ContextProvider(props) {
    
    var Basket = {

        // auth

        // todo 



    }

    return (
        <ContextBasket.Provider value={Basket}>
            {props.children}
        </ContextBasket.Provider>

    )
}

export default ContextProvider