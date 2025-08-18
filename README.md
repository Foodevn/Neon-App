# 🎨 Neon App - Real-time Collaborative Whiteboard

> **"Team work energetic"** - Where creativity meets collaboration in real-time!

A powerful, modern collaborative whiteboard application built with cutting-edge technologies. Create, collaborate, and bring your ideas to life with your team in real-time.

## ✨ Features

🚀 **Real-time Collaboration**
- Live cursor tracking with user presence
- Simultaneous multi-user editing
- Real-time synchronization across all devices

🎨 **Rich Drawing Tools**
- Multiple drawing tools (pen, shapes, text)
- Color picker with unlimited color options
- Layer management and selection tools
- Perfect freehand drawing experience

🔐 **Secure Authentication**
- User authentication powered by Clerk
- Organization-based access control
- Secure user sessions and data protection

📋 **Board Management**
- Create unlimited boards
- Organize boards by favorites
- Search and filter functionality
- Beautiful board previews

🎯 **Modern UI/UX**
- Clean, intuitive interface
- Responsive design for all devices
- Dark/Light theme support
- Smooth animations and interactions

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI Components
- **Real-time**: LiveBlocks for collaborative features
- **Database**: Convex for serverless backend
- **Authentication**: Clerk for user management
- **State Management**: Zustand
- **Icons**: Lucide React

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/realtime-miro.git
cd realtime-miro
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file and add your API keys:
```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret

# Convex Database
NEXT_PUBLIC_CONVEX_URL=your_convex_url

# LiveBlocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_key
LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret
```

4. **Start the development server**
```bash
npm run dev
```

5. **Set up Convex (Database)**
```bash
npx convex dev
```

Open [https://realtime.hphucdev.id.vn/](https://realtime.hphucdev.id.vn/) to see your application!

## 🎯 Usage

1. **Sign up/Login** - Create your account or sign in
2. **Create a Board** - Start a new collaborative whiteboard
3. **Invite Team Members** - Share your board with colleagues
4. **Start Creating** - Use the toolbar to draw, add shapes, text, and more
5. **Collaborate in Real-time** - See live cursors and changes from team members

## 📱 Screenshots

*Add your application screenshots here to showcase the interface*

## 🌟 Why Choose Neon App?

- ⚡ **Lightning Fast**: Built with Next.js for optimal performance
- 🔄 **Real-time**: See changes instantly as your team collaborates
- 🎨 **Intuitive**: User-friendly interface that anyone can master
- 🔒 **Secure**: Enterprise-grade security for your data
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile
- 🚀 **Scalable**: Built to grow with your team and organization

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support & Contact

- 📧 Email: support@neonapp.com
- 🌐 Website: [www.neonapp.com](https://www.neonapp.com)
- 💬 Discord: [Join our community](https://discord.gg/neonapp)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Real-time features powered by [LiveBlocks](https://liveblocks.io)
- Backend by [Convex](https://convex.dev)
- Authentication by [Clerk](https://clerk.dev)
- UI Components by [Radix UI](https://radix-ui.com)

---

**Made with ❤️ for teams who value collaboration and creativity**

*Start your collaborative journey today with Neon App!*

## 🔧 Developer Notes

### Convex (Database)
```bash
# Update Convex schema
npx convex dev
```
Dashboard: https://dashboard.convex.dev/t/foodfix/realtime-miro/polite-seal-867/data?table=boards

### Clerk (Authentication)
Dashboard: https://dashboard.clerk.com/apps/app_2ukodvkLaAMTKkKm8VUkcjCcZaM/instances/ins_2ukodydmaDsArpWfatEPgy1uOfF

### LiveBlocks (Real-time)
Dashboard: https://liveblocks.io/dashboard/_BNCfmkw49Se9Lx5XxLT8

### Additional UI Components
```bash
npx shadcn-ui@latest add avatar
```

