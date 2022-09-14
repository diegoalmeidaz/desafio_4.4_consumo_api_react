import Form from "react-bootstrap/Form";



const Search = ({ setSearch }) => {
  const searchValue = (search) => {
    setSearch(search);
  };

  return (
    <div className="p-10 mb-2 mt-5 mb-5 justify-content-center">
        <h1 className="justify-content-center">Filtra por Personaje, Especie, Ubicación o si Vive o No!</h1>

    

    <Form.Control
      size="text"
      className="mt-4"
      
      placeholder="Busca Aquí"
      onChange={(e) => searchValue(e.target.value)}
    
    />
    </div>
  );
};

export default Search;