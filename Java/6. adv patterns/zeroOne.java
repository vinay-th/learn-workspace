import java.util.*;

public class zeroOne {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter num of cols: ");
        int cols = sc.nextInt();

        int num = 1;

        for (int i = 0; i < cols; i++) {
            for (int j = 0; j <= i; j++) {
                if ((i + j) % 2 == 0) {
                    System.out.print("1 ");
                } else
                    System.out.print("0 ");
            }
            System.out.print("\n");
        }
    }
}