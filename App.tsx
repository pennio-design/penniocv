import React, { useState, useRef } from 'react';
import { 
  Printer, 
  Upload, 
  X, 
  Sun, 
  Moon, 
  Edit3, 
  Check, 
  Copy, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Globe, 
  Eye, 
  EyeOff, 
  Camera
} from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  points: string[];
}

interface BrandItem {
  name: string;
  desc: string;
}

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [editable, setEditable] = useState<boolean>(false);
  const [showPhoto, setShowPhoto] = useState<boolean>(true);
  const [headshot, setHeadshot] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [content, setContent] = useState({
    name: "PAUL OYATOWO",
    title: "CREATIVE STRATEGIST & BRAND ARCHITECT",
    location: "Ibadan, Oyo State, Nigeria",
    email: "pauloyatowo@gmail.com",
    phone: "08101833138",
    linkedin: "linkedin.com/in/pauloyatowo",
    linkedinUrl: "https://linkedin.com/in/pauloyatowo",
    portfolio: "pennio-design.github.io/portfolio.pdf",
    portfolioUrl: "https://pennio-design.github.io/portfolio.pdf",
    
    profile: "Brand Architect and creative strategist building structured, meaning-first brand systems for fintech, technology, and lifestyle companies. Translates strategic positioning into visual languages and motion touchpoints. Proven track record across internal creative teams, remote brand initiatives, and independent brand architecture engagements for vision-driven founders.",
    
    skills: {
      brandStrategy: [
        "Brand Systems Architecture",
        "Brand Guidelines & Documentation",
        "Creative Direction",
        "Positioning Strategy"
      ],
      visualIdentity: [
        "Identity Systems",
        "Typography Hierarchy",
        "Color System Architecture",
        "Visual Language Systems"
      ],
      motionProduction: [
        "Motion Graphics",
        "Animated Content Systems",
        "Campaign Direction",
        "3D Design (Blender)"
      ],
      tools: [
        "Figma",
        "Adobe Photoshop",
        "Blender",
        "Canva",
        "HTML / CSS"
      ]
    },

    experience: [
      {
        role: "Brand & Motion Strategist",
        company: "Infinitswap",
        period: "Feb 2026 – Present",
        type: "Full-time",
        points: [
          "Produce motion graphics and animated content aligned directly to the brand visual identity system from concept through final delivery.",
          "Direct content production cycles, including the primary product launch campaign and a modular template system for scaled output.",
          "Design multi-format social campaign collateral and carousel series, maintaining pixel-accurate consistency against master brand presentation guidelines."
        ]
      },
      {
        role: "Brand & Web Designer",
        company: "Brilla.ng",
        period: "Jan 2025 – Feb 2026",
        type: "Remote",
        points: [
          "Led web and brand design for a service booking platform, translating business targets into a unified and scalable design system.",
          "Authored comprehensive brand guidelines governing layout structure, color theory, and typographic hierarchy across digital touchpoints.",
          "Redesigned campaign communication systems for targeted verticals, shifting to bold typography-first layouts that heightened message clarity."
        ]
      },
      {
        role: "Founder & Brand Architect",
        company: "PENNIO",
        period: "Ongoing",
        type: "Studio",
        points: [
          "Founded PENNIO as a brand architecture studio for African founders, structured across product, advisory engagements, and original content.",
          "Developed a meaning-first system methodology that opens every engagement by defining brand essence and cultural positioning.",
          "Produce brand documentation, visual identity systems, and multi-slide carousel frameworks that carry a client brand system across platforms."
        ]
      }
    ] as ExperienceItem[],

    brandsWorkedWith: [
      {
        name: "Lumière",
        desc: "Full brand identity system for an artisanal resin craft brand."
      },
      {
        name: "Crux",
        desc: "Brand guidelines and positioning for a fintech intelligence platform."
      },
      {
        name: "Axion",
        desc: "Brand identity, color system, and typographic structure for a software solutions company."
      },
      {
        name: "Jo26 Events",
        desc: "Brand identity system and social campaign collateral for a boutique event planning studio."
      }
    ] as BrandItem[],

    education: {
      degree: "B.Sc. Ed. Computer Science",
      institution: "Ekiti State University",
      year: "2020"
    },

    certifications: [
      "Google Data Analytics (Coursera)",
      "Full-Funnel Advertising (Domestika)",
      "Web Development (Sololearn)",
      "Soft Skills Certification (Jobberman)"
    ],

    languages: [
      { name: "English", level: "Fluent" },
      { name: "Yoruba", level: "Native" }
    ]
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setHeadshot(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeHeadshot = () => {
    setHeadshot(null);
  };

  const handlePrint = () => {
    window.print();
  };

  const copyAsPlainText = () => {
    const text = `${content.name}
${content.title}
${content.location} | ${content.email} | ${content.phone}
Portfolio: ${content.portfolio}

PROFILE
${content.profile}

EXPERIENCE
${content.experience.map(exp => `
${exp.role} - ${exp.company} (${exp.period})
${exp.points.map(p => `* ${p}`).join('\n')}
`).join('\n')}

BRANDS WORKED WITH
${content.brandsWorkedWith.map(b => `* ${b.name}: ${b.desc}`).join('\n')}

CORE SKILLS
Strategy: ${content.skills.brandStrategy.join(', ')}
Visual Identity: ${content.skills.visualIdentity.join(', ')}
Motion: ${content.skills.motionProduction.join(', ')}
Tools: ${content.skills.tools.join(', ')}

EDUCATION
${content.education.degree} - ${content.institution} (${content.education.year})
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-200 ${darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-100 text-zinc-900'}`}>
      
      {/* Top Controls Bar */}
      <header className="print:hidden sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-4 py-3">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest px-2.5 py-1 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-sm font-semibold">
              PENNIO / System
            </span>
            <span className="text-xs font-mono text-zinc-500 hidden sm:inline">Brand Architect Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setShowPhoto(!showPhoto)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-sm border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              title="Toggle Photo Slot"
            >
              {showPhoto ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              {showPhoto ? "Hide Photo" : "Show Photo"}
            </button>

            <button
              onClick={() => setEditable(!editable)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-sm border transition ${
                editable 
                  ? 'bg-amber-500 text-white border-amber-600 font-semibold' 
                  : 'border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              {editable ? "Editing Mode Active" : "Inline Edit"}
            </button>

            <button
              onClick={copyAsPlainText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-sm border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied" : "Copy Plain Text"}
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-sm border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-600" />}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-sm bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition shadow-sm font-semibold"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
          </div>
        </div>
      </header>

      {/* Primary Printable CV Sheet */}
      <main className="max-w-4xl mx-auto my-0 sm:my-8 p-6 sm:p-12 bg-white dark:bg-zinc-900 border-x border-y sm:rounded-none border-zinc-200 dark:border-zinc-800 transition-colors shadow-xl">
        
        {/* Header Block */}
        <header className="border-b border-zinc-200 dark:border-zinc-800 pb-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            
            {/* Identity & Metadata */}
            <div className="flex-1 space-y-2">
              <h1 
                contentEditable={editable}
                suppressContentEditableWarning
                onBlur={(e) => setContent({...content, name: e.currentTarget.innerText})}
                className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white uppercase font-sans"
              >
                {content.name}
              </h1>

              <p 
                contentEditable={editable}
                suppressContentEditableWarning
                onBlur={(e) => setContent({...content, title: e.currentTarget.innerText})}
                className="text-xs font-mono tracking-wider text-zinc-600 dark:text-zinc-400 font-bold uppercase"
              >
                {content.title}
              </p>

              {/* Contact Information Grid */}
              <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span contentEditable={editable} onBlur={(e) => setContent({...content, location: e.currentTarget.innerText})}>{content.location}</span>
                </span>

                <a href={`mailto:${content.email}`} className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white transition">
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  <span contentEditable={editable} onBlur={(e) => setContent({...content, email: e.currentTarget.innerText})}>{content.email}</span>
                </a>

                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-zinc-400" />
                  <span contentEditable={editable} onBlur={(e) => setContent({...content, phone: e.currentTarget.innerText})}>{content.phone}</span>
                </span>

                <a href={content.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white transition">
                  <Linkedin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{content.linkedin}</span>
                </a>

                <a href={content.portfolioUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-semibold text-zinc-900 dark:text-zinc-100 hover:underline transition">
                  <Globe className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{content.portfolio}</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </div>
            </div>

            {/* Headshot Component Slot */}
            {showPhoto && (
              <div className="relative group flex-shrink-0 self-start md:self-auto">
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  accept="image/*" 
                  className="hidden" 
                />

                <div 
                  onClick={triggerFileInput}
                  className={`w-28 h-36 border-2 ${
                    headshot 
                      ? 'border-transparent' 
                      : 'border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50'
                  } rounded-none flex flex-col items-center justify-center cursor-pointer overflow-hidden transition hover:border-zinc-500 relative`}
                >
                  {headshot ? (
                    <img 
                      src={headshot} 
                      alt="Paul Oyatowo" 
                      className="w-full h-full object-cover grayscale contrast-105"
                    />
                  ) : (
                    <div className="text-center p-3 space-y-1">
                      <Camera className="w-6 h-6 mx-auto text-zinc-400 dark:text-zinc-500" />
                      <p className="text-[10px] font-mono uppercase font-semibold text-zinc-600 dark:text-zinc-400">Headshot Slot</p>
                      <p className="text-[9px] text-zinc-400 dark:text-zinc-500">Click to upload</p>
                    </div>
                  )}

                  {/* Hover Controls for Image Upload */}
                  {headshot && (
                    <div className="print:hidden absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                      <button 
                        onClick={(e) => { e.stopPropagation(); triggerFileInput(); }} 
                        className="p-1.5 bg-white text-black rounded-sm hover:bg-zinc-200"
                        title="Change Photo"
                      >
                        <Upload className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); removeHeadshot(); }} 
                        className="p-1.5 bg-red-600 text-white rounded-sm hover:bg-red-700"
                        title="Remove Photo"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        </header>

        {/* Swiss Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Main Column (8 cols): Profile, Experience, Featured Brands */}
          <div className="md:col-span-8 space-y-8">
            
            {/* Profile Statement */}
            <section className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold">
                Profile
              </h2>
              <p 
                contentEditable={editable}
                suppressContentEditableWarning
                onBlur={(e) => setContent({...content, profile: e.currentTarget.innerText})}
                className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 font-sans"
              >
                {content.profile}
              </p>
            </section>

            {/* Experience Section */}
            <section className="space-y-6">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold">
                Experience
              </h2>

              <div className="space-y-6">
                {content.experience.map((exp, index) => (
                  <div key={index} className="space-y-2 border-l-2 border-zinc-200 dark:border-zinc-800 pl-4 py-0.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                        <span contentEditable={editable} onBlur={(e) => {
                          const newExp = [...content.experience];
                          newExp[index].role = e.currentTarget.innerText;
                          setContent({...content, experience: newExp});
                        }}>{exp.role}</span>
                        {" "}
                        <span className="font-normal text-zinc-400">at</span>
                        {" "}
                        <span className="font-semibold text-zinc-950 dark:text-white" contentEditable={editable} onBlur={(e) => {
                          const newExp = [...content.experience];
                          newExp[index].company = e.currentTarget.innerText;
                          setContent({...content, experience: newExp});
                        }}>{exp.company}</span>
                      </h3>

                      <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-1.5 pt-1">
                      {exp.points.map((point, pIdx) => (
                        <li key={pIdx} className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed flex items-start gap-2">
                          <span className="text-zinc-400 dark:text-zinc-600 mt-0.5 select-none">*</span>
                          <span contentEditable={editable} onBlur={(e) => {
                            const newExp = [...content.experience];
                            newExp[index].points[pIdx] = e.currentTarget.innerText;
                            setContent({...content, experience: newExp});
                          }}>
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Brands Worked With */}
            <section className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold">
                Brands Worked With
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {content.brandsWorkedWith.map((brand, bIdx) => (
                  <div key={bIdx} className="p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/20">
                    <h3 className="text-xs font-bold font-mono text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                      {brand.name}
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-normal">
                      {brand.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar Column (4 cols): Core Skills, Education, Certifications */}
          <div className="md:col-span-4 space-y-8 border-t md:border-t-0 md:border-l border-zinc-200 dark:border-zinc-800 pt-6 md:pt-0 md:pl-6">
            
            {/* Core Capabilities */}
            <section className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold">
                Core Capabilities
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[11px] font-mono text-zinc-900 dark:text-zinc-200 uppercase font-semibold mb-1.5">
                    Brand & Strategy
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {content.skills.brandStrategy.map((s, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[11px] font-mono text-zinc-900 dark:text-zinc-200 uppercase font-semibold mb-1.5">
                    Visual Identity Systems
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {content.skills.visualIdentity.map((s, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[11px] font-mono text-zinc-900 dark:text-zinc-200 uppercase font-semibold mb-1.5">
                    Motion & Production
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {content.skills.motionProduction.map((s, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[11px] font-mono text-zinc-900 dark:text-zinc-200 uppercase font-semibold mb-1.5">
                    Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {content.skills.tools.map((s, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold">
                Education
              </h2>
              <div>
                <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                  {content.education.degree}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  {content.institution}, {content.education.year}
                </p>
              </div>
            </section>

            {/* Certifications Section */}
            <section className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold">
                Certifications
              </h2>
              <ul className="space-y-1">
                {content.certifications.map((cert, idx) => (
                  <li key={idx} className="text-xs text-zinc-600 dark:text-zinc-400 font-mono flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-zinc-400 dark:bg-zinc-600 rounded-full"></span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Languages */}
            <section className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold">
                Languages
              </h2>
              <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 space-y-1">
                {content.languages.map((lang, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span className="text-zinc-900 dark:text-zinc-200">{lang.name}</span>
                    <span className="text-zinc-400">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Studio Branding Marker */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-semibold">
                Studio: PENNIO
              </p>
            </div>

          </div>

        </div>

      </main>

      {/* Print-specific style block */}
      <style>{`
        @media print {
          body {
            background-color: white !important;
            color: black !important;
          }
          main {
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
          }
          header, button {
            display: none !important;
          }
        }
      `}</style>

    </div>
  );
}

