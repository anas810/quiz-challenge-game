export type Difficulty = "easy" | "medium" | "hard";

export type QuizQuestion = {
  question: string;
  highlight?: string;
  options: string[];
  correctIndex: number;
  difficulty: Difficulty;
};

/**
 * Question pool (~24). Each page load draws 15 — 5 easy, 5 medium, 5 hard —
 * at random, so replays always mix in fresh questions while keeping the
 * easy-to-hard curve.
 */
export const QUESTION_POOL: QuizQuestion[] = [
  // ── Easy: game basics ────────────────────────────────────────────────
  {
    question: "What kind of game is Maze of Gains?",
    highlight: "Maze of Gains",
    options: ["A puzzle platformer", "A dungeon-crawl roguelike", "A farming sim", "A racing game"],
    correctIndex: 1,
    difficulty: "easy",
  },
  {
    question: "Who develops Maze of Gains?",
    options: ["Sky Mavis", "Onchain Heroes", "Yuga Labs", "Dapper Labs"],
    correctIndex: 1,
    difficulty: "easy",
  },
  {
    question: "Which blockchain does Maze of Gains run on?",
    options: ["Optimism", "Arbitrum", "Abstract", "Base"],
    correctIndex: 2,
    difficulty: "easy",
  },
  {
    question: "What do you collect by smashing Corn Stalks in the maze?",
    options: ["Blue Berries", "Golden Corn", "Silver Wheat", "Moon Melons"],
    correctIndex: 1,
    difficulty: "easy",
  },
  {
    question: "Which mode does NOT drop Golden Corn?",
    options: ["Arcade", "Expedition", "World's Eve", "Silo"],
    correctIndex: 2,
    difficulty: "easy",
  },
  {
    question: "Onchain Heroes officially tags Maze of Gains as a…",
    options: ["Roguelite Dungeon Crawler", "Idle MMORPG", "Turn-based tactics game", "Card battler"],
    correctIndex: 0,
    difficulty: "easy",
  },
  {
    question: "What do marbles collected in a run convert into?",
    options: ["Golden Corn", "Abstract XP", "Ethereum", "Eve Keys"],
    correctIndex: 1,
    difficulty: "easy",
  },
  {
    question: "What does treasure collected in a run build toward?",
    options: ["Your share of the weekly Ethereum pool", "A new character skin", "Arcade Keys", "Silo entries"],
    correctIndex: 0,
    difficulty: "easy",
  },

  // ── Medium: keys, passes, fees ───────────────────────────────────────
  {
    question: "What does one Arcade Key cost in the shop?",
    options: ["Free", "$1 (paid in USDC or ETH)", "$5 (USDC only)", "0.1 ETH"],
    correctIndex: 1,
    difficulty: "medium",
  },
  {
    question: "How many Arcade Keys can you put into a single run?",
    options: ["10", "50", "100", "Unlimited"],
    correctIndex: 2,
    difficulty: "medium",
  },
  {
    question: "Upvote MoG on Abstract Portal: how many free Expedition Keys do free players get weekly?",
    options: ["1", "3", "5", "8"],
    correctIndex: 1,
    difficulty: "medium",
  },
  {
    question: "How many weekly free Expedition Keys do VIP Pass holders get from that quest?",
    options: ["3", "5", "8", "10"],
    correctIndex: 2,
    difficulty: "medium",
  },
  {
    question: "Roughly what share of entry fees goes back to players?",
    options: ["About 50%", "About 70%", "About 90%", "100%"],
    correctIndex: 2,
    difficulty: "medium",
  },
  {
    question: "Which wallets can you now play MoG with besides Abstract Global Wallet?",
    options: ["MetaMask, Rabby and Robinhood", "Phantom and Solflare", "Coinbase Wallet only", "Trust Wallet only"],
    correctIndex: 0,
    difficulty: "medium",
  },
  {
    question: "What does holding an Expedition Pass do to your Corn yields?",
    options: ["Nothing", "Halves them", "Increases them", "Converts Corn to keys"],
    correctIndex: 2,
    difficulty: "medium",
  },
  {
    question: "In MoG 2.0, what carries across runs instead of resetting?",
    options: ["Persistent upgrades", "Golden Corn", "Arcade Keys", "Your energy bar"],
    correctIndex: 0,
    difficulty: "medium",
  },

  // ── Hard: exact numbers and event details ────────────────────────────
  {
    question: "How much Corn does one stalk drop, based on your run's keys?",
    options: ["1 Corn × keys in the run", "10 Corn × keys in the run", "100 Corn × keys in the run", "A flat 50 Corn"],
    correctIndex: 1,
    difficulty: "hard",
  },
  {
    question: "You run a free run with no Pass at all. What loot do you keep?",
    options: ["All of it", "Half of it", "Only Corn", "Nothing — loot retention needs a Pass"],
    correctIndex: 3,
    difficulty: "hard",
  },
  {
    question: "During Deed Season, how many Yield Fields whitelist spots are up for grabs?",
    options: ["333", "500", "850", "1,000"],
    correctIndex: 2,
    difficulty: "hard",
  },
  {
    question: "How many of those spots does the Silo leaderboard hold?",
    options: ["275", "400", "575", "850"],
    correctIndex: 2,
    difficulty: "hard",
  },
  {
    question: "And how many spots go to the Raffle draws?",
    options: ["175", "275", "400", "575"],
    correctIndex: 1,
    difficulty: "hard",
  },
  {
    question: "How long did Deed Season run, from open to lock?",
    options: ["3 days", "7 days", "11 days", "30 days"],
    correctIndex: 2,
    difficulty: "hard",
  },
  {
    question: "Which chain do the Yield Fields Deeds mint on?",
    options: ["Abstract", "Robinhood Chain", "Ethereum mainnet", "Ronin"],
    correctIndex: 1,
    difficulty: "hard",
  },
  {
    question: "What is the total supply of Yield Fields Founding Deeds?",
    options: ["1,000", "3,333", "5,000", "10,000"],
    correctIndex: 1,
    difficulty: "hard",
  },
];

export type Rank = { title: string; blurb: string };

/** Rank titles use real Maze of Gains / Onchain Heroes vocabulary. */
export function getRank(score: number, total: number): Rank {
  if (score === total)
    return { title: "Certified Mogger", blurb: "Perfect run — you earned the Mogger badge in spirit." };
  if (score >= 12) return { title: "Silo Stocker", blurb: "You stack knowledge like the top Silo boards stack Corn." };
  if (score >= 9) return { title: "Expeditioner", blurb: "You go deep in the maze — a few floors are still dark." };
  if (score >= 5) return { title: "Corn Farmer", blurb: "You know the farm, not yet the maze." };
  return { title: "Fresh Spawn", blurb: "The maze ate your loot. Time to learn the corridors." };
}
