const prisma = require('../prisma');

const getAllAuthors = async (req, res) => {
  let warning = false;
  let authors = [];

  try {
    authors = await prisma.author.findMany();
  } catch (err) {
    return res.status(500).json({
      authors: [],
      warning: true,
      message: "Server error: unable to load authors"
    });
  }

  const formattedAuthors = authors.map(author => {
    let name = "";
    let dateOfBirth = author.dateOfBirth;
    let dateOfDeath = author.dateOfDeath;

    try {
      name = `${author.familyName}, ${author.firstName}`.trim();
    } catch (err) {
      warning = true;
      name = "";
    }

    return {
      name,
      dateOfBirth,
      dateOfDeath,
      url
    };
  });

  return res.status(200).json({
    authors: formattedAuthors,
    warning
  });
};

module.exports = getAllAuthors;
