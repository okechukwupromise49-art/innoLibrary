const express = require("express");
const router = express.Router();

const Book = require("../models/book");
const upload = require("../middleware/upload");
const { supabase } = require("../supaBase/supabaseClient.js")


router.post("/upload", upload.fields([
  { name: "book", maxCount: 1 },
  { name: "cover", maxCount: 1 },
]), async (req, res) => {
  try {

    const { title, author, category, description } = req.body;

    if (!req.files || !req.files.book || !req.files.cover) {
      return res.status(400).json({
        success: false,
        message: "Book and cover required",
      });
    }

    const bookFile = req.files.book[0];
    const coverFile = req.files.cover[0];

    // ---------- UPLOAD BOOK ----------
    const bookName = `${Date.now()}-${bookFile.originalname}`;

    const { error: bookError } = await supabase.storage
      .from("books")
      .upload(bookName, bookFile.buffer, {
        contentType: bookFile.mimetype,
      });

    if (bookError) throw bookError;

    const { data: bookUrlData } = supabase.storage
      .from("book")
      .getPublicUrl(bookName);

    // ---------- UPLOAD COVER ----------
    const coverName = `${Date.now()}-${coverFile.originalname}`;

    const { error: coverError } = await supabase.storage
      .from("book")
      .upload(coverName, coverFile.buffer, {
        contentType: coverFile.mimetype,
      });

    if (coverError) throw coverError;

    const { data: coverUrlData } = supabase.storage
      .from("book")
      .getPublicUrl(coverName);

    // ---------- SAVE TO DB ----------
    const newBook = new Book({
      title,
      author,
      category,
      description,
      bookUrl: bookUrlData.publicUrl,
      coverUrl: coverUrlData.publicUrl,
    });

    await newBook.save();

    return res.status(200).json({
      success: true,
      message: "Book uploaded successfully",
      data: newBook,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


router.get("/details", async (req, res) => {
  try {
    const { category, search } = req.query;

    let filter = {};

    // 📚 Category filter
    if (category) {
      filter.category = new RegExp(`^${category}$`, "i");
    }

    // 🔍 Search by title or author
    if (search) {
      filter.$or = [
        { title: new RegExp(search, "i") },
        { author: new RegExp(search, "i") },
      ];
    }

    const books = await Book.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: books.length,
      data: books,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/health", (req,res) => {
  res.status(200).send({message : "working fine 👍👍👍👍"})
})

router.delete("/delete/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
/*router.patch("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      req.body,
      { new: true } // return updated document
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({
      message: "Book updated successfully",
      data: updatedBook,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});*/



module.exports = router;