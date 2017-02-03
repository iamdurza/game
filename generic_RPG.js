var game = new Phaser.Game(1500, 750)
class Boot {
  preload() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  }
}
















game.state.add("Boot",Boot);
game.state.start("Boot");
