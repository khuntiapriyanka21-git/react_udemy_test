export const UserDetails = ({ name, isOnline, hideOffline, isNewUser, isPremium, role }) => {
  if (hideOffline && !isOnline) {
    return null;
  }

  let roleBadge = null;
  if (role === "admin") {
    roleBadge = <span>Admin</span>
  }
  else if (role === "moderator") {
    roleBadge = <span>Moderator</span>
  }
  else if (role === 'VIP') {
    roleBadge = <span>VIP</span>
  }

  return (
    <div>
      <h3>{name}
        {isPremium && <span>☆</span>}
        {isNewUser && <span>😍</span>}
        {roleBadge}

      </h3>

      <span>{isOnline ? "Online" : "Offline"}</span>
      <p>{isOnline ? "Available" : "Not Available"}</p>
      {
        isOnline ? (<button>Send Message</button>) : (<button>Go back</button>)
      }
    </div>
  )


}