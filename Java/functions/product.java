import java.util.*;

public class product {
    public static int prod(int x, int y) {
        return x * y;
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first num: ");
        int a = sc.nextInt();
        System.out.print("Enter second num: ");
        int b = sc.nextInt();

        System.out.println("The product is : " + prod(a, b));
    }
}