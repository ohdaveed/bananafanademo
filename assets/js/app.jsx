const { useState, useEffect, useMemo } = React;

        // Lucide React Icons (simplified inline SVG versions)
        const Icons = {
            CheckCircle2: ({ className }) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            Circle: ({ className }) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth={2} />
                </svg>
            ),
            AlertCircle: ({ className }) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth={2} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01" />
                </svg>
            ),
            Lightbulb: ({ className }) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            FileText: ({ className }) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            Users: ({ className }) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            MessageSquare: ({ className }) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            ),
            ChevronRight: ({ className }) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            ),
            ChevronDown: ({ className }) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            ),
            Sparkles: ({ className }) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
            Palette: ({ className }) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
            Layout: ({ className }) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
            ),
            Smartphone: ({ className }) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            Globe: ({ className }) => (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        };

        const BananafanaWebsiteShowcase = () => {
            const [currentView, setCurrentView] = useState('wireframes');
            const [selectedWireframe, setSelectedWireframe] = useState('hero');
            const [showMobile, setShowMobile] = useState(false);
            const [selectedPalette, setSelectedPalette] = useState('nurturing');
            const [isWalkthroughExpanded, setIsWalkthroughExpanded] = useState(false);
            const [scrollProgress, setScrollProgress] = useState(0);
            const [visitedViews, setVisitedViews] = useState({
                current: false,
                wireframes: true,
                principles: false,
                structure: false
            });

            const changeView = (view) => {
                setCurrentView(view);
                setVisitedViews((previous) => ({ ...previous, [view]: true }));
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };

            const navigateToSection = (view, sectionId) => {
                setCurrentView(view);
                setVisitedViews((previous) => ({ ...previous, [view]: true }));
                window.scrollTo({ top: 0, behavior: 'auto' });
                setTimeout(() => {
                    const targetSection = document.getElementById(sectionId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 80);
            };

            useEffect(() => {
                const handleScroll = () => {
                    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
                    if (scrollableHeight <= 0) {
                        setScrollProgress(0);
                        return;
                    }
                    const progress = Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100));
                    setScrollProgress(progress);
                };

                window.addEventListener('scroll', handleScroll, { passive: true });
                handleScroll();

                return () => window.removeEventListener('scroll', handleScroll);
            }, [currentView]);

            const colorPalettes = useMemo(() => ({
                nurturing: {
                    name: 'Nurturing Nature',
                    description: 'Calm, growth-focused palette for gentle learning',
                    mood: 'Serene, Trustworthy, Safe',
                    bestFor: 'Traditional preschools, parent-focused marketing',
                    colors: {
                        primary: { hex: '#6BCB77', name: 'Nurturing Green', role: 'Primary - Calm & Growth', benefit: 'Stress relief, concentration' },
                        secondary: { hex: '#4D96FF', name: 'Trust Blue', role: 'Secondary - Focus', benefit: 'Reduces anxiety, creativity' },
                        accent1: { hex: '#FFD93D', name: 'Attention Yellow', role: 'Accent - Energy', benefit: 'Captures attention' },
                        accent2: { hex: '#FF9A3C', name: 'Playful Orange', role: 'Accent - Warmth', benefit: 'Excitement (use sparingly)' },
                        neutral: { hex: '#F8F9FA', name: 'Soft Neutral', role: 'Background', benefit: 'Prevents overwhelm' }
                    },
                    distribution: '60% Green/Blue | 30% Neutrals | 10% Yellow/Orange'
                },
                ocean: {
                    name: 'Ocean Adventure',
                    description: 'Cool, calming blues for focus and tranquility',
                    mood: 'Peaceful, Focused, Professional',
                    bestFor: 'Academic-focused preschools, STEM programs',
                    colors: {
                        primary: { hex: '#0077B6', name: 'Deep Ocean Blue', role: 'Primary - Trust', benefit: 'Deep focus, credibility' },
                        secondary: { hex: '#00B4D8', name: 'Sky Blue', role: 'Secondary - Calm', benefit: 'Reduces anxiety' },
                        accent1: { hex: '#90E0EF', name: 'Light Aqua', role: 'Accent - Freshness', benefit: 'Serene atmosphere' },
                        accent2: { hex: '#48CAE4', name: 'Bright Teal', role: 'Accent - Energy', benefit: 'Gentle stimulation' },
                        neutral: { hex: '#F7F9FB', name: 'Cloud White', role: 'Background', benefit: 'Clean, clear' }
                    },
                    distribution: '60% Blues | 30% Neutrals | 10% Aqua accents'
                },
                sunshine: {
                    name: 'Sunshine Meadow',
                    description: 'Bright, energetic palette for active learning',
                    mood: 'Joyful, Energetic, Optimistic',
                    bestFor: 'Play-based learning, creative programs',
                    colors: {
                        primary: { hex: '#FFD93D', name: 'Sunshine Yellow', role: 'Primary - Joy', benefit: 'Captures attention, uplifting' },
                        secondary: { hex: '#6BCB77', name: 'Fresh Green', role: 'Secondary - Balance', benefit: 'Balances energy with calm' },
                        accent1: { hex: '#FF9A3C', name: 'Warm Orange', role: 'Accent - Enthusiasm', benefit: 'Energy boost' },
                        accent2: { hex: '#4D96FF', name: 'Sky Blue', role: 'Accent - Calm', benefit: 'Prevents overstimulation' },
                        neutral: { hex: '#FFFBF0', name: 'Cream', role: 'Background', benefit: 'Warm, welcoming' }
                    },
                    distribution: '60% Yellow/Green | 30% Cream | 10% Orange/Blue'
                },
                forest: {
                    name: 'Forest Friends',
                    description: 'Earthy, natural tones for grounded learning',
                    mood: 'Natural, Grounded, Harmonious',
                    bestFor: 'Nature-based programs, outdoor education',
                    colors: {
                        primary: { hex: '#4A7C59', name: 'Forest Green', role: 'Primary - Nature', benefit: 'Grounding, stress relief' },
                        secondary: { hex: '#8BAA91', name: 'Sage Green', role: 'Secondary - Harmony', benefit: 'Mental health, calm' },
                        accent1: { hex: '#F4A261', name: 'Autumn Gold', role: 'Accent - Warmth', benefit: 'Inviting, cozy' },
                        accent2: { hex: '#E9C46A', name: 'Honey Yellow', role: 'Accent - Light', benefit: 'Gentle attention' },
                        neutral: { hex: '#F8F5F0', name: 'Natural Linen', role: 'Background', benefit: 'Organic feel' }
                    },
                    distribution: '60% Greens | 30% Naturals | 10% Gold/Yellow'
                },
                rainbow: {
                    name: 'Rainbow Dreams',
                    description: 'Balanced multi-color palette for diverse learning',
                    mood: 'Inclusive, Creative, Vibrant',
                    bestFor: 'Diverse programs, multi-age facilities',
                    colors: {
                        primary: { hex: '#6BCB77', name: 'Growth Green', role: 'Primary - Base', benefit: 'Calm foundation' },
                        secondary: { hex: '#4D96FF', name: 'Trust Blue', role: 'Secondary - Focus', benefit: 'Concentration' },
                        accent1: { hex: '#FFD93D', name: 'Joy Yellow', role: 'Accent - Energy', benefit: 'Attention' },
                        accent2: { hex: '#FF6B9D', name: 'Gentle Pink', role: 'Accent - Warmth', benefit: 'Nurturing, care' },
                        neutral: { hex: '#FAFAFA', name: 'Pure White', role: 'Background', benefit: 'Lets colors shine' }
                    },
                    distribution: '60% Green/Blue | 30% White | 10% Yellow/Pink rotation'
                },
                pastel: {
                    name: 'Soft Pastels',
                    description: 'Gentle, soothing tones for sensitive environments',
                    mood: 'Gentle, Soothing, Delicate',
                    bestFor: 'Infant/toddler programs, sensory-sensitive children',
                    colors: {
                        primary: { hex: '#B8E2F2', name: 'Baby Blue', role: 'Primary - Calm', benefit: 'Maximum serenity' },
                        secondary: { hex: '#D4F1D4', name: 'Soft Mint', role: 'Secondary - Peace', benefit: 'Gentle nurturing' },
                        accent1: { hex: '#FFF4B8', name: 'Cream Yellow', role: 'Accent - Subtle', benefit: 'Soft attention' },
                        accent2: { hex: '#FFD1DC', name: 'Blush Pink', role: 'Accent - Warmth', benefit: 'Comfort, care' },
                        neutral: { hex: '#FCFCFC', name: 'Almost White', role: 'Background', benefit: 'Ultra-clean' }
                    },
                    distribution: '70% Pastels | 20% White | 10% Subtle accents'
                }
            }), []);

            const currentPalette = colorPalettes[selectedPalette];

            const ACTION_LINKS = {
                scheduleTour: 'mailto:hello@bananafana.com?subject=Schedule%20a%20Tour',
                tuitionGuide: 'mailto:hello@bananafana.com?subject=Tuition%20Guide%20Request',
                contactAdmissions: 'mailto:hello@bananafana.com?subject=Admissions%20Question',
                discoveryCall: 'mailto:hello@bananafana.com?subject=Discovery%20Call%20Request',
                liveSite: 'index.html'
            };

            const VIEW_LABELS = {
                current: 'Current Site',
                wireframes: 'Wireframes',
                principles: 'Design Principles',
                structure: 'Site Structure'
            };

            const VIEW_ORDER = ['current', 'wireframes', 'principles', 'structure'];

            const VIEW_SECTION_TOTALS = {
                current: 4,
                wireframes: 4,
                principles: 4,
                structure: 3
            };

            const TAB_TAKEAWAYS = {
                current: 'Key takeaway: the current experience has strong warmth and brand personality, but needs stronger conversion structure.',
                wireframes: 'Key takeaway: these wireframes organize the pitch into conversion-first sections without losing the original personality.',
                principles: 'Key takeaway: each palette and principle is tied to parent trust, readability, and decision-making speed.',
                structure: 'Key takeaway: architecture is optimized to move families from discovery to tour booking with less friction.'
            };

            const TAB_HEADERS = {
                current: {
                    icon: Icons.Globe,
                    title: 'Current Site Audit',
                    description: 'Review what works today and what blocks parents from moving to action.'
                },
                wireframes: {
                    icon: Icons.Layout,
                    title: 'Wireframe Strategy',
                    description: 'Validate page structure and information flow before visual polish.'
                },
                principles: {
                    icon: Icons.Palette,
                    title: 'Design Rationale',
                    description: 'Connect color, typography, spacing, and accessibility choices to parent trust.'
                },
                structure: {
                    icon: Icons.FileText,
                    title: 'Architecture & Delivery',
                    description: 'Align page hierarchy, KPIs, and implementation planning.'
                }
            };

            const PAGE_ICONS = {
                Home: Icons.Globe,
                Programs: Icons.Layout,
                Enroll: Icons.CheckCircle2,
                About: Icons.Users,
                Contact: Icons.MessageSquare
            };

            const TAB_OVERVIEW = [
                {
                    key: 'current',
                    title: 'Current Site',
                    description: 'Audit of existing experience and top conversion opportunities.',
                    readTime: '3 min',
                    targetId: 'current-site-audit'
                },
                {
                    key: 'wireframes',
                    title: 'Wireframes',
                    description: 'Layout structure and content organization for conversion-first flow.',
                    readTime: '5 min',
                    targetId: 'wireframe-display'
                },
                {
                    key: 'principles',
                    title: 'Design Principles',
                    description: 'Research-backed color, typography, spacing, and accessibility choices.',
                    readTime: '6 min',
                    targetId: 'principles-overview'
                },
                {
                    key: 'structure',
                    title: 'Site Structure',
                    description: 'Page hierarchy and parent decision journey from discovery to enrollment.',
                    readTime: '4 min',
                    targetId: 'structure-architecture'
                }
            ];

            const DESIGN_SYSTEM_DOCS = [
                {
                    title: 'Typography Specs',
                    items: [
                        'Primary family: Inter, "Helvetica Neue", Arial, sans-serif',
                        'H1: 48px / 1.2 · H2: 36px / 1.25 · H3: 28px / 1.3',
                        'Body: 16px / 1.6 · Max readable line length: 50–75 chars'
                    ]
                },
                {
                    title: 'Spacing System',
                    items: [
                        'Base 8px rhythm: 8, 16, 24, 32, 48, 64',
                        'Cards: 24px internal padding, 16px mobile fallback',
                        'Section gaps increase on desktop to maintain scanning comfort'
                    ]
                },
                {
                    title: 'Responsive Breakpoints',
                    items: [
                        'Desktop: 1200px+ · Tablet: 768–1199px · Mobile: <768px',
                        'Navigation stacks on mobile, tab controls remain touch-size compliant',
                        'Wireframe previews support desktop/mobile simulation toggles'
                    ]
                },
                {
                    title: 'Accessibility Checklist',
                    items: [
                        'High-contrast text and focus-visible styles on all controls',
                        'Tab semantics via aria-selected/tabpanel mapping',
                        'Journey uses icon + number + label (not color alone)'
                    ]
                }
            ];

            const SUCCESS_METRICS = [
                'Primary KPI: Tour booking conversion target 65%',
                'Secondary KPI: Time on site target 3+ minutes',
                'Secondary KPI: Bounce rate target below 40%',
                'Quality KPI: Accessibility score target 95+ and Lighthouse 90+'
            ];

            const IMPLEMENTATION_ROADMAP = [
                'Phase 1 (Weeks 1–2): Design system and base components',
                'Phase 2 (Weeks 3–4): Build home page and conversion flows',
                'Phase 3 (Weeks 5–6): Build supporting pages and trust modules',
                'Phase 4 (Weeks 7–8): QA, accessibility audit, and launch prep'
            ];

            const tabButtonClasses = (view, activeClass) => `px-4 sm:px-5 py-2.5 text-sm sm:text-base rounded-lg font-semibold transition-all ${
                currentView === view
                    ? `${activeClass} text-white shadow-xl ring-2 ring-offset-2 ring-gray-900/20 scale-[1.02]`
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-white hover:border-gray-500'
            }`;

            const currentSection = Math.min(
                VIEW_SECTION_TOTALS[currentView],
                Math.max(1, Math.ceil((scrollProgress / 100) * VIEW_SECTION_TOTALS[currentView]))
            );

            const TakeawayBanner = ({ text }) => (
                <div className="bg-white border-l-4 border-indigo-500 border border-indigo-200 text-indigo-950 rounded-lg px-4 py-3 font-medium flex items-start gap-2">
                    <Icons.Lightbulb className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <p>{text}</p>
                </div>
            );

            const GlossaryTip = ({ term, definition }) => (
                <abbr
                    title={definition}
                    className="underline decoration-dotted underline-offset-4 cursor-help"
                    aria-label={`${term}: ${definition}`}
                >
                    {term}
                </abbr>
            );

            const handleTabKeyboardNavigation = (event) => {
                const targetTag = event.target.tagName;
                if (targetTag === 'INPUT' || targetTag === 'TEXTAREA' || targetTag === 'SELECT') {
                    return;
                }

                const focusedTab = event.target.closest('[role="tab"]');
                if (!focusedTab) return;
                const focusedView = focusedTab.id.replace('tab-', '');
                const currentIndex = VIEW_ORDER.indexOf(focusedView);
                if (currentIndex === -1) {
                    return;
                }

                let nextView = null;

                if (event.key === 'ArrowRight') {
                    event.preventDefault();
                    nextView = VIEW_ORDER[(currentIndex + 1) % VIEW_ORDER.length];
                }

                if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    nextView = VIEW_ORDER[(currentIndex - 1 + VIEW_ORDER.length) % VIEW_ORDER.length];
                }

                if (event.key === 'Home') {
                    event.preventDefault();
                    nextView = VIEW_ORDER[0];
                }

                if (event.key === 'End') {
                    event.preventDefault();
                    nextView = VIEW_ORDER[VIEW_ORDER.length - 1];
                }

                if (nextView) {
                    changeView(nextView);
                    const nextTabEl = document.getElementById(`tab-${nextView}`);
                    if (nextTabEl) nextTabEl.focus();
                }
            };

            const TabHeader = ({ icon: HeaderIcon, title, description }) => (
                <section className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <div className="flex items-start gap-3">
                        <div className="bg-blue-100 p-2 rounded-lg border border-blue-200">
                            <HeaderIcon className="w-5 h-5 text-blue-700" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                            <p className="text-sm text-gray-600 mt-1">{description}</p>
                        </div>
                    </div>
                </section>
            );

            const wireframes = useMemo(() => ({
                hero: {
                    title: 'Hero Section - Warm Welcome',
                    description: 'First impression that builds trust with parents',
                    elements: [
                        'Large, bright photo of children playing',
                        'Clear headline: "Where Little Minds Grow Big"',
                        'Prominent CTA: "Schedule a Tour" + "Enroll Now"',
                        'Trust indicators: License info, years established',
                        'Contact info immediately visible'
                    ],
                    colorScheme: 'Green (calm/trust) + Blue accents + Yellow CTAs',
                    mockup: `╔════════════════════════════════════════════════════╗
║  🍌 Bananafana Preschool        ☎️ 📧 📍 Tour  ║
╠════════════════════════════════════════════════════╣
║                                                    ║
║     [Hero Image: Happy Children Playing]          ║
║                                                    ║
║     WHERE LITTLE MINDS GROW BIG                    ║
║     Nurturing curiosity since 2010                 ║
║                                                    ║
║     [Schedule a Tour]  [Enroll Now]               ║
║                                                    ║
║     ⭐ Licensed by CA Dept of Social Services     ║
║                                                    ║
╚════════════════════════════════════════════════════╝`
                },
                programs: {
                    title: 'Programs Overview',
                    description: 'Clear age groups and curriculum highlights',
                    elements: [
                        'Age-based program cards (Infant, Toddler, Preschool)',
                        'Daily schedule previews',
                        'Key learning areas icons',
                        'Age-appropriate photos for each program',
                        'Quick comparison table'
                    ],
                    colorScheme: 'Color-coded: Green (infants-calm), Blue (toddlers-focus), Yellow accents (preschool-energy)',
                    mockup: `╔════════════════════════════════════════════════════╗
║              OUR PROGRAMS                          ║
╠══════════════╦══════════════╦══════════════════════╣
║  INFANTS     ║  TODDLERS    ║  PRESCHOOL          ║
║  (6wks-18mo) ║  (18mo-3yr)  ║  (3-5 years)        ║
╠══════════════╬══════════════╬══════════════════════╣
║  [Photo]     ║  [Photo]     ║  [Photo]            ║
║              ║              ║                      ║
║  • Gentle    ║  • Active    ║  • Kindergarten     ║
║    routines  ║    learning  ║    prep             ║
║  • Sensory   ║  • Language  ║  • STEAM            ║
║    play      ║    building  ║    activities       ║
║  • Safe      ║  • Social    ║  • Reading          ║
║    exploration║   skills    ║    readiness        ║
║              ║              ║                      ║
║  [Learn More]║ [Learn More] ║  [Learn More]       ║
╚══════════════╩══════════════╩══════════════════════╝`
                },
                tour: {
                    title: 'Tour Scheduling - Frictionless',
                    description: 'Make it dead simple to book a tour',
                    elements: [
                        'Embedded calendar widget (Calendly-style)',
                        'Available time slots clearly visible',
                        'Virtual tour option prominently displayed',
                        'Photo gallery of facilities',
                        'What to expect during tour (bullet points)'
                    ],
                    colorScheme: 'Blue (trust-building) with Yellow CTA buttons (attention-grabbing)',
                    mockup: `╔════════════════════════════════════════════════════╗
║         SCHEDULE YOUR VISIT                        ║
╠════════════════════════════════════════════════════╣
║                                                    ║
║  Choose Your Tour Type:                            ║
║  ○ In-Person Tour    ○ Virtual Tour               ║
║                                                    ║
║  ┌──────────────────┐  ┌────────────────────┐    ║
║  │   CALENDAR       │  │  WHAT TO EXPECT:   │    ║
║  │                  │  │                    │    ║
║  │  March 2025      │  │  ✓ Meet teachers   │    ║
║  │  M  T  W  T  F   │  │  ✓ See classrooms  │    ║
║  │     1  2  3  4   │  │  ✓ Ask questions   │    ║
║  │  7 [8] 9 10 11   │  │  ✓ Review schedule │    ║
║  │  14 15 16 17 18  │  │  ✓ ~30 minutes     │    ║
║  │                  │  │                    │    ║
║  └──────────────────┘  └────────────────────┘    ║
║                                                    ║
║  Available Times for March 8:                      ║
║  [9:00 AM] [10:30 AM] [2:00 PM] [4:00 PM]        ║
║                                                    ║
╚════════════════════════════════════════════════════╝`
                },
                trust: {
                    title: 'Trust & Safety Section',
                    description: 'Address parent concerns proactively',
                    elements: [
                        'Licensing & certifications (badges)',
                        'Staff credentials & background checks',
                        'Safety protocols & security measures',
                        'Parent testimonials with photos',
                        'Health & nutrition information'
                    ],
                    colorScheme: 'Professional Blue (calming + credible) + Green (health/nurturing)',
                    mockup: `╔════════════════════════════════════════════════════╗
║         YOUR CHILD'S SAFETY IS OUR PRIORITY       ║
╠════════════════════════════════════════════════════╣
║                                                    ║
║  🎓 Credentials              🔒 Security           ║
║  • CA Licensed Facility      • Secure entry        ║
║  • CPR/First Aid Certified   • Visitor check-in    ║
║  • Background checked staff  • Camera monitoring   ║
║                                                    ║
║  🍎 Nutrition                👨‍👩‍👧‍👦 Testimonials      ║
║  • Organic snacks            "Our daughter has     ║
║  • Allergy accommodations    blossomed here!"      ║
║  • Nutritionist approved     - Sarah M., Parent    ║
║                                                    ║
║  [View Full Credentials]  [Read More Reviews]     ║
║                                                    ║
╚════════════════════════════════════════════════════╝`
                },
                contact: {
                    title: 'Contact & Footer',
                    description: 'Multiple ways to connect',
                    elements: [
                        'Contact form with specific inquiry types',
                        'Google Maps integration',
                        'Hours of operation',
                        'Social media links',
                        'FAQ quick links'
                    ],
                    colorScheme: 'Soft neutrals (#F8F9FA) to prevent overwhelm + Green/Blue brand accents',
                    mockup: `╔════════════════════════════════════════════════════╗
║              GET IN TOUCH                          ║
╠════════════════════════════════════════════════════╣
║  ┌──────────────────┐  ┌────────────────────┐    ║
║  │  CONTACT FORM    │  │   FIND US          │    ║
║  │                  │  │                    │    ║
║  │  Name: [____]    │  │  [Google Map]      │    ║
║  │  Email: [____]   │  │                    │    ║
║  │  Phone: [____]   │  │  123 Main St       │    ║
║  │  I'm interested  │  │  San Francisco, CA │    ║
║  │  in: [Dropdown]  │  │                    │    ║
║  │  Message: [____] │  │  Hours:            │    ║
║  │  [Send Message]  │  │  M-F: 7am-6pm      │    ║
║  │                  │  │                    │    ║
║  └──────────────────┘  └────────────────────┘    ║
║                                                    ║
║  Quick Links: FAQ | Enrollment | Tuition | Blog   ║
║  📱 Facebook | Instagram | 📧 Newsletter         ║
╚════════════════════════════════════════════════════╝`
                }
            }), []);

            const designPrinciples = useMemo(() => ([
                {
                    icon: 'Palette',
                    title: 'Evidence-Based Color Psychology',
                    description: 'Green and blue create calm, focused environments. Yellow/orange accents capture attention without overstimulation',
                    example: 'Green (#6BCB77) primary for stress relief + concentration | Blue (#4D96FF) for trust + creativity | Yellow (#FFD93D) CTAs only - research shows too much causes distraction'
                },
                {
                    icon: 'Layout',
                    title: 'Clean, Spacious Layout',
                    description: 'Plenty of white space, easy-to-scan sections, clear hierarchy',
                    example: 'Max-width containers, generous padding, clear section breaks'
                },
                {
                    icon: 'Smartphone',
                    title: 'Mobile-First Design',
                    description: 'Parents browse on phones - touch-friendly, fast loading',
                    example: 'Large tap targets, optimized images, responsive grid'
                },
                {
                    icon: 'Globe',
                    title: 'Trust-Building Elements',
                    description: 'Credentials, testimonials, real photos prominently displayed',
                    example: 'License badges, parent reviews, staff photos'
                }
            ]), []);

            const keyPages = useMemo(() => ([
                {
                    name: 'Home',
                    priority: 'Critical',
                    goal: 'Convert visitors to tour bookings',
                    sections: ['Hero', 'Programs Overview', 'Why Choose Us', 'Testimonials', 'Schedule Tour CTA']
                },
                {
                    name: 'Programs',
                    priority: 'Critical',
                    goal: 'Explain age-appropriate curriculum',
                    sections: ['Age Groups', 'Daily Schedules', 'Learning Philosophy', 'Tuition']
                },
                {
                    name: 'Enroll',
                    priority: 'Critical',
                    goal: 'Clear enrollment process',
                    sections: ['Requirements', 'Process Steps', 'Forms Download', 'Tuition & Fees', 'Start Form']
                },
                {
                    name: 'About',
                    priority: 'Important',
                    goal: 'Build trust and credibility',
                    sections: ['Our Story', 'Meet the Team', 'Credentials', 'Philosophy', 'Safety']
                },
                {
                    name: 'Contact',
                    priority: 'Important',
                    goal: 'Make it easy to reach you',
                    sections: ['Contact Form', 'Map', 'Hours', 'FAQ Links']
                }
            ]), []);

            const currentWireframe = wireframes[selectedWireframe];

            return (
                <main id="main-content" tabIndex={-1}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-gradient-to-br from-yellow-50 via-white to-green-50 min-h-screen">
                    <nav aria-label="Presentation sections">
                    <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 flex-wrap sticky top-0 z-40 bg-white/95 backdrop-blur-sm py-3 sm:py-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-b-lg shadow-sm" role="tablist" onKeyDown={handleTabKeyboardNavigation}>
                        <button
                            type="button"
                            onClick={() => changeView('current')}
                            className={tabButtonClasses('current', 'bg-purple-600')}
                            role="tab"
                            aria-selected={currentView === 'current'}
                            aria-controls="panel-current"
                            id="tab-current"
                        >
                            <Icons.Globe className="inline w-5 h-5 mr-2" />
                            Current Site
                        </button>
                        <button
                            type="button"
                            onClick={() => changeView('wireframes')}
                            className={tabButtonClasses('wireframes', 'bg-yellow-600')}
                            role="tab"
                            aria-selected={currentView === 'wireframes'}
                            aria-controls="panel-wireframes"
                            id="tab-wireframes"
                        >
                            <Icons.Layout className="inline w-5 h-5 mr-2" />
                            Wireframes
                        </button>
                        <button
                            type="button"
                            onClick={() => changeView('principles')}
                            className={tabButtonClasses('principles', 'bg-green-700')}
                            role="tab"
                            aria-selected={currentView === 'principles'}
                            aria-controls="panel-principles"
                            id="tab-principles"
                        >
                            <Icons.Palette className="inline w-5 h-5 mr-2" />
                            Design Principles
                        </button>
                        <button
                            type="button"
                            onClick={() => changeView('structure')}
                            className={tabButtonClasses('structure', 'bg-blue-700')}
                            role="tab"
                            aria-selected={currentView === 'structure'}
                            aria-controls="panel-structure"
                            id="tab-structure"
                        >
                            <Icons.FileText className="inline w-5 h-5 mr-2" />
                            Site Structure
                        </button>
                        <div className="w-full mt-2">
                            <div className="max-w-4xl mx-auto bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium text-center">
                                Now Viewing: {VIEW_LABELS[currentView]} · Section {currentSection} of {VIEW_SECTION_TOTALS[currentView]}
                            </div>
                            <div className="max-w-4xl mx-auto mt-2 h-2 rounded-full bg-gray-200 overflow-hidden" aria-hidden="true">
                                <div className="h-full bg-blue-600 transition-all" style={{ width: `${scrollProgress}%` }}></div>
                            </div>
                            <div className="max-w-4xl mx-auto mt-3">
                                <label htmlFor="quick-jump" className="sr-only">Jump to section</label>
                                <select
                                    id="quick-jump"
                                    defaultValue=""
                                    onChange={(event) => {
                                        const [view, sectionId] = event.target.value.split('|');
                                        if (view && sectionId) {
                                            navigateToSection(view, sectionId);
                                        }
                                        event.target.selectedIndex = 0;
                                    }}
                                    className="w-full md:w-auto bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700"
                                >
                                    <option value="">Jump to section…</option>
                                    {TAB_OVERVIEW.map((entry) => (
                                        <option key={entry.key} value={`${entry.key}|${entry.targetId}`}>
                                            {entry.title} ({entry.readTime})
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    </nav>

                    <a
                        href="index.html"
                        aria-label="Open live site"
                        className="hidden md:inline-flex fixed bottom-5 right-5 z-20 bg-blue-700 text-white px-5 py-3 rounded-full font-bold shadow-2xl border border-blue-500 hover:bg-blue-800 transition-all"
                    >
                        Open Live Site
                    </a>
                    {scrollProgress > 18 ? (
                        <button
                            type="button"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="fixed bottom-5 left-5 z-20 bg-gray-900 text-white px-4 py-2 rounded-full font-semibold shadow-xl border border-gray-700 hover:bg-gray-800 transition-all"
                        >
                            Back to Top
                        </button>
                    ) : null}
                    <div className="text-center mb-8 sm:mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <span className="text-4xl sm:text-5xl">🍌</span>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Bananafana Preschool</h1>
                        </div>
                        <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto mb-2">
                            Website Redesign Concepts & Wireframes
                        </p>
                        <p className="text-sm sm:text-lg text-gray-500">
                            Modern, trust-building design for parent conversions
                        </p>
                    </div>

                    <section className="mb-6 sm:mb-8 bg-white rounded-xl border-2 border-blue-200 p-4 sm:p-6 shadow-lg">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">How to use this pitch</h2>
                                <p className="text-gray-700 mb-2"><strong>30-second summary:</strong> This deck audits the current experience, shows wireframe options, explains design rationale, and maps a conversion-focused site architecture.</p>
                                <p className="text-gray-700"><strong>Recommended order:</strong> 1) Current Site → 2) Wireframes → 3) Design Principles → 4) Site Structure.</p>
                            </div>
                            <a href={ACTION_LINKS.liveSite} className="md:hidden inline-flex bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold self-start">Open Live Site</a>
                        </div>
                    </section>

                    <section className="mb-6 sm:mb-8 bg-white rounded-xl border-2 border-gray-200 p-4 sm:p-6 shadow-lg">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Table of Contents</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {TAB_OVERVIEW.map((entry) => (
                                <article key={entry.key} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-gray-900">{entry.title}</h3>
                                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{entry.readTime}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3">{entry.description}</p>
                                    <button
                                        type="button"
                                        onClick={() => navigateToSection(entry.key, entry.targetId)}
                                        className="bg-white text-gray-900 px-3 py-2 rounded-lg border border-gray-300 font-semibold text-sm hover:shadow-md transition-all"
                                    >
                                        Jump to Section
                                    </button>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Current Site View */}
                    {visitedViews.current && (
                        <div
                            id="panel-current"
                            role="tabpanel"
                            aria-labelledby="tab-current"
                            hidden={currentView !== 'current'}
                            className={`space-y-6 ${currentView === 'current' ? 'panel-enter' : ''}`}
                        >
                            <TakeawayBanner text={TAB_TAKEAWAYS.current} />
                            <TabHeader icon={TAB_HEADERS.current.icon} title={TAB_HEADERS.current.title} description={TAB_HEADERS.current.description} />
                            <div id="current-site-audit" className="bg-white rounded-lg shadow-xl p-5 sm:p-8 border-2 border-purple-200">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                            Current Bananafana Preschool Site
                                        </h2>
                                        <p className="text-lg text-gray-600">Current experience walkthrough and conversion audit</p>
                                    </div>
                                    <div className="bg-purple-100 px-4 py-2 rounded-lg border-2 border-purple-400">
                                        <p className="text-sm font-semibold text-purple-900">BEFORE</p>
                                    </div>
                                </div>

                                {/* Current Site Walkthrough */}
                                <div className="bg-gradient-to-br from-yellow-100 via-green-100 to-blue-100 rounded-lg overflow-hidden shadow-2xl mb-6 p-6 border-2 border-blue-200">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">Current Site Walkthrough</h3>
                                    <div className="max-w-4xl mx-auto">
                                        <div className="flex items-center justify-center mb-3">
                                            <button
                                                type="button"
                                                onClick={() => setIsWalkthroughExpanded((previous) => !previous)}
                                                className="bg-white text-gray-900 px-4 py-2 rounded-lg border border-gray-300 font-semibold hover:shadow-md transition-all"
                                                aria-expanded={isWalkthroughExpanded}
                                                aria-controls="walkthrough-video"
                                            >
                                                {isWalkthroughExpanded ? 'Hide walkthrough' : 'Play walkthrough'}
                                            </button>
                                        </div>
                                        {isWalkthroughExpanded && (
                                            <div id="walkthrough-video" className="rounded-lg overflow-hidden border border-gray-300 bg-white">
                                                <iframe
                                                    src="https://streamable.com/e/21wuu9?"
                                                    title="Bananafana current site walkthrough"
                                                    loading="lazy"
                                                    allow="fullscreen"
                                                    allowFullScreen
                                                    className="w-full h-[240px] md:h-[320px] lg:h-[380px] border-0"
                                                ></iframe>
                                            </div>
                                        )}
                                    </div>
                                    <div className="mt-4 grid md:grid-cols-3 gap-3 text-sm">
                                        <div className="bg-white p-3 rounded-lg border border-gray-200 text-gray-700">Focus: first impression and message clarity</div>
                                        <div className="bg-white p-3 rounded-lg border border-gray-200 text-gray-700">Focus: CTA visibility and action flow</div>
                                        <div className="bg-white p-3 rounded-lg border border-gray-200 text-gray-700">Focus: trust and admissions signals</div>
                                    </div>
                                </div>

                                {/* Analysis Grid */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                                        <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                                            <Icons.Sparkles className="w-5 h-5" />
                                            What's Working
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <Icons.CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>Playful, child-friendly imagery (banana, tree, building blocks)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Icons.CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>Shows children and learning elements</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Icons.CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>Hand-drawn aesthetic feels warm and approachable</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Icons.CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>Digital door concept is engaging and modern</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                                        <h3 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                                            <Icons.AlertCircle className="w-5 h-5" />
                                            Opportunities for Improvement
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span className="text-yellow-600 font-bold mt-0.5">→</span>
                                                <span>Needs clear CTAs (Schedule Tour, Enroll Now)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-yellow-600 font-bold mt-0.5">→</span>
                                                <span>Missing trust elements (licensing, credentials)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-yellow-600 font-bold mt-0.5">→</span>
                                                <span>Could benefit from consistent color psychology</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-yellow-600 font-bold mt-0.5">→</span>
                                                <span>Navigation and site structure not immediately clear</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-yellow-600 font-bold mt-0.5">→</span>
                                                <span>Mobile responsiveness and accessibility optimizations needed</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Design Evolution */}
                                <div className="mt-6 bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg border-2 border-purple-300">
                                    <h3 className="font-bold text-gray-900 mb-4 text-lg">📊 Design Evolution Strategy</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded-lg">
                                            <p className="font-semibold text-purple-900 mb-2">Keep & Enhance</p>
                                            <p className="text-xs text-gray-600">Playful banana branding, child-friendly imagery, warm aesthetic</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <p className="font-semibold text-green-900 mb-2">Add & Optimize</p>
                                            <p className="text-xs text-gray-600">Trust badges, clear CTAs, parent testimonials, mobile-first layout</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <p className="font-semibold text-blue-900 mb-2">Modernize</p>
                                            <p className="text-xs text-gray-600">Research-backed color palette, conversion optimization, accessibility</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 text-center">
                                <h3 className="text-xl font-bold text-indigo-950 mb-2">Next Step</h3>
                                <p className="text-indigo-900 mb-4">Move to wireframes to see the proposed conversion-first layout and content structure.</p>
                                <button type="button" onClick={() => changeView('wireframes')} className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-all">Go to Wireframes</button>
                            </div>
                        </div>
                    )}

                    {/* Wireframes View */}
                    {visitedViews.wireframes && (
                        <div
                            id="panel-wireframes"
                            role="tabpanel"
                            aria-labelledby="tab-wireframes"
                            hidden={currentView !== 'wireframes'}
                            className={`space-y-6 ${currentView === 'wireframes' ? 'panel-enter' : ''}`}
                        >
                            <TakeawayBanner text={TAB_TAKEAWAYS.wireframes} />
                            <TabHeader icon={TAB_HEADERS.wireframes.icon} title={TAB_HEADERS.wireframes.title} description={TAB_HEADERS.wireframes.description} />
                            {/* Mobile Toggle */}
                            <div className="flex justify-center my-6">
                                <div className="bg-white p-2 rounded-lg shadow border-2 border-gray-200 inline-flex gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowMobile(false)}
                                        className={`px-4 py-2 rounded flex items-center gap-2 ${
                                            !showMobile ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-600'
                                        }`}
                                    >
                                        <Icons.Globe className="w-4 h-4" />
                                        Desktop
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setShowMobile(true)}
                                        className={`px-4 py-2 rounded flex items-center gap-2 ${
                                            showMobile ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-600'
                                        }`}
                                    >
                                        <Icons.Smartphone className="w-4 h-4" />
                                        Mobile
                                    </button>
                                </div>
                            </div>

                            {/* Section Selector */}
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
                                {Object.keys(wireframes).map((key) => (
                                    <button
                                        type="button"
                                        key={key}
                                        onClick={() => setSelectedWireframe(key)}
                                        className={`p-4 rounded-lg font-semibold transition-all ${
                                            selectedWireframe === key
                                                ? 'bg-gradient-to-r from-yellow-400 to-green-400 text-white shadow-lg'
                                                : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-yellow-400'
                                        }`}
                                    >
                                        {wireframes[key].title.split(' - ')[0]}
                                    </button>
                                ))}
                            </div>

                            {/* Wireframe Display */}
                            <div id="wireframe-display" className="bg-white rounded-lg shadow-xl p-5 sm:p-8 border-2 border-gray-200">
                                <div className="flex flex-col md:flex-row items-start justify-between mb-6 gap-4">
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                            {currentWireframe.title}
                                        </h2>
                                        <p className="text-lg text-gray-600">{currentWireframe.description}</p>
                                    </div>
                                    <div className="bg-yellow-100 px-4 py-2 rounded-lg border-2 border-yellow-400 text-sm">
                                        <p className="font-semibold text-yellow-900">
                                            {currentWireframe.colorScheme}
                                        </p>
                                    </div>
                                </div>

                                <details open className="mb-4 bg-gray-50 rounded-lg border-2 border-gray-300">
                                    <summary className="px-5 py-4 font-bold text-gray-900 flex items-center justify-between">
                                        <span>Wireframe Layout Preview</span>
                                        <span className="text-sm text-gray-500">Expand / Collapse</span>
                                    </summary>
                                    <div className={`px-6 pb-6 overflow-x-auto ${showMobile ? 'max-w-md mx-auto' : ''}`}>
                                        <pre className="text-xs md:text-sm font-mono text-gray-700 whitespace-pre">
                                            {currentWireframe.mockup}
                                        </pre>
                                    </div>
                                </details>

                                <details className="bg-green-50 rounded-lg border border-green-200">
                                    <summary className="px-5 py-4 font-bold text-gray-900 flex items-center justify-between">
                                        <span>Key Elements</span>
                                        <span className="text-sm text-gray-500">Expand / Collapse</span>
                                    </summary>
                                    <div className="px-5 pb-5 grid md:grid-cols-2 gap-3">
                                        {currentWireframe.elements.map((element, idx) => (
                                            <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-green-200">
                                                <Icons.CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{element}</span>
                                            </div>
                                        ))}
                                    </div>
                                </details>
                            </div>

                            <div className="mt-6 bg-amber-50 p-6 rounded-lg border border-amber-200 text-center">
                                <h3 className="text-lg font-bold text-amber-900 mb-2">Next Step</h3>
                                <p className="text-amber-800 mb-4">Move to Design Principles to see the research and system decisions behind these layouts.</p>
                                <button type="button" onClick={() => changeView('principles')} className="bg-amber-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-amber-800 transition-all">Go to Design Principles</button>
                            </div>
                        </div>
                    )}

                    {/* Design Principles View */}
                    {visitedViews.principles && (
                        <div
                            id="panel-principles"
                            role="tabpanel"
                            aria-labelledby="tab-principles"
                            hidden={currentView !== 'principles'}
                            className={`space-y-6 ${currentView === 'principles' ? 'panel-enter' : ''}`}
                        >
                            <TakeawayBanner text={TAB_TAKEAWAYS.principles} />
                            <TabHeader icon={TAB_HEADERS.principles.icon} title={TAB_HEADERS.principles.title} description={TAB_HEADERS.principles.description} />
                            <section id="principles-overview" className="bg-white rounded-lg border-2 border-green-200 p-6 shadow-lg">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Design System Overview</h3>
                                <p className="text-gray-600 mb-5">This section translates strategy into implementation-ready guidance for design and development teams.</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {DESIGN_SYSTEM_DOCS.map((doc) => (
                                        <details key={doc.title} open={doc.title === 'Typography Specs'} className="bg-gray-50 border border-gray-200 rounded-lg">
                                            <summary className="px-4 py-3 font-bold text-gray-900 flex items-center justify-between">
                                                <span>{doc.title}</span>
                                                <span className="text-xs text-gray-500">Expand / Collapse</span>
                                            </summary>
                                            <ul className="px-6 pb-4 list-disc text-sm text-gray-700 space-y-2">
                                                {doc.items.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </details>
                                    ))}
                                </div>
                            </section>

                            <section className="bg-white rounded-lg border-2 border-yellow-200 p-6 shadow-lg">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Color Do's and Don'ts</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                        <p className="font-bold text-green-900 mb-2">Do</p>
                                        <ul className="list-disc pl-5 text-sm text-green-800 space-y-1">
                                            <li>Use yellow primarily for CTA emphasis.</li>
                                            <li>Pair saturated accents with neutral backgrounds.</li>
                                            <li>Keep body text on high-contrast neutral surfaces.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                        <p className="font-bold text-red-900 mb-2">Don't</p>
                                        <ul className="list-disc pl-5 text-sm text-red-800 space-y-1">
                                            <li>Use yellow for long-form body copy.</li>
                                            <li>Combine multiple bright accents in one component.</li>
                                            <li>Rely on color alone to communicate state or priority.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
                                    <p className="font-semibold mb-1">Research references to include in final handoff</p>
                                    <p><GlossaryTip term="WCAG 2.2" definition="Web Content Accessibility Guidelines version 2.2" /> contrast guidance, NN/g findings on visual hierarchy and readability, and evidence summaries on early-learning color environment design.</p>
                                </div>
                            </section>
                            {designPrinciples.map((principle, idx) => {
                                const PrincipleIcon = Icons[principle.icon];
                                return (
                                    <div key={idx} className="bg-white rounded-lg shadow-xl p-5 sm:p-8 border-2 border-gray-200">
                                        <div className="flex flex-col md:flex-row items-start gap-6">
                                            <div className="bg-green-100 p-4 rounded-lg">
                                                <PrincipleIcon className="w-8 h-8 text-green-600" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                                                <p className="text-lg text-gray-600 mb-4">{principle.description}</p>
                                                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                                                    <p className="text-sm font-semibold text-gray-700 mb-1">Example:</p>
                                                    <p className="text-gray-600 text-sm">{principle.example}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Color Palette Selector */}
                            <div className="bg-white rounded-lg shadow-xl p-5 sm:p-8 border-2 border-gray-200">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Choose Your Color Palette</h3>
                                <p className="text-gray-600 mb-6">Select from research-backed preschool color schemes</p>
                                
                                {/* Palette Selector Tabs */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                                    {Object.entries(colorPalettes).map(([key, palette]) => (
                                        <button
                                            type="button"
                                            key={key}
                                            onClick={() => setSelectedPalette(key)}
                                            className={`p-4 rounded-lg transition-all text-left ${
                                                selectedPalette === key
                                                    ? 'bg-gradient-to-br from-green-500 to-blue-500 text-white shadow-lg scale-105'
                                                    : 'bg-gray-50 border-2 border-gray-200 hover:border-green-400'
                                            }`}
                                        >
                                            <p className={`font-bold mb-1 ${selectedPalette === key ? 'text-white' : 'text-gray-900'}`}>
                                                {palette.name}
                                            </p>
                                            <p className={`text-xs ${selectedPalette === key ? 'text-green-100' : 'text-gray-500'}`}>
                                                {palette.mood}
                                            </p>
                                        </button>
                                    ))}
                                </div>

                                <details open className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg border-2 border-blue-200 mb-6">
                                    <summary className="px-5 py-4 font-bold text-gray-900 flex items-center justify-between">
                                        <span>Selected Palette Details</span>
                                        <span className="text-sm text-gray-500">Expand / Collapse</span>
                                    </summary>
                                    <div className="px-6 pb-6">
                                        <div className="flex flex-col lg:flex-row items-start justify-between mb-4 gap-4">
                                            <div className="flex-1">
                                                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{currentPalette.name}</h4>
                                                <p className="text-gray-700 mb-2">{currentPalette.description}</p>
                                                <div className="flex flex-wrap items-center gap-2 text-sm">
                                                    <span className="bg-blue-100 px-3 py-1 rounded-full text-blue-800 font-medium">
                                                        Mood: {currentPalette.mood}
                                                    </span>
                                                    <span className="bg-green-100 px-3 py-1 rounded-full text-green-800 font-medium">
                                                        {currentPalette.distribution}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="bg-white px-4 py-2 rounded-lg border-2 border-green-400 text-sm">
                                                <p className="font-semibold text-green-900">Best For:</p>
                                                <p className="text-gray-700">{currentPalette.bestFor}</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
                                            {Object.entries(currentPalette.colors).map(([key, color]) => (
                                                <div key={key} className="text-center">
                                                    <div 
                                                        className="h-28 rounded-lg shadow-lg mb-3 border-2 border-gray-300 transition-transform hover:scale-105"
                                                        style={{ backgroundColor: color.hex }}
                                                        role="img"
                                                        aria-label={`${color.name} swatch, hex ${color.hex}`}
                                                    ></div>
                                                    <p className="font-semibold text-gray-900 text-sm">{color.name}</p>
                                                    <p className="text-xs text-gray-500 font-mono mb-2">{color.hex}</p>
                                                    <p className="text-xs text-gray-600 mb-1">{color.role}</p>
                                                    <p className="text-xs text-green-700 font-medium">✓ {color.benefit}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </details>

                                <details className="mt-6 bg-green-50 rounded-lg border-l-4 border-green-500 border border-green-200">
                                    <summary className="px-5 py-4 font-bold text-green-900 flex items-center justify-between">
                                        <span>Palette Application Strategy: {currentPalette.distribution}</span>
                                        <span className="text-sm text-green-700">Expand / Collapse</span>
                                    </summary>
                                    <div className="px-5 pb-5 space-y-2 text-sm text-gray-700">
                                        <p><strong>Website Sections:</strong> Apply primary colors to hero, major sections, backgrounds</p>
                                        <p><strong>CTAs & Buttons:</strong> Use accent colors for "Schedule Tour" and "Enroll Now" buttons</p>
                                        <p><strong>Navigation & Links:</strong> Secondary colors for consistency and trust-building</p>
                                        <p><strong>White Space:</strong> Generous use of neutral backgrounds prevents visual fatigue</p>
                                    </div>
                                </details>
                            </div>

                            <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
                                <h3 className="text-lg font-bold text-green-900 mb-2">Next Step</h3>
                                <p className="text-green-800 mb-4">Continue to Site Structure to connect these design choices to page hierarchy and implementation scope.</p>
                                <button type="button" onClick={() => changeView('structure')} className="bg-green-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-800 transition-all">Go to Site Structure</button>
                            </div>
                        </div>
                    )}

                    {/* Site Structure View */}
                    {visitedViews.structure && (
                        <div
                            id="panel-structure"
                            role="tabpanel"
                            aria-labelledby="tab-structure"
                            hidden={currentView !== 'structure'}
                            className={`space-y-6 ${currentView === 'structure' ? 'panel-enter' : ''}`}
                        >
                            <TakeawayBanner text={TAB_TAKEAWAYS.structure} />
                            <TabHeader icon={TAB_HEADERS.structure.icon} title={TAB_HEADERS.structure.title} description={TAB_HEADERS.structure.description} />
                            <div id="structure-architecture" className="bg-gradient-to-r from-blue-600 to-purple-600 p-5 sm:p-8 rounded-lg shadow-xl text-white mb-6">
                                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Site Architecture</h2>
                                <p className="text-blue-100 text-lg">
                                    Streamlined navigation focused on converting parents to tours and enrollments
                                </p>
                            </div>

                            <div className="space-y-4">
                                {keyPages.map((page, idx) => {
                                    const PageIcon = PAGE_ICONS[page.name] || Icons.FileText;
                                    return (
                                        <details key={idx} open={idx === 0} className="bg-white rounded-lg shadow-xl border-2 border-gray-200">
                                            <summary className="px-6 py-5">
                                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                                    <div className="flex items-start gap-3">
                                                        <div className="bg-blue-100 p-2 rounded-lg border border-blue-200">
                                                            <PageIcon className="w-5 h-5 text-blue-700" />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-xl font-bold text-gray-900">{page.name}</h3>
                                                            <p className="text-sm text-gray-600">{page.goal}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className={`px-3 py-1 rounded-lg font-semibold text-sm ${
                                                            page.priority === 'Critical'
                                                                ? 'bg-red-100 text-red-700 border-2 border-red-400'
                                                                : 'bg-yellow-100 text-yellow-700 border-2 border-yellow-400'
                                                        }`}>
                                                            {page.priority}
                                                        </div>
                                                        <span className="text-xs text-gray-500">Expand / Collapse</span>
                                                    </div>
                                                </div>
                                            </summary>

                                            <div className="px-6 pb-6">
                                                <p className="text-sm font-semibold text-gray-700 mb-3">Sections:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {page.sections.map((section, sIdx) => (
                                                        <div key={sIdx} className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-200 text-sm text-blue-900">
                                                            {section}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </details>
                                    );
                                })}
                            </div>

                            {/* User Journey */}
                            <div className="bg-white rounded-lg shadow-xl p-5 sm:p-8 border-2 border-gray-200">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Typical Parent Journey</h3>
                                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                    {[
                                        { step: 'Discover', action: 'Google search or referral', bg: '#dbeafe', border: '#3b82f6', icon: Icons.Globe },
                                        { step: 'Explore', action: 'Browse programs & photos', bg: '#dcfce7', border: '#22c55e', icon: Icons.Layout },
                                        { step: 'Trust', action: 'Read reviews & credentials', bg: '#f3e8ff', border: '#a855f7', icon: Icons.Users },
                                        { step: 'Act', action: 'Schedule tour', bg: '#fef9c3', border: '#eab308', icon: Icons.MessageSquare },
                                        { step: 'Convert', action: 'Enroll', bg: '#fee2e2', border: '#ef4444', icon: Icons.CheckCircle2 }
                                    ].map((item, idx) => (
                                        <React.Fragment key={idx}>
                                            <div className="flex flex-col items-center">
                                                <div
                                                    className="w-20 h-20 rounded-full flex items-center justify-center mb-3"
                                                    style={{ backgroundColor: item.bg, borderWidth: '4px', borderStyle: 'solid', borderColor: item.border }}
                                                    aria-label={`Step ${idx + 1}: ${item.step}`}
                                                >
                                                    <div className="text-center">
                                                        <item.icon className="w-5 h-5 mx-auto text-gray-900" />
                                                        <span className="text-sm font-bold text-gray-900">{idx + 1}</span>
                                                    </div>
                                                </div>
                                                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Step {idx + 1}</p>
                                                <p className="font-bold text-gray-900 mb-1">{item.step}</p>
                                                <p className="text-sm text-gray-600 text-center max-w-24">{item.action}</p>
                                            </div>
                                            {idx < 4 && (
                                                <Icons.ChevronRight className="hidden md:block w-8 h-8 text-gray-400" />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            <section className="bg-white rounded-lg shadow-xl p-5 sm:p-8 border-2 border-gray-200">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Success Metrics & Measurement Plan</h3>
                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    {SUCCESS_METRICS.map((metric) => (
                                        <div key={metric} className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900 font-medium">
                                            {metric}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-700 mb-2"><GlossaryTip term="KPI" definition="Key Performance Indicator" /> values are proposed targets to validate redesign impact after launch.</p>
                                <p className="text-sm text-gray-600">Suggested measurement windows: 30 days, 90 days, and 6 months post-launch.</p>
                            </section>

                            <section className="bg-white rounded-lg shadow-xl p-5 sm:p-8 border-2 border-gray-200">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Implementation Roadmap</h3>
                                <div className="space-y-3">
                                    {IMPLEMENTATION_ROADMAP.map((phase, index) => (
                                        <div key={phase} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-4">
                                            <span className="w-7 h-7 rounded-full bg-gray-900 text-white text-sm font-bold flex items-center justify-center mt-0.5">{index + 1}</span>
                                            <p className="text-sm text-gray-700 font-medium">{phase}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="bg-white rounded-lg shadow-xl p-5 sm:p-8 border-2 border-gray-200">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Developer Handoff Checklist</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                        <p className="font-bold text-gray-900 mb-2">Design Assets</p>
                                        <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                                            <li>Final color tokens with semantic naming</li>
                                            <li>Typography scale and responsive rules</li>
                                            <li>Icon set with usage mapping</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                        <p className="font-bold text-gray-900 mb-2">Component States</p>
                                        <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                                            <li>Buttons: default, hover, active, disabled</li>
                                            <li>Forms: focus, error, success</li>
                                            <li>Cards/accordions: open, collapsed, loading</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                        <p className="font-bold text-gray-900 mb-2">Responsive Rules</p>
                                        <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                                            <li>Desktop, tablet, mobile breakpoints documented</li>
                                            <li>Touch-target minimum sizes validated</li>
                                            <li>Layout behavior for dense sections specified</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                        <p className="font-bold text-gray-900 mb-2">QA Gates</p>
                                        <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                                            <li>Lighthouse accessibility and performance checks</li>
                                            <li>Keyboard and screen-reader pass</li>
                                            <li>Cross-browser sanity validation</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {/* Footer CTA */}
                    <div className="mt-12 bg-gradient-to-r from-yellow-300 via-green-300 to-blue-400 p-5 sm:p-8 rounded-lg shadow-xl border border-blue-200">
                        <div className="text-center">
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Ready to Build This?</h3>
                            <p className="text-base sm:text-xl mb-6 text-gray-950">
                                Move from recommendation to execution with one primary action and clear supporting resources.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 mb-4">
                                <div className="text-center">
                                    <a href={ACTION_LINKS.discoveryCall} className="bg-gray-900 text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all inline-block">Book Discovery Call</a>
                                    <p className="text-xs text-gray-700 mt-2">Opens email draft for kickoff conversation.</p>
                                </div>
                                <div className="text-center">
                                    <a href={ACTION_LINKS.tuitionGuide} className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold border border-gray-400 hover:shadow-xl transition-all inline-block">Download Tuition Guide</a>
                                    <p className="text-xs text-gray-700 mt-2">Opens email draft to request latest tuition PDF.</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center gap-3">
                                <a href={ACTION_LINKS.scheduleTour} className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold border border-gray-300 hover:shadow-md transition-all">Schedule a Tour</a>
                                <a href={ACTION_LINKS.contactAdmissions} className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold border border-gray-300 hover:shadow-md transition-all">Contact Admissions</a>
                                <a href={ACTION_LINKS.liveSite} className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold border border-gray-300 hover:shadow-md transition-all">Open Live Site</a>
                            </div>
                        </div>
                    </div>
                </div>
                </main>
            );
        };

        // Simple Error Boundary
        class ErrorBoundary extends React.Component {
            constructor(props) {
                super(props);
                this.state = { hasError: false };
            }
            static getDerivedStateFromError() {
                return { hasError: true };
            }
            render() {
                if (this.state.hasError) {
                    return (
                        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                            <span style={{ fontSize: '3rem' }}>🍌</span>
                            <h2 style={{ margin: '1rem 0', color: '#1f2937' }}>Something went wrong</h2>
                            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>Please refresh the page to try again.</p>
                            <button
                                onClick={() => window.location.reload()}
                                style={{ padding: '0.75rem 2rem', background: '#eab308', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}
                            >
                                Refresh Page
                            </button>
                        </div>
                    );
                }
                return this.props.children;
            }
        }

        // Render the app
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ErrorBoundary><BananafanaWebsiteShowcase /></ErrorBoundary>);
