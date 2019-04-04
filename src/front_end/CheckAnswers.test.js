const sum = require ('./checkAnswer')

checkAnswer('y1',[ { question: 'Who wrote &quot;Harry Potter&quot;?',
  choices:
   [ 'J.R.R. Tolkien',
     'Terry Pratchett',
     'Daniel Radcliffe',
     'J.K. Rowling' ],
  correct: 'J.K. Rowling' },
{ question:
   'George Orwell wrote this book, which is often considered a statement on government oversight.',
  choices:
   [ 'The Old Man and the Sea',
     'Catcher and the Rye',
     'To Kill a Mockingbird',
     '1984' ],
  correct: '1984' },
{ question:
   'Which famous book is sub-titled &#039;The Modern Prometheus&#039;?',
  choices:
   [ 'Dracula',
     'The Strange Case of Dr. Jekyll and Mr. Hyde ',
     'The Legend of Sleepy Hollow',
     'Frankenstein' ],
  correct: 'Frankenstein' },
{ question:
   'What was the name of Captain Nemo&#039;s submarine in &quot;20,000 Leagues Under the Sea&quot;?',
  choices:
   [ 'The Neptune',
     'The Poseidon  ',
     'The Atlantis',
     'The Nautilus' ],
  correct: 'The Nautilus' },
{ question:
   'Which of the following is the world&#039;s best-selling book?',
  choices:
   [ 'The Little Prince',
     'Harry Potter and the Philosopher&#039;s Stone',
     'The Da Vinci Code',
     'The Lord of the Rings' ],
  correct: 'The Lord of the Rings' },
{ question:
   'Who wrote the novel &#039;Fear And Loathing In Las Vegas&#039;?',
  choices:
   [ 'F. Scott Fitzgerald',
     'Henry Miller',
     'William S. Burroughs',
     'Hunter S. Thompson' ],
  correct: 'Hunter S. Thompson' },
{ question: '&quot;Green Eggs And Ham&quot; is a book by which author?',
  choices:
   [ 'Beatrix Potter', 'Roald Dahl', 'A.A. Milne', 'Dr. Seuss' ],
  correct: 'Dr. Seuss' },
{ question:
   'Which famous spy novelist wrote the childrens&#039; story &quot;Chitty-Chitty-Bang-Bang&quot;?',
  choices:
   [ 'Joseph Conrad', 'John Buchan', 'Graham Greene', 'Ian Fleming' ],
  correct: 'Ian Fleming' },
{ question: 'How many Harry Potter books are there?',
  choices: [ '8', '5', '6', '7' ],
  correct: '7' },
{ question:
   'Under what pseudonym did Stephen King publish five novels between 1977 and 1984?',
  choices:
   [ 'J. D. Robb', 'Mark Twain', 'Lewis Carroll', 'Richard Bachman' ],
  correct: 'Richard Bachman' },
{ question: 'What&#039;s Harry Potter&#039;s dad&#039;s name?',
  choices:
   [ 'Joey Potter',
     'Frank Potter',
     'Hairy Potter Sr.',
     'James Potter' ],
  correct: 'James Potter' },
{ question:
   'Who wrote the young adult novel &quot;The Fault in Our Stars&quot;?',
  choices:
   [ 'Stephenie Meyer',
     'Suzanne Collins',
     'Stephen Chbosky',
     'John Green' ],
  correct: 'John Green' },
{ question:
   'Who was the author of the 1954 novel, &quot;Lord of the Flies&quot;?',
  choices:
   [ 'Stephen King',
     'F. Scott Fitzgerald',
     'Hunter Fox',
     'William Golding' ],
  correct: 'William Golding' },
{ question:
   'What is the name of the three headed dog in Harry Potter and the Sorcerer&#039;s Stone?',
  choices: [ 'Spike', 'Poofy', 'Spot', 'Fluffy' ],
  correct: 'Fluffy' },
{ question:
   'What is the name of the protagonist of J.D. Salinger&#039;s novel Catcher in the Rye?',
  choices:
   [ 'Fletcher Christian',
     'Jay Gatsby',
     'Randall Flagg',
     'Holden Caulfield' ],
  correct: 'Holden Caulfield' },
{ question:
   'What is the title of the first Sherlock Holmes book by Arthur Conan Doyle?',
  choices:
   [ 'The Sign of the Four',
     'A Case of Identity',
     'The Doings of Raffles Haw',
     'A Study in Scarlet' ],
  correct: 'A Study in Scarlet' },
{ question: 'What is the name of Sherlock Holmes&#039;s brother?',
  choices:
   [ 'Mederi Holmes',
     'Martin Holmes',
     'Herbie Hancock Holmes',
     'Mycroft Holmes' ],
  correct: 'Mycroft Holmes' },
{ question:
   'In the name of the fictional SCP Foundation, what does the &quot;SCP&quot; stand for?',
  choices:
   [ 'Secure, Contain, Protect',
     'Supernatural Creature Preservation',
     'Silent Community Protection',
     'Special Containment Procedures' ],
  correct: 'Special Containment Procedures' },
{ question:
   'What was the first ever entry written for the SCP Foundation collaborative writing project?',
  choices: [ 'SCP-001', 'SCP-999', 'SCP-1459', 'SCP-173' ],
  correct: 'SCP-173' },
{ question: 'Which is NOT a book in the Harry Potter Series?',
  choices:
   [ 'The Chamber of Secrets',
     'The Prisoner of Azkaban',
     'The Deathly Hallows',
     'The House Elf'], 1 )
//test1
test('test checkAnswer', () => {
  expect(score).toBe( 0)
});

checkAnswer ('y4', [ { question: 'Who wrote &quot;Harry Potter&quot;?',
  choices:
   [ 'J.R.R. Tolkien',
     'Terry Pratchett',
     'Daniel Radcliffe',
     'J.K. Rowling' ],
  correct: 'J.K. Rowling' },
{ question:
   'George Orwell wrote this book, which is often considered a statement on government oversight.',
  choices:
   [ 'The Old Man and the Sea',
     'Catcher and the Rye',
     'To Kill a Mockingbird',
     '1984' ],
  correct: '1984' },
{ question:
   'Which famous book is sub-titled &#039;The Modern Prometheus&#039;?',
  choices:
   [ 'Dracula',
     'The Strange Case of Dr. Jekyll and Mr. Hyde ',
     'The Legend of Sleepy Hollow',
     'Frankenstein' ],
  correct: 'Frankenstein' },
{ question:
   'What was the name of Captain Nemo&#039;s submarine in &quot;20,000 Leagues Under the Sea&quot;?',
  choices:
   [ 'The Neptune',
     'The Poseidon  ',
     'The Atlantis',
     'The Nautilus' ],
  correct: 'The Nautilus' },
{ question:
   'Which of the following is the world&#039;s best-selling book?',
  choices:
   [ 'The Little Prince',
     'Harry Potter and the Philosopher&#039;s Stone',
     'The Da Vinci Code',
     'The Lord of the Rings' ],
  correct: 'The Lord of the Rings' },
{ question:
   'Who wrote the novel &#039;Fear And Loathing In Las Vegas&#039;?',
  choices:
   [ 'F. Scott Fitzgerald',
     'Henry Miller',
     'William S. Burroughs',
     'Hunter S. Thompson' ],
  correct: 'Hunter S. Thompson' },
{ question: '&quot;Green Eggs And Ham&quot; is a book by which author?',
  choices:
   [ 'Beatrix Potter', 'Roald Dahl', 'A.A. Milne', 'Dr. Seuss' ],
  correct: 'Dr. Seuss' },
{ question:
   'Which famous spy novelist wrote the childrens&#039; story &quot;Chitty-Chitty-Bang-Bang&quot;?',
  choices:
   [ 'Joseph Conrad', 'John Buchan', 'Graham Greene', 'Ian Fleming' ],
  correct: 'Ian Fleming' },
{ question: 'How many Harry Potter books are there?',
  choices: [ '8', '5', '6', '7' ],
  correct: '7' },
{ question:
   'Under what pseudonym did Stephen King publish five novels between 1977 and 1984?',
  choices:
   [ 'J. D. Robb', 'Mark Twain', 'Lewis Carroll', 'Richard Bachman' ],
  correct: 'Richard Bachman' },
{ question: 'What&#039;s Harry Potter&#039;s dad&#039;s name?',
  choices:
   [ 'Joey Potter',
     'Frank Potter',
     'Hairy Potter Sr.',
     'James Potter' ],
  correct: 'James Potter' },
{ question:
   'Who wrote the young adult novel &quot;The Fault in Our Stars&quot;?',
  choices:
   [ 'Stephenie Meyer',
     'Suzanne Collins',
     'Stephen Chbosky',
     'John Green' ],
  correct: 'John Green' },
{ question:
   'Who was the author of the 1954 novel, &quot;Lord of the Flies&quot;?',
  choices:
   [ 'Stephen King',
     'F. Scott Fitzgerald',
     'Hunter Fox',
     'William Golding' ],
  correct: 'William Golding' },
{ question:
   'What is the name of the three headed dog in Harry Potter and the Sorcerer&#039;s Stone?',
  choices: [ 'Spike', 'Poofy', 'Spot', 'Fluffy' ],
  correct: 'Fluffy' },
{ question:
   'What is the name of the protagonist of J.D. Salinger&#039;s novel Catcher in the Rye?',
  choices:
   [ 'Fletcher Christian',
     'Jay Gatsby',
     'Randall Flagg',
     'Holden Caulfield' ],
  correct: 'Holden Caulfield' },
{ question:
   'What is the title of the first Sherlock Holmes book by Arthur Conan Doyle?',
  choices:
   [ 'The Sign of the Four',
     'A Case of Identity',
     'The Doings of Raffles Haw',
     'A Study in Scarlet' ],
  correct: 'A Study in Scarlet' },
{ question: 'What is the name of Sherlock Holmes&#039;s brother?',
  choices:
   [ 'Mederi Holmes',
     'Martin Holmes',
     'Herbie Hancock Holmes',
     'Mycroft Holmes' ],
  correct: 'Mycroft Holmes' },
{ question:
   'In the name of the fictional SCP Foundation, what does the &quot;SCP&quot; stand for?',
  choices:
   [ 'Secure, Contain, Protect',
     'Supernatural Creature Preservation',
     'Silent Community Protection',
     'Special Containment Procedures' ],
  correct: 'Special Containment Procedures' },
{ question:
   'What was the first ever entry written for the SCP Foundation collaborative writing project?',
  choices: [ 'SCP-001', 'SCP-999', 'SCP-1459', 'SCP-173' ],
  correct: 'SCP-173' },
{ question: 'Which is NOT a book in the Harry Potter Series?',
  choices:
   [ 'The Chamber of Secrets',
     'The Prisoner of Azkaban',
     'The Deathly Hallows',
     'The House Elf'], 1 )

test('test checkAnswer', () => {
  expect(score).toBe(5)
});
