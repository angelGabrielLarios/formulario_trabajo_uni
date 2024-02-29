import { useEffect, useRef, useState, type FormEvent } from "react"
import { states } from "./data"
import { useFormCustom } from "./hooks"
import { IconRestore, IconDeviceFloppy } from "@tabler/icons-react";
import { Modal } from "./Modal";
import { v4 as uuidv4 } from 'uuid';

export const Form = () => {


    const { handleSubmitCustom, numPersons, register, modalRef } = useFormCustom()
    return (
        <>
            <form
                className="w-11/12 md:w-[40rem] text-sm space-y-4 p-6 border border-primary rounded-md"
                onSubmit={handleSubmitCustom}
                autoComplete="off"
                id="form"

            >
                <article className="md:grid md:grid-cols-2 space-y-4 md:space-y-0 md:gap-2">
                    <div className="flex flex-col  gap-4">
                        <label htmlFor="name">Nombre(s):</label>
                        <input type="text" className="input input-bordered input-primary w-full text-sm" name="name" id="name" maxLength={100} required />
                    </div>

                    <div className="flex flex-col gap-4">
                        <label htmlFor="lastName">Apellido(s):</label>
                        <input type="text" className="input input-bordered input-primary w-full text-sm" name="lastName" id="lastName" maxLength={100} required />
                    </div>
                </article>

                <div className="flex flex-col gap-4">
                    <label htmlFor="curp">CURP:</label>
                    <input type="text" className="input uppercase input-bordered input-primary w-full text-sm" name="curp" id="curp" title="formato de curp no valido" minLength={18} maxLength={18} required />
                </div>

                <div className="flex flex-col gap-4">
                    <label htmlFor="birthdate">Fecha de nacimiento:</label>
                    <input type="date" className="input input-bordered input-primary w-full text-sm" name="birthdate" id="birthdate" required />
                </div>

                <div className="flex flex-col gap-4">
                    <label htmlFor="address">Direccion:</label>
                    <textarea className="textarea textarea-primary" name="address" id="address" maxLength={100} required placeholder="Nombre de la Colonia, nombre de la calle"></textarea>
                </div>

                <div className="flex flex-col gap-4">
                    <label htmlFor="state">Estado:</label>
                    <select className="select select-primary block w-full" defaultValue={""} name="state" id="state" required>
                        <option value={""} >-- Seleciona tu estado--</option>
                        {
                            states.map((state) => {
                                return (
                                    <option
                                        key={state.id}
                                        value={state.name.toLowerCase()}
                                        className="capitalize"
                                    >
                                        {state.name.toLowerCase()}

                                    </option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className="flex flex-col gap-4">
                    <label htmlFor="num_persons">¿Cuántas personas viven en su casa?</label>
                    <input type="number" className="input input-bordered input-primary w-full text-sm" id="num_persons" min={0} defaultValue={0} {...register('num_persons')} required />
                </div>


                {Array.from({ length: numPersons }, (_, index) => {
                    return (
                        <div className="flex flex-col gap-4" key={uuidv4()}>
                            <label htmlFor={`name_person_${index + 1}`}>Escribe el nombre de la persona {index + 1}</label>
                            <input type="text" className="input input-bordered input-primary w-full text-sm" id={`name_person_${index + 1}`} name={`name_person_${index + 1}`} maxLength={100} required />
                        </div>
                    )
                })}

                <div className="grid grid-cols-2 gap-2">
                    <button className="btn btn-neutral" type="reset">Limpiar <IconRestore /></button>
                    <button className="btn btn-primary" type="submit">Guardar <IconDeviceFloppy /></button>
                </div>

            </form>

            <Modal
                modalRef={modalRef}
            />
        </>
    )
}
