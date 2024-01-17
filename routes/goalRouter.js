const express = require("express");
const router = express.Router();
const {
  getAllGoals,
  getAGoal,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// router.get('/api/goals', getAllGoals);
// router.post('/api/goals', createGoal)

router.route("/").get(getAllGoals).post(createGoal);

// router.get('/api/goals/:goalId', getAGoal);
// router.patch('/api/goals/:goalId',updateGoal);
// router.delete('/api/goals/:goalId', deleteGoal);

router
  .route("/:goalId")
  .get(getAGoal)
  .patch(updateGoal)
  .delete(deleteGoal);

module.exports = router;
