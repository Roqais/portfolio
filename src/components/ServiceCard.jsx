import React from "react";

const ServiceCard = ({ img, title, desc }) => (
    <div className="group rounded px-8 py-12 shadow hover:bg-primary">
      <div className="mx-auto h-24 w-24 text-center xl:h-32 xl:w-32">
        <div >
          <img src={img} className="w-32 h-auto" alt={`${title} icon`} />
        </div>
      </div>
      <div className="text-center">
        <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow-500 lg:text-xl">
          {title}
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
          {desc}
        </p>
      </div>
    </div>
  );

  export default ServiceCard