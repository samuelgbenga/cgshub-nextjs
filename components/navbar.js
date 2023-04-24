import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="mb-2 md:border-b py-2 bg-sec1">
        <div className="container mx-auto">
          <div className="flex justify-between gap-2">
            <Image
              className="w-32 ml-2"
              src="/images/logo.png"
              width={100}
              height={100}
              alt="Logo"
            />
            <ul className="hidden md:flex">
              <li className="float-left">
                <a className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition   duration-300 ease-in-out">
                  <span>Home</span>
                </a>
              </li>
              <li className="float-left">
                <a className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition   duration-300 ease-in-out">
                  <span>Team</span>
                </a>
              </li>
              <li className="float-left">
                <a className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition   duration-300 ease-in-out">
                  <span>Project</span>
                </a>
              </li>
              <li className="float-left">
                <a className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition   duration-300 ease-in-out">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
