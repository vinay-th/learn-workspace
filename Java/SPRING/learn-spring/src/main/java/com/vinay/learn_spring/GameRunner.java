package com.vinay.learn_spring;

public class GameRunner {
        MarioGame game;
    public GameRunner(MarioGame marioGame) {
        this.game = marioGame;
    }

    public void run(){
        System.out.print("Running game: " + game);
        game.up();
        game.down();
        game.left();
        game.right();
    }
}
