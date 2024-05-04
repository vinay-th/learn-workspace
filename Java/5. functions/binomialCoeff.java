import java.util.*;

public class binomialCoeff {
    public static int factorial(int x) {
        int f = 1;
        for (int i = 1; i <= x; i++) {
            f = f * i;
        }
        return f;
    }

    public static int coeff(int a, int b) {
        int aFac = factorial(a);
        int bFac = factorial(b);
        int abFac = factorial(a - b);

        return aFac / (bFac * abFac);
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();
        System.out.println("Your binomial coefficient is " + coeff(num1, num2));
    }
}
