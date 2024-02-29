import { useEffect, useRef, useState, type FormEvent } from "react"
import { useForm } from "react-hook-form"

interface IFormInput {
    num_persons: string
}
export const useFormCustom = () => {

    const { register, watch } = useForm<IFormInput>()
    const defaultValueNumPerson = 0

    const [numPersons, setNumPersons] = useState(defaultValueNumPerson)

    const modalRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        const value = isNaN(parseInt(watch('num_persons'))) ? 0 : parseInt(watch('num_persons'))
        setNumPersons(value)
    }, [watch('num_persons')])

    const handleSubmitCustom = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        const form = event.target as HTMLFormElement

        const formData = new FormData(form)
        const jsonData: { [key: string]: string } = {};
        for (const [key, value] of formData.entries()) {
            const newValue = value as string
            if (key === 'curp') {
                jsonData[key] = newValue.trim().toUpperCase()
            }
            else {
                jsonData[key] = newValue.trim()
            }

        }
        modalRef.current?.showModal()
        form.reset()
        setNumPersons(defaultValueNumPerson)
        localStorage.setItem('data_kljpos', JSON.stringify(jsonData))
    };

    return {
        register,
        handleSubmitCustom,
        watch,
        numPersons,
        modalRef
    }
}
