import java.util.*;

public class pairsArrAY {
    public static void pairArray(int arr[]) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = i; j < arr.length; j++) {
                System.out.println("Your pair is (" + arr[i] + " , " + arr[j] + ")");
            }
        }
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int arr[] = { 1, 2, 3, 4, 5, 6, 7 };

        pairArray(arr);
    }
}