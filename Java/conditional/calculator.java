import java.util.*;

public class calculator {
    public static void main(String[] argc) {
        Scanner sc = new Scanner(System.in);
        int a, b;
        char opt;
        System.out.println("-------------This ia a calculator-------------");
        System.out.print("Enter the first number: ");
        a = sc.nextInt();
        System.out.print("Enter the second number: ");
        b = sc.nextInt();
        System.out.println("Enter your operation: ");
        opt = sc.next().charAt(0);
        switch (opt) {
            case '+':
                System.out.println("The sum is: " + (a + b));
                break;
            case '-':
                System.out.println("The difference is: " + (a - b));
                break;
            case '*':
                System.out.println("The product is: " + (a * b));
                break;
            case '/':
                System.out.println("The quotient is: " + (a / b));
                break;
            default:
                System.out.println("Invalid operation");

        }
    }
}