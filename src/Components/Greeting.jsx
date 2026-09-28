export const Greeting = ({ name = "Guest", message = "Hello" }) => {
  return (
    <div>
      {message}, {name}
    </div>

  )
}