const products=[
    {
        id:'1',image:"https://goo.su/zdM1",name:"Nike Air Force",price:110,category:"Sportwear",stock:10,description:""
    },
    {  id:'2',image:"https://goo.su/N2IO",name:"Nike Blazer",price:120,category:"Sportwear",stock:8,description:""
    },
    {   id:'3',image:"https://goo.su/ZHS4sc",name:"Duramo SL",price:60,category:"Running",stock:57,description:""
    },
    {   id:'4',image:"https://goo.su/9jAWE",name:"Duramo SL 20",price:70,category:"Running",stock:45,description:""
    },
    {   id:'5',image:"https://bit.ly/3sr944s",name:"Tereex Brushwoo",price:130,category:"Montaña",stock:15,description:""
    },
    {   id:'6',image:"https://bit.ly/3z6kNJE",name:"Outdoor",price:40,category:"Montaña",stock:30,description:""
    }
]

// export const getproducts=( categoryID )=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(categoryID ? products.filter(prod=> prod.category === categoryID) : products)
//         },1000)
//     })
// }
// export const getproduct = (id) =>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(products.find(prod => prod.id === id))
//         },1000)
//     })
// }


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}



