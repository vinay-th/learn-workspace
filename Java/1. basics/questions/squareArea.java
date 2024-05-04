import java.util.*;
public class squareArea {
    public static void main(String[] argc)
    {
        int side;
        Scanner sc = new Scanner(System.in);
        System.err.print("Enter the length of the square: ");
        side = sc.nextInt();
        System.err.println("The area of square with "+side+" cm is "+(side*side)+" cm"); 
    }
}
