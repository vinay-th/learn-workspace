import java.util.*;

public class isEven {
    public static boolean isEven(int x) {
        if (x % 2 == 0)
            return true;
        else
            return false;
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        boolean res = isEven(n);
        if (res)
            System.out.println("Even");
        else
            System.out.println("Odd");
    }
}