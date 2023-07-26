const express = require("express");
const {
  createReview,
  fetchReviews,
  fetchReviewBasedOnSth,
  deleteReviews,
  commentOnReview,
} = require("../controllers/reviewController");
const router = express.Router();

router.post("/", createReview); //create review
router.get("/", fetchReviews); // get all reviews
router.post("/category", fetchReviewBasedOnSth); // get all reviews
router.delete("/:id", deleteReviews); // delete a review
router.post("/comment/:id", commentOnReview); // comment a review

module.exports = router;
