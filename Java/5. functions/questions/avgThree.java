import java.util.*;

public class avgThree {
    public static int avgThree(int x, int y, int z) {
        return (x + y + z) / 3;
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your 3 numbers: ");
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();
        int num3 = sc.nextInt();
        int avg = avgThree(num1, num2, num3);

        System.out.println("The average of " + num1 + " , " + num2 + " , " + num3 + " is " + avg);
    }
}