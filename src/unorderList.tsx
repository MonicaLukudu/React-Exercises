import './App.css'

export default function List(){
    const items = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
    return (
        <ul>
            {items.map(item =>(
                <li>
                    {item}
                </li>
            ))}
        </ul>
    )
}