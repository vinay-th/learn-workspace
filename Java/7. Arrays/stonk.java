
public class stonk {

    public static int stockAnalysis(int arr[]) {
        int buyingPrc = Integer.MAX_VALUE;
        int sellingPrc = 0;
        int maxProfit = 0;
        int profit = 0;
        for (int i = 1; i < arr.length; i++) {
            if (buyingPrc < arr[i]) {
                profit = arr[i] - buyingPrc;
                maxProfit = Math.max(profit, maxProfit);
            } else {
                buyingPrc = arr[i];
            }
        }
        return maxProfit;
    }

    public static void main(String args[]) {
        int price[] = { 1, 2, 5, 1, 3, 4, 60 };
        System.out.println("Your biggest potential profit was: " + stockAnalysis(price));
    }
}