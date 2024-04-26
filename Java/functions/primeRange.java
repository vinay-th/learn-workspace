import java.util.*;

public class primeRange {
    public static boolean isPrime(int x) {
        int sqrt = (int) Math.sqrt(x);
        for (int i = 2; i <= sqrt; i++) {
            if (x % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void checkPrime(int start, int end) {
        for (int i = start; i <= end; i++) {
            if (isPrime(i)) {
                System.out.println(i + " is prime");
            } else {
                System.out.println("\t\t" + i + " is not prime");
            }
        }
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter you starting num:");
        int a = sc.nextInt();
        System.out.print("Enter you ending num:");
        int b = sc.nextInt();

        checkPrime(a, b);
    }
}