import java.util.*;

public class binaryToDecimal {
    public static void binToDec(int bin) {
        int pow = 0;
        int dec = 0;
        while (bin > 0) {
            int lastDigit = bin % 10;
            dec += lastDigit * Math.pow(2, pow);
            pow++;
            bin = bin / 10;
        }
        System.out.println("decimal is " + dec);
    }

    public static void main(String[] argc) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a binary number: ");
        int x = sc.nextInt();
        binToDec(x);
    }
}