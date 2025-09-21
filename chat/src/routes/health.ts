import { Router } from 'express';

const router = Router();

// Health check endpoint for Render
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    service: 'Chat Service',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

export default router;