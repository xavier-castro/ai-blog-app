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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          </p>
          <p>Copyright Xavier Castro All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
