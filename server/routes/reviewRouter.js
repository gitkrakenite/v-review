const express = require("express");
const {
  createReview,
  fetchReviews,
  fetchReviewBasedOnSth,
  deleteReviews,
  commentOnReview,
  fetchSpecificPost,
} = require("../controllers/reviewController");
const router = express.Router();

router.post("/", createReview); //create review
router.get("/", fetchReviews); // get all reviews
router.post("/category", fetchReviewBasedOnSth); // get all reviews
router.delete("/:id", deleteReviews); // delete a review
router.post("/comment/:id", commentOnReview); // comment a review
router.get("/:id", fetchSpecificPost); // specific review

module.exports = router;
