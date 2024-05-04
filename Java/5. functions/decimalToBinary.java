import java.util.*;

public class decimalToBinary {
    public static void decToBin(int dec) {
        int bin = 0;
        int pow = 0;
        while (dec > 0) {
            int rem = dec % 2;
            bin += rem * Math.pow(10, pow);
            pow++;
            dec = dec / 2;
        }
        System.out.println("Your binary num is " + bin);
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a decimal number: ");
        int x = sc.nextInt();
        decToBin(x);
    }
}