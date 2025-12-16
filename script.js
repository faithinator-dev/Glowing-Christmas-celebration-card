// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// 50+ Background Images from Unsplash & Pexels
const backgroundImages = [
    'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1600&q=80',
    'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=1600&q=80',
    'https://images.unsplash.com/photo-1513297887119-d46091b24bfa?w=1600&q=80',
    'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=1600&q=80',
    'https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?w=1600&q=80',
    'https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?w=1600&q=80',
    'https://images.unsplash.com/photo-1544273677-9f2e3f6d5e38?w=1600&q=80',
    'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?w=1600&q=80',
    'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1600&q=80',
    'https://images.unsplash.com/photo-1514649923863-ceaf75b7ec40?w=1600&q=80',
    'https://images.unsplash.com/photo-1481570906522-5c2c27ff63c0?w=1600&q=80',
    'https://images.unsplash.com/photo-1514649961441-049f2223b651?w=1600&q=80',
    'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=1600&q=80',
    'https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?w=1600&q=80',
    'https://images.unsplash.com/photo-1545016776-d2d155f97406?w=1600&q=80',
    'https://images.unsplash.com/photo-1512916206820-bd1742a7ff07?w=1600&q=80',
    'https://images.unsplash.com/photo-1483193722442-5422d99849bc?w=1600&q=80',
    'https://images.unsplash.com/photo-1515131615479-b3e69a13c9be?w=1600&q=80',
    'https://images.unsplash.com/photo-1513110694504-c51d8f1c1a43?w=1600&q=80',
    'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=1600&q=80',
    'https://images.unsplash.com/photo-1544273677-1c5e2be3eeef?w=1600&q=80',
    'https://images.unsplash.com/photo-1514517521153-1be72277b32f?w=1600&q=80',
    'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1600&q=80',
    'https://images.pexels.com/photos/1649228/pexels-photo-1649228.jpeg?w=1600',
    'https://images.pexels.com/photos/1708601/pexels-photo-1708601.jpeg?w=1600',
    'https://images.pexels.com/photos/1708610/pexels-photo-1708610.jpeg?w=1600',
    'https://images.pexels.com/photos/1679618/pexels-photo-1679618.jpeg?w=1600',
    'https://images.pexels.com/photos/257851/pexels-photo-257851.jpeg?w=1600',
    'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?w=1600',
    'https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?w=1600',
    'https://images.pexels.com/photos/1652334/pexels-photo-1652334.jpeg?w=1600',
    'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?w=1600',
    'https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?w=1600',
    'https://images.pexels.com/photos/3074928/pexels-photo-3074928.jpeg?w=1600',
    'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?w=1600',
    'https://images.pexels.com/photos/3303614/pexels-photo-3303614.jpeg?w=1600',
    'https://images.pexels.com/photos/6069488/pexels-photo-6069488.jpeg?w=1600',
    'https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?w=1600',
    'https://images.pexels.com/photos/5989927/pexels-photo-5989927.jpeg?w=1600',
    'https://images.pexels.com/photos/5989930/pexels-photo-5989930.jpeg?w=1600',
    'https://images.pexels.com/photos/5989947/pexels-photo-5989947.jpeg?w=1600',
    'https://images.pexels.com/photos/5989956/pexels-photo-5989956.jpeg?w=1600',
    'https://images.pexels.com/photos/5989991/pexels-photo-5989991.jpeg?w=1600',
    'https://images.pexels.com/photos/5990028/pexels-photo-5990028.jpeg?w=1600',
    'https://images.pexels.com/photos/5990045/pexels-photo-5990045.jpeg?w=1600',
    'https://images.pexels.com/photos/5990080/pexels-photo-5990080.jpeg?w=1600',
    'https://images.pexels.com/photos/5990089/pexels-photo-5990089.jpeg?w=1600',
    'https://images.pexels.com/photos/5990122/pexels-photo-5990122.jpeg?w=1600',
    'https://images.pexels.com/photos/5990137/pexels-photo-5990137.jpeg?w=1600',
    'https://images.pexels.com/photos/5990162/pexels-photo-5990162.jpeg?w=1600',
    'https://images.pexels.com/photos/5990208/pexels-photo-5990208.jpeg?w=1600'
];

