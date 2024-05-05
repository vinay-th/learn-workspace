import java.util.*;

public class rhombus {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the no of rows: ");
        int rows = sc.nextInt();

        for (int i = 1; i <= rows; i++) {
            for (int spaces = rows - i; spaces > 0; spaces--) {
                System.out.print("  ");
            }
            for (int j = 1; j <= rows; j++) {
                System.out.print("* ");
            }
            System.out.print("\n");
        }
    }
}