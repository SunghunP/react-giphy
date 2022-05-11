const Form = (props) => {
  const handleSubmit = (event) => {
    // prevent refresh
    event.preventDefault();
    // pass searchTerm to get Movie
    props.getGif();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">New Gif</button>
      </form>
    </>
  );
};

export default Form;
