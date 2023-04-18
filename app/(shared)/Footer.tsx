import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-background text-foreground py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* First Column */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">Xavier Castro Blog and Portfolio</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet, qui minim labore adipisicing minim sint cillum sint
            consectetur cupidatat.
          </p>
          <p>Copyright Xavier Castro All Rights Reserved</p>
        </div>
        {/* Second Column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Massa orci senectus</p>
        </div>
        {/* Third Column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          </p>
          <p className="my-5">xavier_castro@icloud.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
