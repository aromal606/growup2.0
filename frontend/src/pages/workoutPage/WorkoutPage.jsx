import React, { useState } from "react";
import countries from "../../utilities/workoutData";

const WorkoutPage = () => {
  const [country, setCounty] = useState("");

  const selectedCountry = (e) => {
    const selectedCountryname = e.target.value;
    setCounty(selectedCountryname);
  };

  const selectedCityObjects = countries.find((city) => country === city.name);
  const cities = selectedCityObjects ? selectedCityObjects.cities : [];

  return (
    <>
      <div className="flex justify-center items-center">
        <h1>workout page</h1>
      </div>
      <div className="flex gap-4">
        <div>
          <select name="" id="" onChange={selectedCountry}>
            <option value="">select contry</option>
            {countries.map((item) => {
              return (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <select name="" id="">
            <option value="">select city</option>
            {cities?.map((e, index) => {
              return (
                <option value="" key={index}>
                  {e}
                </option>
              );
            })}
            :<option>no cities available</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default WorkoutPage;
