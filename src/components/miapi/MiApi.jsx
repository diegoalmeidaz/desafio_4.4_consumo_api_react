import { useEffect, useState } from "react";
import Card from "../card/Card";
import Search from "../search/Search";
import Pagination from "../pagination/Pagination";

function MiApi() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState({});

  const urlInicial = "https://rickandmortyapi.com/api/character";

  const getCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const dataOrdenada = data.results.sort((a, b) => {
          const textA = a.name.toUpperCase();
          const textB = b.name.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
        setCharacters(dataOrdenada);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    getCharacters(info.prev)
  };

  const onNext = () => {
    getCharacters(info.next)
  };

  useEffect(() => {
    getCharacters(urlInicial);
  }, []);

  return (
    <div className="Container p-5">
      <Search setSearch={setSearch} />

      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>

      <Card characters={characters} search={search} />

      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
    </div>
  );
}

export default MiApi;
