
public class rainWater {
    public static void trappedWater(int arr[]) {
        int n = arr.length;
        int leftMax[] = new int[n];
        int rightMax[] = new int[n];

        int trappedWater = 0;
        int waterLevel = 0;

        leftMax[0] = arr[0];
        for (int i = 1; i < n; i++) {
            leftMax[i] = Math.max(arr[i], leftMax[i - 1]);
        }

        rightMax[n - 1] = arr[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            rightMax[i] = Math.max(arr[i], rightMax[i + 1]);
        }

        for (int i = 0; i < n; i++) {
            waterLevel = Math.min(leftMax[i], rightMax[i]);
            trappedWater += waterLevel - arr[i];
        }

        System.out.println("Your trapped water is : " + trappedWater);
    }

    public static void main(String args[]) {
        int height[] = { 4, 2, 0, 6, 3, 2, 5 };
        trappedWater(height);
    }
}