import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-gray-800 opacity-75"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <button
            className="close-button absolute top-0 right-0 mt-4 mr-4 text-white hover:text-gray-900"
            onClick={onClose}
          >
            <svg
              className="fill-current h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M14.348 14.849a1.2 1.2 0 01-1.697 1.697L10 11.697l-2.651 2.85a1.2 1.2 0 01-1.697-1.697L8.303 10 5.651 7.15a1.2 1.2 0 111.697-1.697L10 8.303l2.651-2.85a1.2 1.2 0 111.697 1.697L11.697 10l2.651 2.85z" />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export { Modal };
