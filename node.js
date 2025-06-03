class VeilNode {
  constructor(x, y, state) {
    this.x = x;
    this.y = y;
    this.state = state; // 0: red, 1: blue, 2: green
    this.resonance = Math.random() * 50 + 50;
  }

  draw(ctx) {
    ctx.fillStyle = this.state === 0 ? '#ff9090' : this.state === 1 ? '#9090ff' : '#90ffcc';
    ctx.beginPath();
    ctx.arc(this.x + 20, this.y + 20, this.resonance / 5, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.resonance -= 0.8;
    return this.resonance <= 0;
  }
}

module.exports = VeilNode;
