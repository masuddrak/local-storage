const addToCard = id => {
    let shopingCard = {};
    let storCard=localStorage.getItem('added items')
    console.log(storCard)
    if(storCard){
        shopingCard=JSON.parse(storCard)
    }else{
        shopingCard={}
    }
    const quntity=shopingCard[id]
    if(quntity){
        const newQuntity=quntity+1
        shopingCard[id]=newQuntity
    }
    else{
        shopingCard[id]=1 
    }
    localStorage.setItem('added items',JSON.stringify(shopingCard))

}
export { addToCard };