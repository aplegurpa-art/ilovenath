const reasons = [
  "I love your smile",
  "I love your laugh",
  "I love your presence",
  "You make me feel it's always okay whatever the problem is",
  "You're so beautiful",
  "You're always here for me",
  "I love how you always try to comfort me everytime",
  "I love how clingy you are",
  "I love your feet",
  "I love your arms",
  "I love your hair when it's long",
  "I love your hair when it's short",
  "I love your hair when it's curly",
  "I love your hair when it's straight",
  "I love when you try to motivate me in the things that I need to do",
  "You always try to teach me in the softest way that you can",
  "You always try to understand my hobbies",
  "You always listen to me whenever I yap about my interests",
  "You always greet me in the morning and before we sleep",
  "I love your kisses",
  "You look like a shot of espresso",
  "You look like flowers",
  "You're so cute especially when you smile",
  "You always help me when I need you",
  "You always make me happy whatever you do",
  "You're the reason for everything I do",
  "You're effortlessly beautiful",
  "I love your mindset",
  "I just love you",
  "You aren't dry",
  "You always celebrate what I do",
  "You appreciate my efforts, small or big",
  "You always make my gift special, even though it isn't much",
  "I love your aesthetic on clothes",
  "I love your makeup, it looks good on you",
  "I love your interests",
  "You're generous",
  "I love how you always reassure me",
  "You're gentle",
  "You try to communicate after our argument",
  "You always make time for me :))",
  "You actually care about me",
  "You respect my boundaries",
  "You made me better",
  "I love your height",
  "You make me feel seen",
  "You don't see me as weird",
  "I love your sincerity",
  "You're perfect",
  "You aren't a dry texter",
  "I love you because you always try to be patient with me",
  "You've shown me how warm true love is",
  "You still love me even in hardest times",
  "You made me believe in myself",
  "I feel like I'm the luckiest person",
  "You make everything worth it",
  "You're my number one fan",
  "I love everything about you",
  "I love your ears",
  "I love your face",
  "You accept and love me for who I am",
  "I love our love",
  "I love how you tease me",
  "I love the way you look at me with those gorgeous eyes",
  "I LOVE your voice",
  "I love it when you sing for me",
  "I love your jokes",
  "I love it when you say you miss me",
  "I love it when you say you love me",
  "You always look good",
  "You always play with me",
  "This is the best relationship I could ask for",
  "You laugh at my unfunny jokes",
  "I love when you tell me how much you love me",
  "I love how you always want to hangout with me",
  "I love your nose",
  "I love the way you baby me",
  "I love your silliness",
  "I love your compliments",
  "How genuine you are",
  "Your hugs gives me comfort",
  "You always match my energy",
  "I love how honest you are",
  "I love your love for chiikawa",
  "I love your love for squishies",
  "I love your love for the color pink",
  "I love your love for sweets",
  "I love your love for dubai chewy",
  "I love your smile whenever you see me",
  "I love it when you call me with any callsign that we have",
  "I love the way you talk about your day",
  "I love how you talk about your interests",
  "I love it when you copy my humor",
  "I love it when you copy my vocabulary",
  "I love how you love me",
  "I love it when you show me off to others",
  "I feel like home whenever we're together",
  "You let me be myself",
  "I love it when you're jealous",
  "I love the way you discipline me"
];

const board = document.getElementById('cardBoard');

function placeCards() {
  board.innerHTML = '';

  const shuffledReasons = [...reasons].sort(() => Math.random() - 0.5);
  const cardWidth = window.innerWidth <= 700 ? 150 : 170;
  const cardHeight = 140;
  const cardGap = 28;
  const boardHeight = Math.max(4200, reasons.length * 42);
  const placedCards = [];
  board.style.height = `${boardHeight}px`;

  shuffledReasons.forEach((reason, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => card.classList.toggle('open');

    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.innerHTML = '<span class="petal"></span><span class="petal"></span><span class="petal"></span><span class="petal"></span><span class="center"></span>';

    const hiddenText = document.createElement('p');
    hiddenText.className = 'hidden-text';
    hiddenText.textContent = reason;

    card.appendChild(flower);
    card.appendChild(hiddenText);

    let x = 0;
    let y = 0;
    let hasSpace = false;

    for (let attempt = 0; attempt < 5000 && !hasSpace; attempt += 1) {
      x = 10 + Math.random() * Math.max(1, board.clientWidth - cardWidth - 20);
      y = 10 + Math.random() * Math.max(1, boardHeight - cardHeight - 20);
      hasSpace = placedCards.every((placedCard) => (
        x + cardWidth + cardGap < placedCard.x ||
        x > placedCard.x + cardWidth + cardGap ||
        y + cardHeight + cardGap < placedCard.y ||
        y > placedCard.y + cardHeight + cardGap
      ));
    }

    if (!hasSpace) {
      const lowestCard = placedCards.reduce(
        (lowest, placedCard) => Math.max(lowest, placedCard.y),
        0
      );
      x = 10 + Math.random() * Math.max(1, board.clientWidth - cardWidth - 20);
      y = lowestCard + cardHeight + cardGap;
      board.style.height = `${Math.max(boardHeight, y + cardHeight + 40)}px`;
    }

    placedCards.push({ x, y });
    const rotate = (index % 2 === 0 ? -1 : 1) * (Math.floor(index / 2) % 6 + 3);

    card.style.left = `${(x / board.clientWidth) * 100}%`;
    card.style.top = `${y}px`;
    card.style.transform = `rotate(${rotate}deg)`;

    board.appendChild(card);
  });
}

placeCards();