// Body background images (high-res for main background)
const bodyBackgrounds = [
    'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1920&q=80',
    'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=1920&q=80',
    'https://images.unsplash.com/photo-1513297887119-d46091b24bfa?w=1920&q=80',
    'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=1920&q=80',
    'https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?w=1920&q=80',
    'https://images.unsplash.com/photo-1544273677-9f2e3f6d5e38?w=1920&q=80',
    'https://images.unsplash.com/photo-1514649923863-ceaf75b7ec40?w=1920&q=80',
    'https://images.unsplash.com/photo-1481570906522-5c2c27ff63c0?w=1920&q=80'
];

// 100+ Short Christmas Wishes
const shortWishes = [
    "Merry Christmas! Wishing you joy and peace! 🎄",
    "May your holidays sparkle with love and laughter! ✨",
    "Warmest wishes for a magical Christmas! 🎅",
    "Sending you festive cheer and holiday magic! 🌟",
    "Have a holly jolly Christmas! 🎁",
    "May your Christmas be merry and bright! ⭐",
    "Wishing you peace, love, and joy this season! ❤️",
    "Season's greetings and best wishes! 🎄",
    "May your days be merry and your heart be light! 🕯️",
    "Joyeux Noël! Wishing you happiness! 🎊",
    "Merry Christmas! May your wishes come true! 🌟",
    "Sending you warm holiday hugs! 🤗",
    "Have yourself a merry little Christmas! 🎵",
    "May the Christmas spirit fill your heart! ❤️",
    "Wishing you a season of blessings! 🙏",
    "Merry Christmas and Happy New Year! 🎆",
    "May your holiday be filled with joy! 😊",
    "Sending you Christmas magic and wonder! ✨",
    "Wishing you cozy moments and warm memories! ☕",
    "Have a wonderful Christmas celebration! 🎉",
    "May the bells ring joy into your life! 🔔",
    "Merry Christmas! Stay blessed! 🎄",
    "Wishing you starry nights and festive delights! ⭐",
    "May love and laughter light your holidays! 💕",
    "Season's greetings from my heart to yours! 💝",
    "Merry Christmas! Enjoy every moment! ⏰",
    "May your Christmas be magical! 🪄",
    "Sending festive wishes your way! 📬",
    "Have a blessed and beautiful Christmas! 🌺",
    "May your holidays overflow with happiness! 😄",
    "Wishing you Christmas cheer and New Year joy! 🥳",
    "Merry Christmas! Let it snow! ❄️",
    "May Santa bring you everything you wish for! 🎅",
    "Wishing you sweet surprises this Christmas! 🍭",
    "Have a sparkling holiday season! ✨",
    "May your Christmas be wrapped in love! 🎁",
    "Sending you joy that lasts all year! 📅",
    "Merry Christmas! Dream big! 💭",
    "Wishing you peace on earth! 🌍",
    "May angels watch over you this Christmas! 👼",
    "Have a Christmas full of wonder! 🤩",
    "Wishing you magical moments! 🎪",
    "Merry Christmas! Celebrate with love! 💗",
    "May your heart be filled with Christmas spirit! 💖",
    "Sending you warmth and good wishes! 🧣",
    "Have a joyful and blessed Christmas! 🙌",
    "Wishing you holiday happiness! 😃",
    "Merry Christmas! Shine bright! 💎",
    "May your season be merry! 🎶",
    "Sending you Christmas blessings! 🌟",
    "Have a festive and fabulous holiday! 🎊",
    "Wishing you comfort and joy! 🛋️",
    "Merry Christmas! Stay merry! 😊",
    "May your Christmas tree shine bright! 🌲",
    "Sending you holiday love! 💌",
    "Have a cheerful Christmas! 🎭",
    "Wishing you snowy delights! ☃️",
    "Merry Christmas! Be jolly! 🎅",
    "May your stockings be filled with joy! 🧦",
    "Sending you gingerbread wishes! 🍪",
    "Have a candy cane Christmas! 🍬",
    "Wishing you mistletoe moments! 💋",
    "Merry Christmas! Sparkle and shine! ✨",
    "May your fireplace be cozy! 🔥",
    "Sending you reindeer magic! 🦌",
    "Have a twinkling Christmas! 💫",
    "Wishing you ornament-filled joy! 🎄",
    "Merry Christmas! Jingle all the way! 🔔",
    "May your eggnog be delicious! 🥛",
    "Sending you sleigh bell wishes! 🛷",
    "Have a wonderful winter holiday! 🌨️",
    "Wishing you hot cocoa happiness! ☕",
    "Merry Christmas! Light up the world! 💡",
    "May your wreath bring good fortune! 🌿",
    "Sending you caroling joy! 🎤",
    "Have a harmonious holiday! 🎵",
    "Wishing you gift-wrapped happiness! 🎁",
    "Merry Christmas! Celebrate big! 🎆",
    "May your garland be gorgeous! 🎀",
    "Sending you festive fun! 🎪",
    "Have a spectacular season! 🌟",
    "Wishing you tinsel-topped joy! ✨",
    "Merry Christmas! Enjoy the magic! 🪄",
    "May your holidays be picture-perfect! 📸",
    "Sending you Christmas card wishes! 📮",
    "Have a delightful December! 📆",
    "Wishing you yuletide cheer! 🎄",
    "Merry Christmas! Toast to joy! 🥂",
    "May your candles glow warmly! 🕯️",
    "Sending you poinsettia blessings! 🌺",
    "Have a holly-decorated holiday! 🍃",
    "Wishing you snowflake kisses! ❄️",
    "Merry Christmas! Spread the love! 💕",
    "May your season be filled with songs! 🎶",
    "Sending you North Pole wishes! 🧭",
    "Have a winter wonderland Christmas! 🏔️",
    "Wishing you elf-sized excitement! 🧝",
    "Merry Christmas! Believe in magic! 🌟",
    "May your Christmas morning be magical! 🌅",
    "Sending you festive flavors! 🍰",
    "Have a Christmas cookie kind of day! 🍪",
    "Wishing you advent calendar surprises! 📅",
    "Merry Christmas! Count your blessings! 🙏"
];

