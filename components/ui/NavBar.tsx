import LinkDesktop from "./LinkDesktop";
import LinkMobile from "./LinkMobile";

export default function NavBar() {
  return (
    <nav className="bg-black py-5">
      <div className="align-element">
        <LinkMobile />
        <LinkDesktop />
      </div>
    </nav>
  )
}
