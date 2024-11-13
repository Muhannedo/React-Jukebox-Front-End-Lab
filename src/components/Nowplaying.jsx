const NowPlaying = ({ currentTrack }) => {
  return (
    <>
      <h2>Now Playing:</h2>
      <h3>Title : {currentTrack.title}</h3>
      <h3>Artist : {currentTrack.artist}</h3>
    </>
  );
};

export default NowPlaying;
