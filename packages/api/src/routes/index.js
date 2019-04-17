import express from 'express';
import uuid from 'uuid/v4';
import {
  getAllIdeas,
  findIdeaById,
  createIdea,
  deleteIdea,
} from '../db/models/ideas';

const router = express.Router();

// Generate an ID for the user if it doesn't have one
router.use('/', (req, res, next) => {
  if (!req.session.userId) {
    req.session.userId = uuid();
  }
  next();
});

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
        message: 'Content and Category are required',
      },
    });
  }

  const { userId } = req.session;
  const ideaId = await createIdea({ content, category, createdBy: userId });

  if (!ideaId) {
    return res.status(500).json({
      error: {
        code: 'INTERNAL SERVER ERROR',
        message: 'Some unknown error happened',
      },
    });
  }

  const idea = await findIdeaById(ideaId);
  res.json({ idea });
});

// Delete an idea
router.post('/delete', async (req, res) => {
  const { id } = req.body;
  const { userId } = req.session;

  if (!userId) {
    return res.status(401).json({
      error: {
        code: 'UNAUTHORIZED',
        message: 'No user found',
      },
    });
  }

  const actionRes = await deleteIdea({ id, userId });

  if (actionRes.success) {
    return res.json({ success: true });
  }

  if (actionRes.error) {
    if (actionRes.error === 'FORBIDDEN') {
      return res.status(403).json({
        error: {
          code: 'FORBIDDEN',
          message: 'You are not allowed to do that',
        },
      });
    }

    return res.status(500).json({
      error: {
        code: 'INTERNAL SERVER ERROR',
        message: 'Some unknown error happened',
      },
    });
  }
});

export default router;
