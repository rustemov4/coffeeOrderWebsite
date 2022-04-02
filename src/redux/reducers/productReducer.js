import { ActionTypes } from "../contants/actionTypes";
const inititalState = {
    products:[
        {
            id: 1,
            name: "Latte",
            price: 12,
            image: '/images/Latte.jpg'
        },
        {
            id: 2,
            name: "Cappuccino",
            price: 11,
            image: '/images/Cappuccino.jpg'   
        },
        {
            id: 3,
            name: "Americano",
            price: 13,
            image: '/images/Americano.jpg'
        },
        {
            id: 4,
            name: "Risretto",
            price: 12,
            image: '/images/Ristretto.jpg'
        },
        {
            id: 5,
            name: "Double Espresso",
            price: 14,
            image: '/images/Espresso2.jpg'
        },
        {
            id: 6,
            name: "Mocha",
            price: 13,
            image: '/images/Mocha.jpg'
        },
        {
            id: 7,
            name: "Latte macchiato",
            price: 13,
            image: '/images/LatteMak.jpg'
        },
        {
            id: 8,
            name: "Espresso macchiato",
            price: 14,
            image: '/images/espressoMak.jpg'
        },
        {
            id: 9,
            name: "Latte",
            price: 12,
            image: '/images/Latte.jpg'
        },
        {
            id: 10,
            name: "Cappuccino",
            price: 11,
            image: '/images/Cappuccino.jpg'   
        },
        {
            id: 11,
            name: "Americano",
            price: 13,
            image: '/images/Americano.jpg'
        },
        {
            id: 12,
            name: "Risretto",
            price: 12,
            image: '/images/Ristretto.jpg'
        },
        {
            id: 13,
            name: "Double Espresso",
            price: 14,
            image: '/images/Espresso2.jpg'
        },
        {
            id: 14,
            name: "Mocha",
            price: 13,
            image: '/images/Mocha.jpg'
        },
        {
            id: 15,
            name: "Latte macchiato",
            price: 13,
            image: '/images/LatteMak.jpg'
        },
        {
            id: 16,
            name: "Espresso macchiato",
            price: 14,
            image: '/images/espressoMak.jpg'
        },
        {
            id: 17,
            name: "Latte",
            price: 12,
            image: '/images/Latte.jpg'
        },
        {
            id: 18,
            name: "Cappuccino",
            price: 11,
            image: '/images/Cappuccino.jpg'   
        },
        {
            id: 19,
            name: "Americano",
            price: 13,
            image: '/images/Americano.jpg'
        },
        {
            id: 20,
            name: "Risretto",
            price: 12,
            image: '/images/Ristretto.jpg'
        },
        {
            id: 21,
            name: "Double Espresso",
            price: 14,
            image: '/images/Espresso2.jpg'
        },
        {
            id: 22,
            name: "Mocha",
            price: 13,
            image: '/images/Mocha.jpg'
        },
        {
            id: 23,
            name: "Latte macchiato",
            price: 13,
            image: '/images/LatteMak.jpg'
        },
        {
            id: 24,
            name: "Espresso macchiato",
            price: 14,
            image: '/images/espressoMak.jpg'
        },
        {
            id: 25,
            name: "Latte",
            price: 12,
            image: '/images/Latte.jpg'
        },
        {
            id: 26,
            name: "Cappuccino",
            price: 11,
            image: '/images/Cappuccino.jpg'   
        },
        {
            id: 27,
            name: "Americano",
            price: 13,
            image: '/images/Americano.jpg'
        },
        {
            id: 28,
            name: "Risretto",
            price: 12,
            image: '/images/Ristretto.jpg'
        },
        {
            id: 29,
            name: "Double Espresso",
            price: 14,
            image: '/images/Espresso2.jpg'
        },
        {
            id: 30,
            name: "Mocha",
            price: 13,
            image: '/images/Mocha.jpg'
        },
        {
            id: 31,
            name: "Latte macchiato",
            price: 13,
            image: '/images/LatteMak.jpg'
        },
        {
            id: 32,
            name: "Espresso macchiato",
            price: 14,
            image: '/images/espressoMak.jpg'
        }
    ],
    cart:[],
    count: 0
} ;

export const productReducer = (state= inititalState,{type,payload}) =>{

    switch (type){
        case ActionTypes.SET_PRODUCTS:
            const itm = state.products.find((item) => item.id === payload.id);
            const inCart = state.cart.find((prod) => prod.id === payload.id) ? true : false;
            
            
            return{
                ...state,
                cart:inCart 
                ? state.cart.map((item) =>
                    item.id === payload.id
                    ? {...item, quantity: item.quantity + 1}
                    : item)
                :[...state.cart,{...itm,quantity:1}],
                count: state.count + 1
            }
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            
            const unique = state.cart.find((prod) => prod.quantity > 1 && prod.id=== payload.id) ? false : true;
            return{
                ...state,
                cart: unique
                ? state.cart.filter((prod) => prod.id !== payload.id)
                : state.cart.map((item) => 
                    item.id === payload.id
                    ? {...item, quantity: item.quantity - 1}
                    : item),
                count: state.count - 1
            }
        default:
            return state;            
    }
}