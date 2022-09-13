import Form from "react-bootstrap/Form";

const Search = ({ setSearch }) => {
  const searchValue = (search) => {
    setSearch(search);
  };

  return (
    <div className="p-10 mb-2">
        <h1>Busca un Personaje</h1>
    <Form.Control
      size="text"
      className="mt-4"
      
      placeholder="Ingresa Colaborador a Buscar"
      onChange={(e) => searchValue(e.target.value)}
    
    />
    </div>
  );
};

export default Search;