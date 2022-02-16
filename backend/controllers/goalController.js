// @description Get goals
// @route       GET /api/goals
// @access      PRIVATE
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get goals' })
}

// @description Set goal
// @route       POST /api/goals
// @access      PRIVATE
const setGoal = (req, res) => {
    res.status(200).json({ message: 'Set goal' })
}

// @description UPDATE goal
// @route       PUT /api/goals/:id
// @access      PRIVATE
const updateGoal = (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
}

// @description Delete goal 
// @route       DELETE /api/goals/:ID
// @access      PRIVATE
const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
}
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}