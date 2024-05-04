import java.util.*;

public class avg {
    public static void main(String[] argc) {
        Scanner sc = new Scanner(System.in);
        int a, b, avg;

        System.err.print("Enter your 1st number: ");
        a = sc.nextInt();
        System.err.print("Enter your 2nd number: ");
        b = sc.nextInt();

        avg = a + b / 2;

        System.err.println("The average of "+a+" and "+b+" is "+avg);
    }
}
