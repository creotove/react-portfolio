import React from 'react'

const Modal = ({
    isModalOpen,
    closeModal,
    modalOverlayRef,
    modalContentRef,
    children
}) => {


    return (
        <div className={`inset-0 fixed h-screen w-screen bg-opacity-90 bg-x-gray-dark-v2 z-40 ${isModalOpen ? "" : "hidden"} `}
            onClick={(e) => {
                if (e.target.classList.contains("fixed")) {
                    closeModal();
                }
            }}
        >
            <div
                ref={modalOverlayRef}
                className="fixed bg-x-cyan rounded-[50px] no-scrollbar z-50 "
                style={{ display: 'none', boxShadow: "5px 5px 0px 5px black" }}
            >
                <section
                    ref={modalContentRef}
                    className="flex flex-col text-x-gray-dark overflow-y-auto p-4 md:p-8 bg-x-cyan rounded-[50px] h-[80vh] w-[80vw] md:w-[50vw] md:h-[80vh] relative no-scrollbar"
                >
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-2xl font-bold"
                    >
                        X
                    </button>
                    {/* Main Content Hire */}
                    {
                        children
                    }

                </section>
            </div>
        </div>
    )
}

export default Modal