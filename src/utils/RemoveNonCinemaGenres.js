const RemoveUnwantedGenres = (genres) => {
  if (!Array.isArray(genres)) {
    console.error('Genres is not an array:', genres);
    return [];
  }

  return genres.filter(
      (genre) =>
          genre.name !== 'Documentary' &&
          genre.name !== 'TV Movie' &&
          genre.name !== 'Western',
  );
};

export default RemoveUnwantedGenres;
