// Christmas Wishes Database (55+ unique wishes)
const christmasWishes = [
    "May your Christmas sparkle with moments of love, laughter and goodwill!",
    "Wishing you a magical and blissful holiday season!",
    "May the spirit of Christmas bring you peace, joy and happiness!",
    "Sending you warm wishes for a wonderful Christmas filled with love!",
    "May your heart be filled with the magic of Christmas!",
    "Wishing you all the joy your holiday can hold!",
    "May the beauty of Christmas fill your heart with joy!",
    "Sending you cozy wishes for a merry and bright Christmas!",
    "May your Christmas be wrapped in happiness and tied with love!",
    "Wishing you peace, love, and joy this holiday season!",
    "May the wonder of Christmas fill your heart with delight!",
    "Sending you blessings of love and joy this Christmas!",
    "May your holiday season be filled with warmth and cheer!",
    "Wishing you a Christmas filled with precious moments!",
    "May the magic of Christmas bring you endless joy!",
    "Sending you sparkles of joy this festive season!",
    "May your Christmas shine with love and laughter!",
    "Wishing you a season of blessings from heaven above!",
    "May the spirit of giving fill your heart this Christmas!",
    "Sending you wishes for a spectacular holiday season!",
    "May Christmas bring you hope, happiness, and harmony!",
    "Wishing you the gift of faith, the blessing of hope!",
    "May your home be filled with Christmas joy and cheer!",
    "Sending you warm hugs and festive wishes!",
    "May the Christmas season fill your heart with wonder!",
    "Wishing you memories that warm your heart all year!",
    "May your Christmas be merry and your New Year be bright!",
    "Sending you love wrapped in holiday cheer!",
    "May the joy of Christmas be with you always!",
    "Wishing you a season sprinkled with fun and laughter!",
    "May your Christmas be filled with sweet surprises!",
    "Sending you blessings of peace and prosperity!",
    "May the Christmas lights brighten your path ahead!",
    "Wishing you a holiday season full of delightful moments!",
    "May your Christmas be as special as you are!",
    "Sending you wishes for a cozy and cheerful Christmas!",
    "May the warmth of Christmas fill your soul!",
    "Wishing you a beautiful season of hope and renewal!",
    "May Christmas bring you closer to your loved ones!",
    "Sending you festive vibes and joyful times!",
    "May your heart overflow with Christmas blessings!",
    "Wishing you a season of love, light, and laughter!",
    "May the magic of Christmas never end for you!",
    "Sending you wishes for unforgettable holiday memories!",
    "May your Christmas be filled with heavenly peace!",
    "Wishing you a joyful journey through the holiday season!",
    "May Christmas miracles come your way!",
    "Sending you love, joy, and Christmas cheer!",
    "May your holiday be wrapped in happiness!",
    "Wishing you a blessed and beautiful Christmas!",
    "May the spirit of Christmas live in your heart forever!",
    "Sending you wishes for a spectacular celebration!",
    "May your Christmas be merry, bright, and wonderful!",
    "Wishing you starry nights and magical moments!",
    "May Christmas fill your home with love and laughter!",
    "Sending you the warmest wishes this festive season!"
];

// Background Images (14 high-quality Christmas images from Unsplash)
const backgroundImages = [
    'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1600&q=80', // Christmas tree with presents
    'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=1600&q=80', // Snow-covered trees
    'https://images.unsplash.com/photo-1513297887119-d46091b24bfa?w=1600&q=80', // Christmas ornaments on tree
    'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=1600&q=80', // Cozy fireplace setting
    'https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?w=1600&q=80', // Northern lights winter
    'https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?w=1600&q=80', // Christmas lights bokeh
    'https://images.unsplash.com/photo-1544273677-9f2e3f6d5e38?w=1600&q=80', // Snow-covered cabin
    'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=1600&q=80', // Winter forest
    'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?w=1600&q=80', // Christmas decorations
    'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1600&q=80', // Snow landscape
    'https://images.unsplash.com/photo-1514649923863-ceaf75b7ec40?w=1600&q=80', // Christmas tree night
    'https://images.unsplash.com/photo-1481570906522-5c2c27ff63c0?w=1600&q=80', // Winter wonderland
    'https://images.unsplash.com/photo-1513297887119-d46091b24bfa?w=1600&q=80', // Golden ornaments
    'https://images.unsplash.com/photo-1514649961441-049f2223b651?w=1600&q=80'  // Christmas lights close-up
];

// Body background images (high-res versions for main background)
const bodyBackgroundImages = [
    'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1920&q=80',
    'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=1920&q=80',
    'https://images.unsplash.com/photo-1513297887119-d46091b24bfa?w=1920&q=80',
    'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=1920&q=80',
    'https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?w=1920&q=80',
    'https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?w=1920&q=80',
    'https://images.unsplash.com/photo-1544273677-9f2e3f6d5e38?w=1920&q=80',
    'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?w=1920&q=80',
    'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1920&q=80',
    'https://images.unsplash.com/photo-1514649923863-ceaf75b7ec40?w=1920&q=80',
    'https://images.unsplash.com/photo-1481570906522-5c2c27ff63c0?w=1920&q=80',
    'https://images.unsplash.com/photo-1514649961441-049f2223b651?w=1920&q=80'
];

