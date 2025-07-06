const Navigation = () => {
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary cosmic-glow">
            inferagenix
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;