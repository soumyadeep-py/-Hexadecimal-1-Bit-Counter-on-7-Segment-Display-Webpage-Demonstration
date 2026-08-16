# Hexadecimal Counter on 7-Segment Display

A web-based visualization of a hexadecimal counter displayed on a 7-segment LED display. This project demonstrates how digital displays work by creating an interactive counter that cycles through hexadecimal values (0-F) using authentic 7-segment display rendering.

## 🌐 Live Demo

**Check out the live website:** https://soumyadeep-py.github.io/-Hexadecimal-1-Bit-Counter-on-7-Segment-Display-Webpage-Demonstration/

See the counter in action - watch it cycle through hexadecimal digits on a realistic 7-segment display!

## 🎨 Features

### Core Functionality
- 📊 **7-Segment Display** - Authentic LED-style digit display
- 🔄 **Hexadecimal Counter** - Counts 0-9, A-F (16 values)
- ⏱️ **Auto-Incrementing** - Counter automatically cycles through values
- ⌨️ **Interactive Controls** - Manually increment/reset the counter
- 🎯 **Real-time Updates** - Smooth transitions between digits

### Visual Features
- 💡 LED-style segments with glowing effects
- 🎨 Customizable colors
- 📱 Responsive design (works on all devices)
- ✨ Smooth animations between digit transitions
- 🌟 Realistic 7-segment segment activation

## 📋 Project Structure

```
Hexadecimal Counter/
├── index.html       # HTML structure with display
├── style.css        # 7-segment styling and animations
├── script.js        # Counter logic and interactivity
└── README.md        # This file
```

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - 7-segment display styling with nth-child selectors
- **JavaScript (ES6+)** - Counter logic and DOM manipulation
- **CSS Animations** - Smooth transitions and glowing effects

## 🚀 How to Use

### Viewing the Counter
1. Open `index.html` in a web browser
2. Watch the counter automatically increment through hexadecimal values
3. The 7-segment display shows each digit in classic LED style

### Controls
- **Increment Button** - Manually advance the counter by 1
- **Reset Button** - Set counter back to 0
- **Speed Control** (if available) - Adjust auto-increment speed

## 💡 Understanding 7-Segment Displays

A 7-segment display has 7 individual LED segments arranged in a figure-8 pattern:

```
  aaa
 f   b
  ggg
 e   c
  ddd
```

**Segment Layout:**
- **Top horizontal**: a
- **Top-right vertical**: b
- **Bottom-right vertical**: c
- **Bottom horizontal**: d
- **Bottom-left vertical**: e
- **Top-left vertical**: f
- **Middle horizontal**: g

Each segment (a-g) can be individually lit to display any hexadecimal digit (0-F):
- **0**: segments a, b, c, d, e, f (all except g)
- **1**: segments b, c
- **2**: segments a, b, g, e, d
- **3**: segments a, b, g, c, d
- **4**: segments f, g, b, c
- **5**: segments a, f, g, c, d
- **6**: segments a, f, g, e, d, c
- **7**: segments a, b, c
- **8**: segments a, b, c, d, e, f, g (all segments)
- **9**: segments a, b, c, d, f, g
- **A**: segments a, b, c, e, f, g
- **B**: segments a, d, e, f, g, b, c
- **C**: segments a, d, e, f
- **D**: segments a, b, c, d, e, g
- **E**: segments a, d, e, f, g
- **F**: segments a, e, f, g

## 🎯 Code Logic

### Segment Mapping
Each hexadecimal digit maps to specific LED segments:
```javascript
Digit 0 → segments: a, b, c, d, e, f
Digit 1 → segments: b, c
Digit 2 → segments: a, b, g, e, d
Digit 3 → segments: a, b, g, c, d
// ... continues for A-F
```

### Counter Logic
- Current value stored in JavaScript variable
- Modulo 16 (%) ensures wrapping from F back to 0
- CSS classes control which segments light up
- Smooth transitions between values

## 🎨 Styling Details

### Display Styling
- Classic 7-segment LED appearance
- Red/orange segment color (customizable)
- Glow effects for active segments
- Dark background for contrast
- Responsive sizing based on viewport

### Animation
- Smooth fade/transition effects
- Segment lighting animations
- Optional counter speed animation

## 📱 Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

No special browser features required - works everywhere!

## 🎓 Learning Objectives

This project demonstrates:
- CSS nth-child selectors for targeting specific elements
- CSS Grid/Flexbox for layout
- JavaScript timing and intervals (setInterval)
- Modulo arithmetic for wrapping values
- DOM class manipulation
- CSS animations and transitions
- Responsive design principles
- Git version control (bonus!)

## 🧮 Hexadecimal Number System

Hexadecimal (base-16) uses digits 0-9 and letters A-F:
- **0-9** = 0-9 (decimal)
- **A** = 10
- **B** = 11
- **C** = 12
- **D** = 13
- **E** = 14
- **F** = 15

Perfect for displaying binary data in a compact format!

## 📝 Example Workflow

```
1. Counter starts at 0
   → Display shows "0" with segments a,b,c,d,e,f lit

2. Auto-increment triggers
   → Counter becomes 1
   → Display updates to "1" with segments b,c lit

3. Counter reaches 9
   → Next increment shows "A" (hexadecimal for 10)
   → Different segment pattern activates

4. Counter reaches F (15)
   → Next increment wraps to "0"
   → Cycle repeats
```

## 🔧 Customization Options

You can modify:
- **Counter speed** - Change increment interval
- **Display color** - Modify segment LED color
- **Display size** - Scale the display larger/smaller
- **Background color** - Change contrast background
- **Font style** - Customize digit appearance

## 🚀 Future Enhancements

- [ ] Display multiple digits (multi-digit counter)
- [ ] Binary display mode
- [ ] Decimal display mode
- [ ] Adjustable speed with slider
- [ ] Color picker for segment color
- [ ] Sound effects for increments
- [ ] Count-down functionality
- [ ] Timer mode
- [ ] Statistics/history tracking

## 👨‍💻 Author Notes

Built as an educational project to understand:
- How physical 7-segment displays work
- CSS techniques for creative layouts
- JavaScript timing and event handling
- Digital electronics concepts

Perfect for learning web development or understanding embedded systems!

## 📚 References

- 7-Segment Display: https://en.wikipedia.org/wiki/Seven-segment_display
- Hexadecimal System: https://en.wikipedia.org/wiki/Hexadecimal

## 🎥 Content Creator

YouTube Channel: https://youtube.com/@BitsandVolt

Support the creator and explore more tech content!

## 📄 License

Free to use and modify for personal or educational purposes.

---

Enjoy visualizing how digital displays work! 🎆