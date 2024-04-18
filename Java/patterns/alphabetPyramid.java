import java.util.*;

public class alphabetPyramid {
    public static void main(String[] argc) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of rows: ");
        int n = sc.nextInt();
        char ch = 'A';

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(ch + " ");
                ch++;
            }
            ch = 'A';
            System.out.print("\n");
        }
    }
}