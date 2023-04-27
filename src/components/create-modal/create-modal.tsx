import { useEffect, useState } from "react"
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import "./modal.css"

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

const Input = ({ label, value, updateValue}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)} />
        </>
    )
}

interface ModalProps {
    closeModal(): void
}

export function CreateModal({ closeModal }: ModalProps) {

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);
    const [image,  setImage] = useState("");
    const { mutate, isSuccess }= useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            nome,
            preco,
            image
        }

        mutate(foodData);
    }
    
    useEffect(() => {
        if(!isSuccess) return
        closeModal();
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
            <h2>Cadastre um novo item no cardápio</h2>
            <form className="input-container" action="">
                <Input label="nome" value={nome} updateValue={setNome}/>
                <Input label="preco" value={preco} updateValue={setPreco}/>
                <Input label="image" value={image} updateValue={setImage}/>
            </form>
            <button onClick={submit} className="btn-secondary">Enviar</button>      
            </div>   
        </div>
    )
}