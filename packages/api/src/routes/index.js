import express from 'express';
import { getAllIdeas, findIdeaById, createIdea } from '../db/models/ideas';

const router = express.Router();

// List all the created ideas
router.get('/', async (req, res) => {
  const ideas = await getAllIdeas();
  res.json({ ideas });
});

// Create an idea
router.post('/create', async (req, res) => {
  const { content, category } = req.body;

  if (!content || !category) {
    return res.status(400).json({
      error: {
        code: 'BAD_INPUT',
        message: 'Content and Category are required'
      }
    });
  }

  const ideaId = await createIdea({ content, category });
  const idea = await findIdeaById(ideaId);

  res.json({ idea });
});

export default router;
