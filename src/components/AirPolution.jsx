import React from "react";
function AirPolution({ list }) {
    return (
        <div className="w-12/12 flex flex-col items-center">
            <h2 className="w-11/12 font-semibold text-2xl text-slate-600 m-0 text-center">
                Air Polution Index
            </h2>
            <div className="w-11/12 mt-4 flex gap-4">
                <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <p>Good</p>
                </div>
                <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <p>Poor</p>
                </div>
            </div>
            <div className="w-11/12 mt-4 flex flex-col gap-4">
                <h3 className="bg-white w-full flex  justify-between py-2 px-3 rounded-md shadow-lg ">
                    <span className=" font-semibold">Carbon monoxide</span>
                    <span
                        className="font-semibold"
                        style={{ color: list.co < 15400 ? "green" : "red" }}
                    >
                        {list.co}
                    </span>
                </h3>
                <h3 className="bg-white w-full flex  justify-between py-2 px-3 rounded-md shadow-lg ">
                    <span className=" font-semibold">Ammonia</span>
                    <span className="font-semibold"
                        style={{ color: list.nh3 < 200 ? "green" : "red" }}
                    >{list.nh3}</span>
                </h3>
                <h3 className="bg-white w-full flex  justify-between py-2 px-3 rounded-md shadow-lg ">
                    <span className=" font-semibold">Nitric oxide</span>
                    <span className="font-semibold"
                        style={{ color: list.no < 100 ? "green" : "red" }}
                    >{list.no}</span>
                </h3>
                <h3 className="bg-white w-full flex  justify-between py-2 px-3 rounded-md shadow-lg ">
                    <span className=" font-semibold">Nitrogen Dioxide</span>
                    <span className="font-semibold"
                        style={{ color: list.no2 < 250 ? "green" : "red" }}
                    >{list.no2}</span>
                </h3>
                <h3 className="bg-white w-full flex  justify-between py-2 px-3 rounded-md shadow-lg ">
                    <span className=" font-semibold">Trioxygen</span>
                    <span className="font-semibold"
                        style={{ color: list.o3 < 140 ? "green" : "red" }}
                    >{list.o3}</span>
                </h3>
                <h3 className="bg-white w-full flex  justify-between py-2 px-3 rounded-md shadow-lg ">
                    <span className=" font-semibold">PM2_5</span>
                    <span className="font-semibold"
                        style={{ color: list.pm2_5 < 50 ? "green" : "red" }}
                    >{list.pm2_5}</span>
                </h3>
                <h3 className="bg-white w-full flex  justify-between py-2 px-3 rounded-md shadow-lg ">
                    <span className=" font-semibold">PM10</span>
                    <span className="font-semibold"
                        style={{ color: list.pm10 < 100 ? "green" : "red" }}
                    > {list.pm10}</span>
                </h3>
                <h3 className="bg-white w-full flex  justify-between py-2 px-3 rounded-md shadow-lg ">
                    <span className=" font-semibold">Sulfur dioxide</span>
                    <span className="font-semibold"
                        style={{ color: list.so2 < 250 ? "green" : "red" }}
                    >{list.so2}</span>
                </h3>

            </div>
        </div>
    );
}

export default AirPolution;
