package main

import scala.compiletime.ops.string

object basic extends App {
    // defining values
    val life = "Batak"

    //auto data type declaration by compiler
    val aString = "I love batak"

    //manual data type declaration with : dataType
    val commits: Int = 666

    //using previous values
    val myself = s"I am vinay i like $life"

    //if expression
    val codingLife = if (commits > 500) "Sabash munna" else "Barbad zindagi"

    val tippani = 
        if(commits > 600) "Ati utaam"
        else if (commits < 600 && commits > 550) "Acha hai"
        else if (commits < 550 && commits > 500) "Theek hai"
        else "Bhak bsdk"
    //codeBlock
    val codeBlock = {
        // definition of codes
        val age = 18
        // return something
        age + 2
    }

    // function define
    def myFunction(x: Int, y: String): String ={ y + " I am " +x +" years old"}
    println(myFunction(codeBlock, myself))
    
    // factorial function
    def factorial(n: Int): Int = {
        if (n <= 1) 1
        else n* factorial(n - 1)
    }
    //in scala loops are not used recursion is used
    
    //void functions
    def myUnit(): Unit = {
        println("I don't like returning")
    }
    println(myUnit())
}