import { ItemMenu } from "./ItemMenu"


export const Menu = () => {
  const handleOrder = (itemName, itemPrice) => {
    alert(`You Ordered: ${itemName} for ${itemPrice}`)
  }
  return (
    <div>
      <h2>Our Menu</h2>
      <ItemMenu name="Pizza" price={12} onOrder={handleOrder} />
      <ItemMenu name="Burger" price={100} onOrder={handleOrder} />
      <ItemMenu name="Salad" price={120} onOrder={handleOrder} />



    </div>
  )
}