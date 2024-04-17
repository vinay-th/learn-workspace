import java.util.*;

public class prime {
    public static void main(String[] argc) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number: ");
        int num = sc.nextInt();
        for (int i = 1; i <= Math.sqrt(num); i++) {
            if (i == 1 || i == num) {
                continue;
            }
            if (num % i == 0) {
                System.out.println("It is not a prime number");
                return;
            }
        }
        System.out.println("This is a prime number");
    }
}