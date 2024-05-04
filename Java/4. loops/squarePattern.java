import java.util.*;

public class squarePattern {
    public static void main(String[] argc) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the side of square: ");
        int n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print("*  ");
            }

            System.out.print("\n");
        }
    }
}