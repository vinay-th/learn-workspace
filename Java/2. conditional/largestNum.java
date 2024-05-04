import java.util.*;

public class largestNum {
    public static void main(String[] argc) {
        Scanner sc = new Scanner(System.in);
        int num1, num2, num3;
        System.out.print("Enter number 1 :");
        num1 = sc.nextInt();
        System.out.print("Enter number 2 :");
        num2 = sc.nextInt();
        System.out.print("Enter number 3 :");
        num3 = sc.nextInt();
        if (num1 > num2 && num1 > num3) {
            System.out.println("The 1st number " + num1 + " is greatest");
        } else if (num2 > num1 && num2 > num3) {
            System.out.println("The 2nd number " + num2 + " is greatest");
        } else {
            System.out.println("The 3rd number " + num3 + " is greatest");
        }

    }
}