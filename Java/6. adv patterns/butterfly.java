import java.util.*;

public class butterfly {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your num of cols: ");
        int cols = sc.nextInt();

        for (int i = 1; i <= cols; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            for (int space = (cols * 2) - (i * 2); space > 0; space--) {
                System.out.print("  ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.print("\n");
        }
        for (int i = cols; i > 0; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            for (int space = (cols * 2) - (i * 2); space > 0; space--) {
                System.out.print("  ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.print("\n");
        }
    }
}