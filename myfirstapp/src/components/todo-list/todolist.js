

export  const Todolist=()=>{
const details=
    {
    
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        
        
      }
      const {title,description,category,image}=details
    return(
<div>
    <h3>{title}</h3>
    <h2>{description}</h2>
    <i>{category}</i>
    <hr></hr>
    <img  src={image} ></img>
</div>

    )
}