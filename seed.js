import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Topic from './models/Topic.js';

dotenv.config();

export const dummyTopics = [
    {
      title: 'Arrays',
      problems: [
        {
          title: 'Two Sum',
          youtubeLink: 'https://youtu.be/KLlXCFG5TnA',
          leetcodeLink: 'https://leetcode.com/problems/two-sum/',
          articleLink: 'https://www.geeksforgeeks.org/two-sum-problem/',
          level: 'EASY'
        },
        {
          title: 'Maximum Subarray',
          youtubeLink: 'https://youtu.be/2MmGzdiKR9Y',
          leetcodeLink: 'https://leetcode.com/problems/maximum-subarray/',
          articleLink: 'https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/',
          level: 'MEDIUM'
        },
        {
            title: 'Maximum Subarray 2',
            youtubeLink: 'https://youtu.be/2MmGzdiKR9Y',
            leetcodeLink: 'https://leetcode.com/problems/maximum-subarray/',
            articleLink: 'https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/',
            level: 'MEDIUM'
          },
          {
            title: 'Maximum Subarray 3',
            youtubeLink: 'https://youtu.be/2MmGzdiKR9Y',
            leetcodeLink: 'https://leetcode.com/problems/maximum-subarray/',
            articleLink: 'https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/',
            level: 'MEDIUM'
          }
      ]
    },
    {
      title: 'Linked Lists',
      problems: [
        {
          title: 'Reverse Linked List',
          youtubeLink: 'https://youtu.be/O0By4Zq0OFc',
          leetcodeLink: 'https://leetcode.com/problems/reverse-linked-list/',
          articleLink: 'https://www.geeksforgeeks.org/reverse-a-linked-list/',
          level: 'EASY'
        },
        {
          title: 'Detect Cycle',
          youtubeLink: 'https://youtu.be/zdNnbiLrZAk',
          leetcodeLink: 'https://leetcode.com/problems/linked-list-cycle/',
          articleLink: 'https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/',
          level: 'MEDIUM'
        }
      ]
    },
    {
      title: 'Stacks',
      problems: [
        {
          title: 'Valid Parentheses',
          youtubeLink: 'https://youtu.be/wkDfsKijrZ8',
          leetcodeLink: 'https://leetcode.com/problems/valid-parentheses/',
          articleLink: 'https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/',
          level: 'EASY'
        }
      ]
    },
    {
      title: 'Queues',
      problems: [
        {
          title: 'Implement Queue using Stacks',
          youtubeLink: 'https://youtu.be/WgQkZkkAEck',
          leetcodeLink: 'https://leetcode.com/problems/implement-queue-using-stacks/',
          articleLink: 'https://www.geeksforgeeks.org/queue-using-stacks/',
          level: 'MEDIUM'
        }
      ]
    },
    {
      title: 'Trees',
      problems: [
        {
          title: 'Binary Tree Inorder Traversal',
          youtubeLink: 'https://youtu.be/zM4VZR0px8E',
          leetcodeLink: 'https://leetcode.com/problems/binary-tree-inorder-traversal/',
          articleLink: 'https://www.geeksforgeeks.org/inorder-tree-traversal/',
          level: 'EASY'
        }
      ]
    },
    {
      title: 'Binary Search Trees',
      problems: [
        {
          title: 'Validate BST',
          youtubeLink: 'https://youtu.be/s6ATEkipzow',
          leetcodeLink: 'https://leetcode.com/problems/validate-binary-search-tree/',
          articleLink: 'https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/',
          level: 'MEDIUM'
        }
      ]
    },
    {
      title: 'Graphs',
      problems: [
        {
          title: 'DFS Traversal',
          youtubeLink: 'https://youtu.be/pcKY4hjDrxk',
          leetcodeLink: 'https://leetcode.com/problems/number-of-islands/',
          articleLink: 'https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/',
          level: 'MEDIUM'
        }
      ]
    },
    {
      title: 'Recursion',
      problems: [
        {
          title: 'Factorial of a number',
          youtubeLink: 'https://youtu.be/kMrbSGOC4hE',
          leetcodeLink: '',
          articleLink: 'https://www.geeksforgeeks.org/program-for-factorial-of-a-number/',
          level: 'EASY'
        }
      ]
    },
    {
      title: 'Dynamic Programming',
      problems: [
        {
          title: '0/1 Knapsack',
          youtubeLink: 'https://youtu.be/8LusJS5-AGo',
          leetcodeLink: 'https://leetcode.com/problems/partition-equal-subset-sum/',
          articleLink: 'https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/',
          level: 'MEDIUM'
        },
        {
          title: 'Longest Increasing Subsequence',
          youtubeLink: 'https://youtu.be/6ZhNA_jL0l4',
          leetcodeLink: 'https://leetcode.com/problems/longest-increasing-subsequence/',
          articleLink: 'https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/',
          level: 'MEDIUM'
        }
      ]
    },
    {
      title: 'Greedy',
      problems: [
        {
          title: 'Activity Selection',
          youtubeLink: 'https://youtu.be/ARujYRxv6jM',
          leetcodeLink: '',
          articleLink: 'https://www.geeksforgeeks.org/greedy-algorithm-to-find-maximum-number-of-meeting-in-a-room/',
          level: 'EASY'
        }
      ]
    },
    {
      title: 'Backtracking',
      problems: [
        {
          title: 'N-Queens Problem',
          youtubeLink: 'https://youtu.be/xFv_Hl4B83A',
          leetcodeLink: 'https://leetcode.com/problems/n-queens/',
          articleLink: 'https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/',
          level: 'HARD'
        }
      ]
    },
    {
      title: 'Heaps',
      problems: [
        {
          title: 'Kth Largest Element',
          youtubeLink: 'https://youtu.be/XEmy13g1Qxc',
          leetcodeLink: 'https://leetcode.com/problems/kth-largest-element-in-an-array/',
          articleLink: 'https://www.geeksforgeeks.org/kth-largest-element-in-an-array/',
          level: 'MEDIUM'
        }
      ]
    },
    {
      title: 'Tries',
      problems: [
        {
          title: 'Implement Trie',
          youtubeLink: 'https://youtu.be/oobqoCJlHA0',
          leetcodeLink: 'https://leetcode.com/problems/implement-trie-prefix-tree/',
          articleLink: 'https://www.geeksforgeeks.org/trie-insert-and-search/',
          level: 'MEDIUM'
        }
      ]
    },
    {
      title: 'Sliding Window',
      problems: [
        {
          title: 'Maximum Sum Subarray of Size K',
          youtubeLink: 'https://youtu.be/1EULkWZ08vI',
          leetcodeLink: '',
          articleLink: 'https://www.geeksforgeeks.org/window-sliding-technique/',
          level: 'EASY'
        }
      ]
    },
    {
      title: 'Binary Search',
      problems: [
        {
          title: 'Search in Rotated Sorted Array',
          youtubeLink: 'https://youtu.be/U8XENwh8Oy8',
          leetcodeLink: 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
          articleLink: 'https://www.geeksforgeeks.org/search-in-rotated-sorted-array/',
          level: 'MEDIUM'
        }
      ]
    },
    {
      title: 'Bit Manipulation',
      problems: [
        {
          title: 'Single Number',
          youtubeLink: 'https://youtu.be/qMPX1AOa83k',
          leetcodeLink: 'https://leetcode.com/problems/single-number/',
          articleLink: 'https://www.geeksforgeeks.org/find-the-element-that-appears-once/',
          level: 'EASY'
        }
      ]
    },
    {
      title: 'Topological Sort',
      problems: [
        {
          title: 'Course Schedule',
          youtubeLink: 'https://youtu.be/EgI5nU9etnU',
          leetcodeLink: 'https://leetcode.com/problems/course-schedule/',
          articleLink: 'https://www.geeksforgeeks.org/topological-sorting/',
          level: 'MEDIUM'
        }
      ]
    },
    {
      title: 'Graphs - Shortest Path',
      problems: [
        {
          title: 'Dijkstra’s Algorithm',
          youtubeLink: 'https://youtu.be/GazC3A4OQTE',
          leetcodeLink: '',
          articleLink: 'https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/',
          level: 'MEDIUM'
        }
      ]
    },
    {
      title: 'Graphs - MST',
      problems: [
        {
          title: 'Prim’s Algorithm',
          youtubeLink: 'https://youtu.be/M3_pLsDdeuU',
          leetcodeLink: '',
          articleLink: 'https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/',
          level: 'HARD'
        }
      ]
    }
  ];
  
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Topic.deleteMany({});
    await Topic.insertMany(dummyTopics);
    console.log('🌱 Dummy topics inserted');
    process.exit();
  })
  .catch(err => {
    console.error('❌ Error inserting data:', err);
    process.exit(1);
  });
