import java.util.*;

public class diamond {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the rows: ");
        int rows = sc.nextInt();

        for (int i = 0; i < rows; i++) {
            for (int spaces = rows - i; spaces > 0; spaces--) {
                System.out.print("  ");
            }
            for (int j = 0; j < 2 * i - 1; j++) {
                System.out.print("* ");
            }
            System.out.print("\n");
        }
        for (int i = rows; i > 0; i--) {
            for (int spaces = rows - i; spaces > 0; spaces--) {
                System.out.print("  ");
            }
            for (int j = 0; j < 2 * i - 1; j++) {
                System.out.print("* ");
            }
            System.out.print("\n");
        }
    }
}