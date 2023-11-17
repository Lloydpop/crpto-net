import { Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

export interface ModalProps {
  open: boolean;
  setOpen: (state: boolean) => void;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  showCloseIcon?: boolean;
  dismissOnclickOutside?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  setOpen,
  children,
  size = "sm",

  showCloseIcon = true,
  dismissOnclickOutside = true,
}: ModalProps) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[500000]"
        onClose={(state) => (dismissOnclickOutside ? setOpen(state) : {})}
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
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 relative">
            <Dialog.Panel
              className={classNames(
                `relative transform rounded-lg bg-[#FDF3E9] text-left shadow-xl duration-[1s] ease-in sm:my-8 sm:w-full`,
                {
                  "sm:max-w-lg": size === "lg",
                  "sm:max-w-md": size === "md",
                  "sm:max-w-[22rem]": size === "sm",
                }
              )}
            >
              {showCloseIcon && (
                <div className="absolute top-6 right-4 cursor-pointer z-10">
                  <button
                    className=" text-gray-600"
                    onClick={() => setOpen(false)}
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>
              )}
              <div className="relative">{children}</div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
