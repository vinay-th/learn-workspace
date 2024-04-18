import java.util.*;

public class spacePyramid {
    public static void main(String[] argc) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of the rows: ");
        int n = sc.nextInt();

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {

                System.out.print("  ");

            }
            for (int j = 0; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.print("\n");
        }
    }
}