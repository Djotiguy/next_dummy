import Link from "next/link";
import { ReactNode } from "react";
const Footer = (): ReactNode => {
  return (
    <footer className="bg-black text-white">
      <div className="align-element min-h-[15vh] flex flex-col justify-center items-center">
        <p className="my-2">2025</p>
        <p className="mars-font text-2xl my-4 text-center">Dumms, by Nobody</p>
        <p className="underline">Ressources:</p>
        <p className="text-center">
          <Link href={"https://www.nasa.com/"} target="_blank">Nasa</Link> |{" "}
          <Link href={"https://api.nasa.gov/"} target="_blank">NasaAPI</Link> |{" "}
          <Link href={"https://www.youtube.com/@NASA/videos"} target="_blank">Nasa Youtube channel</Link>
        </p>
        <p>
          <Link href={"https://webtelescope.org/home"} target="_blank">JWST</Link> |
          <Link href={"https://jwstapi.com"} target="_blank">JWST API</Link> 
        </p> 
        <p>
          <Link href={"https://www.esa.int/"} target="_blank">ESA</Link> 
        </p>
        <p>
          <Link href={"https://www.spacex.com/"} target="_blank">SpaceX</Link> |
          <Link href={"https://api.spacexdata.com/v3/"} target="_blank">SpaceX</Link> 
        </p>
        <p>
        <Link href={"https://www.datastro.eu/pages/home"} target="_blank">Datastro API</Link> 
        </p>
        <p className="mb-8">
        <Link href={"https://www.spaceflightnewsapi.net/"} target="_blank">SNAPI API</Link> 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
