import { useFormInput } from '../../hooks/useFormInput'

export default function Form() {
    const firstNameProps = useFormInput("Michael")
    const lastNameProps = useFormInput("Piccagli")

    return (
        <>
            <label>
                First name:
                <input {...firstNameProps} />
            </label>

            <label>
                Last name:
                <input {...lastNameProps} />
            </label>
            <p>
                <b>
                    Bom dia, {firstNameProps.value} {lastNameProps.value}
                </b>
            </p>
        </>
    )
}