let currentBackgroundIndex = 0;
let currentWishIndex = 0;
let recipientName = '';
let currentBodyBackgroundIndex = 0;

// DOM Elements
const nameForm = document.getElementById('nameForm');
const recipientInput = document.getElementById('recipientName');
const inputSection = document.getElementById('inputSection');
const cardSection = document.getElementById('cardSection');
const loadingSpinner = document.getElementById('loadingSpinner');
const cardBackground = document.getElementById('cardBackground');
const cardMessage = document.getElementById('cardMessage');
const cardRecipient = document.getElementById('cardRecipient');
const changeBackgroundBtn = document.getElementById('changeBackgroundBtn');
const randomizeWishBtn = document.getElementById('randomizeWishBtn');
const changeNameBtn = document.getElementById('changeNameBtn');

// Snowflakes Animation
function createSnowflakes() {
    const container = document.getElementById('snowflakes-container');
    const snowflakeCount = window.innerWidth > 768 ? 50 : 30;
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = '❄';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = (Math.random() * 1 + 0.5) + 'em';
        container.appendChild(snowflake);
    }
}

// Change body background
function changeBodyBackground() {
    currentBodyBackgroundIndex = (currentBodyBackgroundIndex + 1) % bodyBackgroundImages.length;
    document.body.style.backgroundImage = `url('${bodyBackgroundImages[currentBodyBackgroundIndex]}')`;
}

// Auto-change body background every 10 seconds
setInterval(changeBodyBackground, 10000);

// Initialize snowflakes
createSnowflakes();

// Generate Random Index
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

// Load Background Image
function loadBackground(index) {
    loadingSpinner.style.display = 'block';
    const img = new Image();
    img.onload = function() {
        cardBackground.src = backgroundImages[index];
        loadingSpinner.style.display = 'none';
    };
    img.onerror = function() {
        // Fallback to next image if current fails
        currentBackgroundIndex = (index + 1) % backgroundImages.length;
        loadBackground(currentBackgroundIndex);
    };
    img.src = backgroundImages[index];
}

// Generate Card
nameForm.addEventListener('submit', function(e) {
    e.preventDefault();
    recipientName = recipientInput.value.trim();
    
    if (recipientName) {
        inputSection.style.display = 'none';
        cardSection.style.display = 'block';
        
        // Set initial random wish and background
        currentWishIndex = getRandomIndex(christmasWishes.length);
        currentBackgroundIndex = getRandomIndex(backgroundImages.length);
        
        cardMessage.textContent = christmasWishes[currentWishIndex];
        cardRecipient.textContent = recipientName;
        loadBackground(currentBackgroundIndex);
        
        // Scroll to card
        cardSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// Change Background
changeBackgroundBtn.addEventListener('click', function() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
    loadBackground(currentBackgroundIndex);
});

// Randomize Wish
randomizeWishBtn.addEventListener('click', function() {
    currentWishIndex = getRandomIndex(christmasWishes.length);
    cardMessage.style.opacity = '0';
    setTimeout(() => {
        cardMessage.textContent = christmasWishes[currentWishIndex];
        cardMessage.style.opacity = '1';
    }, 300);
});

// Change Name
changeNameBtn.addEventListener('click', function() {
    cardSection.style.display = 'none';
    inputSection.style.display = 'block';
    recipientInput.value = '';
    recipientInput.focus();
    inputSection.scrollIntoView({ behavior: 'smooth' });
});

// Share on WhatsApp
document.getElementById('shareWhatsApp').addEventListener('click', function() {
    const message = `🎄 Check out this beautiful Christmas card I created for ${recipientName} on ToluCards! ✨\n\nCreate yours now: ${window.location.href}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});

// Share on Facebook
document.getElementById('shareFacebook').addEventListener('click', function() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank', 'width=600,height=400');
});

// Share on Twitter
document.getElementById('shareTwitter').addEventListener('click', function() {
    const text = `🎄 I just created a beautiful Christmas card for ${recipientName} on ToluCards! ✨ Create yours now!`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank', 'width=600,height=400');
});

// Download Card
document.getElementById('downloadCard').addEventListener('click', function() {
    const cardContainer = document.getElementById('cardContainer');
    
    html2canvas(cardContainer, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `ToluCard_${recipientName.replace(/\s+/g, '_')}_2025.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});

// Copy Link
document.getElementById('copyLink').addEventListener('click', function() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        const btn = this;
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
            btn.innerHTML = originalHTML;
        }, 2000);
    });
});

// Preload images for better performance
backgroundImages.forEach(src => {
    const img = new Image();
    img.src = src;
});
