import java.util.*;

public class larger {
    public static void main(String[] argc) {
        Scanner sc = new Scanner(System.in);
        int num1, num2;
        System.err.print("Enter your 1st number: ");
        num1 = sc.nextInt();
        System.err.print("Enter your 2nd number: ");
        num2 = sc.nextInt();
        if (num1 > num2) {
            System.err.println(num1 + " is greater than " + num2);
        } else {
            System.err.println(num2 + " is greater than " + num1);
        }

    }
}
