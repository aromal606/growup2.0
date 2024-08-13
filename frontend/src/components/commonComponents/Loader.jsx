import React from "react";
const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className=" border-dotted border-t-4 border-orange-400 flex rounded-t-full w-20 h-20 justify-center items-center animate-ping">
         
        <div className="flex rounded-full justify-center  items-center w-16 h-16 border-t-4  border-dotted border-red-400">
          
            <div className="flex rounded-full justify-center items-center w-8 h-8 border-t-2 border-dotted  border-red-600">
              <div className="flex rounded-full justify-center  items-center w-3 h-3 border-t-2 border-dotted border-yellow-400"></div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Loader;
