"use client"
import { useState, useEffect } from 'react';
import CategoriesSelect from "@/components/CategoriesSelect";
import PlayerCount from "@/components/PlayerCount";
import SpendSelect from "@/components/SpendSelect";
import axios from 'axios';
import {ImShuffle} from 'react-icons/im' 

export default function Home() {
  const [games, setGames] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    category: "",
    playerCount: 1,
    spend: 25,
  })


  const fetchOutput = async () => {
    setClicked(true);
    setCount(count + 1);
    if (games.length > 0) {
      console.log(count); 
      console.log(games[count].name);
    }
    

    try {
      const { data } = await axios.get(
        `https://api.boardgameatlas.com/api/search?categories=${formData.category}&min_players=${formData.playerCount}&lt_price=${formData.spend}&client_id=EsdgqvppMg`
      );
      if (data.games && data.games.length > 0) {
        console.log(data.games[count]);
        setGames(data.games)
      } else {
        console.log(formData)
        console.error('No games found');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    console.log(formData)
    }, [formData])

  return (
    <main >
      <div className="text-center mt-24 mb-16 text-4xl font-mono">looking for your next boardgame?</div>
      <div className="text-center font-mono px-10 mb-10">
        <span>I want to play a(n) </span>
        <CategoriesSelect 
  formData={formData.category}
  setFormData={setFormData}        />
        <span> game with at least </span>
        <PlayerCount
          formData={formData.playerCount}
          setFormData={setFormData}  
          />
        <span> other player(s). My budget is up to: </span>
        <SpendSelect
        formData={formData.spend}
        setFormData={setFormData}  
        />
        <span> USD</span>      
      </div>
        <div>
{      clicked? (
      <div className='flex flex-col'>
      <div className="text-center font-mono text-2xl mb-10">Here&apos;s what I found:</div>

      {games.length > 0 && count < games.length ?
      <div className="flex flex-col items-center m-4">
        <img src={games[count].image_url} alt={games[count].name} className="w-48 h-48" />
        <div className="text-center font-mono text-xl">{games[count].name}</div>
        <div className="text-center font-mono text-lg">{games[count].min_players} - {games[count].max_players} players</div>
        <div className="text-center font-mono text-lg">${games[count].price}</div>
        </div> : <div className="text-center font-mono text-xl">No more games found</div>}


      <button type="button"
      onClick={() => {fetchOutput()}}
      className="mx-auto px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-xl"> <ImShuffle className="inline pb-1"/> Find another game </button>
      </div>
) : (
  <div className='flex'>

      <button type="button"
        onClick={fetchOutput}
        className="mx-auto px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-xl">🎲 Find my game 🎰</button>
        </div>
      )}
      </div> 

    </main>
  )
}