import React from "react"
import LocationIcon from "../assets/location-pin.svg"
import checkInIcon from "../assets/check-in.svg"
import checkOutIcon from "../assets/check-out.svg"
import Room from "../assets/person-male.svg"
import search from "../assets/search.svg"
import Vac1 from "../assets/vac1.avif"
import Vac2 from "../assets/vac2.avif"

const Home = () => {
  return (
    <div className="w-full shadow-black/15 bg-white overflow-hidden rounded-lg">
      <div className="flex min-h-[30rem] justify-center overflow-hidden relative">
        <div className="flex-grow main-bg"></div>
        <div className="flex-grow max-w-[50%] w-full  bg-gray-100 px-14 py-10">
          <h1 className="text-5xl leading-[3rem] tracking-widest font-medium">
            Experience <br /> something <br /> new every
            <br /> moment
          </h1>
          <div>
            <p className="text-black/50 mt-4">
              Escape to place where you can relax and <br /> unwind, rejuvenate,
              and reconnect
            </p>
          </div>
        </div>
        <div className="absolute overflow-hidden bottom-16 rounded-full flex items-center max-w-4xl bg-white py-4 px-12 w-full shadow-xl">
          <div className="flex-grow">
            <div className="flex items-center gap-2">
              <img src={LocationIcon} alt="Icon" className="w-5" />
              <p className="font-medium">Location</p>
            </div>
            <p className="text-black/50 text-sm">Bali, Indonesia</p>
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-2">
              <img src={checkInIcon} alt="Icon" className="w-5" />
              <p className="font-medium">Check In</p>
            </div>
            <p className="text-black/50 text-sm">7Nov2024</p>
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-2">
              <img src={checkOutIcon} alt="Icon" className="w-5" />
              <p className="font-medium">Check Out</p>
            </div>
            <p className="text-black/50 text-sm">8Nov2024</p>
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-2">
              <img src={Room} alt="Icon" className="w-5" />
              <p className="font-medium">Room</p>
            </div>
            <p className="text-black/50 text-sm">2Room 4Guest</p>
          </div>
          <div className="flex-grow">
            <button className="bg-assets flex items-center justify-center absolute h-full top-0 right-0 w-32 text-white rounded-full gap-2">
              <img src={search} alt="Icon" className="w-4" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="py-16 space-y-4">
          <div className="space-y-1">
            <div>
              <div>
                <h1 className="font-normal text-3xl tracking-widest">
                  Best offer this month
                </h1>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-black/50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="px-3 py-1 rounded-full text-sm text-assets bg-gray-100">
                  View All
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-grow flex p-3 bg-gray-100 rounded-lg">
              <div className="overflow-hidden w-44 border rounded-lg">
                <img
                  src={Vac1}
                  alt="vac_image"
                  className="w-48 transform scale-[2.5]"
                />
              </div>
              <div className="flex justify-center flex-wrap flex-grow py-3 max-w-72 gap-1">
                <div className="font-medium text-xl">50% Off</div>
                <div className="text-black/50 text-sm text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum ea provident.
                </div>
                <div>
                  <button className="px-3 py-1 rounded-full text-sm text-white bg-assets">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-grow flex p-3 bg-gray-100 rounded-lg">
              <div className="overflow-hidden w-44 border rounded-lg">
                <img
                  src={Vac2}
                  alt="vac_image"
                  className="w-48 transform scale-[2.5]"
                />
              </div>
              <div className="flex justify-center flex-wrap flex-grow py-3 max-w-72 gap-1">
                <div className="font-medium text-xl">50% Off</div>
                <div className="text-black/50 text-sm text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum ea provident.
                </div>
                <div>
                  <button className="px-3 py-1 rounded-full text-sm text-white bg-assets">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
