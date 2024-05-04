import java.util.*;
public class stationary {
    public static void main(String[] argc) {
        Scanner sc = new Scanner(System.in);
        float pen, pencil, eraser, price;
        System.err.print("Enter the price of pen: ");
        pen = sc.nextFloat();
        System.err.print("Enter the price of pencil: ");
        pencil = sc.nextFloat();
        System.err.print("Enter the price of eraser: ");
        eraser = sc.nextFloat();

        price = (pen + pencil + eraser);
        price += price * 0.18;
 
        System.err.println("The total bill with 18% gst :  "+price);
    }
}
