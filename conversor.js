public class MilesToKilometers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get miles from user input
        System.out.print("Enter miles: ");
        miles = scanner.nextDouble();

        // Convert miles to kilometers
        kilometers = miles * 1.60934;

        // Display the result
        System.out.println(miles + " miles is equal to " + kilometers + " kilometers");

        scanner.close();
    }
}
