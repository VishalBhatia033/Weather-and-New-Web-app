import React from 'react'

function PollutionTable() {
    return (
        <div className="relative overflow-x-auto mt-6 rounded-lg ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-[8px] text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="px-3 py-3">
                            Qualitative name
                        </th>
                        <th scope="col " colSpan={6} className="px-6 py-3 text-xs">
                            Pollutant concentration in μg/m3
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b text-[10px] transition-all hover:bg-slate-100">
                        <td className="px-3 py-2">

                        </td>
                        <td className="px-3 py-2 font-semibold">
                            SO2
                        </td>
                        <td className="px-3 py-2">
                            NO2
                        </td>
                        <td className="px-3 py-2">
                            PM10
                        </td>
                        <td className="px-3 py-2">
                            PM25
                        </td>
                        <td className="px-3 py-2">
                            O3
                        </td>
                        <td className="px-3 py-2">
                            CO
                        </td>

                    </tr>

                    <tr className="bg-white border-b text-[10px] transition-all hover:bg-slate-100">

                        <td className="px-3 py-2 font-semibold">
                            Good
                        </td>
                        <td className="px-3 py-2">
                            [0; 20)
                        </td>
                        <td className="px-3 py-2">
                            [0; 40)
                        </td>
                        <td className="px-3 py-2">
                            [0; 20)
                        </td>
                        <td className="px-3 py-2">
                            [0; 10)
                        </td>
                        <td className="px-3 py-2">
                            [0; 60)
                        </td>
                        <td className="px-3 py-2">
                            [0; 4400)
                        </td>
                    </tr>

                    <tr className="bg-white border-b text-[10px] transition-all hover:bg-slate-100">

                        <td className="px-3 py-2 font-semibold">
                            Fair
                        </td>
                        <td className="px-3 py-2">
                            [20; 80)
                        </td>
                        <td className="px-3 py-2">
                            [40; 70)
                        </td>
                        <td className="px-3 py-2">
                            [20; 50)
                        </td>
                        <td className="px-3 py-2">
                            [10; 25)
                        </td>
                        <td className="px-3 py-2">
                            [60; 100)
                        </td>
                        <td className="px-3 py-2">
                            [4400; 9400)
                        </td>
                    </tr>

                    <tr className="bg-white border-b text-[10px] transition-all hover:bg-slate-100">

                        <td className="px-3 py-2 font-semibold">
                            Poor
                        </td>
                        <td className="px-3 py-2">
                            [250; 350)
                        </td>
                        <td className="px-3 py-2">
                            [150; 200)
                        </td>
                        <td className="px-3 py-2">
                            [100; 200)
                        </td>
                        <td className="px-3 py-2">
                            [50; 75)
                        </td>
                        <td className="px-3 py-2">
                            [140; 180)
                        </td>
                        <td className="px-3 py-2">
                            [12400; 15400)
                        </td>
                    </tr>

                    <tr className="bg-white border-b text-[10px] transition-all hover:bg-slate-100">

                        <td className="px-3 py-2 font-semibold">
                            Very Poor
                        </td>
                        <td className="px-3 py-2">
                            ⩾350
                        </td>
                        <td className="px-3 py-2">
                            ⩾200
                        </td>
                        <td className="px-3 py-2">
                            ⩾200
                        </td>
                        <td className="px-3 py-2">
                            ⩾75
                        </td>
                        <td className="px-3 py-2">
                            ⩾180
                        </td>
                        <td className="px-3 py-2">
                            ⩾15400
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default PollutionTable