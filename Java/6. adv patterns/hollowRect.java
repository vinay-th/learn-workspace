import java.util.*;

public class hollowRect {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your num of rows: ");
        int row = sc.nextInt();

        System.out.print("Enter your num of cols: ");
        int cols = sc.nextInt();

        for (int i = 1; i <= row; i++) {
            for (int j = 1; j <= cols; j++) {
                if (i == 1 || i == row || j == cols || j == 1)
                    System.out.print("* ");
                else
                    System.out.print("  ");
            }
            System.out.print("\n");
        }
    }
}