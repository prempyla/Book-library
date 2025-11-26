const prisma = require("../prisma");

const getAllBooks = async (req, res) => {
  let warning = false;
  let books = [];

  try {
    books = await prisma.book.findMany({
      include: {
        authors: true
      }
    });
  } catch (err) {
    return res.status(500).json({
      books: [],
      warning: true,
      message: "Server error: unable to load all books"
    });
  }


  const formattedBooks = book.map(book => {
    let authors = [];
    try {
      authors = book.authors.map(a => `${a.firstName} ${a.familyName}`.trim());
    } catch (err) {
      warning = true;
      authors = [];
    }

    return {
      title: book.title,
      authors
    };
  });

  return res.status(200).json({
    books: formattedBooks,
    warning
  });
};

module.exports={getAllBooks}
