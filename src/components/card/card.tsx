import "./card.css";

interface CardProps {
    preco: number,
    nome: string,
    image: string
}

export function Card({preco, nome, image } : CardProps) {
    return (
        <div className="card">
            <img src={image}/>
            <h2>{nome}</h2>
            <p><b>Valor:</b>{preco}</p>
        </div>
    )
}