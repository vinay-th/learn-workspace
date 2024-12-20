package com.vinay.learn_spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LearnSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(LearnSpringApplication.class, args);

		var marioGame = new MarioGame();
        var gameRunner = new GameRunner(marioGame);

        gameRunner.run();
	}

}
