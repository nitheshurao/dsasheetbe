import Topic from '../models/Topic.js';


/**
 * @desc   Get all DSA topics and problems
 * @route  GET /api/dsa/topics
 * @access Public (or make Private if needed)
 */
export async function getAllTopics(req, res) {
  try {
    const topics = await Topic.find();
    res.status(200).json(topics);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch topics', error: err.message });
  }
}

/**
 * @desc   Get progress for logged-in user
 * @route  GET /api/dsa/progress
 * @access Private
 */
export async function getUserProgress(req, res) {
  try {
    const progress = req.user.progress || {};
    console.log("------res",req.user);
    
    res.status(200).json(progress);
  } catch (err) {
    res.status(500).json({ message: 'Could not retrieve progress', error: err.message });
  }
}

/**
 * @desc   Update progress (checkbox toggle)
 * @route  POST /api/dsa/update-progress
 * @access Private
 * @body   { topicId, problemId, status }
 */
export async function updateUserProgress(req, res) {
  const { topicId, problemId, status } = req.body;
  try {
    if (!topicId || !problemId) {
      return res.status(400).json({ message: 'Missing topicId or problemId' });
    }

    req.user.progress.set(String(problemId), status);
    await req.user.save();

    res.status(200).json({ message: 'Progress updated', progress: req.user.progress });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update progress', error: err.message });
  }
}



export async function getProgressReport(req, res) {
  try {
    const userProgress = req.user.progress || {};
    const progressKeys = Object.keys(userProgress);

    const topics = await Topic.find();

    const counts = {
      EASY: { done: 0, total: 0 },
      MEDIUM: { done: 0, total: 0 },
      HARD: { done: 0, total: 0 }
    };

    topics.forEach(topic => {
      topic.problems.forEach(problem => {
        const problemId = problem._id.toString();
        const level = problem.level;

        if (!counts[level]) return;

        counts[level].total++;

        if (userProgress.get ? userProgress.get(problemId) : userProgress[problemId]) {
          counts[level].done++;
        }
      });
    });

    const result = {};
    for (const level in counts) {
      const { done, total } = counts[level];
      result[level] = total === 0 ? 0 : Math.round((done / total) * 100);
    }

    return res.json(result);
  } catch (err) {
    console.error('❌ Error in getProgressReport:', err);
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
}


/**
 * @desc   Create DSA topics and problems
 * @route  POST /api/dsa/createTopic
 * @access Public (or make Private if needed)
 */
export async function updateProblem(req, res) {
  console.log('Incoming PUT topicId:', req.params.topicId);

  const { topicId } = req.params;
  const { problemId, updatedData } = req.body;

  if (!problemId || !updatedData) {
    return res.status(400).json({ message: 'Missing problemId or update data.' });
  }

  try {
    const topic = await Topic.findById(topicId);
    if (!topic) return res.status(404).json({ message: 'Topic not found' });

    const problem = topic.problems.id(problemId);
    if (!problem) return res.status(404).json({ message: 'Problem not found' });

    Object.assign(problem, updatedData); // apply changes
    await topic.save();

    res.status(200).json({ message: 'Problem updated', topic });
  } catch (err) {
    console.error('Error updating problem:', err);
    res.status(500).json({ message: 'Failed to update problem', error: err.message });
  }
}

/**
 * @desc   Create DSA topics and problems
 * @route  POST /api/dsa/createTopic
 * @access Public (or make Private if needed)
 */
export async function createTopic(req, res) {
  try {
    const { title, problems } = req.body;

    if (!title || !Array.isArray(problems)) {
      return res.status(400).json({ message: 'Invalid input: title and problems required' });
    }

    const existingTopic = await Topic.findOne({ title });

    if (existingTopic) {
      const existingTitles = new Set(existingTopic.problems.map(p => p.title.trim().toLowerCase()));
      const newProblems = problems.filter(
        p => !existingTitles.has(p.title.trim().toLowerCase())
      );

      if (newProblems.length === 0) {
        return res.status(200).json({
          message: 'All submitted problems already exist in this topic.',
          topic: existingTopic
        });
      }

      existingTopic.problems.push(...newProblems);
      await existingTopic.save();

      return res.status(200).json({
        message: `Added ${newProblems.length} new problem(s) to existing topic.`,
        topic: existingTopic
      });
    }

    const newTopic = await Topic.create({ title, problems });
    return res.status(201).json({ message: 'New topic created', topic: newTopic });

  } catch (err) {
    console.error('❌ Error in createTopic:', err);
    return res.status(500).json({ message: 'Failed to create/update topic', error: err.message });
  }
}



// delete

export async function deleteProblem(req, res) {
  const { topicId, problemId } = req.params;

  try {
    const topic = await Topic.findById(topicId);
    if (!topic) {
      return res.status(404).json({ message: 'Topic not found' });
    }

    const index = topic.problems.findIndex(p => p._id.toString() === problemId);
    if (index === -1) {
      return res.status(404).json({ message: 'Problem not found in topic' });
    }

    topic.problems.splice(index, 1);
    await topic.save();

    res.status(200).json({ message: 'Problem deleted', topic });
  } catch (err) {
    console.error('Error deleting problem:', err);
    res.status(500).json({ message: 'Failed to delete problem', error: err.message });
  }
}

