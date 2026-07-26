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
  Globe, 
  Eye, 
  EyeOff, 
  Sparkles,
  Camera
} from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [editable, setEditable] = useState(false);
  const [showPhoto, setShowPhoto] = useState(true);
  const [headshot, setHeadshot] = useState(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef(null);

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
    
    profile: "Brand Architect and creative strategist building structured, meaning-first brand systems for technology, fintech, and lifestyle companies. Translates core strategic positioning into comprehensive visual and motion touchpoints. Proven track record across internal teams, remote brand initiatives, and independent brand architecture for African founders.",
    
    skills: {
      brandStrategy: [
        "Brand Systems Architecture",
        "Brand Guidelines & Documentation",
        "Creative Direction",
        "Positioning & Messaging"
      ],
      visualIdentity: [
        "Identity Design Systems",
        "Typography Hierarchy",
        "Color System Architecture",
        "Visual Language Design"
      ],
      motionProduction: [
        "Motion Graphics",
        "Animated Content Systems",
        "Campaign Direction",
        "3D Spatial Design (Blender)"
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
        role: "Graphic & Motion Designer",
        company: "Infinitswap",
        period: "Feb 2026 – Present",
        type: "Full-time",
        points: [
          "Produce motion graphics and animated editorial content mapped directly to the brand visual system from concept through execution.",
          "Direct content development cycles, including the primary product launch campaign and a modular template system for scaled production.",
          "Design multi-format social campaign assets and carousels, maintaining pixel-accurate alignment against master brand guidelines."
        ]
      },
      {
        role: "Brand & Web Designer",
        company: "Brilla.ng",
        period: "Jan 2025 – Feb 2026",
        type: "Remote",
        points: [
          "Led web and brand design for a service booking platform, transforming key commercial objectives into a scalable design system.",
          "Authored master brand guidelines governing layout structure, color theory, and typographic hierarchy across digital and marketing assets.",
          "Restructured campaign systems for targeted service verticals, implementing bold typography-first layouts that increased visual clarity."
        ]
      },
      {
        role: "Founder & Brand Architect",
        company: "PENNIO",
        period: "Ongoing",
        type: "Independent Studio",
        points: [
          "Built PENNIO as a dedicated brand architecture studio serving vision-driven African founders across product, client advisory, and original content.",
          "Created a meaning-first system methodology that grounds every brand build in cultural position and core foundational identity.",
          "Produce comprehensive brand documentation, visual identity systems, and multi-slide carousel frameworks that maintain identity cohesion across digital platforms."
        ]
      }
    ],

    brandsWorkedWith: [
      {
        name: "Lumière",
        desc: "Full brand architecture and visual identity system for an artisanal resin design studio."
      },
      {
        name: "Crux",
        desc: "Brand positioning and system guidelines for an investment intelligence platform."
      },
      {
        name: "Axion",
        desc: "Visual identity, color architecture, and typographic hierarchy for a software solutions firm."
      },
      {
        name: "Jo26 Events",
        desc: "Brand identity system and campaign collateral for a boutique event planning company."
      }
    ],

    education: {
      degree: "B.Sc. Ed. Computer Science",
      institution: "Ekiti State University",
      year: "2020"
    },

    certifications: [
      "Google Data Analytics (Coursera)",
      "Full-Funnel Advertising (Domestika)",
      "Web Development: C++, HTML, PHP (Sololearn)",
      "Soft Skills (Jobberman)"
    ],

    languages: [
      { name: "English", level: "Fluent" },
      { name: "Yoruba", level: "Native" }
    ]
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setHeadshot(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const removeHeadshot = () => {
    setHeadshot(null);
  };

  const handlePrint = () => {
    window.print();
  };

  const copyAsPlainText = () => {
    const text = [
      content.name,
      content.title,
      `${content.location} | ${content.email} | ${content.phone}`,
      `Portfolio: ${content.portfolio}`,
      "",
      "PROFILE",
      content.profile,
      "",
      "EXPERIENCE",
      ...content.experience.flatMap(exp => [
        `${exp.role} at ${exp.company} (${exp.period})`,
        ...exp.points.map(p => `• ${p}`),
        ""
      ]),
      "BRANDS WORKED WITH",
      ...content.brandsWorkedWith.map(b => `• ${b.name}: ${b.desc}`),
      "",
      "CORE SKILLS",
      `Strategy: ${content.skills.brandStrategy.join(', ')}`,
      `Visual Identity: ${content.skills.visualIdentity.join(', ')}`,
      `Motion: ${content.skills.motionProduction.join(', ')}`,
      `Tools: ${content.skills.tools.join(', ')}`,
      "",
      "EDUCATION",
      `${content.education.degree} – ${content.education.institution} (${content.education.year})`
    ].join('\n');

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-200 ${darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-100 text-zinc-900'}`}>
      
      <header className="print:hidden sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md px-4 py-3">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest px-2.5 py-1 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded">
              PENNIO / CV System
            </span>
            <span className="text-xs text-zinc-500 hidden sm:inline">Swiss Minimalist Format</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setShowPhoto(!showPhoto)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              title="Toggle Photo visibility"
            >
              {showPhoto ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              {showPhoto ? "Hide Photo" : "Show Photo"}
            </button>

            <button
              onClick={() => setEditable(!editable)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border transition ${
                editable 
                  ? 'bg-amber-500 text-white border-amber-600' 
                  : 'border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              {editable ? "Done Editing" : "Edit Mode"}
            </button>

            <button
              onClick={copyAsPlainText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied" : "Copy Text"}
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-600" />}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto my-0 sm:my-8 p-6 sm:p-12 bg-white dark:bg-zinc-900 border-x border-y sm:rounded-none sm:shadow-2xl border-zinc-200 dark:border-zinc-800 transition-colors">
        
        <header className="border-b border-zinc-200 dark:border-zinc-800 pb-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            
            <div className="flex-1 space-y-2">
              <h1 
                contentEditable={editable}
                suppressContentEditableWarning
                onBlur={(e) => setContent({...content, name: e.target.innerText})}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white uppercase font-sans"
              >
                {content.name}
              </h1>

              <p 
                contentEditable={editable}
                suppressContentEditableWarning
                onBlur={(e) => setContent({...content, title: e.target.innerText})}
                className="text-sm font-mono tracking-wider text-zinc-600 dark:text-zinc-400 font-semibold uppercase"
              >
                {content.title}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span contentEditable={editable} onBlur={(e) => setContent({...content, location: e.target.innerText})}>{content.location}</span>
                </span>

                <a href={`mailto:${content.email}`} className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white transition">
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  <span contentEditable={editable} onBlur={(e) => setContent({...content, email: e.target.innerText})}>{content.email}</span>
                </a>

                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-zinc-400" />
                  <span contentEditable={editable} onBlur={(e) => setContent({...content, phone: e.target.innerText})}>{content.phone}</span>
                </span>

                <a href={content.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white transition">
                  <Globe className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{content.linkedin}</span>
                </a>

                <a href={content.portfolioUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white transition font-medium text-zinc-900 dark:text-zinc-200">
                  <Globe className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{content.portfolio}</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </div>
            </div>

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
                  className={`w-28 h-36 border-2 border-dashed ${
                    headshot 
                      ? 'border-transparent' 
                      : 'border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50'
                  } rounded-none flex flex-col items-center justify-center cursor-pointer overflow-hidden transition hover:border-zinc-500 relative`}
                >
                  {headshot ? (
                    <img 
                      src={headshot} 
                      alt="Paul Oyatowo Headshot" 
                      className="w-full h-full object-cover grayscale contrast-105"
                    />
                  ) : (
                    <div className="text-center p-3 space-y-1">
                      <Camera className="w-6 h-6 mx-auto text-zinc-400 dark:text-zinc-500" />
                      <p className="text-[10px] font-mono uppercase text-zinc-500 dark:text-zinc-400">Insert Headshot</p>
                      <p className="text-[9px] text-zinc-400 dark:text-zinc-600">Click to upload</p>
                    </div>
                  )}

                  {headshot && (
                    <div className="print:hidden absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                      <button 
                        onClick={(e) => { e.stopPropagation(); triggerFileInput(); }} 
                        className="p-1 bg-white text-black rounded hover:bg-zinc-200"
                        title="Change Photo"
                      >
                        <Upload className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); removeHeadshot(); }} 
                        className="p-1 bg-red-600 text-white rounded hover:bg-red-700"
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-8 space-y-8">
            
            <section className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-semibold">
                Profile
              </h2>
              <p 
                contentEditable={editable}
                suppressContentEditableWarning
                onBlur={(e) => setContent({...content, profile: e.target.innerText})}
                className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 font-serif"
              >
                {content.profile}
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-semibold">
                Professional Experience
              </h2>

              <div className="space-y-6">
                {content.experience.map((exp, index) => (
                  <div key={index} className="space-y-2 border-l-2 border-zinc-200 dark:border-zinc-800 pl-4 py-0.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                        <span contentEditable={editable} onBlur={(e) => {
                          const newExp = [...content.experience];
                          newExp[index].role = e.target.innerText;
                          setContent({...content, experience: newExp});
                        }}>{exp.role}</span>
                        {" "}
                        <span className="font-normal text-zinc-500">at</span>
                        {" "}
                        <span className="font-semibold text-zinc-950 dark:text-white" contentEditable={editable} onBlur={(e) => {
                          const newExp = [...content.experience];
                          newExp[index].company = e.target.innerText;
                          setContent({...content, experience: newExp});
                        }}>{exp.company}</span>
                      </h3>

                      <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-1.5 pt-1">
                      {exp.points.map((point, pIdx) => (
                        <li key={pIdx} className="text-xs text-zinc-600 dark:text-zinc-300 leading-normal flex items-start gap-2">
                          <span className="text-zinc-400 dark:text-zinc-600 mt-0.5 select-none">•</span>
                          <span contentEditable={editable} onBlur={(e) => {
                            const newExp = [...content.experience];
                            newExp[index].points[pIdx] = e.target.innerText;
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

            <section className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-semibold">
                Brands & Featured Engagements
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {content.brandsWorkedWith.map((brand, bIdx) => (
                  <div key={bIdx} className="p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/30">
                    <h3 className="text-xs font-bold font-mono text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                      {brand.name}
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-snug">
                      {brand.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          <div className="md:col-span-4 space-y-8 border-t md:border-t-0 md:border-l border-zinc-200 dark:border-zinc-800 pt-6 md:pt-0 md:pl-6">
            
            <section className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-semibold">
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

            <section className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-semibold">
                Education
              </h2>
              <div>
                <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                  {content.education.degree}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  {content.education.institution}, {content.education.year}
                </p>
              </div>
            </section>

            <section className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-semibold">
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

            <section className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-semibold">
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

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                Studio Framework: PENNIO
              </p>
            </div>

          </div>

        </div>

      </main>

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
            box-shadow: none !important;
          }
        }
      `}</style>

    </div>
  );
}
