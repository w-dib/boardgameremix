export default async function Home() {

  const fetchData = async () => {
    if (searchResult) {
      const data = await fetch(
        `https://api.boardgameatlas.com/api/search?name=${searchResult}&client_id=EsdgqvppMg`
      );
      const res = await data.json();
      setRes(res);
    }
  };
  

  return (
    <main >
      Boardgame
    </main>
  )
}
