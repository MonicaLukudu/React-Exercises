import './App.css'
import Btn from './threeBtn'
import Counter from './count'
import List from './unorderList'
import Animals from './List2'
import Forms from './form'
import JokeCards from './Joke'

export default function Text(){
    const MyAnimals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
    
    return(
        <>
        <div className="container">
            <div className='p-80 bg-yellow-300'>
                <h1>Hello World!</h1>
            </div>

        </div>
        <button className='btn' onClick={() => alert('Clicked!')}>Click Me</button>
        <Btn/>
        <Counter/>
        <List/>
        <Animals items={MyAnimals}/>
        <Forms/>
        <JokeCards/>
        </>
    )
}