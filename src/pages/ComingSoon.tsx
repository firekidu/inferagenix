import Navigation from "@/components/Navigation";
import ProgressBar from "@/components/ProgressBar";
import SocialLinks from "@/components/SocialLinks";
import cosmicBackground from "@/assets/cosmic-background.jpg";
const ComingSoon = () => {
  return <div className="min-h-screen relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${cosmicBackground})`
    }}>
        <div className="absolute inset-0 bg-background/40"></div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-6xl mx-auto">
            {/* Site Under Reconstruction */}
            <div className="text-muted-foreground text-sm tracking-[0.3em] mb-8 floating">
              SITE UNDER RECONSTRUCTION
            </div>

            {/* Main Coming Soon Text */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.2em] mb-12">
              <span className="text-foreground pulse-glow">COMING</span>
              <br />
              <span className="text-primary cosmic-glow">SOON</span>
            </h1>

            {/* Progress Bar */}
            <div className="mb-16">
              <ProgressBar targetProgress={73} />
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              We're crafting something extraordinary. Inferagenix is building the future of 
              intelligent AI workflow systems. Stay tuned for groundbreaking innovations.
            </p>

            {/* Call to Action */}
            <button className="btn-cosmic">
              Get Notified When We Launch
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Left side - Company info */}
              <div className="text-muted-foreground text-sm mb-4 md:mb-0">
                <div className="font-semibold">INFERAGENIX</div>
                <div className="text-xs">Building the Future</div>
              </div>

              {/* Center - Social Links */}
              <div className="mb-4 md:mb-0">
                <SocialLinks />
              </div>

              {/* Right side - Status indicators */}
              <div className="text-right text-muted-foreground text-sm space-y-1">
                
                
                
                
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-primary/20 rounded-full floating" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${6 + Math.random() * 4}s`
      }} />)}
      </div>
    </div>;
};
export default ComingSoon;