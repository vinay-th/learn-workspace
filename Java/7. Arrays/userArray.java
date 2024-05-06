import java.util.*;

public class userArray {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int marks[] = new int[10];

        for (int i = 0; i < 10; i++) {
            System.out.print("Enter the marks of " + (i + 1) + " student: ");
            marks[i] = sc.nextInt();
        }
        for (int i = 0; i < 10; i++) {
            System.out.println("The marks of " + (i + 1) + " student: " + marks[i]);
        }
    }
}