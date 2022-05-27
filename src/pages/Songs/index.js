import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAllSongs } from '../../services/songs';
import { Pagination } from './pagination';
import { useSelector, useDispatch } from 'react-redux';
import { setReduxSongs } from '../../store/slices/songsSlice';

export const Songs = () => {
  const dispatch = useDispatch();
  const { paginatedSongs, isLoading } = useSelector((store) => {
    return {
      paginatedSongs: store.songs.pagination.list,
      isLoading: store.songs.isLoading,
    };
  });
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get('page') || 1;
  useEffect(() => {
    if (isLoading) {
      getAllSongs().then((data) => {
        dispatch(setReduxSongs({ list: data, page: page }));
      });
    }
  }, [isLoading]);

  return (
    <div>
      <h1>Songs:</h1>
      <ul>
        {paginatedSongs.map((song) => {
          return (
            <li>
              <Link to={`/songs/${song.id}`}>{song.attributes.title}</Link>
            </li>
          );
        })}
      </ul>

      <Pagination />
    </div>
  );
};
