import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import Context from "../../context/context";
import React from "react";

export default function Modal(props) {
  const context = useContext(Context);
  return (
    <>
      <Transition appear show={context.isLoginPopup} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 bg-opacity-50 "
          onClose={() => console.log("click model close ")}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center pt-20">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel>{props.children}</Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
