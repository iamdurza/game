var game = new Phaser.Game(1400, 680)
class Boot {
  preload() {
    this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  }
 create() {
    this.state.start("Load")
  }
}

class Load {
  preload() {
    console.log("Loading");
    this.load.image("bg",C.bg.file)
    this.load.spritesheet("slime1", "assets/Slime_enemy_1_game.png", 32, 32, 2);
    this.load.spritesheet("poison_potion", "assets/poison_potion.png", 25, 25, 7);
  }














game.state.add("Boot",Boot);
game.state.start("Boot");
