const quotes = [
    { id: 1, quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { id: 2, quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { id: 3, quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { id: 4, quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { id: 5, quote: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
    { id: 6, quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { id: 7, quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
    { id: 8, quote: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
    { id: 9, quote: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead" },
    { id: 10, quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson" },
    { id: 11, quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { id: 12, quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin" },
    { id: 13, quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { id: 14, quote: "Whoever is happy will make others happy too.", author: "Anne Frank" },
    { id: 15, quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { id: 16, quote: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou" },
    { id: 17, quote: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
    { id: 18, quote: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { id: 19, quote: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { id: 20, quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" }
  ];

  const btn = document.querySelector('.genBtn');
  const quoteH3 = document.querySelector('.quote h3');
  const author = document.querySelector('.quote span');
  
  btn.addEventListener('click', generateQuote);

  function generateQuote(){
    let index = Math.floor(Math.random() * quotes.length);

    quoteH3.innerHTML = `${quotes[index].quote}`;
    author.innerHTML = `- ${quotes[index].author}`;
  }

  generateQuote();
  