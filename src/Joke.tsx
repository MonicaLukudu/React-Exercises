import './App.css'
type Jokes = {
    id: number;
    setup: string;
    punchline: string;
}

const jokes: Jokes[] = [
	{
		id: 1,
		setup: "What's the best thing about a Boolean?",
		punchline: "Even if you're wrong, you're only off by a bit"
	},
	{
		id: 2,
		setup: "Why do programmers wear glasses?",
		punchline: "Because they need to C#"
	}
]

const JokeCard = ({setup, punchline}: {setup:string, punchline:string}) => {
    return (
        <div className='rounded-xl bg-white p-6 shadow-md border border-gray-100'>
            <h1 className='mb-3 text-xl font-bold text-gray-900'>{setup}</h1>
            <p className='text-gray-600'>{punchline}</p>
        </div>
    )
}

export default function JokeCards(){
    return(
        <div className='bg-green-50 p-10'>
            <div className='flex gap-6'>
                {jokes.map(joke =>(
                    <JokeCard
                        key={joke.id}
                        setup={joke.setup}
                        punchline={joke.punchline}
                    />
                ))}
            </div>
        </div>
    )
}