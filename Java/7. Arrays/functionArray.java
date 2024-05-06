import java.util.*;

public class functionArray {
    public static void updateArray(int marks[]) {
        for (int i = 0; i < marks.length; i++) {
            marks[i] += 1;
        }
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int marks[] = { 97, 98, 99 };

        updateArray(marks);

        for (int i = 0; i < marks.length; i++) {
            System.out.println("Your marks of " + (i + 1) + " student is " + marks[i]);
        }
    }
}