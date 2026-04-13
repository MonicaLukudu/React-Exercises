import './App.css'

export default function Animals({items}: {items: string[]}){
    return (
    <div>

        {items.map((animal) =>(
            <div key={animal}>
                <span>
                    {animal === 'dog' && '🐶'}
                    {animal === 'cat' && '🐱'}
                    {animal === 'chicken' && '🐔'}
                    {animal === 'cow' && '🐮'}
                    {animal === 'sheep' && '🐑'}
                    {animal === 'horse' && '🐴'}
                </span>
                <span>{animal}</span>
            </div>
        ))}
    </div>
    )
}