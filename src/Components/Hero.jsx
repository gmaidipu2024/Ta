import React from 'react'
import {
  Autocomplete,
  AutocompleteItem,
  Button,
} from "@nextui-org/react";

function Hero() {
  return (
    <section className=" bg-[url('../hero.png')] w-full h-[85vh] bg-no-repeat bg-cover overflow-hidden ">
      <div className="container w-[80%] h-auto mx-auto ">
        <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-4xl w-full h-auto lg:w-[50%] px-10 py-10  lg:mt-[30px] text-white font-bold leading-tight text-center lg:text-start ">
          Find amazing things to do anytime, anywhere in Lagos.
        </h1>

        <div className="bg-[#fbfcff] w-full h-auto lg:w-[650px] lg:h-[130px] py-10 px-10 lg:ms-10 rounded-xl mb-[125px] overflow-hidden ">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 ">
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
             
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
