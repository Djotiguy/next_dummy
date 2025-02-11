import { Button } from "./ui/button";

export default function SignupForm() {
  return (
    <form>
        <div>
        <h2>First name</h2>
        <input className="test" type="text" placeholder="Firstname" />
        </div>
        <div>Last name</div>
        <input className="test" type="text" placeholder="Lastname" />
        <div>Email</div>
        <input className="test" type="email" placeholder="Email" />
        <div>Password</div>
        <input className="test" type="password" placeholder="Password" />
        <div>Confirm Password</div>
        <input className="test" type="password" placeholder="Confirm Password" />
        <Button>Signup</Button>
    </form>
  )
}
