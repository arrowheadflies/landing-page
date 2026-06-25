import { useState, useEffect } from 'react';
import { Check, ChevronLeft, ChevronRight, BookOpen, Scissors, Fish } from 'lucide-react';

const flyData = {
  name: 'Blue Collared Bugger',
  hook: 'Size 8-12 streamer hook',
  tagline: 'A modern twist on a classic streamer, featuring a vibrant blue collar.',
  description: "The Blue Collared Bugger is an aggressive streamer that works hard so you don't have to. The blue flash and collar trigger predatory instincts, while the tail provides lifelike movement.",
  materials: [
    { id: 'hook', label: 'Hook', detail: 'Streamer hook, size 8-12' },
    { id: 'bead', label: 'Bead', detail: 'Black tungsten bead' },
    { id: 'thread', label: 'Thread', detail: '140D or 150D, black' },
    { id: 'tail', label: 'Tail', detail: 'Blue tail (hen feathers or marabou)' },
    { id: 'body', label: 'Body', detail: 'Brown chenille' },
    { id: 'hackle', label: 'Hackle', detail: 'Blue hen feather tip' },
    { id: 'collar', label: 'Collar', detail: 'Blue fuzz (feather base)' },
  ],
  steps: [
    { id: 1, title: 'Secure Bead', material: 'bead', instruction: 'Slide the black tungsten bead onto the hook. Tie in your black thread right behind the bead and wrap back to the hook bend.', tip: 'A tungsten bead on a size 12 hook drops this fly fast without needing lead wire.', waterNote: 'Perfect for plunging into deep pockets.' },
    { id: 2, title: 'Tie the Tail', material: 'tail', instruction: 'Tie in your blue tail using the fluffy base of the hen feathers or blue marabou. Secure it at the hook bend.', tip: 'Pinch the tail material firmly while tying to keep it from spinning.', waterNote: 'The blue tail mimics movement and creates strong contrast.' },
    { id: 3, title: 'Tie in Body', material: 'body', instruction: 'Tie in the brown chenille at the bend. Wrap your thread forward to just behind the bead.', tip: 'Keep the tie-in point smooth so you do not build a lump under the body.', waterNote: 'Brown chenille provides a great natural base color.' },
    { id: 4, title: 'Wrap the Body', material: 'body', instruction: 'Wrap the brown chenille forward to the front of the hook and tie it off with your thread.', tip: 'Keep the wraps tight and touching for a durable, dense body.', waterNote: 'The density of the chenille helps displace water.' },
    { id: 5, title: 'Tie in Hackle', material: 'hackle', instruction: 'Tie in your blue hen feather tip first right behind the bead. Take a few hackle wraps to form the collar, then secure it.', tip: 'Tying the feather tip-first ensures the fibers flow beautifully backwards.', waterNote: 'This provides the main silhouette and breathing motion.' },
    { id: 6, title: 'Build the Blue Spot', material: 'collar', instruction: 'Pull a bit more blue fuzz from the base of the feather and dub it onto the thread to create a blue spot for the collar.', tip: 'A small, tight pinch of fuzz goes a long way here.', waterNote: 'The blue spot acts as a trigger point for strikes.' },
    { id: 7, title: 'Finish the Head', material: 'thread', instruction: 'Whip finish the thread right behind the bead and snip. Apply a drop of head cement or glue if desired.', tip: 'Make sure your whip finish does not trap any of the blue collar fibers.', waterNote: 'Fish this bugger aggressively or let it swing.' },
  ],
};

