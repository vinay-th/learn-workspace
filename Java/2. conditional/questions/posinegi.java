import java.util.*;

public class posinegi {
    public static void main(String[] argc) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if (n > 0)
            System.out.println("Positive");
        else if (n < 0)
            System.out.println("Negative");
        else
            System.out.println("Zero");
    }
}