// 100+ Long Christmas Wishes
const longWishes = [
    "May your Christmas sparkle with moments of love, laughter and goodwill. May the year ahead be full of contentment and joy. Have a Merry Christmas!",
    "Wishing you a magical and blissful holiday season! May this festive season bring you closer to all those you treasure in your heart. Merry Christmas!",
    "May the spirit of Christmas bring you peace, the gladness of Christmas give you hope, and the warmth of Christmas grant you love. Have a wonderful holiday!",
    "Sending you warm wishes for a wonderful Christmas filled with love, laughter, and all the things that make this season special. May your heart be filled with joy!",
    "May your Christmas be wrapped in happiness and tied with love. Wishing you a joyous holiday season filled with cherished memories and beautiful moments!",
    "Wishing you all the joy your holiday can hold! May the beauty of the Christmas season fill your home with happiness and your heart with love!",
    "May the magic of Christmas fill every corner of your heart and home with joy and happiness. Here's to a season of blessings and wonder!",
    "Sending you Christmas greetings wrapped in love and tied with the best wishes for the coming year. May your holidays be truly special!",
    "May your Christmas be filled with special moments, warmth, peace, and happiness. Wishing you a blessed holiday season and a prosperous New Year!",
    "Wishing you a Christmas that's bright with hope, rich with love, and blessed with joy. May all your dreams come true this festive season!",
    "May the Christmas season fill your heart with love, your home with joy, and your life with laughter. Wishing you everything wonderful this holiday!",
    "Sending you wishes for a Christmas filled with the warmth of loved ones and the joy of the season. May your heart overflow with happiness!",
    "May your Christmas be merry and your New Year be bright. Wishing you all the best that life has to offer during this magical season!",
    "Wishing you a holiday season that's merry and bright, and a New Year filled with delight, prosperity, and endless possibilities!",
    "May the wonder of the first Christmas, the joy of this Christmas, be with you throughout the year. Have a blessed and beautiful holiday!",
    "Sending you love, joy, and peace this Christmas season. May your holidays be truly magical and filled with beautiful memories!",
    "May your Christmas be touched with beauty, filled with love, and blessed with every good thing. Wishing you a wonderful festive season!",
    "Wishing you a Christmas filled with sweet surprises and all the things that bring you joy. May this season be your best one yet!",
    "May the spirit of Christmas bring you and your family endless joy and happiness. Wishing you precious moments and treasured memories!",
    "Sending you warmest wishes for a wonderful Christmas and a Happy New Year filled with success, prosperity, and boundless happiness!",
    "May your Christmas be filled with the true miracles and meaning of this beautiful time of year. Wishing you peace, love, and joy!",
    "Wishing you peace, love, and joy this Christmas season and throughout the coming year. May your holidays be blessed and bright!",
    "May the melody and spirit of the holidays fill your home with love and peace. Wishing you a Christmas that's merry in every way!",
    "Sending you heartfelt wishes for a Christmas that's as special as you are. May your holiday be filled with love and laughter!",
    "May your Christmas be blessed with love and surrounded by family and friends. Wishing you all the happiness this season can bring!",
    "Wishing you a season of joy, a season of cheer, and a wonderful start to the coming year. May your Christmas be absolutely perfect!",
    "May the Christmas candles light your way to happiness, success, and fulfillment. Wishing you a brilliant and beautiful holiday season!",
    "Sending you warm wishes and a big hug for a wonderful Christmas celebration. May your heart be filled with the magic of the season!",
    "May your Christmas be wrapped in happiness and filled with laughter and love. Wishing you a holiday that's everything you hope for!",
    "Wishing you a holiday season filled with love, laughter, and all your favorite things. May Christmas bring you joy that lasts all year!",
    "May the Christmas spirit stay with you throughout the year, bringing happiness and joy to everything you do. Have a wonderful holiday!",
    "Sending you Christmas wishes filled with love, peace, and all things wonderful. May your celebration be magical and memorable!",
    "May your Christmas be merry, your New Year be bright, and your blessings be countless. Wishing you everything beautiful this season!",
    "Wishing you a Christmas filled with good food, great company, and beautiful memories. May your holiday be absolutely spectacular!",
    "May the peace and joy of Christmas be with you today and throughout the New Year. Wishing you a blessed and happy holiday!",
    "Sending you the warmest Christmas greetings and best wishes for a prosperous New Year. May your days be merry and bright!",
    "May your Christmas be filled with moments that warm your heart and make you smile. Wishing you a holiday season full of delight!",
    "Wishing you a festive season that sparkles with fun and happiness. May all your Christmas wishes come true in wonderful ways!",
    "May the magic of Christmas bring endless joy to you and your loved ones. Wishing you a celebration that's truly extraordinary!",
    "Sending you love and cheer for a wonderful Christmas and a fantastic New Year. May your holidays be filled with precious moments!",
    "May your Christmas be filled with blessings, both great and small, and may you treasure them all. Wishing you a joyful holiday!",
    "Wishing you a Christmas season filled with love, light, and laughter. May your heart be touched by the magic of this special time!",
    "May your heart be touched by the magic of Christmas and filled with love. Wishing you a holiday that's merry, bright, and beautiful!",
    "Sending you wishes for a holiday season that's merry, bright, and unforgettable. May Christmas bring you everything you desire!",
    "May your Christmas be as sweet as candy canes and as bright as twinkling lights. Wishing you a holiday filled with wonder!",
    "Wishing you a joyous Christmas celebration and a prosperous year ahead. May your holidays be blessed with love and happiness!",
    "May the Christmas season bring you closer to all those you treasure in your heart. Wishing you warmth, love, and endless joy!",
    "Sending you warm wishes for a holiday filled with peace, love, and joy. May your Christmas be everything you hope for and more!",
    "May your Christmas be blessed with the presence of loved ones and the comfort of warm traditions. Wishing you a beautiful holiday!",
    "Wishing you a magical Christmas that fills your heart with childlike wonder and joy. May the season bring you countless blessings!",
    "May the spirit of giving fill your heart with warmth and happiness this Christmas. Wishing you a season of love and generosity!",
    "Sending you wishes for a Christmas celebration filled with laughter, love, and unforgettable moments. Have a wonderful holiday!",
    "May your Christmas morning be filled with joy and your holiday season be blessed with peace. Wishing you all the best!",
    "Wishing you a Christmas that shines with love and sparkles with joy. May your heart be filled with the wonder of the season!",
    "May the beauty of Christmas decorate your world with happiness and love. Wishing you a holiday that's truly magnificent!",
    "Sending you Christmas blessings and wishes for a New Year filled with hope and promise. May your dreams come true!",
    "May your home be filled with the joy of the Christmas spirit and the love of family and friends. Have a blessed holiday!",
    "Wishing you a Christmas wrapped in love and tied with joy. May your celebration be filled with warmth and happiness!",
    "May the lights of Christmas brighten your path and guide you to happiness and success. Wishing you a glorious holiday!",
    "Sending you warm holiday wishes and hopes for a New Year filled with prosperity and joy. Merry Christmas to you and yours!",
    "May your Christmas be a time of reflection, gratitude, and joy. Wishing you peace, love, and countless blessings!",
    "Wishing you a Christmas filled with the warmth of sunshine, the happiness of smiles, and the sounds of laughter!",
    "May the magic of the season fill your heart with love and your home with laughter. Wishing you a wonderful Christmas!",
    "Sending you wishes for a holiday season filled with cherished moments and treasured memories. Have a beautiful Christmas!",
    "May your Christmas be filled with sweet surprises, joyful celebrations, and precious time with loved ones. Happy holidays!",
    "Wishing you a season of gladness, a season of cheer, and a wonderful Christmas filled with love throughout the year!",
    "May the Christmas season shower you with happiness, love, and all the good things life has to offer. Merry Christmas!",
    "Sending you warm wishes for a Christmas that's merry and a New Year that's filled with promise and possibility!",
    "May your Christmas sparkle with joy and laughter. Wishing you a holiday season that's merry, bright, and beautiful!",
    "Wishing you a Christmas filled with the comfort of loved ones, the joy of giving, and the peace of the season!",
    "May your heart be light, your season be bright, and your Christmas be filled with delight. Have a wonderful holiday!",
    "Sending you wishes for a Christmas celebration that's full of love, laughter, and all your favorite things!",
    "May the wonder of Christmas fill your heart with happiness and your life with blessings. Wishing you joy always!",
    "Wishing you a Christmas that's merry in every way and a New Year that brings you everything you're hoping for!",
    "May your Christmas be decorated with cheer and filled with love. Wishing you a blessed and beautiful holiday season!",
    "Sending you warmth, love, and light this Christmas. May your holiday be filled with magical moments and sweet memories!",
    "May the spirit of Christmas bring you peace, the joy of Christmas give you hope, and the magic of Christmas fill your heart!",
    "Wishing you a Christmas surrounded by loved ones and filled with moments that make your heart sing. Happy holidays!",
    "May your Christmas be filled with blessings from above and surrounded by the people you love. Have a joyous celebration!",
    "Sending you wishes for a holiday season that's filled with love, laughter, and all the magic Christmas can bring!",
    "May your Christmas be bright with joy, rich with love, and blessed with peace. Wishing you a wonderful festive season!",
    "Wishing you a Christmas that's merry and bright, and a New Year filled with hope, happiness, and beautiful moments!",
    "May the Christmas season bring you closer to your dreams and fill your heart with love. Have a blessed holiday!",
    "Sending you Christmas cheer and warm wishes for a New Year filled with prosperity, health, and happiness!",
    "May your Christmas be wrapped in love, tied with joy, and filled with all the wonderful things that make life beautiful!",
    "Wishing you a holiday season that's filled with the warmth of family, the joy of friends, and the love of the season!",
    "May your Christmas be merry, your heart be light, and your New Year be bright with promise and possibilities!",
    "Sending you wishes for a Christmas celebration that's filled with love, laughter, and countless precious moments!",
    "May the joy of Christmas fill your home, the love of family warm your heart, and the spirit of the season bless your life!",
    "Wishing you a Christmas that's magical in every way and a New Year that brings you closer to all your dreams!",
    "May your Christmas be filled with wonder, your heart with love, and your life with blessings. Have a beautiful holiday!",
    "Sending you warm holiday wishes and hopes that the New Year brings you everything your heart desires. Merry Christmas!",
    "May the Christmas lights guide you to happiness, the Christmas joy fill your heart, and the Christmas spirit bless your life!",
    "Wishing you a Christmas season filled with love, laughter, and all the little things that make this time of year so special!",
    "May your Christmas be blessed with love, wrapped in joy, and filled with peace. Wishing you a wonderful holiday celebration!",
    "Sending you wishes for a holiday that's merry and bright, filled with love, laughter, and everything that makes you happy!",
    "May the magic of Christmas transform every day into a celebration and fill your heart with endless joy. Happy holidays!",
    "Wishing you a Christmas that's filled with beautiful moments, cherished memories, and all the love your heart can hold!"
];

