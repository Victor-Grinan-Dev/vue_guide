const randomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
/**ready */
const app = Vue.createApp({
  data() {
    return {
      monsterHP: 100,
      playerHP: 100,
      currentRound: 0,
      winner: null,
      logs: [],
    };
  },
  watch: {
    playerHP(value) {
      if (value <= 0 && this.monsterHP <= 0) {
        //draw
        this.winner =
          "As you strike the monster to death, you didnt notice the claw in your chest... and both die!";
      } else if (value <= 0) {
        //lost
        this.winner =
          "The monster rips your limbs appart while you cry desperatly!";
      }
    },
    monsterHP(value) {
      if (value <= 0 && this.playerHP <= 0) {
        this.winner =
          "As you strike the monster to death, you didnt notice the claw in your chest... and both die!";
      } else if (value <= 0) {
        //win
        this.winner = "You chopped the monster's head!";
      }
    },
  },
  computed: {
    monsterBarStyle() {
      return { width: this.monsterHP + "%" };
    },
    playerBarStyle() {
      return { width: this.playerHP + "%" };
    },
    mayUseSpecial() {
      return this.currentRound === 0 || this.currentRound % 3 !== 0;
    },
    mayUseHeal() {
      return this.currentRound === 0 || this.currentRound % 2 !== 0;
    },
  },
  methods: {
    attackMonster() {
      /* minimun 5 max 12 dmg */
      const attackValue = randomValue(5, 12);
      this.currentRound++;
      this.addLog("player", "attack", attackValue);
      if (this.monsterHP - attackValue < 0) {
        this.monsterHP = 0;
      } else {
        this.monsterHP -= attackValue;
      }
      /* every time you attact the monster, the monster attacks back */
      this.monsterAttacks();
    },
    monsterAttacks() {
      /* minimun 8 max 15 dmg */
      const attackValue = randomValue(8, 15);
      this.addLog("monster", "attack", attackValue);
      if (this.playerHP - attackValue < 0) {
        this.playerHP = 0;
      } else {
        this.playerHP -= attackValue;
      }
    },
    specialAttack() {
      const attackValue = randomValue(10, 25);
      this.currentRound++;
      this.addLog("player", "attack", attackValue);
      if (this.monsterHP - attackValue < 0) {
        this.monsterHP = 0;
      } else {
        this.monsterHP -= attackValue;
      }
      /* every time you attact the monster, the monster attacks back */
      this.monsterAttacks();
    },
    heal() {
      const heal = randomValue(8, 18);
      this.addLog("player", "heal", heal);
      if (this.playerHP + heal > 100) {
        this.playerHP = 100;
      } else {
        this.playerHP += heal;
      }
      this.currentRound++;
      this.monsterAttacks();
    },
    reset() {
      this.monsterHP = 100;
      this.playerHP = 100;
      this.currentRound = 0;
      this.winner = "";
      this.logs = [];
    },
    surrender() {
      this.winner = "Coward, come back!!!";
      this.addLog("Player", "surrender", "cowardly");
    },
    addLog(who, what, value) {
      this.logs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
}).mount("#game");
