async function FetchGenres(ACCESS_TOKEN) {
    try {
        const response = await fetch(
            'https://api.themoviedb.org/3/genre/movie/list?language=en',
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer ' + ACCESS_TOKEN,
                },
            },
        );

        if (!response.ok) {
            console.error('Failed to fetch genres:', response.statusText);
            return []; // returneaza un array gol daca raspunsul nu este ok
        }

        const data = await response.json();
        console.log('Fetched genres data:', data); // Debugging
        return data.genres || []; // returneaza un array gol dacă `genres` nu exista
    } catch (error) {
        console.error('Error fetching genres:', error);
        return []; // returnează un array gol dacă apare o eroare
    }
}

export default FetchGenres;
