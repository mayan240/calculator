export const articles = [
  {
    id: 'cgpa-gehu',
    title: 'How to Calculate CGPA for GEHU Students',
    date: 'April 16, 2026',
    author: 'CalcHub Team',
    category: 'Education',
    summary: 'A complete, step-by-step guide for Graphic Era Hill University (GEHU) students to precisely calculate their SGPA and CGPA based on the latest university grading scheme.',
    content: `
      <p>Graphic Era Hill University (GEHU) utilizes a credit-based grading system. Understanding how to calculate your Semester Grade Point Average (SGPA) and Cumulative Grade Point Average (CGPA) is crucial for tracking your academic progress, securing placements, and applying for higher education.</p>
      
      <h3>The GEHU Grading Scale</h3>
      <p>Before calculating your CGPA, you must understand the grade points assigned to each letter grade:</p>
      <ul>
        <li><strong>A+ (Outstanding):</strong> 10 Points</li>
        <li><strong>A (Excellent):</strong> 9 Points</li>
        <li><strong>B+ (Very Good):</strong> 8 Points</li>
        <li><strong>B (Good):</strong> 7 Points</li>
        <li><strong>C+ (Average):</strong> 6 Points</li>
        <li><strong>C (Below Average):</strong> 5 Points</li>
        <li><strong>D (Pass):</strong> 4 Points</li>
        <li><strong>F (Fail):</strong> 0 Points</li>
      </ul>

      <h3>Step 1: Calculating SGPA (Semester Grade Point Average)</h3>
      <p>Your SGPA represents your performance in a single semester. To calculate it, you must multiply the grade points obtained in each subject by the credit weight of that subject.</p>
      <div style="background: rgba(15,23,42,0.05); padding: 1rem; border-radius: 8px; font-family: monospace;">
        Formula: SGPA = Σ (Credit × Grade Points) / Σ Credits
      </div>
      <p>For example, if you have three subjects with the following credits and grades:</p>
      <ul>
        <li>Math (4 Credits) - Grade A (9 points) -> 4 × 9 = 36</li>
        <li>Physics (3 Credits) - Grade B+ (8 points) -> 3 × 8 = 24</li>
        <li>Lab (2 Credits) - Grade A+ (10 points) -> 2 × 10 = 20</li>
      </ul>
      <p>Total Points = 36 + 24 + 20 = 80. Total Credits = 9. Your SGPA = 80 / 9 = <strong>8.88</strong>.</p>

      <h3>Step 2: Calculating CGPA (Cumulative Grade Point Average)</h3>
      <p>Your CGPA is the weighted average of all your semesters combined.</p>
      <div style="background: rgba(15,23,42,0.05); padding: 1rem; border-radius: 8px; font-family: monospace;">
        Formula: CGPA = Σ (SGPA × Semester Credits) / Total Credits Across All Semesters
      </div>
      <p>It is a common mistake to simply average your SGPAs (e.g., (8.0 + 9.0) / 2). You must factor in the total credits of each semester! If Semester 1 had 20 credits and Semester 2 had 25 credits, Sem 2 heavily outweighs Sem 1 in the final CGPA calculation.</p>

      <h3>Converting CGPA to Percentage</h3>
      <p>Many recruiters ask for a percentage instead of a CGPA. While universities have slightly different multipliers, the standard GEHU conversion is typically calculated by multiplying your CGPA by 9.5 or 10 depending on the batch regulations. Always verify your specific batch's multiplier with the examination cell.</p>
    `
  },
  {
    id: 'top-math-tricks-cs',
    title: 'Top 5 Math Tricks for Computer Science Students',
    date: 'April 14, 2026',
    author: 'CalcHub Team',
    category: 'Computer Science',
    summary: 'Master these five mathematical shortcuts and concepts to drastically improve your algorithmic efficiency and programming skills.',
    content: `
      <p>Mathematics is the underlying language of Computer Science. Whether you are building complex algorithms, optimizing database queries, or designing a game engine, mathematical proficiency is your greatest tool. Here are the top 5 math tricks every CS student must know.</p>

      <h3>1. The Power of Modulo (%)</h3>
      <p>The modulo operator returns the remainder of a division. It is the secret weapon for circular arrays, clock arithmetic, and checking for odd/even numbers.</p>
      <ul>
        <li><strong>Even/Odd:</strong> <code>n % 2 === 0</code> is instantly even.</li>
        <li><strong>Circular looping:</strong> If you have an array of length 5, and your index goes to 6, <code>6 % 5 = 1</code> wraps you perfectly back to the start!</li>
      </ul>

      <h3>2. Bitwise Shifts for Fast Multiplication/Division</h3>
      <p>Under the hood, multiplying or dividing by 2 can be slow if done with standard operators. Using bitwise shifts is a massive performance hack in lower-level languages like C++ or Rust.</p>
      <ul>
        <li>Left Shift (<code>x << 1</code>) multiplies a number by 2.</li>
        <li>Right Shift (<code>x >> 1</code>) divides a number by 2 (floored).</li>
      </ul>

      <h3>3. The XOR Swap Algorithm</h3>
      <p>Want to swap two variables without using a temporary third variable? Use the Exclusive OR (XOR) bitwise operator!</p>
      <div style="background: rgba(15,23,42,0.05); padding: 1rem; border-radius: 8px; font-family: monospace;">
        x = x ^ y;<br/>
        y = x ^ y;<br/>
        x = x ^ y;
      </div>
      <p>This trick is a classic interview question and demonstrates a deep understanding of memory and binary logic.</p>

      <h3>4. Sum of an Arithmetic Series (Gauss's Trick)</h3>
      <p>If you need to sum the numbers from 1 to N, never write a loop! A loop runs in O(N) time. Instead, use Gauss's mathematical formula to do it in O(1) time:</p>
      <p><strong>Sum = N * (N + 1) / 2</strong></p>
      <p>This exact formula is the solution to endless LeetCode problems (like finding the missing number in an array).</p>

      <h3>5. Logarithms for Binary Search</h3>
      <p>Why is Binary Search so fast? Logarithms. Base-2 logarithms tell you exactly how many times you can cut a sorted dataset in half before you find your item. If you have 1,000,000 items, log2(1,000,000) is approximately 20. Meaning it takes a maximum of 20 guesses to find any item in a million-item list.</p>
    `
  },
  {
    id: 'understanding-compound-interest',
    title: 'Understanding Compound Interest for Beginners',
    date: 'April 10, 2026',
    author: 'CalcHub Team',
    category: 'Finance',
    summary: 'Albert Einstein supposedly called compound interest the "Eighth Wonder of the World". Here is a beginner-friendly breakdown of why it matters for your wealth.',
    content: `
      <p>When it comes to building wealth, <strong>Compound Interest</strong> is the most powerful force in the universe. While simple interest only pays you on your initial deposit, compound interest pays you on your deposit AND the interest you've already accumulated.</p>

      <h3>The Snowball Effect</h3>
      <p>Imagine a snowball rolling down a hill. As it rolls, it gathers snow. Because it becomes larger, the surface area increases, allowing it to gather even MORE snow faster. That is exactly how compound interest works with your money.</p>
      
      <p>Let's say you invest $1,000 at a 10% annual return:</p>
      <ul>
        <li><strong>Year 1:</strong> You earn $100. New balance = $1,100.</li>
        <li><strong>Year 2:</strong> You earn 10% on $1,100, which is $110. New balance = $1,210.</li>
        <li><strong>Year 3:</strong> You earn 10% on $1,210, which is $121. New balance = $1,331.</li>
      </ul>
      <p>Notice how the interest you earn grows larger every single year, without you adding a single extra penny of your own money!</p>

      <h3>The Rule of 72</h3>
      <p>A brilliant mental math trick for compound interest is the <strong>Rule of 72</strong>. It tells you exactly how many years it will take to double your money.</p>
      <p>Simply divide 72 by your expected annual interest rate.</p>
      <div style="background: rgba(15,23,42,0.05); padding: 1rem; border-radius: 8px; font-family: monospace;">
        72 / Interest Rate = Years to Double
      </div>
      <p>If you invest in the stock market and expect a historical 8% return: <strong>72 / 8 = 9 years.</strong> Every 9 years, your entire net worth doubles!</p>

      <h3>Start Early</h3>
      <p>Because compounding relies heavily on time (the exponent in the formula), starting to invest at age 20 versus age 30 can result in hundreds of thousands of dollars in difference by retirement. Use our Compound Interest Calculator to run your own projections!</p>
    `
  }
];
