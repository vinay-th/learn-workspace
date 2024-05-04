import java.util.*;
public class age {
    public static void main(String[] argc) {
        Scanner sc = new Scanner(System.in);

        System.err.print("Enter your age: ");
        int age = sc.nextInt();

        if (age >= 18) {
            System.err.println("You are adult");
        }
        else{
            System.err.println("you are not adult");
        }
    }
}
