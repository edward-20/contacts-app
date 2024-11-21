import User from "./User";

interface UserProps {
  user: User
}

export default function Contact({user}: UserProps) {
  return (
    <div className="rounded-2xl border-solid border-2 p-5">
      <h1 className="mb-3">{user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: <a href={user.website}>{user.website}</a></p>
    </div>
  )
}