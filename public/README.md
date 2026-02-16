# Public Assets Folder

This folder contains all static assets for your portfolio website.

## 📁 Folder Structure

```
public/
├── README.md (this file)
├── profile.jpg          # Add your main profile photo here
├── about.jpg            # Add your about page photo here (optional, can reuse profile.jpg)
├── resume.pdf           # Add your resume PDF here
├── favicon.ico          # Add your favicon here
├── projects/            # Create this folder and add project images
│   ├── portfolio.jpg
│   ├── little-lemon.jpg
│   └── contact-book.jpg
├── youtube/             # Create this folder and add video thumbnails
│   ├── episode1.jpg
│   ├── episode2.jpg
│   └── tutorial1.jpg
└── clients/             # Create this folder for client showcase
    ├── partha-logo.jpg
    ├── partha-website.jpg
    ├── techstart-logo.jpg
    ├── techstart-website.jpg
    └── (more client assets)
```

## 📸 Image Requirements

### Profile Photos
- **Size**: 500x500px minimum (square format)
- **Format**: JPG or PNG
- **File names**: `profile.jpg`, `about.jpg`

### Project Thumbnails
- **Size**: 600x400px (landscape format)
- **Format**: JPG or PNG
- **Location**: `public/projects/`
- **File names**: Use descriptive names like `portfolio.jpg`, `restaurant-app.jpg`

### YouTube Thumbnails
- **Size**: 400x225px (16:9 ratio)
- **Format**: JPG or PNG
- **Location**: `public/youtube/`
- **File names**: Use descriptive names like `django-tutorial.jpg`, `episode1.jpg`

### Resume
- **Format**: PDF only
- **Size**: Under 5MB
- **File name**: `resume.pdf`

### Favicon
- **Size**: 32x32px or 64x64px
- **Format**: .ico or .png
- **File name**: `favicon.ico`

## 🚀 How to Add Images

1. **Create subfolders** (if they don't exist):
   - Right-click on `public` folder
   - Create new folders: `projects` and `youtube`

2. **Add your images**:
   - Drag and drop your images into the appropriate folders
   - Or copy/paste them into the folders

3. **Update code references**:
   - See `CUSTOMIZATION_CHECKLIST.md` for exact locations
   - Replace placeholder URLs with `/your-image.jpg`

## 📝 Example Usage in Code

```typescript
// For images in public root
<Image src="/profile.jpg" alt="Profile" />

// For images in subfolders
<Image src="/projects/portfolio.jpg" alt="Project" />
<Image src="/youtube/episode1.jpg" alt="Video" />
```

## ⚠️ Important Notes

- File names are **case-sensitive** on production servers
- Use lowercase and hyphens: `my-project.jpg` ✅ not `My Project.jpg` ❌
- Optimize images before uploading (compress them)
- Don't use spaces in file names
- The `/public` folder is served at the root URL

## 🔗 Next Steps

After adding your images:
1. Update image paths in the code (see CUSTOMIZATION_CHECKLIST.md)
2. Test locally: `npm run dev`
3. Check all images load correctly
4. Deploy to production

---

Need help? Check the main CUSTOMIZATION_CHECKLIST.md file for detailed instructions.
