const TrackList = ({
  tracks,
  handleEditTrack,
  handleDeleteTrack,
  handlePlayTrack,
}) => {
  return (
    <>
      <h2>TrackList</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track._id}>
            <div>
              {track.title} by {track.artist}
            </div>
            <div>
              <button onClick={() => handlePlayTrack(track)}>Play </button>
              <button onClick={() => handleEditTrack(track)}>Edit </button>
              <button onClick={() => handleDeleteTrack(track._id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TrackList;
