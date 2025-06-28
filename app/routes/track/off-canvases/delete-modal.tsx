import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import type dayjs from "dayjs";
import { useState } from "react";
import { useOutletContext } from "react-router";

interface DeleteModalProps {
  date: dayjs.Dayjs;
}

export default function DeleteModal(props: DeleteModalProps) {
  let [isOpen, setIsOpen] = useState(false);
  const { flowDates, setFlowDates }: any = useOutletContext();

  const handleDelete = (dateToDelete: dayjs.Dayjs) => {
    setFlowDates(flowDates.filter((date: dayjs.Dayjs) => date != dateToDelete));
    setIsOpen(false);
  };

  return (
    <>
      <button className="text-sm text-red-400" onClick={() => setIsOpen(true)}>
        Delete
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-1046"
      >
        <DialogBackdrop>
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="w-70 border bg-gray-100 rounded-xl pt-5 px-4 pb-4">
              <p className="text-center">
                Are you sure you want to delete this entry?
              </p>
              <div className="flex justify-between px-4 pt-3">
                <button onClick={() => setIsOpen(false)}>Cancel</button>
                <button
                  className="text-red-400"
                  onClick={() => handleDelete(props.date)}
                >
                  Delete
                </button>
              </div>
            </DialogPanel>
          </div>
        </DialogBackdrop>
      </Dialog>
    </>
  );
}
