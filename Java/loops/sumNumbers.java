import java.util.*;

public class sumNumbers {
    public static void main(String[] argc) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int sum = 0;
        int i = 1;
        while (i <= num) {
            sum += i;
            i++;
        }
        System.out.println("Sum of 1 to " + num + " is " + sum);
    }
}