import java.util.*;

public class rotatedPyr {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your rows: ");
        int rows = sc.nextInt();

        System.out.print("Enter your cols: ");
        int cols = sc.nextInt();

        for (int i = 1; i <= rows; i++) {
            for (int space = rows - i; space > 0; space--) {
                System.out.print("  ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.print("\n");
        }
    }
}