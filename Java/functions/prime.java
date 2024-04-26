import java.util.*;

public class prime {
    public static boolean checkPrime(int x) {
        int sqrt = (int) Math.sqrt(x);
        for (int i = 2; i < sqrt; i++) {
            if (x % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] argc) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a num to check for prime: ");
        int n = sc.nextInt();

        boolean res = checkPrime(n);
        if (res) {
            System.out.println("Your number " + n + " is prime");
        } else {
            System.out.println("Your number " + n + " is not prime");
        }
    }
}