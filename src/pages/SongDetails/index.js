import { useParams } from 'react-router-dom';
import { getSongById } from '../../services/songs';
import { useEffect, useState } from 'react';

export const SongDetails = () => {
  const [song, setSong] = useState({});
  const params = useParams();
  console.log('params => ', params);
  useEffect(() => {
    getSongById(params.id).then((data) => {
      setSong(data);
    });
  }, []);
  return (
    <div>
      <h1>Song Details Page</h1>
      <h1>{song.attributes?.title}</h1>
    </div>
  );
};
