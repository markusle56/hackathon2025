"use client"
import { useState } from "react";
// export function JoinNotification({ onClose} : {onClose: () => void}) {   
export function JoinNotification() {   
    const onClose = () => {
        return 0
    }
    return (
        <>
            <div className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent z-100">
                <div onClick={onClose} className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></div>

                <div className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
                <div onClick={(e) => e.stopPropagation()} className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in outline-black outline-1 sm:w-100 data-closed:sm:translate-y-0 data-closed:sm:scale-95 ">
                    <div  className="bg-white">
                        <div className="sm:flex sm:items-start justify-center pt-5 px-5">
                           <p className="text-black text-2xl">Someone wants to join your study session!</p>
                        </div>
                        <div className="bg-white w-full py-3 sm:flex sm:flex-row-reverse sm:px-6 items-center justify-center ">
                            <button type="button" onClick={onClose} className="mt-3 min-w-50 w-1/2 justify-center rounded-md px-3 py-2 text-xl sm:mt-0 sm:w-auto text-white bg-black hover:scale-105">Got it!</button>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </>
    )
};