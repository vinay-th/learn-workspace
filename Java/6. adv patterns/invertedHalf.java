import java.util.*;

public class invertedHalf {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your cols: ");
        int cols = sc.nextInt();

        for (int i = 0; i < cols; i++) {
            int num = 1;
            for (int j = 0; j <= i; j++) {
                System.out.print(num + " ");
                num++;
            }
            System.out.print("\n");
        }
    }
}