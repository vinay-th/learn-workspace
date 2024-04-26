import java.util.*;

public class palindrome {
    public static boolean isPalindrome(int x) {
        int num = x;
        int rem = 0;
        int reverse = 0;

        while (x > 0) {
            rem = x % 10;
            reverse = reverse * 10 + rem;
            x = x / 10;
        }
        if (x == reverse) {
            return true;
        } else {
            return false;
        }
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number to check for palindrome: ");
        int num = sc.nextInt();
        boolean flag = isPalindrome(num);

        if (flag) {
            System.out.println("The number is a palindrome");
        } else {
            System.out.println("The number is not a palindrome");
        }
    }
}