import { useState, useEffect } from 'react';

const flyData = {
  name: 'Blue Collared Bugger',
  hook: 'Size 8-12 streamer hook',
  tagline: 'A modern twist on a classic streamer, featuring a vibrant blue collar.',
  description: "The Blue Collared Bugger is an aggressive streamer that works hard so you don't have to. The blue flash and collar trigger predatory instincts, while the tail provides lifelike movement. This one's guaranteed to pique the interest of both small and big fish alike.",
  materials: [
    { id: 'hook', label: 'Hook', detail: 'Streamer hook, size 8-12' },
    { id: 'bead', label: 'Bead', detail: 'Black tungsten bead' },
    { id: 'thread', label: 'Thread', detail: '140D or 150D, black' },
    { id: 'tail', label: 'Tail', detail: 'Blue tail (base of hen feathers or marabou)' },
    { id: 'body', label: 'Body', detail: 'Brown chenille' },
    { id: 'hackle', label: 'Hackle', detail: 'Blue hen feather tip' },
    { id: 'collar', label: 'Collar', detail: 'Blue fuzz from base of hen feather' },
  ],
  steps: [
    { id: 1, title: 'Secure Bead', material: 'bead', instruction: 'Slide the black tungsten bead onto the hook. Tie in your black thread right behind the bead and wrap back to the hook bend.', tip: 'A tungsten bead on a size 12 hook drops this fly fast without needing lead wire.', waterNote: 'Perfect for plunging into deep pockets.' },
    { id: 2, title: 'Tie the Tail', material: 'tail', instruction: 'Tie in your blue tail using the fluffy base of the hen feathers or blue marabou for a longer tail. Secure it at the hook bend.', tip: 'Pinch the tail material firmly while tying to keep it from spinning around the hook.', waterNote: 'The blue tail mimics movement and creates a strong contrast.' },
    { id: 3, title: 'Tie in Body', material: 'body', instruction: 'Tie in the brown chenille at the bend. Wrap your thread forward to just behind the bead.', tip: 'Keep the tie-in point smooth so you do not build a lump under the body.', waterNote: 'Brown chenille provides a great natural base color.' },
    { id: 4, title: 'Wrap the Body', material: 'body', instruction: 'Wrap the brown chenille forward to the front of the hook and tie it off with your thread.', tip: 'Keep the wraps tight and touching for a durable, dense body.', waterNote: 'The density of the chenille helps displace water.' },
    { id: 5, title: 'Tie in Hackle', material: 'hackle', instruction: 'Tie in your blue hen feather tip first right behind the bead. Take a few hackle wraps to form the collar, then secure it with your thread.', tip: 'Tying the feather tip-first ensures the fibers flow beautifully backwards over the body.', waterNote: 'This provides the main silhouette and breathing motion.' },
    { id: 6, title: 'Build the Blue Spot', material: 'collar', instruction: 'Pull a bit more blue fuzz from the base of the feather and dub it onto the thread to create a blue spot/finish for the collar.', tip: 'A small, tight pinch of fuzz goes a long way here.', waterNote: 'The blue spot acts as a trigger point for strikes.' },
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
      {/* Header Area */}
      <section className="pt-28 pb-8 px-6 text-center">
        <div className="container-narrow">
          <p className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-3 animate-fade-in">Interactive Tying Bench</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream tracking-tight mb-4 animate-fade-in-up">
            The Lab
          </h1>
          <p className="text-mid-gray text-base sm:text-lg max-w-lg mx-auto leading-relaxed animate-fade-in-up delay-100">
            Master the art of tying with our step-by-step guides. Follow along as you build your quiver.
          </p>
        </div>
      </section>

      <div className="container-default px-4 sm:px-6 pb-16">
        {/* Main Fly Card */}
        <div className="bg-surface border border-border rounded-xl p-6 md:p-10 mb-8 animate-fade-in-up delay-300">
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-10 pb-10 border-b border-border/50">
            <div className="flex-shrink-0 w-full md:w-96 bg-elevated border border-border rounded-lg p-6 flex justify-center">
              <FlyIllustration doneCount={doneCount} />
            </div>
            
            <div className="flex-1 w-full relative">
              <div className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-2">Signature Pattern</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-cream mb-4">{flyData.name}</h2>
              <p className="text-mid-gray text-body mb-6">{flyData.description}</p>
              <div className="inline-flex bg-elevated border border-border text-cream text-xs px-3 py-1.5 rounded uppercase tracking-wider font-semibold">
                {flyData.hook}
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative h-2 bg-elevated rounded-full mb-10 overflow-hidden border border-border">
            <div 
              className="absolute top-0 left-0 h-full bg-accent transition-all duration-500 ease-out" 
              style={{ width: `${progress * 100}%` }} 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Step navigation */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {flyData.steps.map((s, i) => (
                <button
                  key={s.id}
                  className={`flex items-center gap-4 p-4 rounded-lg text-left transition-all duration-200 border ${
                    i === activeStep 
                      ? 'bg-elevated border-accent text-cream shadow-md' 
                      : i < doneCount || isFinished
                        ? 'bg-transparent border-transparent text-mid-gray hover:bg-surface/50'
                        : 'bg-transparent border-transparent text-mid-gray hover:text-cream hover:bg-surface/50'
                  }`}
                  onClick={() => {
                    setActiveStep(i);
                    if (isFinished) setIsFinished(false);
                  }}
                >
                  <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold ${
                    i < doneCount || isFinished ? 'bg-accent/20 text-accent' : i === activeStep ? 'bg-accent text-white' : 'bg-border text-mid-gray'
                  }`}>
                    {i < doneCount || isFinished ? "✓" : s.id}
                  </span>
                  <span className="font-semibold text-sm">{s.title}</span>
                </button>
              ))}
            </div>

            {/* Active step card */}
            <div className="lg:col-span-8">
              <div className="bg-elevated border border-border rounded-xl p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-2xl font-display font-bold text-cream">{step.title}</h3>
                  {activeMaterial && (
                    <div className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 bg-surface rounded-full border border-border">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-accent">{activeMaterial.label}:</span>
                      <span className="text-mid-gray truncate max-w-[150px] sm:max-w-xs">{activeMaterial.detail}</span>
                    </div>
                  )}
                </div>

                <p className="text-cream/90 text-lg leading-relaxed mb-8">
                  {step.instruction}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-surface border border-border border-l-4 border-l-accent rounded p-4">
                    <div className="text-[10px] font-bold tracking-widest text-mid-gray uppercase mb-2">⟡ Tyer's Tip</div>
                    <p className="text-sm text-cream/80">{step.tip}</p>
                  </div>
                  <div className="bg-surface border border-border border-l-4 border-l-sage rounded p-4">
                    <div className="text-[10px] font-bold tracking-widest text-mid-gray uppercase mb-2">≈ On The Water</div>
                    <p className="text-sm text-cream/80">{step.waterNote}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-end gap-4 pt-6 border-t border-border">
                  {(activeStep > 0 || isFinished) && (
                    <button 
                      className="btn btn-secondary text-sm" 
                      onClick={handlePrevious}
                    >
                      ← Previous
                    </button>
                  )}
                  <button
                    className={`btn text-sm ${isFinished ? 'btn-secondary bg-surface text-cream' : 'btn-primary'}`}
                    onClick={handleNext}
                  >
                    {isFinished
                      ? "✓ Fly Completed"
                      : activeStep === flyData.steps.length - 1
                      ? "Finish Fly →"
                      : "Mark Complete →"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Materials Bench */}
        <div className="bg-surface border border-border rounded-xl p-6 md:p-10 animate-fade-in-up delay-400">
          <h3 className="text-sm font-bold text-mid-gray tracking-widest uppercase mb-6">Materials Bench</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {flyData.materials.map((m) => (
              <div
                key={m.id}
                className={`p-4 rounded border transition-all duration-200 ${
                  step.material === m.id 
                    ? 'bg-elevated border-accent shadow-[0_0_15px_rgba(139,58,62,0.15)]' 
                    : 'bg-elevated border-border'
                }`}
              >
                <div className={`text-xs font-bold tracking-wider uppercase mb-1 ${step.material === m.id ? 'text-accent' : 'text-cream'}`}>
                  {m.label}
                </div>
                <div className="text-xs text-mid-gray">{m.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
