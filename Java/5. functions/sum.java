import java.util.*;

public class sum {
    public static int sumNum(int x, int y) {
        return x + y;
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your fist number: ");
        int a = sc.nextInt();
        System.out.print("Enter your second number: ");
        int b = sc.nextInt();
        int sum = sumNum(a, b);

        System.out.println("Your sum of " + a + " + " + b + " = " + sum);
    }
}