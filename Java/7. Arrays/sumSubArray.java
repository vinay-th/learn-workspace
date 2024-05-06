public class sumSubArray {

    public static void sumSubArray(int arr[]) {
        int currSum = 0;
        int maxSum = Integer.MIN_VALUE;
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length; j++) {
                currSum = 0;
                for (int k = i; k <= j; k++) {
                    // Subarray sum
                    currSum += arr[k];
                }
                System.out.println(currSum);
                if (maxSum < currSum) {
                    maxSum = currSum;
                }
            }
        }
        System.out.println("Your biggest sum of any subarray is: " + maxSum);
    }

    public static void main(String args[]) {
        int num[] = { 1, 2, 3, 4, 5 };
        sumSubArray(num);
    }
}
