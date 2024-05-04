import java.util.*;

public class incomeTax {
    public static void main(String[] argc) {
        Scanner sc = new Scanner(System.in);
        float income;
        System.out.print("Enter your income: ");
        income = sc.nextFloat();

        if (income < 500000) {
            System.out.println("You will pay " + income + " with 0% tax");
        } else if (income > 500000 && income < 1000000) {
            System.out.println("You will pay " + (income + income * 0.2) + " with 20% tax");
        } else {
            System.out.println("You will pay " + (income + income * 0.3) + " with 30% tax");
        }
    }
}
