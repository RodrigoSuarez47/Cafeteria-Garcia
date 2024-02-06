import { useState } from "react"

const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (evento) => {
        evento.preventDefault()

        const infoUsuario = {
            nombre, telefono, email
        }

        onConfirm(infoUsuario)
    }

    return (
        <>
            <form onSubmit={handleConfirm}>
                <div className="mb-3">
                    <label htmlFor="Nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="Nombre" value={nombre} onChange={({ target }) => setNombre(target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Telefono" className="form-label">Teléfono</label>
                    <input type="tel" className="form-control" id="Telefono" value={telefono} onChange={({ target }) => setTelefono(target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="Email" value={email} onChange={({ target }) => setEmail(target.value)} />
                </div>
                <button type="submit" className="btn btn-success">Enviar Orden</button>
            </form>
        </>
    )
}
export default CheckoutForm;