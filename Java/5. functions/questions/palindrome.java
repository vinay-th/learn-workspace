import java.util.*;

public class palindrome {
    public static boolean isPalindrome(int num) {
        int palindrome = num;
        int rev = 0;
        int rem = 0;

        for (int i = 0; palindrome != 0; i++) {
            rem = palindrome % 10; // reminder of the num
            rev = rev * 10 + rem; // reverse of the num as per digit position
            palindrome = palindrome / 10; // reduced the last digit of the number
        }

        if (num == rev)
            return true;
        else
            return false;
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number to check: ");
        int x = sc.nextInt();
        if (isPalindrome(x)) {
            System.out.print("Your num " + x + " is a Palindrome number");
        } else
            System.out.print("Your num " + x + " is not a Palindrome number");
    }
}