import React from "react";

type Props = {};

export function Donation(props: Props) {
  const messages = [
    "👊 Nailed your attack with Zapquaker?",
    "⭐⭐⭐ thanks to Zapquaker?",
    "📊 Avoided boring maths thanks to Zapquaker?",
    "📊 Avoided spreadsheets thanks to Zapquaker?",
    "❤ Want to support Zapquaker?",
    "⚔ Won your clan war with Zapquaker?",
    "💥 Destroyed that Scattershot with Zapquaker?",
    "💥 Destroyed that Inferno Tower with Zapquaker?",
    "💥 Destroyed that Air Defense with Zapquaker?",
    "⌚ Saved time with Zapquaker?",
    "📐 Improved your strategy with Zapquaker?",
    "📐 Optimized your strategy with Zapquaker?",
    "🤝 Helped a clan mate with Zapquaker?",
    "🏆 Promoted to a higher league with Zapquaker?",
    "📈 Got that insane value with Zapquaker?",
    "🥇 Earned those league medals with Zapquaker?",
    "💪 Carried your clan with Zapquaker?",
  ];
  return (
    <div className="flex flex-col items-center text-sm">
      <p>{messages[Math.floor(Math.random() * messages.length)]}</p>
      <a
        className="mt-2"
        href="https://www.buymeacoffee.com/Bryght7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt="Buy me a coffee"
          className="h-12"
          src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=Bryght7&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"
        />
      </a>
    </div>
  );
}
