import { UserInfo } from "./userInfo"


export const UserCard = ({ rest }) => {
  return (
    <div>
      <h2>User Details</h2>
      <UserInfo {...rest} />
    </div>
  )
}