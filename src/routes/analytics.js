const express = require('express');
const router = express.Router();

router.get('/dashboard', async (req, res) => {
    try {
        const data = {
            totalUsers: 15420,
            activeToday: 3201,
            revenue: {
                monthly: 125000,
                yearly: 1500000
            },
            topProducts: [
                { name: 'Enterprise Plan', sales: 450 },
                { name: 'Pro Plan', sales: 1200 },
                { name: 'Starter Plan', sales: 3800 }
            ]
        };
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch analytics' });
    }
});

router.get('/users', async (req, res) => {
    // TODO: Implement user analytics
    res.json({ message: 'Coming soon' });
});

module.exports = router;
