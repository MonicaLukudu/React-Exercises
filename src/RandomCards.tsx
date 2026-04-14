import './App.css';
import { useState, useEffect } from 'react';

interface User{
    user: {
        name: { first: string; last: string; title: string; };
        location: { city: string; state: string; };
        email: string;
        picture: { large: string; };
        cell: string;
  };
}

function UserCard({ userData }: { userData: User }) {
  const info = userData.user;
  const [flip, setFlip] = useState<boolean>(false);

  return (
    <div className='flex justify-center items-center py-10 perspective-1000px'>
      
      <div 
        className={`relative w-80 h-96 transition-transform duration-500 transform-3d cursor-pointer ${flip ? "transform-[rotateY(180deg)]" : ""}`}
        onMouseEnter={function() { setFlip(true); }}
        onMouseLeave={function() {setFlip(false)}}
      >
        
         {/* FrontSide  */}
        <div className='frontSide'>
            <img src={info.picture.large} alt="users avatar" className='rounded-full w-24 h-24 mb-4' />
            <h3 className='text-xl font-bold'>{info.name.first} {info.name.last}</h3>
            <p className='text-gray-500'>{info.name.title}</p>
        </div>

        {/* BackSide */}
        <div className='backSide'>
            <h3 className='text-lg font-bold'>Contact Info</h3>
            <p>{info.email}</p>
            <p>{info.location.city}, {info.location.state}</p>
        </div>

      </div>
    </div>
  );
}

export default function FetchRandom(){
    const [users, setUsers]= useState<User[]>([])
    const fetchUsers = async()=>{
        try {
            const response = await fetch('https://randomuser.me/api/0.8/?results=10')
            const data = await response.json()
            setUsers(data.results)
            console.log(data)
        } catch (error) {
            console.error('Something went wrong here... ')
        }
    }
    useEffect(()=>{
        fetchUsers()
    },[])

    return(
        <div className='min-h-screen bg-slate-50 flex justify-center items-center flex-col p-10'>
            <button
            className='bg-red-500 text-white px-4 py-2 rounded-md mb-4 gap-2 font-bold'
            onClick={fetchUsers}
            >
                Fetch User
            </button>

            <div className='bg-blue-50'>
                <div className='grid grid-cols-3 gap-4 m-8'>
                    {users.map((user, i) => (
                        <UserCard key={i} userData={user}/>
                    ))}
                </div>
            </div>
        </div>
    )
}