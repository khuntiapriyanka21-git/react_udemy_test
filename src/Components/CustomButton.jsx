export const CustomButton = () => {
  const handleClick = () => {
    alert("clicked")
  }
  return <button onClick={() => alert("Thanks for liking")}>Like</button>
}