function FlyIllustration({ doneCount }: { doneCount: number }) {
  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-[400px] drop-shadow-[0_4px_24px_rgba(139,58,62,0.15)] mx-auto transition-all duration-300">
      {/* Water line */}
      <path d="M0 90 Q50 85 100 90 Q150 95 200 90 L200 120 L0 120Z" fill="#1a1d1f" opacity="0.6" />
      <path d="M0 90 Q50 85 100 90 Q150 95 200 90" stroke="#8b3a3e" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Hook */}
      <path d="M150 50 L70 50 Q50 50 50 65 Q50 80 70 80" stroke="#8a8f92" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M150 50 L155 50" stroke="#8a8f92" strokeWidth="1.5" fill="none" />

      {/* Bead (Step 1) */}
      {doneCount >= 1 && (
        <circle cx="145" cy="50" r="5" fill="#1a1d1f" opacity="0.95" />
      )}

      {/* Blue Tail (Step 2) */}
      {doneCount >= 2 && (
        <path d="M70 48 Q40 40 20 50 Q40 60 70 52 Q50 50 70 48" fill="#4a90e2" opacity="0.85" />
      )}

      {/* Chenille Body Base (Step 3) */}
      {doneCount >= 3 && (
        <path d="M140 50 L70 50" stroke="#6b4c3a" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      )}

      {/* Chenille Body Wrapped (Step 4) */}
      {doneCount >= 4 && (
        <path d="M140 50 L70 50" stroke="#6b4c3a" strokeWidth="10" strokeLinecap="round" opacity="0.95" />
      )}

      {/* Blue Hackle (Step 5) */}
      {doneCount >= 5 && (
        <>
          {[130, 115, 100, 85].map((x, i) => (
            <g key={i}>
              <line x1={x} y1="45" x2={x-8} y2="33" stroke="#4a90e2" strokeWidth="1.5" opacity="0.9" />
              <line x1={x} y1="55" x2={x-8} y2="67" stroke="#4a90e2" strokeWidth="1.5" opacity="0.9" />
            </g>
          ))}
        </>
      )}

      {/* Blue Spot (Step 6) */}
      {doneCount >= 6 && (
        <ellipse cx="140" cy="50" rx="4" ry="6" fill="#3b78c4" opacity="0.95" />
      )}

      {/* Finished head (Step 7) */}
      {doneCount >= 7 && (
        <ellipse cx="148" cy="50" rx="3" ry="4" fill="#1a1d1f" opacity="1" />
      )}

      {/* Current step indicator glow */}
      {doneCount < 7 && (
        <circle cx="100" cy="50" r="2" fill="#4a90e2" opacity="0.6">
          <animate attributeName="r" values="2;6;2" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
      )}

      {/* Label */}
      <text x="100" y="110" textAnchor="middle" fill="#8a8f92" fontSize="5" className="font-primary font-bold uppercase tracking-widest">
        BLUE COLLARED BUGGER · SZ 8-12
      </text>
    </svg>
  );
}

