# � ToluCards - Year-Round Seasonal Greeting Cards 2026

A fully responsive, interactive seasonal greeting card web application that allows users to personalize and share greetings for every month of the year, featuring 12 unique themes from New Year to Christmas.

## 🌟 All-Year Events & Themes

### Monthly Celebrations
- **January** 🎊 - New Year celebrations
- **February** ❤️ - Valentine's Day romance
- **March** 🍀 - Spring & St. Patrick's Day
- **April** 🐰 - Easter & Spring renewal
- **May** 💐 - Mother's Day appreciation
- **June** 👨 - Father's Day celebration
- **July** 🇺🇸 - Independence Day & Summer
- **August** ☀️ - Summer fun & sunshine
- **September** 🍂 - Fall & Back to School
- **October** 🎃 - Halloween spooky fun
- **November** 🦃 - Thanksgiving gratitude
- **December** 🎄 - Christmas & Holidays

## 🎅 Core Features

### Dynamic Theme System
- **Auto-Detection**: Automatically displays the current month's theme
- **Manual Selection**: Choose any month/event from the dropdown
- **12 Unique Themes**: Each month has custom colors, icons, particles, and messages
- **Smooth Transitions**: Seamless theme switching with CSS animations

### Personalized Greetings
- **200+ Unique Messages**: Seasonal wishes for every occasion
- **Short & Long Options**: Choose between quick messages or heartfelt notes
- **50+ Backgrounds**: Curated seasonal images from Unsplash & Pexels
- **Custom Names**: Personalize cards with recipient's name

### Interactive Elements
- ✨ **Change Background**: Cycle through beautiful seasonal scenes
- 🎲 **Randomize Messages**: Get new wishes instantly
- ✏️ **Change Name**: Edit recipient name anytime
- 🎭 **Seasonal Particles**: Animated snowflakes, hearts, leaves, bats, and more

### Sharing Options
- 📱 **WhatsApp**: Share directly with pre-filled message
- 📘 **Facebook**: Post to Facebook timeline
- 🐦 **Twitter**: Tweet your seasonal card
- 💾 **Download**: Save card as high-quality PNG image
- 🔗 **Copy Link**: Copy shareable link to clipboard

## 🚀 Getting Started

### Installation
1. Simply open `index.html` in any modern web browser
2. No server or dependencies required - it's a standalone application!

### Usage
1. **Select Theme**: Choose your month/event or use auto-detection
2. **Enter Name**: Type the recipient's name in the input field
3. **Choose Message Type**: Pick short & sweet or long & heartfelt
4. **Generate Card**: Click "Generate My ToluCard" or press Enter
5. **Customize**: 
   - Click "Change Background" for different scenes
   - Click "New Message" for different wishes
   - Click "Change Name" to create another card
6. **Share**: Use the sharing buttons to spread joy!

## 🎨 Design Features

### Color Schemes (per month)
- **January**: Gold & Navy (New Year elegance)
- **February**: Pink & Red (Valentine's romance)
- **March**: Green & Gold (Irish luck)
- **April**: Pink & Purple (Easter pastels)
- **May**: Pink & Rose (Mother's Day flowers)
- **June**: Royal Blue & Gold (Father's Day honor)
- **July**: Red, White & Blue (Patriotic pride)
- **August**: Gold & Orange (Summer sunshine)
- **September**: Brown & Gold (Autumn harvest)
- **October**: Orange & Purple (Halloween spooky)
- **November**: Brown & Gold (Thanksgiving warmth)
- **December**: Red & Green (Christmas festivity)

### Seasonal Particles
- ❄️ Snowflakes (December)
- ❤️ Hearts (February)
- 🍀 Clovers (March)
- 🌸 Petals (April)
- 🌺 Flowers (May)
- ⭐ Stars (June, July)
- ☀️ Sunshine (August)
- 🍂 Leaves (September, November)
- 🦇 Bats (October)
- ✨ Fireworks (January)

### Typography
- **Google Fonts**: 
  - Playfair Display (elegant headings)
  - Great Vibes (decorative script)
  - Poppins (clean body text)
  - Montserrat (bold accents)

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 576px
- **Tablet**: 577px - 768px
- **Desktop**: 769px - 1200px
- **Large Desktop**: 1201px+

## 🌐 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with dynamic IDs
- **CSS3**: Custom properties (CSS variables) for theming
- **Vanilla JavaScript**: Theme management & interactivity
- **Bootstrap 5**: Responsive grid and utilities
- **Font Awesome 6**: Seasonal icons
- **AOS**: Scroll animations
- **html2canvas**: Card download feature
- **Unsplash/Pexels**: High-quality seasonal images

## 📦 Dependencies (CDN)

All dependencies loaded via CDN - no installation required:
- Bootstrap 5.3.2
- Font Awesome 6.4.0
- AOS 2.3.1
- html2canvas 1.4.1
- Google Fonts

## 🎯 Performance

- **Auto Theme Detection**: Loads current month on startup
- **Image Preloading**: Backgrounds preload for smooth transitions
- **Optimized Animations**: Smooth 60fps animations
- **Mobile Optimized**: Reduced particles on mobile devices
- **CSS Variables**: Fast theme switching without page reload

## 🔮 Technical Highlights

### Theme System Architecture
```javascript
monthlyThemes = {
    0-11: {
        name, colors, icons, particles,
        heroBadgeText, heroOccasion, heroSubtitle
    }
}
```

### Dynamic Data Structures
- `monthlyBackgrounds`: Seasonal image arrays per month
- `monthlyBodyBackgrounds`: Large hero backgrounds
- `monthlyShortWishes`: Quick greetings (8-12 per month)
- `monthlyLongWishes`: Heartfelt messages (3-5 per month)

### Core Functions
- `applyTheme(monthIndex)`: Applies all theme elements
- `updateParticles(particleType)`: Creates seasonal animations
- `getRandomWish(monthIndex)`: Returns month-specific message
- `loadBackground(monthIndex, bgIndex)`: Loads themed backgrounds

## 📄 License

Free to use for personal and commercial projects.

## 🙏 Credits

- **Background Images**: [Unsplash](https://unsplash.com) & [Pexels](https://pexels.com)
- **Icons**: [Font Awesome](https://fontawesome.com)
- **Fonts**: [Google Fonts](https://fonts.google.com)
- **Developer**: ToluTek | Faithinator

## 💝 Contributing

Feel free to fork, modify, and enhance this project!

## 📞 Support

For issues or questions, please open an issue in the repository.

---

**Made with ❤️ for every season | Celebrate all year! 🎉🎊🎈**
