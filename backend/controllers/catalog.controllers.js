const prisma = require("../prisma");

const homepagecatalog = async (req, res) => {
  let warning = false;
  let booksCount = null;
  let authorsCount = null;
  let genresCount = null;

  try {
    booksCount = await prisma.book.count();
  } catch (err) {
    warning = true;
  }

  try {
    authorsCount = await prisma.author.count();
  } catch (err) {
    warning = true;
  }

  try {
    genresCount = await prisma.genre.count();
  } catch (err) {
    warning = true;
  }

  return res.status(200).json({
    booksCount,
    authorsCount,
    genresCount,
    warning,
  });
};

module.exports = homepagecatalog;
