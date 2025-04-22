const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Sample data
let movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010 },
  { id: 2, title: "The Matrix", genre: "Action", year: 1999 }
];

let series = [
  { id: 1, title: "Breaking Bad", genre: "Drama", seasons: 5 },
  { id: 2, title: "Stranger Things", genre: "Sci-Fi", seasons: 4 }
];

let songs = [
  { id: 1, title: "Blinding Lights", artist: "The Weeknd", year: 2020 },
  { id: 2, title: "Shape of You", artist: "Ed Sheeran", year: 2017 }
];

// GET endpoints
app.get('/movies', (req, res) => res.json(movies));
app.get('/series', (req, res) => res.json(series));
app.get('/songs', (req, res) => res.json(songs));

// POST endpoints
app.post('/movies', (req, res) => {
  movies.push(req.body);
  res.json(movies);
});
app.post('/series', (req, res) => {
  series.push(req.body);
  res.json(series);
});
app.post('/songs', (req, res) => {
  songs.push(req.body);
  res.json(songs);
});

// PUT endpoints (update by id)
app.put('/movies/:id', (req, res) => {
  movies = movies.map(m => m.id == req.params.id ? { ...m, ...req.body } : m);
  res.json(movies);
});
app.put('/series/:id', (req, res) => {
  series = series.map(s => s.id == req.params.id ? { ...s, ...req.body } : s);
  res.json(series);
});
app.put('/songs/:id', (req, res) => {
  songs = songs.map(s => s.id == req.params.id ? { ...s, ...req.body } : s);
  res.json(songs);
});

// DELETE endpoints
app.delete('/movies/:id', (req, res) => {
  movies = movies.filter(m => m.id != req.params.id);
  res.json(movies);
});
app.delete('/series/:id', (req, res) => {
  series = series.filter(s => s.id != req.params.id);
  res.json(series);
});
app.delete('/songs/:id', (req, res) => {
  songs = songs.filter(s => s.id != req.params.id);
  res.json(songs);
});

// 404 error handler
app.use((req, res) => res.status(404).send("404: Route not found"));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));