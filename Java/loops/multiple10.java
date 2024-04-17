import java.util.*;

public class multiple10 {
    public static void main(String[] argc) {
        Scanner sc = new Scanner(System.in);
        int i;
        do {
            i = sc.nextInt();
            if (i % 10 == 0) {
                System.out.print(i + " ");
            } else {
                break;
            }
        } while (true);
    }
}