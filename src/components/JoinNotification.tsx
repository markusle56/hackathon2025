"use client";
import React from "react";

export function JoinNotification({
  onClose,
  message,
}: {
  onClose: () => void;
  message: string;
}) {
  if (!message) return null;
  return (
    <>
      <div className="fixed inset-0 z-100">
        <div onClick={onClose} className="fixed inset-0 " />
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative transform overflow-hidden rounded-lg bg-white shadow-xl outline-black outline-1 sm:w-100"
          >
            <div className="bg-white px-5 pt-5">
              <p className="text-black text-xl">{message}</p>
            </div>
            <div className="bg-white w-full py-3 sm:flex sm:flex-row-reverse sm:px-6 items-center justify-center ">
              <button
                type="button"
                onClick={onClose}
                className="mt-3 min-w-50 w-1/2 justify-center rounded-md px-3 py-2 text-sm sm:mt-0 sm:w-auto text-white bg-black hover:scale-105"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}