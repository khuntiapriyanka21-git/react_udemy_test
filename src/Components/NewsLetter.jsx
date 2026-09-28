import { ActionButton } from "./ActionButton"

export const NewsLetter = () => {
  const handleSubscribe = () => {
    alert("Subscribed");
  }
  return <div>
    <h2>Subscribe to newsletter</h2>
    <ActionButton text="Subscribe" onClick={handleSubscribe} />
  </div>
}