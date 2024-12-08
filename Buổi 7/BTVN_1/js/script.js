// Lấy danh sách các phim từ API
fetch('https://www.omdbapi.com/?s=movie&apikey=7035c60c')
    .then(response => response.json())
    .then(data => {
        const movieList = document.getElementById('movie-list');
        data.Search.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <img src="${movie.Poster}" alt="${movie.Title}">
                <h2>${movie.Title}</h2>
                <p>${movie.Year}</p>
            `;
            movieElement.addEventListener('click', () => {
                // Chuyển page đến trang chi tiết phim
                window.location.href = `../html/detail.html?id=${movie.imdbID}`;
            });
            movieList.appendChild(movieElement);
        });
    })
    .catch(error => console.error(error));

// Lấy thông tin chi tiết phim từ API
if (window.location.pathname.includes('detail.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=7035c60c`)
        .then(response => response.json())
        .then(data => {
            const movieDetail = document.getElementById('movie-detail');
            movieDetail.innerHTML = `
                <div class="movie-info">
                    <div class="movie-image">
                        <img src="${data.Poster}" alt="${data.Title}">
                    </div>
                    <div class="movie-description">
                        <h2>${data.Title}</h2>
                        <p>Đạo diễn: ${data.Director}</p>
                        <p>Diễn viên: ${data.Actors}</p>
                        <p>Năm phát hành: ${data.Year}</p>
                        <p>Đánh giá: ${data.Rated}</p>
                        <p>Tóm tắt: ${data.Plot}</p>
                    </div>
                </div>
            `;
        })
        .catch(error => console.error(error));
}
