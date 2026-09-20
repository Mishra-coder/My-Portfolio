import successMantraImg from '../assets/success_mantra_new.webp';
import karoPitchImg from '../assets/karo_pitch_web.webp';
import akoinWebImg from '../assets/akoin_web.webp';
import zappifyMockupImg from '../assets/zappify_mockup.webp';
import aromaLuxeImg from '../assets/aroma_luxe_web.webp';
import bgRemoverImg from '../assets/bg_remover.webp';

/**
 * Single source of truth for every project card on the site.
 * `category` drives the Projects filter, `kind` is the label shown on the home bento.
 * Order matters: the home bento layout (card-1 … card-6) follows this order.
 */
export const projects = [
    {
        title: "Success Magis",
        category: "Full Stack",
        kind: "Full-Stack Web App",
        subtitle: "Coaching & Student Learning Management System",
        description: "Scalable educational platform with authentication, class scheduling, interactive resources, and administrative control panels.",
        image: successMantraImg,
        link: "https://success-mantra-dm.vercel.app/",
        github: "https://github.com/Mishra-coder/Coaching_Website",
        tags: ["React", "Node.js", "Express", "MongoDB", "Auth"],
        featured: true
    },
    {
        title: "Karo Pitch - Startup Hub",
        category: "Frontend",
        kind: "Startup Pitch Platform",
        subtitle: "Founder & Investor Pitch Platform",
        description: "Pitch deck showcase and founder discovery application geared towards empowering early-stage startups.",
        image: karoPitchImg,
        link: "https://karo-pitch-liard.vercel.app/",
        github: "https://github.com/Mishra-coder/Karo_Pitch",
        tags: ["React", "Tailwind CSS", "Startup Showcase"],
        featured: false
    },
    {
        title: "Institute of Digital Risk (IDR)",
        category: "Frontend",
        kind: "Corporate Web Platform",
        subtitle: "Corporate Cybersecurity & Digital Risk Platform",
        description: "Clean institutional interface designed for risk mitigation services, professional programs, and modern corporate aesthetics.",
        image: akoinWebImg,
        link: "https://akoin-seven.vercel.app/",
        github: "https://github.com/Mishra-coder/AKOIN_",
        tags: ["React", "Modern CSS", "Responsive"],
        featured: false
    },
    {
        title: "Zappify - Footwear Store",
        category: "Mobile",
        kind: "Mobile E-Commerce",
        subtitle: "Premium Mobile E-Commerce Experience",
        description: "Fluid cross-platform mobile shopping experience with cart management, animated transitions, and responsive layout.",
        image: zappifyMockupImg,
        link: "https://zappify-sepia.vercel.app/",
        github: "https://github.com/Mishra-coder/Zappify",
        preview: "https://shorturl.at/17h2f",
        tags: ["React Native", "Expo", "TypeScript", "UI/UX"],
        featured: true
    },
    {
        title: "Aroma Luxe",
        category: "Mobile",
        kind: "Mobile Application",
        subtitle: "Luxury Fragrance Mobile Application",
        description: "High-end product discovery app featuring sleek dark aesthetic, filtered fragrance catalog, and fluid product sheets.",
        image: aromaLuxeImg,
        link: "https://perfume-app-h3ct.vercel.app/",
        github: "https://github.com/Mishra-coder/Perfume_APP",
        tags: ["React Native", "Tailwind", "Mobile UX"],
        featured: false
    },
    {
        title: "AI Background Remover",
        category: "Frontend",
        kind: "Image Processing Tool",
        subtitle: "Instant Image Processing Tool",
        description: "Fast in-browser utility for isolating foreground subjects with zero latency and high fidelity exports.",
        image: bgRemoverImg,
        link: "https://bg-remover-dm.vercel.app/",
        github: "https://github.com/Mishra-coder/BG.Remover",
        tags: ["React", "Image Processing API", "Vite"],
        featured: false
    }
];
