import java.util.*;

public class binarySearch {
    public static int binarySearch(int key, int array[]) {
        int start = 0;
        int end = (array.length) - 1;

        while (start <= end) {
            int mid = (start + end) / 2;
            if (array[mid] == key) {
                return mid;
            }
            if (key < array[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return -1;
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int arr[] = { 1, 2, 4, 8, 10, 12, 14, 18, 20 };
        System.out.print("Enter num to print: ");
        int key = sc.nextInt();
        int index = binarySearch(key, arr);

        if (index == -1)
            System.out.println("Your number doesn't exist in array");
        else
            System.out.println("Your number is at " + index + " position of array");

    }
}