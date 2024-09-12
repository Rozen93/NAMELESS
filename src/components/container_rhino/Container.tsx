import React from "react";

type containerProps = {
  children: any;
  isNormal?: any;
  isFull?: any;
  isReal?: any;
};

function ContainerRhino({
  children,
  isNormal,
  isFull,
  isReal,
}: containerProps) {
  return (
    <section
      className={`${isNormal ? "p-3 lg:p-4 mt-14" : "pt-3 lg:pt-4 mt-14"} ${
        isFull
          ? "py-3 px-0 lg:pt-4 lg:pb-[6rem] lg:px-0 mt-14 relative"
          : "pt-3 lg:pt-4 mt-14"
      } ${isReal
         ? "bg-primary py-3 px-0 lg:pt-4 lg:pb-[6rem] lg:px-0 mt-14 relative"
          : "pt-3 lg:pt-4 mt-14"
      }`}
    >
      {/* {isReal && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-[-320px] left-0 z-[-3]" >
          <path
            fill="#f6f6f6"
            fillOpacity="1"
             d="M0,320L120,309.3C240,299,480,277,720,272C960,267,1200,277,1320,282.7L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
      )} */}

      <div
        className={`${
          isNormal ? "container-rhino pt-9 mt-9" : "container-full pt-9 mt-9"
        }`}
      >
        {children}
      </div>
    </section>
  );
}

export default ContainerRhino;
