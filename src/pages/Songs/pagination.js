import { useSelector } from 'react-redux';

export const Pagination = () => {
  const { totalPages } = useSelector((store) => {
    return {
      totalPages: store.songs.pagination.totalPages,
    };
  });
  return (
    <div>
      <h3>Pagination: {totalPages}</h3>
      <ul>
        {new Array(totalPages).fill(1).map((page, index) => {
          return (
            <li>
              <a href={`http://localhost:3000/songs?page=${index + 1}`}>
                {index + 1}{' '}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