// State
let currentBgIndex = 0;
let currentBodyBgIndex = 0;
let recipientName = '';
let wishType = 'short';

// DOM Elements
const nameForm = document.getElementById('nameForm');
const recipientInput = document.getElementById('recipientName');
const cardDisplay = document.getElementById('cardDisplay');
const cardBackground = document.getElementById('cardBackground');
const cardMessage = document.getElementById('cardMessage');
const cardRecipient = document.getElementById('cardRecipient');
const loadingSpinner = document.getElementById('loadingSpinner');

// Snowflakes
function createSnowflakes() {
    const container = document.getElementById('snowflakes-container');
    const count = window.innerWidth > 768 ? 50 : 30;
    
    for (let i = 0; i < count; i++) {
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
    currentBodyBgIndex = (currentBodyBgIndex + 1) % bodyBackgrounds.length;
    document.body.style.backgroundImage = `url('${bodyBackgrounds[currentBodyBgIndex]}')`;
}

// Auto-change body background every 10 seconds
setInterval(changeBodyBackground, 10000);

// Get random wish
function getRandomWish() {
    const wishes = wishType === 'short' ? shortWishes : longWishes;
    return wishes[Math.floor(Math.random() * wishes.length)];
}

// Load card background
function loadBackground(index) {
    loadingSpinner.style.display = 'block';
    const img = new Image();
    img.onload = () => {
        cardBackground.src = backgroundImages[index];
        loadingSpinner.style.display = 'none';
    };
    img.onerror = () => {
        currentBgIndex = (index + 1) % backgroundImages.length;
        loadBackground(currentBgIndex);
    };
    img.src = backgroundImages[index];
}

// Generate card
nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    recipientName = recipientInput.value.trim();
    wishType = document.querySelector('input[name="wishType"]:checked').value;
    
    if (recipientName) {
        cardMessage.textContent = getRandomWish();
        cardRecipient.textContent = recipientName;
        currentBgIndex = Math.floor(Math.random() * backgroundImages.length);
        loadBackground(currentBgIndex);
        cardDisplay.style.display = 'block';
        setTimeout(() => {
            cardDisplay.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
});

// Change background
document.getElementById('changeBackgroundBtn').addEventListener('click', () => {
    currentBgIndex = (currentBgIndex + 1) % backgroundImages.length;
    loadBackground(currentBgIndex);
});

// Randomize wish
document.getElementById('randomizeWishBtn').addEventListener('click', () => {
    cardMessage.style.opacity = '0';
    setTimeout(() => {
        cardMessage.textContent = getRandomWish();
        cardMessage.style.opacity = '1';
    }, 300);
});

// Change name
document.getElementById('changeNameBtn').addEventListener('click', () => {
    cardDisplay.style.display = 'none';
    recipientInput.value = '';
    recipientInput.focus();
    document.getElementById('generator').scrollIntoView({ behavior: 'smooth' });
});

// Share WhatsApp
document.getElementById('shareWhatsApp').addEventListener('click', () => {
    const msg = `🎄 Check out this beautiful Christmas card I created for ${recipientName} on ToluCards! ✨\n\nCreate yours: ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
});

// Share Facebook
document.getElementById('shareFacebook').addEventListener('click', () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
});

// Share Twitter
document.getElementById('shareTwitter').addEventListener('click', () => {
    const text = `🎄 I created a beautiful Christmas card for ${recipientName} on ToluCards! ✨`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
});

// Download card
document.getElementById('downloadCard').addEventListener('click', () => {
    const container = document.getElementById('cardContainer');
    loadingSpinner.style.display = 'block';
    
    html2canvas(container, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `ToluCard_${recipientName.replace(/\s+/g, '_')}_2025.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        loadingSpinner.style.display = 'none';
    });
});

// Copy link
document.getElementById('copyLink').addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
        const btn = document.getElementById('copyLink');
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => btn.innerHTML = original, 2000);
    });
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(26, 26, 46, 0.98)';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        nav.style.background = 'rgba(26, 26, 46, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

// Initialize
createSnowflakes();
backgroundImages.forEach(src => {
    const img = new Image();
    img.src = src;
});
