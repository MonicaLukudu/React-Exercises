

export default function Btn(){
    function handleClick(buttonName:string){
        alert(`You clicked ${buttonName}`)
    }
    const buttons = ['Button 1', 'Button 2', 'Button 3']
    return(
        <>
            <div>
                {buttons.map(lable => (
                    <button
                    className='btn'
                    key={lable}
                    onClick={() => handleClick(lable)}>{lable}</button>
                ))}
            </div>
        </>
    )
}