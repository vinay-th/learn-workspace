import java.util.*;
public class demo{
    public static void main(String[] argc)
    {
        int marks;
        Scanner sc = new Scanner(System.in);
        marks = sc.nextInt();
        
        if (marks > 33) {
            System.err.println("you have passed");
        } else {
            System.err.println("You have failed");
        }
    }
}