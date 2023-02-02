"use client"
import { useState, useEffect } from 'react';
import CategoriesSelect from "@/components/CategoriesSelect";
import PlayerCount from "@/components/PlayerCount";
import SpendSelect from "@/components/SpendSelect";
import axios from 'axios';

export default function Home() {

  const[formData, setFormData] = useState({
    category: "",
    playerCount: 1,
    spend: 25,
  })


  const fetchOutput = async () => {
    console.log(formData)
    try {
      const { data } = await axios.get(
        `https://api.boardgameatlas.com/api/search?categories=${formData.category}&min_players=${formData.playerCount}&lt_price=${formData.spend}&client_id=EsdgqvppMg`
      );
      if (data.games && data.games.length > 0) {
        console.log(data.games[0]);
      } else {
        console.error('No games found');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  // useEffect(() => {
  //   console.log(formData)
  //   }, [formData])

  return (
    <main >
      <div className="text-center mt-24 mb-16 text-4xl font-mono">looking for your next boardgame?</div>
      <div className="text-center font-mono px-10 mb-4">
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
      <div className="flex">
      <button type="button"
      onClick={fetchOutput}
      className="mx-auto px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-xl">🎲 Find my game 🎰</button>
      </div>
    </main>
  )
}
