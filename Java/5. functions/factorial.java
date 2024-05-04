import java.util.*;

public class factorial {
    public static int factorial(int x) {
        int f = 1;
        for (int i = 1; i <= x; i++) {
            f = f * i;
        }
        return f;
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int ans = factorial(n);
        System.out.println("Your factorial of " + n + " is " + ans);
    }
}