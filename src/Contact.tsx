import User from "./User";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
      <p>Website: <a target="_blank" href={`https://${user.website}`}>{user.website}</a></p>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-sm color:">More</AccordionTrigger>
          <AccordionContent>
          <p className="text-lg font-bold">Address:</p>
          <p>{user.address.street}</p>
          <p>{user.address.suite}</p>
          <p>{user.address.city} {user.address.zipcode}</p>

          <p className="text-lg font-bold">Company:</p>
          <p className="text-md">{user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
          <p className="italic">{`"${user.company.bs}"`}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}