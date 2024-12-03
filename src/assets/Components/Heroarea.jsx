import React from "react";
import {
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem,
  Button,
} from "@nextui-org/react";
function HeroArea() {
  return (
    <section className=" bg-[url('../hero.png')] w-full h-[800px] bg-no-repeat bg-contain overflow-hidden ">
      <div className="container w-[80%] h-auto mx-auto ">
        <h1 className="text-xl md:text-5xl w-[50%] px-10 py-10 mt-[30px] text-white font-bold leading-tight ">
          Find amazing things to do anytime, anywhere in Lagos.
        </h1>

        <div className="bg-[#fbfcff] w-[650px] h-[130px] py-10 px-10 ms-10 rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <Autocomplete
              aria-label="outside"
              label="location"
              placeholder="Oshodi"
            >
              <AutocompleteItem value=" Hablu Programmer">
                Hablu Programmer
              </AutocompleteItem>
            </Autocomplete>
            <Autocomplete aria-label="outside" label="Date" placeholder="Date">
              <AutocompleteItem value=" Date">Date</AutocompleteItem>
            </Autocomplete>
            <Autocomplete
              aria-label="outside"
              label="Activities"
              placeholder=" Night Club"
            >
              <AutocompleteItem value="Activities" className="">
                Night Club
              </AutocompleteItem>
            </Autocomplete>
            <Button color="primary" className="p-8 mt-1 ">
              {" "}
              Search{" "}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroArea;
