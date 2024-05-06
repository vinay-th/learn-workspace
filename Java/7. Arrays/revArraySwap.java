import java.util.*;

public class revArraySwap {
    public static void revArray(int arr[]) {
        int start = 0;
        int end = (arr.length) - 1;
        int temp;
        for (int i = 0; start <= end; i++) {

            temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;

        }
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int arr[] = { 1, 2, 3, 4, 5, 6, 7 };

        System.out.print("Your array before reversed: ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        revArray(arr);
        System.out.print("\nYour array after reversed: ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}