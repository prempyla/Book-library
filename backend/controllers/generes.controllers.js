const prisma = require("../prisma/client");

const getAllGenres = async (req, res) => {
  let warning = false;
  let genres = [];

  try {
    genres = await prisma.genres.findMany({
      include: {
        books: true
      }
    });
  } catch (err) {
    return res.status(500).json({
      genres: [],
      warning: true,
      message: "Server error: unable to load all genres"
    });
  }

  const formattedGenres = genres.map((genre) => {
    let books = [];
    try {
      books = genre.books.map((b) => b.title);
    } catch (err) {
      warning = true;
      books = [];
    }

    return {
      genre: genre.name,
      books
    };
  });

  return res.status(200).json({
    genres: formattedGenres,
    warning
  });
};

module.exports = getAllGenres;
