# Chroma Veil

Chroma Veil is a unique JavaScript-based puzzle game where players align veil nodes to harmonize chromatic waves. Match node states (red, blue, green) in adjacent grid cells to form wave chains, earning points and advancing through veil phases. Built with Node.js and the `canvas` library, this game is designed for developers seeking a modular, extensible project.

## Features
- **Color Resonance Gameplay**: Connect nodes with matching chromatic states (red, blue, green) horizontally or vertically to harmonize chromatic waves.
- **Veil Phases**: Progress through phases as you score, increasing node counts and resonance levels.
- **Modular JavaScript**: Clean, object-oriented code for seamless integration and extension.
- **Canvas Rendering**: Server-side rendering with the `canvas` library, suitable for desktop or web applications.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/chroma-veil.git
   ```
2. Navigate to the project directory:
   ```bash
   cd chroma-veil
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the game:
   ```bash
   npm start
   ```

## How to Play
- **Objective**: Connect adjacent nodes with the same chromatic state (red, blue, green) horizontally or vertically by cycling their states.
- **Scoring**: Each wave chain earns 90 points multiplied by the current phase.
- **Phase Progression**: Reach 900 points per phase to advance, increasing node count and resonance levels.
- **Interaction**: Use `game.handleClick(x, y)` to cycle node states (requires UI integration).
- **Reset**: Call `game.reset()` to restart the game.

## Development
- **Tech Stack**: Node.js, JavaScript, `canvas`
- **Dependencies**: `canvas` for rendering
- **Code Structure**:
  - `index.js`: Main game logic and rendering.
  - `node.js`: VeilNode class for chromatic entities.
  - `package.json`: Project metadata and dependencies.
- **Extending**: Integrate with a UI framework (e.g., Electron for desktop or a web server) to handle input and display the canvas.

## Notes
- The current implementation outputs a PNG snapshot (`output.png`) for testing. For interactive play, integrate with a UI framework to handle mouse clicks and real-time rendering.
- Example integration: Use Electron for a desktop app or a WebSocket server for web-based play.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes. For major updates, open an issue first to discuss your ideas.

## Support
If you enjoy Chroma Veil and want to support its development, consider sponsoring me on [GitHub Sponsors](https://github.com/sponsors/loigaak). Your support helps keep this project alive and growing!

## License
MIT License. See [LICENSE](LICENSE) for details.