export default function FlyGuide() {
  const [activeStep, setActiveStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    document.title = 'The Lab — Arrowhead Flies';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Master the art of fly tying in The Lab. Step-by-step instructions for the Blue Collared Bugger and more.');
    }
  }, []);

  const handleNext = () => {
    if (activeStep + 1 < flyData.steps.length) {
      setActiveStep(activeStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrevious = () => {
    if (isFinished) {
      setIsFinished(false);
    } else if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const step = flyData.steps[activeStep];
  const activeMaterial = flyData.materials.find((m) => m.id === step.material);
  const doneCount = isFinished ? flyData.steps.length : activeStep;
  const progress = doneCount / flyData.steps.length;

  return (
    <div className="bg-charcoal min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-8 px-4 text-center">
        <div className="container-narrow">
          <div className="inline-flex items-center gap-1.5 bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-full px-3.5 py-1.5 mb-4">
            <BookOpen size={12} className="text-accent" />
            <span className="text-accent text-[10px] font-semibold tracking-[0.12em] uppercase">Interactive Tying Bench</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream tracking-tight mb-3 animate-fade-in-up">
            The Lab
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed animate-fade-in-up delay-100">
            Master the art of tying with our step-by-step guides. Follow along as you build your quiver.
          </p>
        </div>
      </section>

      <div className="container-wide pb-16">
        {/* Progress Overview */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Progress</span>
            <span className="text-[10px] font-semibold text-accent uppercase tracking-wider">{Math.round(progress * 100)}% Complete</span>
          </div>
          <div className="relative h-2 bg-elevated rounded-full overflow-hidden border border-border">
            <div 
              className="absolute top-0 left-0 h-full bg-accent transition-all duration-500 ease-out" 
              style={{ width: `${progress * 100}%` }} 
            />
          </div>
        </div>

        {/* Mobile: Horizontal Step Pills */}
        <div className="lg:hidden mb-6">
          <div className="flex gap-2 overflow-x-auto scroll-smooth no-scrollbar pb-2">
            {flyData.steps.map((s, i) => {
              const isActive = i === activeStep;
              const isComplete = i < doneCount || isFinished;
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveStep(i);
                    if (isFinished) setIsFinished(false);
                  }}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-200 ${
                    isActive
                      ? 'bg-accent text-white border-accent shadow-lg shadow-accent/20'
                      : isComplete
                        ? 'bg-accent/10 border-accent/30 text-accent'
                        : 'bg-white/[0.03] border-white/10 text-gray-400'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isComplete ? 'bg-accent text-white' : isActive ? 'bg-white/20 text-white' : 'bg-border text-mid-gray'
                  }`}>
                    {isComplete ? <Check size={12} /> : s.id}
                  </span>
                  <span className="text-xs font-medium whitespace-nowrap">{s.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop: Sidebar + Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:w-72 flex-shrink-0">
            <div className="sticky top-28 space-y-2">
              <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-3 px-1">Steps</div>
              {flyData.steps.map((s, i) => {
                const isActive = i === activeStep;
                const isComplete = i < doneCount || isFinished;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveStep(i);
                      if (isFinished) setIsFinished(false);
                    }}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 text-left ${
                      isActive
                        ? 'bg-accent/15 border-accent/40 text-cream shadow-sm shadow-accent/10'
                        : isComplete
                          ? 'bg-accent/5 border-accent/20 text-accent'
                          : 'bg-white/[0.02] border-white/10 text-gray-400 hover:bg-white/[0.04] hover:text-cream'
                    }`}
                  >
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      isComplete ? 'bg-accent text-white' : isActive ? 'bg-accent text-white' : 'bg-border text-mid-gray'
                    }`}>
                      {isComplete ? <Check size={12} /> : s.id}
                    </span>
                    <span className="text-sm font-medium">{s.title}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Fly Illustration + Info Card */}
            <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 mb-6 animate-fade-in-up">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Illustration */}
                <div className="flex-shrink-0 w-full md:w-80 bg-elevated border border-border rounded-xl p-6 flex items-center justify-center">
                  <FlyIllustration doneCount={doneCount} />
                </div>

                {/* Info */}
                <div className="flex-1 w-full">
                  <div className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase mb-2">Signature Pattern</div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-cream mb-3">{flyData.name}</h2>
                  <p className="text-mid-gray text-sm md:text-base leading-relaxed mb-4">{flyData.description}</p>
                  <div className="inline-flex items-center gap-2 bg-elevated border border-border text-cream text-xs px-3 py-2 rounded-lg uppercase tracking-wider font-semibold">
                    <Scissors size={12} className="text-accent" />
                    {flyData.hook}
                  </div>
                </div>
              </div>
            </div>

            {/* Active Step Card */}
            <div className="bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 mb-6 animate-fade-in-up">
              {/* Step Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="text-[10px] font-bold text-accent tracking-[0.15em] uppercase mb-2">
                    Step {step.id} of {flyData.steps.length}
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-cream">{step.title}</h3>
                </div>
                {activeMaterial && (
                  <div className="flex items-center gap-2 text-xs font-medium px-3 py-2 bg-elevated border border-border rounded-lg whitespace-nowrap">
                    <Fish size={12} className="text-accent" />
                    <span className="text-accent font-semibold">{activeMaterial.label}:</span>
                    <span className="text-mid-gray">{activeMaterial.detail}</span>
                  </div>
                )}
              </div>

              {/* Instruction */}
              <div className="bg-charcoal/60 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-white/5 mb-6">
                <p className="text-cream/90 text-base md:text-lg leading-relaxed">
                  {step.instruction}
                </p>
              </div>

              {/* Tips Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-elevated border border-border border-l-4 border-l-accent rounded-xl p-4">
                  <div className="text-[10px] font-bold tracking-widest text-accent uppercase mb-2">⟡ Tyer's Tip</div>
                  <p className="text-sm text-cream/80 leading-relaxed">{step.tip}</p>
                </div>
                <div className="bg-elevated border border-border border-l-4 border-l-sage rounded-xl p-4">
                  <div className="text-[10px] font-bold tracking-widest text-sage uppercase mb-2">≈ On The Water</div>
                  <p className="text-sm text-cream/80 leading-relaxed">{step.waterNote}</p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-6 border-t border-border">
                {(activeStep > 0 || isFinished) && (
                  <button 
                    className="flex-1 sm:flex-none btn btn-secondary text-sm" 
                    onClick={handlePrevious}
                  >
                    <ChevronLeft size={16} />
                    Previous
                  </button>
                )}
                <button
                  className={`flex-1 sm:flex-none btn text-sm ${isFinished ? 'btn-secondary bg-surface text-cream' : 'btn-primary'}`}
                  onClick={handleNext}
                >
                  {isFinished
                    ? "✓ Fly Completed"
                    : activeStep === flyData.steps.length - 1
                    ? "Finish Fly"
                    : "Next Step"}
                  {!isFinished && activeStep < flyData.steps.length - 1 && <ChevronRight size={16} />}
                </button>
              </div>
            </div>

            {/* Materials Bench */}
            <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 animate-fade-in-up">
              <div className="flex items-center gap-2 mb-5">
                <Scissors size={16} className="text-accent" />
                <h3 className="text-sm font-bold text-cream tracking-wider uppercase">Materials Bench</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {flyData.materials.map((m) => (
                  <div
                    key={m.id}
                    className={`p-4 rounded-xl border transition-all duration-200 ${
                      step.material === m.id 
                        ? 'bg-accent/10 border-accent/40 shadow-[0_0_20px_rgba(139,58,62,0.2)]' 
                        : 'bg-elevated border-border hover:border-white/20'
                    }`}
                  >
                    <div className={`text-[10px] font-bold tracking-wider uppercase mb-1.5 ${step.material === m.id ? 'text-accent' : 'text-cream'}`}>
                      {m.label}
                    </div>
                    <div className="text-xs text-mid-gray leading-relaxed">{m.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}