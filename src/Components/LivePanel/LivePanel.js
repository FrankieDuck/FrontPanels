import LiveView from "./LiveView";

export default function LivePanel() {
    return (
      <div className="App" data-testid="Live-Panel">
        <LiveView />
      </div>
    );
  }