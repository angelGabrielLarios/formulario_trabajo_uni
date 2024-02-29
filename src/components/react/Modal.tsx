import { useRef, type RefObject } from "react"

interface Props {
    modalRef: RefObject<HTMLDialogElement>
}
export const Modal = ({ modalRef }: Props) => {

    return (
        <dialog
            id="modal"
            className="modal"
            ref={modalRef}
        >
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-sm md:text-lg text-success">Datos enviados correctamente !!!</h3>

            </div>
        </dialog>
    )
}
