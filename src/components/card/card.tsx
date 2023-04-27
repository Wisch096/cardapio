import "./card.css";

interface CardProps {
    preco: number,
    nome: string,
    image: string
}

export function Card(props: CardProps) {
    return (
        <div className="card">
            <img src="" alt="" />
            <h2></h2>
            <p><b>Valor:</b></p>
        </div>
    )
}