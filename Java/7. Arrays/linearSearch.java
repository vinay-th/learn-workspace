import java.util.*;

public class linearSearch {
    public static int linearSearch(int key, int arr[]) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == key) {
                return i;
            }
        }
        return -1;
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int arr[] = { 20, 30, 35, 45, 60, 89 };
        System.out.print("Enter the number to search: ");
        int key = sc.nextInt();

        int index = linearSearch(key, arr);

        if (index == -1) {
            System.out.println("Your number doesn't exist in array");
        } else
            System.out.print("Your number exists on " + index + " position in the array");
    }
}