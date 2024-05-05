import java.util.*;

public class floyydTriangle {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the cols: ");
        int cols = sc.nextInt();
        int num = 1;

        for (int i = 0; i < cols; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print(num + " ");
                num++;
            }
            System.out.print("\n");
        }
    }
}