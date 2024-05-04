import java.util.*;

public class swapByTwo {
    public static void swap(int a, int b) {
        System.out.println("Before swap: ");
        System.out.println("a: " + a);
        System.out.println("b: " + b);

        a = a + b;
        b = a - b; // b == prev a
        a = a - b;

        System.out.println("After swap: ");
        System.out.println("a: " + a);
        System.out.println("b: " + b);
    }

    public static void main(String[] argc) {
        Scanner sc = new Scanner(System.in);
        int x, y;
        System.out.print("Enter the first number: ");
        x = sc.nextInt();
        System.out.print("Enter the second number: ");
        y = sc.nextInt();

        swap(x, y);
    }
}