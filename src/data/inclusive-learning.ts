export type LessonFocusId = "suffixes" | "vowel-teams" | "story-sequence";

export const distinctionPillars = [
  {
    number: "01",
    title: "One transformation partner",
    description: "Connect classroom technology, curriculum content, teacher capability and implementation instead of adding another isolated platform.",
  },
  {
    number: "02",
    title: "Inclusive by design",
    description: "Plan for learner variability from the start, with explicit instruction, multiple ways to engage and flexible ways to show understanding.",
  },
  {
    number: "03",
    title: "Teacher-guided technology",
    description: "Keep professional judgement at the centre while practical tools reduce planning friction and strengthen classroom delivery.",
  },
  {
    number: "04",
    title: "Built for real Indian classrooms",
    description: "Shape implementation around school readiness, teacher confidence and varied infrastructure—not an idealised technology environment.",
  },
  {
    number: "05",
    title: "Evidence that guides improvement",
    description: "Make participation, understanding and next steps visible so schools can improve adoption rather than merely count installations.",
  },
] as const;

export const transformationLoop = ["Baseline", "Plan", "Equip", "Enable", "Engage", "Measure", "Improve"] as const;

export const lessonFocuses = {
  suffixes: {
    label: "Build words with -ful",
    subject: "English · Vocabulary and morphology",
    objective: "Read, build and use words ending in -ful, including helpful, careful and joyful.",
    success: ["I can identify the root word.", "I can explain what -ful adds.", "I can use one -ful word in context."],
    vocabulary: ["help → helpful", "care → careful", "joy → joyful", "play → playful"],
    steps: [
      { title: "Retrieve", minutes: 5, teacher: "Review the root words help, care, joy and play using picture and word cards.", learner: "Say, point to or match each root word." },
      { title: "Teach explicitly", minutes: 7, teacher: "Model how -ful changes a root word. Say the word, mark its parts and explain its meaning.", learner: "Trace the two parts while saying them aloud." },
      { title: "Build multisensorily", minutes: 8, teacher: "Use movable word tiles in two consistent colours: one for roots and one for the suffix.", learner: "Build, read and tap each word by part." },
      { title: "Sort and compare", minutes: 8, teacher: "Present examples and non-examples. Think aloud while checking spelling and meaning.", learner: "Sort cards and explain one choice with a partner." },
      { title: "Read with support", minutes: 7, teacher: "Read a short, uncluttered passage once, then reread together and highlight target words.", learner: "Listen, echo-read and locate each -ful word." },
      { title: "Show understanding", minutes: 7, teacher: "Offer a choice: speak, write, draw-and-label or arrange a sentence strip.", learner: "Use one target word accurately in context." },
      { title: "Exit check", minutes: 3, teacher: "Show one familiar root and ask the learner to build, read and explain the new word.", learner: "Respond privately using the mode that best shows learning." },
    ],
  },
  "vowel-teams": {
    label: "Read vowel teams ai and ay",
    subject: "English · Foundational reading",
    objective: "Recognise, blend and accurately read familiar words containing the vowel teams ai and ay.",
    success: ["I can spot ai or ay in a word.", "I can blend the sounds in order.", "I can read the word in a short sentence."],
    vocabulary: ["rain", "train", "play", "day"],
    steps: [
      { title: "Retrieve", minutes: 5, teacher: "Review the long /a/ sound with two familiar picture cues.", learner: "Say the sound and match it to a picture." },
      { title: "Teach explicitly", minutes: 7, teacher: "Model ai within a word and ay at the end of a word. Avoid presenting exceptions in this first lesson.", learner: "Watch, listen and repeat the pattern." },
      { title: "Map sound to print", minutes: 8, teacher: "Use counters and letter tiles to map each sound before revealing the written word.", learner: "Move, say, build and sweep a finger under the word." },
      { title: "Sort and compare", minutes: 8, teacher: "Guide an ai/ay word sort and verbalise the position of each vowel team.", learner: "Place each card and state the pattern noticed." },
      { title: "Read with support", minutes: 7, teacher: "Use a decodable mini-text containing only taught patterns and familiar words.", learner: "Echo-read, then reread one sentence independently." },
      { title: "Show understanding", minutes: 7, teacher: "Offer oral reading, word building or picture-to-word matching.", learner: "Demonstrate accurate recognition and blending." },
      { title: "Exit check", minutes: 3, teacher: "Present one ai word and one ay word without time pressure.", learner: "Mark the pattern and read each word." },
    ],
  },
  "story-sequence": {
    label: "Sequence a short story",
    subject: "English · Reading comprehension",
    objective: "Identify and communicate the beginning, middle and end of a short, accessible story.",
    success: ["I can name the important events.", "I can put three events in order.", "I can retell the story in my chosen format."],
    vocabulary: ["first", "next", "then", "finally"],
    steps: [
      { title: "Preview", minutes: 5, teacher: "Introduce the title, key vocabulary and three event images before reading.", learner: "Predict what may happen using an image or word." },
      { title: "Model explicitly", minutes: 7, teacher: "Read aloud and think aloud about how the first important event is identified.", learner: "Listen with access to the same uncluttered text." },
      { title: "Read and pause", minutes: 8, teacher: "Read in short sections and pause to recap one event at a time.", learner: "Point to the matching event image or phrase." },
      { title: "Build the sequence", minutes: 8, teacher: "Model ordering three event cards and using temporal vocabulary.", learner: "Move cards into order and rehearse with a partner." },
      { title: "Reread with support", minutes: 7, teacher: "Reread the relevant lines and highlight evidence for the chosen order.", learner: "Listen, follow and locate one supporting detail." },
      { title: "Show understanding", minutes: 7, teacher: "Offer oral retell, comic strip, sentence frames or recorded response.", learner: "Retell the story using first, next and finally." },
      { title: "Exit check", minutes: 3, teacher: "Ask for the most important event and why it matters.", learner: "Answer orally, visually or in writing." },
    ],
  },
} as const;

export const inclusiveSupports = [
  { title: "Reduce visual load", detail: "Use short lines, generous spacing, clear headings and only the text needed for the task." },
  { title: "Make instruction explicit", detail: "Model the thinking, practise together, then move towards independent application in small steps." },
  { title: "Teach through more than one channel", detail: "Link speech, print, movement and manipulatives without asking learners to multitask unnecessarily." },
  { title: "Protect thinking time", detail: "Avoid speed as the default measure; allow rehearsal, repetition and additional processing time." },
  { title: "Offer meaningful response choices", detail: "Let learners speak, arrange, draw-and-label or write when the response mode is not the learning target." },
  { title: "Check privately and specifically", detail: "Look separately at accurate reading, meaning and application, then record one useful next step." },
] as const;

export const evidenceSources = [
  {
    name: "International Dyslexia Association — Effective Reading Instruction",
    url: "https://dyslexiaida.org/effective-reading-instruction/",
    supports: "Explicit, systematic, cumulative and diagnostic teaching within structured literacy.",
    verified: true,
    lastChecked: "2026-08-18",
  },
  {
    name: "CAST Universal Design for Learning Guidelines",
    url: "https://udlguidelines.cast.org/action-expression/",
    supports: "Multiple ways for learners to access, engage with and demonstrate learning.",
    verified: true,
    lastChecked: "2026-08-18",
  },
] as const;
