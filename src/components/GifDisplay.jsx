const GifDisplay = ({ gif }) => {
  const imgStyles = {
    width: "300px",
  };

  const { data } = gif ? gif : {};
  return (
    !!gif && (
      <div>
        <img
          style={imgStyles}
          src={data.images.original.url}
          alt="A gif from giphy"
        />
      </div>
    )
  );
};

export default GifDisplay;
