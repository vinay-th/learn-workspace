import java.util.*;

public class largestInArray {
    public static int largestInArray(int arr[]) {
        int large = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > large) {
                large = arr[i];
            }
        }
        return large;
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int arr[] = { 20, 30, 35, 45, 60, 89 };
        int largest = largestInArray(arr);

        System.out.print("The largest number in array is " + largest);
    }
}