// Script to generate PNG icons from canvas
// Run this in browser console or use Node.js with canvas library

const { createCanvas } = require('canvas');
const fs = require('fs');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

sizes.forEach(size => {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Background gradient (simulate with solid color)
    ctx.fillStyle = '#667eea';
    ctx.fillRect(0, 0, size, size);
    
    // Border
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = size * 0.05;
    ctx.strokeRect(size * 0.05, size * 0.05, size * 0.9, size * 0.9);
    
    // Circle background for emoji
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(size / 2, size / 2.5, size * 0.25, 0, Math.PI * 2);
    ctx.fill();
    
    // Text "Bé"
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${size * 0.25}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Bé', size / 2, size * 0.75);
    
    // Save
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(`icon-${size}x${size}.png`, buffer);
    console.log(`Generated icon-${size}x${size}.png`);
});
