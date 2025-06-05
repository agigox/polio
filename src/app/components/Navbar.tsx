import Image from "next/image";
import { Button } from "./Button";

export const Navbar = () => {
  return (
    <nav className="navbar h-20 w-full px-37.5 flex flex-col justify-center items-center border-solid border-gray-100 border-b">
      <div className="container w-full flex justify-between items-center">
        <div className="content flex gap-10 items-center">
          <div>
            <Image
              aria-hidden
              src="/Logo.svg"
              alt="Logo"
              width={65}
              height={32}
            />
          </div>
          <div className="flex gap-8">
            <div>Home</div>
            <div>Customers</div>
            <div>Features</div>
            <div>Pricing</div>
          </div>
        </div>
        <div
          data-layer="buttons"
          className="Buttons inline-flex justify-start items-center gap-2.5"
        >
          <Button label="Sign in" type="secondary" />
          <Button label="Start for free" />
        </div>
      </div>
    </nav>
  );
};
