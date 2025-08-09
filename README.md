# 🌊 Aarna Chopdekar - Portfolio Website

A beautiful, interactive portfolio website with an ocean-themed design featuring animated waves, floating particles, and smooth animations.

## 🎯 Features

- **Ocean-themed Design**: Animated waves and floating particles create an immersive ocean experience
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Interactive Animations**: 
  - Typing effect for name reveal
  - Parallax wave animations
  - 3D hover effects on cards
  - Smooth fade-in animations on scroll
- **Modern UI/UX**: Glass-morphism effects with backdrop filters and gradient backgrounds
- **Contact Integration**: Direct email and phone links for easy communication
- **Performance Optimized**: Efficient animations using requestAnimationFrame

## 🚀 Live Demo

Visit the live website: [https://aarnaaa22.github.io/Portfolio2/](https://aarnaaa22.github.io/Portfolio2/)

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file with embedded CSS and JS
└── README.md          # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Advanced animations, flexbox, grid, and responsive design
- **Vanilla JavaScript**: DOM manipulation, animations, and interactions
- **Font Awesome**: Icon library for visual elements

## 🎨 Design Elements

### Color Palette
- Primary Gradient: `#667eea` to `#764ba2`
- Text Colors: White for headers, dark gray for content
- Background: Translucent white overlays with blur effects

### Animations
- **Wave Animation**: Continuous gentle wave movement at the bottom
- **Particle Float**: Subtle floating particles across the screen
- **Card Hover**: 3D tilt effects on skill and contact cards
- **Scroll Animations**: Fade-in effects triggered by viewport intersection
- **Typing Effect**: Dynamic name reveal on page load

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎯 Sections

1. **Hero Section**: Name, tagline, and introduction with ocean background
2. **About Me**: Personal background and passion for dancing/music
3. **Technical Skills**: Programming languages and technologies with interactive cards
4. **Contact**: Email, phone, and location with clickable contact cards

## 🚀 Getting Started

### Option 1: Single File (Recommended)
1. Download the `index.html` file
2. Open it directly in any web browser
3. All styles and scripts are embedded - no additional files needed

### Option 2: Separate Files
If you prefer separate files for development:

1. Create three files in the same folder:
   - `index.html`
   - `styles.css` 
   - `script.js`

2. Copy the respective code sections from the main HTML file

3. Update the HTML file to link external files:
   ```html
   <link rel="stylesheet" href="styles.css">
   <script src="script.js"></script>
   ```

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Note**: Requires modern browser support for CSS Grid, Flexbox, and backdrop-filter

## 📞 Contact Information

- **Email**: [aarnachopdekar@gmail.com](mailto:aarnachopdekar@gmail.com)
- **Phone**: [+91 8779605853](tel:+918779605853)
- **Location**: Mumbai, India

## 🎓 About Aarna

Computer Science student (COMPS-C) with expertise in:
- **Java** (Primary language since 8th grade)
- **Python** (Problem-solving and automation)
- **C/C++** (System programming)
- **HTML/CSS** (Modern web development)

Passionate about dancing, music, and continuous learning in software development.

## 🔧 Customization

### Changing Colors
Update the CSS gradient values in the `linear-gradient` properties:
```css
background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
```

### Adding New Sections
Follow the existing section structure:
```html
<section class="your-section">
    <div class="container">
        <h2>Your Title</h2>
        <!-- Your content -->
    </div>
</section>
```

### Modifying Animations
Adjust animation parameters in the CSS:
- Wave speed: Change `animation` duration values
- Particle movement: Modify `@keyframes float` properties
- Hover effects: Update `transform` and `transition` values

## 📝 License

© 2024 Aarna Chopdekar. All rights reserved.

## 🙏 Acknowledgments

- Font Awesome for beautiful icons
- Google Fonts for typography
- CSS-Tricks for animation inspiration

---

*Exploring the beauty of life through passions and interests* 🌊✨
