const Book = require("../models/book");

exports.getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    return res.json({ length: allBooks.length, ...allBooks });
  } catch (err) {
    return res.status(400).json({ err });
  }
};

exports.createBook = async (req, res) => {
  try {
    const { body } = await req;
    console.log({ ...body });
    const { title, author, description } = body;
    const book = new Book({
      title,
      author,
      description,
    });
    book.save((error, book) => {
      if (error) {
        return res.status(400).json({ error });
      }
      return res.json({ book });
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

exports.getSingleBook = async (req, res) => {
  try {
    const {_id} = await req.params;
    // console.log({ _id });
    const book = await Book.findOne({_id});
    return res.status(200).json({ book });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const {
      params: { _id },
      body,
    } = await req;
    // console.log({ _id });
    const { title, author, description } = body;
    const updatedBook = await Book.findByIdAndUpdate(_id, {
      title,
      author,
      description,
    },{new:true});
    return res.status(200).json({ updatedBook });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { _id } = await req.params;
    // console.log({_id});
    const deletedBook = await Book.findByIdAndDelete(_id);
    return res.status(200).json({ deletedBook });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
