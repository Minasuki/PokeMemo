// src/stores/GameStore.js
import { makeAutoObservable } from 'mobx';

class GameStore {
  deck = [];
  flipped = [];
  solved = [];
  disabled = false;

  constructor() {
    makeAutoObservable(this);
  }

  generateDeck() {
    const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    this.deck = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
  }

  handleFlip(index1, index2) {
    if (this.deck[index1] === this.deck[index2]) {
      this.solved.push(this.deck[index1]);
    }
  }

  handleClick(index) {
    if (this.flipped.length < 2) {
      this.flipped.push(index);
      if (this.flipped.length === 2) {
        this.disabled = true;
        setTimeout(() => {
          this.handleFlip(...this.flipped);
          this.flipped = [];
          this.disabled = false;
        }, 1000);
      }
    }
  }

  resetGame() {
    this.generateDeck();
    this.flipped = [];
    this.solved = [];
    this.disabled = false;
  }
}

export default new GameStore();
