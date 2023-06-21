import { w } from 'windstitch';
import { useContext, useState } from 'react';
import { HomeContext } from '@/contexts/HomeContext';
import { deleteStudentById } from '@/utils';

export default function Modal() {
  const { showModal, setShowModal } = useContext(HomeContext);


  const handleClose = () => {
    setShowModal({ ...showModal, yesOrNo: !showModal.yesOrNo });
  };

  async function handleDelete() {
    await deleteStudentById(showModal.studentId)
    setShowModal({ ...showModal, yesOrNo: !showModal.yesOrNo });
  };

  return (
    <>
      {showModal.yesOrNo && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4">Are you sure want delete {showModal.studentName}?</h2>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => { handleDelete() }}
              >
                Yes
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={() => { handleClose() }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
